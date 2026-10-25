import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

// This site only serves public pages; the signed-in research app is deployed
// separately and manages its own robots rules.
const disallow = ["/api/"]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      // Explicitly welcome AI assistants and answer engines that cite sources —
      // Neolen's public pages are written to be accurately summarized and cited.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
