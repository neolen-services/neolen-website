import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  FlaskConical,
  Gauge,
  Lightbulb,
  ListChecks,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
  ShieldPlus,
  Stethoscope,
  Target,
  Trophy,
  Zap,
} from "lucide-react"
import { Container } from "@/components/marketing/Container"
import { Section } from "@/components/marketing/Section"
import { Eyebrow } from "@/components/marketing/Eyebrow"
import { CTASection } from "@/components/marketing/CTASection"
import { SystemDiagram } from "@/components/marketing/SystemDiagram"
import { DepthFigure } from "@/components/marketing/DepthFigure"
import { ResearchSessionPreview } from "@/components/marketing/ResearchSessionPreview"
import { NeoDayPreview } from "@/components/marketing/NeoDayPreview"
import { Button } from "@/components/ui/button"
import { appLinks, makeMyHealthLinks, siteConfig } from "@/lib/site-config"
import { JsonLd, softwareApplicationJsonLd } from "@/lib/structured-data"

const titleText = `${siteConfig.name} — A world-class LLM for medicine and biology`

export const metadata: Metadata = {
  title: { absolute: titleText },
  description: siteConfig.metaDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: titleText,
    description: siteConfig.metaDescription,
    url: "/",
  },
}

const qualities = [
  { icon: Zap, title: "Fast", description: "Responds at the pace of a real conversation." },
  { icon: Target, title: "Accurate", description: "Trained deep on medicine and biology, not spread thin." },
  {
    icon: ShieldCheck,
    title: "Grounded",
    description: "Built to hallucinate less, and to say when it isn’t sure.",
  },
  {
    icon: Trophy,
    title: "Frontier bar",
    description: "Our target: equal to or better than most frontier models in its field.",
  },
]

const specialistComparison = [
  { aspect: "Trained for", general: "Every subject at once", ours: "Medicine & biology" },
  { aspect: "Speed", general: "Large, to cover every topic", ours: "Focused, so it answers fast" },
  { aspect: "Hallucination", general: "A risk on any topic", ours: "Designed to minimize" },
]

const personalDoctorJobs = [
  { icon: MessageCircleQuestion, label: "Answers health questions in plain language" },
  { icon: Activity, label: "Understands your health data and history" },
  { icon: ShieldPlus, label: "Guides prevention and everyday care" },
]

const researcherJobs = [
  { icon: BookOpen, label: "Read and synthesize the literature" },
  { icon: Search, label: "Find evidence across clinical and biological data" },
  { icon: Lightbulb, label: "Form and test new hypotheses" },
  { icon: FlaskConical, label: "Drug discovery, repurposing, and beyond" },
]

// Copy follows makemyhealth.app ("Inside the app").
const makeMyHealthFeatures = [
  {
    icon: Stethoscope,
    title: "Neo",
    description: "Your AI doctor. Ask anything, any hour. It knows your history and speaks up first.",
  },
  {
    icon: CalendarDays,
    title: "Health calendar",
    description: "Everything you log and sync, with your reminders, in one place.",
  },
  {
    icon: Target,
    title: "Goals",
    description: "Tell Neo what you want. It builds the plan and keeps it on track.",
  },
  {
    icon: ListChecks,
    title: "Your day",
    description: "Across all your goals, Neo picks what matters most today.",
  },
]

const makeMyHealthAvailability = ["iOS & Android in India", "Apple Health & Health Connect", "7-day free trial"]

const researchToolFeatures = [
  {
    title: "Ask anything",
    description: "Open-ended by design, from a quick fact check to a full research question.",
  },
  {
    title: "All the evidence in one place",
    description: "Literature, clinical, and biological sources, alongside your own files and data.",
  },
  {
    title: "From evidence to hypothesis",
    description: "See what’s known, spot what’s missing, then form and test new ideas.",
  },
  {
    title: "Answers you can check",
    description: "Grounded in sources, so you can trace claims back to the evidence behind them.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="lab-grid pointer-events-none absolute inset-0" />
        <div aria-hidden className="brand-glow pointer-events-none absolute inset-0" />
        {/* Fixed-width diagram column so the headline gets the rest: at xl that's ~800px,
            enough for the two-line break "Building A world‑class LLM / for medicine and biology". */}
        <Container className="relative grid gap-14 pb-20 pt-16 sm:pb-24 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="flex flex-col gap-7">
            <Eyebrow>Neolen &middot; Bio LLM Lab</Eyebrow>
            <h1 className="font-editorial text-balance text-5xl text-ink-1 sm:text-7xl lg:text-[4rem] xl:text-[5.25rem]">
              {/* Non-breaking hyphen keeps "world‑class" on one line. */}
              Building A world&#8209;class LLM for <em className="text-brand-gradient">medicine and biology</em>
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-3">
              A model that&rsquo;s fast, accurate, and built to hallucinate less &mdash; aiming to match
              or beat frontier models in medicine and biology. It will power a personal doctor for
              everyone, and give researchers an AI that can help with anything their work needs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <Link href="/contact#research-access">
                  Request research access
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#research-tool">Explore the research tool</Link>
              </Button>
            </div>
          </div>
          <div>
            <SystemDiagram className="mx-auto max-w-md lg:max-w-none" />
          </div>
        </Container>
      </section>

      {/* What the model is built to be */}
      <section aria-labelledby="qualities-heading" className="border-b border-line bg-surface">
        <h2 id="qualities-heading" className="sr-only">
          What our model is built to be
        </h2>
        <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 lg:gap-10">
          {qualities.map((q) => (
            <div key={q.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <q.icon className="size-4 text-ink-2" aria-hidden="true" />
                <h3 className="text-base font-semibold text-ink-1">{q.title}</h3>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-ink-3">{q.description}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* 01 — Why our own model */}
      <Section
        id="model"
        index="01"
        eyebrow="Why our own model"
        title={
          <>
            Health needs a <em className="text-brand-gradient">specialist</em>, not a generalist
          </>
        }
        description="We're building a personal doctor for everyone. For that to work, the model behind it has to be fast, get medicine right, and be honest about what it doesn't know — so we're building that model ourselves."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col gap-6 rounded-3xl border border-line bg-surface p-7 sm:p-9">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-ink-1">Built for a personal doctor</h3>
              <p className="text-pretty leading-relaxed text-ink-3">
                A doctor you can talk to anytime has to answer quickly, get the details right, and
                avoid making things up. General-purpose models are built to do a bit of everything.
                Ours is built for this one job.
              </p>
            </div>
            <div className="mt-auto overflow-hidden rounded-2xl border border-line">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-surface-raised font-mono text-[10px] uppercase tracking-[0.12em] text-ink-4">
                    <th scope="col" className="px-4 py-3 font-medium">
                      <span className="sr-only">Aspect</span>
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">General-purpose</th>
                    <th scope="col" className="px-4 py-3 font-medium text-ink-1">Neolen</th>
                  </tr>
                </thead>
                <tbody>
                  {specialistComparison.map((row) => (
                    <tr key={row.aspect} className="border-t border-line">
                      <th scope="row" className="px-4 py-3 font-medium text-ink-2">{row.aspect}</th>
                      <td className="px-4 py-3 text-ink-3">{row.general}</td>
                      <td className="px-4 py-3 font-medium text-ink-1">{row.ours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="flex flex-col gap-8 rounded-3xl border border-line bg-surface p-7 sm:p-9">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-ink-1">Depth over breadth</h3>
              <p className="text-pretty leading-relaxed text-ink-3">
                General-purpose models spread what they learn across every subject. Ours puts it all
                into medicine and biology, so it goes deeper where it matters and stays reliable there.
              </p>
            </div>
            <div className="mt-auto">
              <DepthFigure />
            </div>
          </article>
        </div>
      </Section>

      {/* 02 — Who it's for */}
      <Section
        id="who-it-serves"
        index="02"
        eyebrow="Who it's for"
        title="One model, two ways to help"
        description="The same model works as a personal doctor for anyone who needs one, and as an AI partner for the researchers working on cures."
        className="border-t border-line"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="font-editorial text-brand-gradient text-7xl leading-none">1</span>
              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
                For everyone
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink-1">A personal doctor for everyone</h3>
            <p className="mt-3 text-pretty leading-relaxed text-ink-3">
              Clear, reliable answers about your health whenever you need them, from a model that
              knows medicine deeply.
            </p>
            <ul className="mt-8 border-t border-line">
              {personalDoctorJobs.map((item) => (
                <li key={item.label} className="flex items-center gap-3 border-b border-line py-4 text-ink-1 last:border-b-0">
                  <item.icon className="size-4 shrink-0 text-ink-3" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
            <Link
              href="#make-my-health"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink-1 underline-offset-4 hover:underline"
            >
              Meet Neo in Make My Health
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </article>

          <article className="flex flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="font-editorial text-brand-gradient text-7xl leading-none">2</span>
              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
                For researchers
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink-1">An AI for your research</h3>
            <p className="mt-3 text-pretty leading-relaxed text-ink-3">
              For researchers at pharma companies and independent researchers working on cures. Use it
              for whatever your work needs.
            </p>
            <ul className="mt-8 border-t border-line">
              {researcherJobs.map((item) => (
                <li key={item.label} className="flex items-center gap-3 border-b border-line py-4 text-ink-1 last:border-b-0">
                  <item.icon className="size-4 shrink-0 text-ink-3" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
            <Link
              href="/contact#research-access"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink-1 underline-offset-4 hover:underline"
            >
              Request research access
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </Section>

      {/* 03 — Make My Health, our personal doctor app. Preview sits left to alternate with the research tool. */}
      <Section
        id="make-my-health"
        index="03"
        eyebrow="Make My Health"
        title={
          <>
            Meet Neo, a doctor who <em className="text-brand-gradient">already knows you</em>
          </>
        }
        description="Make My Health is our personal doctor app. Neo, the AI doctor inside it, learns what's normal for you from what you log and what your watch records, speaks up when something changes, and plans each day around your goals."
        className="border-t border-line"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <ul className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
              {makeMyHealthFeatures.map((feature) => (
                <li key={feature.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <feature.icon className="size-4 text-ink-2" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-ink-1">{feature.title}</h3>
                  </div>
                  <p className="text-pretty text-sm leading-relaxed text-ink-3">{feature.description}</p>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1.5">
              {makeMyHealthAvailability.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <Link href={makeMyHealthLinks.download}>
                  Get the app
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={makeMyHealthLinks.url}>Visit makemyhealth.app</Link>
              </Button>
            </div>
            <p className="text-pretty text-xs leading-relaxed text-ink-4">
              Neo is an AI, not a licensed medical professional. It doesn&rsquo;t diagnose or prescribe,
              and it tells you when to see a doctor.
            </p>
          </div>
          <div className="lg:order-first lg:col-span-7">
            <NeoDayPreview />
          </div>
        </div>
      </Section>

      {/* 04 — Research tool. Rendered in the dark palette in both themes. */}
      <Section
        id="research-tool"
        index="04"
        eyebrow="Research tool"
        title={
          <>
            An AI research partner, <em className="text-brand-gradient">built for biomedicine</em>
          </>
        }
        description="Bring any question about a disease, a target, a drug, or a pathway, and work through it with an AI that knows the field. It runs on our own model, so it gets better as the model does."
        className="dark border-y border-line bg-surface text-ink-1"
        backdrop={<div aria-hidden className="brand-glow pointer-events-none absolute inset-0" />}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <ol className="flex flex-col">
              {researchToolFeatures.map((feature, i) => (
                <li key={feature.title} className="flex gap-5 border-t border-line py-6 first:border-t-0 first:pt-0">
                  <span className="font-mono text-xs text-ink-4">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold text-ink-1">{feature.title}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-ink-3">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <Link href="/contact#research-access">
                  Request access
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-ink-1">
                <Link href={appLinks.signIn}>Sign in</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ResearchSessionPreview />
          </div>
        </div>
      </Section>

      {/* 05 — Our bar */}
      <Section id="focus" index="05" eyebrow="Our bar" align="center">
        <p className="font-editorial mx-auto -mt-4 max-w-4xl text-balance text-center text-4xl text-ink-1 sm:text-6xl">
          Match or beat frontier models where it matters most:{" "}
          <em className="text-brand-gradient">medicine and biology</em>.
        </p>
        <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          <div className="flex flex-col gap-4 bg-background p-7 sm:p-9">
            <Gauge className="size-5 text-ink-2" aria-hidden="true" />
            <Eyebrow>Measured</Eyebrow>
            <p className="text-pretty text-lg leading-relaxed text-ink-1">
              Head-to-head with leading frontier models on medical and biological benchmarks.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-background p-7 sm:p-9">
            <BadgeCheck className="size-5 text-ink-2" aria-hidden="true" />
            <Eyebrow>Proven</Eyebrow>
            <p className="text-pretty text-lg leading-relaxed text-ink-1">
              In real use, by people asking their personal doctor and by researchers doing real work.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        className="pt-0 sm:pt-0"
        eyebrow="Early access"
        title="Do your best research with an AI built for it."
        description="We're opening access for researchers at pharma companies and independent researchers working on cures."
        primaryHref="/contact#research-access"
        primaryLabel="Request research access"
        secondaryHref="/frequently-asked-questions"
        secondaryLabel="Read the FAQ"
      />
    </>
  )
}
