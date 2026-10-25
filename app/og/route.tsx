import { ImageResponse } from "next/og"

export const runtime = "edge"
export const contentType = "image/png"

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = ""
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const logoSrc = await fetch(`${origin}/logo.png`)
    .then((res) => (res.ok ? res.arrayBuffer() : null))
    .then((buf) => (buf ? `data:image/png;base64,${arrayBufferToBase64(buf)}` : null))
    .catch(() => null)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          // Static equivalents of the dark design tokens: bg-void base with a
          // magenta/coral wash from the logo (ImageResponse cannot read CSS vars).
          background:
            "radial-gradient(circle at 88% 12%, rgba(214,58,196,0.38), transparent 45%), radial-gradient(circle at 72% 78%, rgba(255,150,100,0.22), transparent 45%), #0d0e12",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoSrc} width={56} height={56} style={{ borderRadius: 12 }} alt="" />
          ) : (
            <div
              style={{
                display: "flex",
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "linear-gradient(120deg, #c616d2, #ff9d6b)",
                color: "#fcfcfd",
                fontSize: 28,
                fontWeight: 700,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              N
            </div>
          )}
          <span style={{ fontSize: 30, fontWeight: 600, color: "#fcfcfd" }}>Neolen</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(252,252,253,0.55)",
            }}
          >
            Bio LLM Lab
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            A world-class LLM for medicine and biology
          </span>
          <span style={{ fontSize: 26, color: "rgba(252,252,253,0.68)", maxWidth: 940, lineHeight: 1.4 }}>
            Fast, accurate, and built to hallucinate less, for a personal doctor for everyone
            and an AI for researchers.
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
