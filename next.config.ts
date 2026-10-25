import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/faq",
        destination: "/frequently-asked-questions",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
