import { Instrument_Serif } from "next/font/google"
import { SiteHeader } from "@/components/marketing/SiteHeader"
import { SiteFooter } from "@/components/marketing/SiteFooter"
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/structured-data"
import { cn } from "@/lib/utils"

// Scoped to the public pages only — the signed-in app keeps Geist throughout.
const fontEditorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(fontEditorial.variable, "flex min-h-svh flex-col bg-background")}>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
