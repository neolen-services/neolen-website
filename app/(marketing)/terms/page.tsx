import type { Metadata } from "next"
import { PageHero } from "@/components/marketing/PageHero"
import { LegalDocument, type LegalClause } from "@/components/marketing/LegalDocument"
import { siteConfig } from "@/lib/site-config"
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data"

const titleText = "Terms of Service — Neolen"
const description =
  "Read the Terms of Service governing use of the Neolen website and AI research tool, including acceptable use and liability."

export const metadata: Metadata = {
  title: { absolute: titleText },
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title: titleText, description, url: "/terms" },
}

const clauses: LegalClause[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: "By accessing the Neolen website or research tool, you agree to these Terms of Service. If you are using the research tool on behalf of an organization, you represent that you have authority to bind that organization.",
  },
  {
    id: "not-medical-advice",
    title: "Not medical advice",
    body: "The Neolen research tool and the model behind it generate research outputs such as answers, evidence summaries, and hypotheses. Nothing produced by the research tool constitutes medical advice, a diagnosis, or a treatment recommendation, and it must not be used as a substitute for professional medical judgment or for regulated clinical decision-making. Outputs can be incomplete or wrong and are not proof of efficacy.",
  },
  {
    id: "human-review",
    title: "Human review required",
    body: "Neolen is designed to support researchers. A qualified human researcher, clinician, or institutional review process must evaluate any output before it informs a research program, investment decision, or patient-facing action.",
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: "You agree not to use the research tool to violate applicable law, to re-identify de-identified data, to circumvent access controls, or to use outputs to make representations of clinical efficacy or regulatory approval that have not been established through appropriate trials and review.",
  },
  {
    id: "data-source-licensing",
    title: "Data source licensing",
    body: "Underlying public data sources may carry their own license terms, including restrictions on commercial use for certain databases. Access to outputs derived from such sources is subject to those upstream terms in addition to these Terms of Service.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: "Neolen retains all rights in the research tool, its models, and related technology. You retain rights in data and files you upload, subject to the license you grant us to process that data solely to provide the service to you.",
  },
  {
    id: "protected-health-information",
    title: "Protected health information",
    body: "Any use of the research tool with protected health information is governed by a separate written agreement (including a Business Associate Agreement where applicable), which controls in the event of any conflict with these terms.",
  },
  {
    id: "disclaimers",
    title: "Disclaimers & limitation of liability",
    body: "The research tool and its outputs are provided on an 'as is' basis during this development phase, without warranties of any kind. To the maximum extent permitted by law, Neolen is not liable for decisions made based on research tool outputs.",
  },
  {
    id: "governing-law",
    title: "Governing law & jurisdiction",
    body: "These terms are governed by the laws of India. Subject to the dispute resolution provisions of any separate signed agreement, the courts at Agra, Uttar Pradesh shall have exclusive jurisdiction over any dispute arising out of or relating to these terms.",
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: "We may update these terms as our products evolve. Material changes will be reflected by an updated effective date above.",
  },
  {
    id: "contact",
    title: "Contact",
    body: `Questions about these terms can be sent to ${siteConfig.email.general} or ${siteConfig.phone.display}. Registered office: ${siteConfig.legalName} (CIN: ${siteConfig.legal.cin}), ${siteConfig.address.full}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms" }])} />

      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated 19 October 2026" />

      <LegalDocument
        clauses={clauses}
        notice={
          <p>
            Neolen is in active pre-launch development. These terms will be finalized with legal counsel
            before commercial launch. Research access, partnership, and pilot engagements may additionally
            be governed by a separate signed agreement, which takes precedence over this page.
          </p>
        }
      />
    </>
  )
}
