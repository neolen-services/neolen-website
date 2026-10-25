import { Container } from "@/components/marketing/Container"
import { Eyebrow } from "@/components/marketing/Eyebrow"
import { cn } from "@/lib/utils"

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-line pb-16 pt-20 sm:pb-24 sm:pt-28", className)}>
      <div aria-hidden className="lab-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="brand-glow pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className={cn("flex max-w-3xl flex-col gap-6", align === "center" && "mx-auto items-center text-center")}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="font-editorial text-balance text-5xl text-ink-1 sm:text-7xl">{title}</h1>
          {description && (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-3">{description}</p>
          )}
          {children}
        </div>
      </Container>
    </section>
  )
}
