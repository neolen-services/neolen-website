# Neolen website

The public, informational website for Neolen (home, FAQ, contact, privacy, terms).
It has no authentication, database, or API. The signed-in research app lives in
the separate `research-frontend` repo, and "Sign in" links point there.

Pages, components, and styles were copied from the `(marketing)` route group of
`research-frontend`, so design and content match it exactly.

## Develop

```bash
pnpm install
cp .env.example .env.local   # optional; defaults point at neolen.com / app.neolen.com
pnpm dev
```

Checks: `pnpm typecheck`, `pnpm lint`, `pnpm build`.

## Deploy

The site is a fully static export: `pnpm build` writes plain HTML/CSS/JS to `out/`,
and nginx serves it from `/var/www/neolen.com` (no Node server at runtime).

```bash
./deploy/deploy.sh   # build and publish out/ to /var/www/neolen.com
```

One-time server setup:

```bash
sudo cp deploy/nginx/neolen.com.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/neolen.com.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d neolen.com -d www.neolen.com   # after DNS points here
```

Redirects (`/faq`, `www`, trailing slashes) live in the nginx config, since a static
export cannot run them.

## Environment

| Variable               | Default                  | Purpose                                        |
| ---------------------- | ------------------------ | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://neolen.com`     | Canonical URLs, sitemap, Open Graph            |
| `NEXT_PUBLIC_APP_URL`  | `https://app.neolen.com` | Research app; "Sign in" goes to `/login` there |

## Structure

- `app/(marketing)/` — public pages and their shared header/footer layout
- `app/og.png`, `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — SEO files
- `components/marketing/` — page sections and figures
- `lib/site-config.ts` — company details, navigation, and app links
- `deploy/` — nginx config and deploy script
