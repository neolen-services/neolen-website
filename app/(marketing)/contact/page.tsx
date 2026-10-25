import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, Mail, MapPin, Microscope, Newspaper, Phone, ShieldQuestion } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Section } from "@/components/marketing/Section"
import { appLinks, siteConfig } from "@/lib/site-config"
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data"

const titleText = "Contact Neolen — Bio LLM Lab for Medicine & Biology"
const description =
  "Contact Neolen for research access to our LLM for medicine and biology and our AI research tool, pharma partnerships, press, or general questions."

export const metadata: Metadata = {
  title: { absolute: titleText },
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: titleText, description, url: "/contact" },
}

const channels = [
  {
    id: "research-access",
    icon: Microscope,
    title: "Research access",
    description:
      "Researchers at pharma companies and independent researchers working on cures: tell us about your work and the disease areas you focus on.",
    email: siteConfig.email.partnerships,
    subject: "Research access",
  },
  {
    id: "partnerships",
    icon: Building2,
    title: "Pharma & partnerships",
    description: "Collaborations, pilots, and team access for R&D organizations.",
    email: siteConfig.email.partnerships,
    subject: "Partnership",
  },
  {
    id: "press",
    icon: Newspaper,
    title: "Press",
    description: "Media inquiries about Neolen, our model, or our research.",
    email: siteConfig.email.press,
    subject: "Press inquiry",
  },
  {
    id: "general",
    icon: ShieldQuestion,
    title: "General & security",
    description: "Anything else, including security and compliance questionnaires.",
    email: siteConfig.email.general,
    subject: "General question",
  },
]

const quickAnswers = [
  {
    question: "How do I get research access?",
    answer:
      "Email the research access channel above with a few lines about your work, your organization, and the disease areas you focus on.",
  },
  {
    question: "Is the research tool medical advice?",
    answer:
      "No. It's built for researchers. Its outputs support research and need expert review — they're not a diagnosis or a treatment recommendation.",
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <em className="text-brand-gradient">the lab</em>
          </>
        }
        description="Whether you're a researcher who wants access to the model and research tool, a pharma team exploring a partnership, or a journalist covering biomedical AI, every message reaches a real person on our team. We usually reply within one to two business days."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <div
              key={c.id}
              id={c.id}
              className={
                i === 0
                  ? "bg-brand-gradient scroll-mt-24 rounded-3xl p-px sm:col-span-2 lg:col-span-3"
                  : "scroll-mt-24 rounded-3xl border border-line"
              }
            >
              <div
                className={
                  i === 0
                    ? "flex h-full flex-col gap-4 rounded-[calc(var(--radius)*2.2_-_1px)] bg-surface p-7 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:p-9"
                    : "flex h-full flex-col gap-4 rounded-3xl bg-surface p-7"
                }
              >
                <div className="flex flex-col gap-3">
                  <c.icon className="size-5 text-ink-2" aria-hidden="true" />
                  <h2 className={i === 0 ? "font-editorial text-4xl text-ink-1" : "text-lg font-semibold text-ink-1"}>
                    {c.title}
                  </h2>
                  <p className="max-w-xl text-pretty text-sm leading-relaxed text-ink-3">{c.description}</p>
                </div>
                <a
                  href={`mailto:${c.email}?subject=${encodeURIComponent(c.subject)}`}
                  className="mt-auto inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium text-ink-1 underline-offset-4 hover:underline"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-line"
        eyebrow="Registered office"
        title="Reach us directly"
        description={`${siteConfig.legalName} is incorporated in India (CIN: ${siteConfig.legal.cin}) and headquartered in Agra, Uttar Pradesh.`}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface p-7">
            <Phone className="mt-0.5 size-4.5 shrink-0 text-ink-2" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-ink-1">Phone</h3>
              <a href={`tel:${siteConfig.phone.href}`} className="text-sm text-ink-3 hover:text-ink-1 hover:underline">
                {siteConfig.phone.display}
              </a>
              <p className="text-xs text-ink-4">Indian Standard Time business hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface p-7">
            <MapPin className="mt-0.5 size-4.5 shrink-0 text-ink-2" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-ink-1">Registered address</h3>
              <p className="text-sm leading-relaxed text-ink-3">
                {siteConfig.legalName}
                <br />
                {siteConfig.address.full}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line" eyebrow="Before you write" title="Quick answers">
        <div className="grid gap-5 sm:grid-cols-3">
          {quickAnswers.map((qa) => (
            <div key={qa.question} className="flex flex-col gap-2 rounded-3xl border border-line bg-surface p-7">
              <h3 className="text-sm font-semibold text-ink-1">{qa.question}</h3>
              <p className="text-sm leading-relaxed text-ink-3">{qa.answer}</p>
            </div>
          ))}
          <div className="flex flex-col gap-2 rounded-3xl border border-line bg-surface p-7">
            <h3 className="text-sm font-semibold text-ink-1">Already a user?</h3>
            <p className="text-sm leading-relaxed text-ink-3">
              For help inside an active research session, sign in to your workspace. This page is for
              prospective researchers, partners, and press.
            </p>
            <Link
              href={appLinks.signIn}
              className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium text-ink-1 underline-offset-4 hover:underline"
            >
              Sign in
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm text-ink-3">
          More in the{" "}
          <Link href="/frequently-asked-questions" className="font-medium text-ink-1 underline underline-offset-4">
            frequently asked questions
          </Link>
          .
        </p>
      </Section>
    </>
  )
}
