import { ArrowDown } from "lucide-react"

// Conceptual figure, not data: a wide, shallow block (general-purpose model)
// next to a narrow, deep one (a model specialized in medicine and biology).
export function DepthFigure() {
  return (
    <figure className="flex flex-col gap-4">
      <div aria-hidden className="flex gap-4">
        <div className="flex flex-col items-center gap-1 pt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">
          <span className="[writing-mode:vertical-rl]">Depth</span>
          <ArrowDown className="size-3" />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4">
          <div className="relative h-40 border-t border-ink-4/50">
            <div className="absolute inset-x-0 top-0 h-7 rounded-b-md bg-ink-4/20" />
          </div>
          <div className="relative h-40 border-t border-ink-4/50">
            <div className="absolute inset-y-0 left-1/2 w-2/5 -translate-x-1/2 rounded-b-md bg-linear-to-b from-brand-magenta to-brand-coral" />
          </div>
        </div>
      </div>
      <figcaption className="grid grid-cols-2 gap-4 pl-7 text-sm">
        <span>
          <span className="block font-medium text-ink-1">General-purpose model</span>
          <span className="text-ink-3">A little about everything</span>
        </span>
        <span>
          <span className="block font-medium text-ink-1">Neolen</span>
          <span className="text-ink-3">Deep in medicine &amp; biology</span>
        </span>
      </figcaption>
    </figure>
  )
}
