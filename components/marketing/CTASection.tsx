import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/marketing/Container"
import { Eyebrow } from "@/components/marketing/Eyebrow"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get in touch",
  secondaryHref,
  secondaryLabel,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  className?: string
}) {
  return (
    <section className={cn("py-20 sm:py-28", className)}>
      <Container>
        {/* Always rendered in the dark palette so the closing panel reads the same in both themes. */}
        <div className="dark relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-ink-1 sm:px-12 sm:py-20">
          <div aria-hidden className="lab-grid pointer-events-none absolute inset-0 opacity-60" />
          <div aria-hidden className="brand-glow pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col items-center gap-6 text-center">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="font-editorial max-w-3xl text-balance text-4xl text-ink-1 sm:text-6xl">{title}</h2>
            {description && (
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-3 sm:text-lg">{description}</p>
            )}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              {secondaryHref && secondaryLabel && (
                <Button asChild size="lg" variant="outline" className="text-ink-1">
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
