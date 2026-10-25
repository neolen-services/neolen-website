import { Container } from "@/components/marketing/Container"
import { Eyebrow } from "@/components/marketing/Eyebrow"
import { cn } from "@/lib/utils"

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  align = "left",
  backdrop,
  children,
  className,
  containerClassName,
  as: Tag = "section",
}: {
  id?: string
  index?: string
  eyebrow?: string
  title?: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  /** Decorative layer painted behind the content (e.g. a glow). */
  backdrop?: React.ReactNode
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  as?: React.ElementType
}) {
  const hasHeader = eyebrow || title || description

  return (
    <Tag
      id={id}
      className={cn("py-20 sm:py-28", id && "scroll-mt-16", backdrop && "relative overflow-hidden", className)}
    >
      {backdrop}
      <Container className={cn(backdrop && "relative", containerClassName)}>
        {hasHeader &&
          (align === "center" ? (
            <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-5 text-center">
              {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
              {title && (
                <h2 className="font-editorial text-balance text-4xl text-ink-1 sm:text-5xl">{title}</h2>
              )}
              {description && (
                <p className="text-pretty text-base leading-relaxed text-ink-3 sm:text-lg">{description}</p>
              )}
            </div>
          ) : (
            <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="flex flex-col gap-5 lg:col-span-7">
                {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
                {title && (
                  <h2 className="font-editorial text-balance text-4xl text-ink-1 sm:text-5xl">{title}</h2>
                )}
              </div>
              {description && (
                <p className="text-pretty text-base leading-relaxed text-ink-3 sm:text-lg lg:col-span-5">
                  {description}
                </p>
              )}
            </div>
          ))}
        {children}
      </Container>
    </Tag>
  )
}
