import { cn } from "@/lib/utils"

// Mono section label. With an index ("01") it reads like a lab-notebook heading;
// without one it leads with a small logo-gradient dot.
export function Eyebrow({
  children,
  index,
  className,
}: {
  children: React.ReactNode
  index?: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-3",
        className
      )}
    >
      {index ? (
        <>
          <span className="text-brand-gradient">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line" />
        </>
      ) : (
        <span aria-hidden className="bg-brand-gradient size-1.5 rounded-full" />
      )}
      {children}
    </span>
  )
}
