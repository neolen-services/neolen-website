# syntax=docker/dockerfile:1

FROM node:22-slim AS base
RUN npm install -g pnpm@10.28.0
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- install dependencies (cached layer) ----
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile

# ---- build the site ----
FROM deps AS build
COPY . .
# NEXT_PUBLIC_* values are baked into the client bundle at build time.
ARG NEXT_PUBLIC_SITE_URL="https://neolen.com"
ARG NEXT_PUBLIC_APP_URL="https://app.neolen.com"
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
RUN pnpm run build

# ---- minimal runtime image (Next.js standalone output) ----
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -m nextjs
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
