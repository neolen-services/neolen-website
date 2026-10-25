import Image from "next/image"
import { Microscope, RefreshCw, Stethoscope, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const products: { icon: LucideIcon; name: string; detail: string; audience: string }[] = [
  {
    icon: Stethoscope,
    name: "Personal doctor",
    detail: "Reliable health answers, anytime",
    audience: "For everyone",
  },
  {
    icon: Microscope,
    name: "Research tool",
    detail: "An AI for any research task",
    audience: "For researchers",
  },
]

// Hero schematic: one model powering both products. Pure HTML so it reflows
// cleanly down to phone width.
export function SystemDiagram({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "rounded-3xl border border-line bg-surface/80 p-4 shadow-raised backdrop-blur-md sm:p-6",
        className
      )}
    >
      <figcaption className="mb-5 flex items-center justify-between font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-3">
        <span>How it fits together</span>
        <span aria-hidden>Fig. 01</span>
      </figcaption>

      <div className="bg-brand-gradient rounded-2xl p-px">
        <div className="rounded-[calc(var(--radius)*1.8_-_1px)] bg-surface p-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={36} height={36} className="size-9 rounded-full" />
            <div>
              <p className="text-base font-semibold text-ink-1">Neolen model</p>
              <p className="text-xs text-ink-3">Our own LLM for medicine &amp; biology</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {["Fast", "Accurate", "Grounded"].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-surface-raised px-2.5 py-1 text-[11px] font-medium text-ink-2"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connector: trunk from the model, then a branch into each product column.
          Same grid + gap as the cards below so the drops land on their centres. */}
      <div aria-hidden className="relative grid h-10 grid-cols-2 gap-3">
        <span className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-ink-4/60" />
        <span className="absolute left-[calc(25%_-_3px)] right-[calc(25%_-_3px)] top-5 h-px bg-ink-4/60" />
        <span className="mx-auto mt-5 h-5 w-px bg-ink-4/60" />
        <span className="mx-auto mt-5 h-5 w-px bg-ink-4/60" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {products.map((p) => (
          <div key={p.name} className="flex flex-col gap-3 rounded-2xl border border-line bg-surface-raised p-4">
            <p.icon className="size-4 text-ink-2" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-ink-1">{p.name}</p>
              <p className="mt-0.5 text-xs leading-snug text-ink-3">{p.detail}</p>
            </div>
            <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.12em] text-ink-4">{p.audience}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-ink-3">
        <RefreshCw className="size-3.5" aria-hidden="true" />
        Both get better as the model does
      </p>
    </figure>
  )
}
