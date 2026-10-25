import { AlertTriangle } from "lucide-react"
import { Container } from "@/components/marketing/Container"

export type LegalClause = { id: string; title: string; body: string }

// Shared layout for Privacy / Terms: sticky contents list beside numbered clauses.
export function LegalDocument({ notice, clauses }: { notice: React.ReactNode; clauses: LegalClause[] }) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-12">
        <nav aria-label="Contents" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 flex flex-col gap-3">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-4">Contents</p>
            <ol className="flex flex-col gap-2 border-l border-line">
              {clauses.map((c, i) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="-ml-px flex gap-3 border-l border-transparent pl-4 text-sm text-ink-3 transition-colors hover:border-ink-1 hover:text-ink-1"
                  >
                    <span className="font-mono text-xs text-ink-4">{String(i + 1).padStart(2, "0")}</span>
                    {c.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="flex max-w-3xl flex-col gap-10 lg:col-span-8">
          <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/5 p-5 text-sm leading-relaxed text-ink-1">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
            <div>{notice}</div>
          </div>

          {clauses.map((c, i) => (
            <article key={c.id} id={c.id} className="scroll-mt-24 border-t border-line pt-8 first-of-type:border-t-0">
              <h2 className="mb-3 flex gap-3 text-lg font-semibold text-ink-1">
                <span className="font-mono text-sm font-normal leading-7 text-ink-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {c.title}
              </h2>
              <p className="text-pretty text-sm leading-relaxed text-ink-3 sm:text-base">{c.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
