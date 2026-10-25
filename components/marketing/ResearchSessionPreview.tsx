import { BookOpen, Dna, FileText, Stethoscope, type LucideIcon } from "lucide-react"

const sources: { icon: LucideIcon; label: string }[] = [
  { icon: BookOpen, label: "Literature" },
  { icon: Stethoscope, label: "Clinical" },
  { icon: Dna, label: "Biological" },
  { icon: FileText, label: "Your files" },
]

const plan = [
  "Search the literature for disease mechanisms and drug–target links",
  "Pull clinical trial history and safety signals",
  "Map the targets, genes, and pathways involved",
  "Form and rank candidate hypotheses",
  "Test each hypothesis against the evidence",
]

// Illustrative product window: an example question and plan, not real output.
export function ResearchSessionPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-raised">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink-4/40" />
          <span className="size-2.5 rounded-full bg-ink-4/40" />
          <span className="size-2.5 rounded-full bg-ink-4/40" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">
          Research session &middot; Example
        </span>
        <span aria-hidden className="w-10" />
      </div>

      <div className="flex flex-col gap-6 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">Question</p>
          <p className="font-editorial text-2xl leading-snug text-ink-1 sm:text-[1.75rem]">
            &ldquo;Which approved drugs could be repurposed for ALS &mdash; and what evidence supports
            each one?&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">Sources</p>
          <ul className="flex flex-wrap gap-1.5">
            {sources.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-overlay px-2.5 py-1 text-xs text-ink-2"
              >
                <s.icon className="size-3.5" aria-hidden="true" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">Research plan</p>
          <ol className="flex flex-col">
            {plan.map((step, i) => (
              <li key={step} className="flex gap-3 border-t border-line py-2.5 text-sm text-ink-2 first:border-t-0 first:pt-0">
                <span className="font-mono text-xs text-ink-4">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
