import type { NextConfig } from "next"

// Fully static export: `pnpm build` writes plain HTML/CSS/JS to `out/`, which nginx
// serves directly (see deploy/nginx/neolen.com.conf). Redirects such as /faq live
// in the nginx config because static export cannot run them.
const nextConfig: NextConfig = {
  output: "export",
  // No server to run the /_next/image optimizer, so serve images as-is.
  images: { unoptimized: true },
}

export default nextConfig
