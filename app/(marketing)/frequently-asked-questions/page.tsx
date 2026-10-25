import type { Metadata } from "next"
import { PageHero } from "@/components/marketing/PageHero"
import { Section } from "@/components/marketing/Section"
import { CTASection } from "@/components/marketing/CTASection"
import { Accordion } from "@/components/ui/accordion"
import { appLinks, siteConfig } from "@/lib/site-config"
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data"

const title = "Frequently Asked Questions"
const description =
  "Answers to common questions about Neolen: our LLM for medicine and biology, the personal doctor it powers, our AI research tool, and how to get research access."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/frequently-asked-questions" },
  openGraph: {
    title: `${title} — ${siteConfig.name}`,
    description,
    url: "/frequently-asked-questions",
  },
}

const faqGroups: { title: string; items: { question: string; answer: string }[] }[] = [
  {
    title: "The model",
    items: [
      {
        question: "What is Neolen?",
        answer:
          "Neolen is a Bio LLM lab building its own large language model for medicine and biology. We're building it to power a personal doctor for everyone, and to give researchers an AI that can help with anything their work needs.",
      },
      {
        question: "Why build your own model instead of using an existing one?",
        answer:
          "Because a personal doctor for everyone needs a model that is fast, accurate, and keeps hallucinations to a minimum. General-purpose models are built to cover every subject at once. Ours is built for medicine and biology alone, so it can go deeper in the field, answer faster, and be designed from the start to avoid making things up.",
      },
      {
        question: "How does it compare to frontier models?",
        answer:
          "Our target is to perform equal to or better than most frontier models in medicine and biology. We measure the model head-to-head against leading frontier models on medical and biological benchmarks, and we test it in real use with people and researchers.",
      },
      {
        question: "How do you reduce hallucinations?",
        answer:
          "Focus is the first step: a model trained deeply on one field has less reason to guess. On top of that, we design it to ground its answers in evidence and to say when it isn't sure, rather than give a confident answer it can't support.",
      },
    ],
  },
  {
    title: "Who it's for",
    items: [
      {
        question: "What is the personal doctor?",
        answer:
          "A personal doctor for everyone, powered by our model. It answers health questions in plain language, understands your health data and history, and helps with prevention and everyday care.",
      },
      {
        question: "Who can use the model?",
        answer:
          "Everyone, through the personal doctor. Researchers, through our research tool: we're opening access for researchers at pharma companies and independent researchers working on cures.",
      },
    ],
  },
  {
    title: "The research tool",
    items: [
      {
        question: "What is the Neolen research tool?",
        answer:
          "An AI for biomedical research, built on our own model. Bring any question and it helps you work through it: searching literature, clinical, and biological sources in one place, gathering evidence, and forming and testing hypotheses.",
      },
      {
        question: "What can I use it for?",
        answer:
          "Anything your research needs, including literature review, evidence gathering, target and pathway research, drug discovery, and drug repurposing.",
      },
      {
        question: "Can I bring my own data?",
        answer:
          "Yes. Alongside the literature, clinical, and biological sources, you can upload your own files and connect your own data sources, so a research session can draw on both public evidence and your work.",
      },
      {
        question: "Why does it matter that the tool runs on your own model?",
        answer:
          "Improvements to the model show up directly in the tool. As the model gets faster and more accurate in medicine and biology, so does your research assistant.",
      },
      {
        question: "Is the research tool's output medical advice?",
        answer:
          "No. The research tool is built for researchers. Its outputs support research, can be incomplete or wrong, and must be reviewed by qualified experts. They are not a diagnosis, a treatment recommendation, or proof of clinical efficacy.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        question: "How do I get research access?",
        answer:
          "Write to us through the research access channel on our contact page with a few lines about your work, your organization (or that you are an independent researcher), and the disease areas you focus on. We will get back to you directly.",
      },
      {
        question: "I already have an account. Where do I sign in?",
        answer: `Sign in at ${appLinks.signInHost} to open your research workspace. New accounts are reviewed by our team before they are activated.`,
      },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/frequently-asked-questions" },
          ]),
          faqJsonLd(allFaqs),
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <em className="text-brand-gradient">answered</em>
          </>
        }
        description="What we're building, who it's for, and how researchers can get access."
      />

      <Section>
        <div className="flex flex-col gap-14">
          {faqGroups.map((group) => (
            <div key={group.title} className="grid gap-4 lg:grid-cols-12 lg:gap-12">
              <h2 className="font-editorial text-3xl text-ink-1 lg:col-span-4">{group.title}</h2>
              <div className="border-t border-line lg:col-span-8">
                <Accordion
                  items={group.items.map((faq) => ({ id: faq.question, question: faq.question, answer: faq.answer }))}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        className="pt-0 sm:pt-0"
        title="Still have questions?"
        description="Reach out and someone from the team will get back to you directly."
        primaryLabel="Contact us"
      />
    </>
  )
}
