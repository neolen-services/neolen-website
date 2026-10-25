import type { Metadata } from "next"
import { PageHero } from "@/components/marketing/PageHero"
import { LegalDocument, type LegalClause } from "@/components/marketing/LegalDocument"
import { siteConfig } from "@/lib/site-config"
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data"

const titleText = "Privacy Policy — Neolen"
const description =
  "Learn how Neolen collects, uses, and protects your personal information across our public website and AI research tool."

export const metadata: Metadata = {
  title: { absolute: titleText },
  description,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: { title: titleText, description, url: "/privacy" },
}

const clauses: LegalClause[] = [
  {
    id: "scope",
    title: "Scope",
    body: `This policy covers information collected through the public Neolen website (${siteConfig.host}) and the Neolen research tool used by registered account holders.`,
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: "On the public website: information you voluntarily provide, such as name, email address, and organization, when you contact us or request access. On the research tool: account information (name, email), authentication data, research files you upload, data sources and integrations you connect, your research sessions, and usage data such as session activity, needed to operate the product.",
  },
  {
    id: "public-website",
    title: "Information we do not collect on the public website",
    body: "The public website does not use third-party advertising trackers. We may use privacy-respecting, aggregate analytics to understand which pages are useful, without building individual advertising profiles.",
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    body: "To respond to inquiries and research access requests, to operate and improve the research tool for registered users, to maintain security and audit logs, and to communicate important product or policy updates.",
  },
  {
    id: "health-information",
    title: "Health information",
    body: "The research tool is built for research on literature, clinical, and biological sources and on the files and data sources you choose to add. Please do not upload identifiable patient health information unless you are authorized to do so. Any processing of protected health information requires a separate written agreement with Neolen, which governs that processing.",
  },
  {
    id: "data-sharing",
    title: "Data sharing",
    body: "We do not sell personal information. We share information only with service providers who help us operate the platform (e.g. cloud infrastructure, email delivery), under confidentiality obligations, or where required by law.",
  },
  {
    id: "retention-and-security",
    title: "Data retention & security",
    body: "We retain account and platform data for as long as an account is active, plus a reasonable period thereafter for legal and operational purposes. We apply role-based access control, encryption in transit, and audit logging.",
  },
  {
    id: "your-choices",
    title: "Your choices",
    body: "You may request access to, correction of, or deletion of your personal information by contacting us. Registered users can manage most account information directly within the research tool.",
  },
  {
    id: "grievance-officer",
    title: "Grievance officer",
    body: `In accordance with the Information Technology Act, 2000 and rules made thereunder, and the Digital Personal Data Protection Act, 2023, grievances regarding this policy or your personal data can be directed to our grievance contact at ${siteConfig.email.privacy} or ${siteConfig.phone.display}. We aim to acknowledge grievances within 24 hours and resolve them within 15 days.`,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: "We will update this page as our products and data practices evolve, particularly as we open access to our model and research tool, and will note the effective date of material changes above.",
  },
  {
    id: "contact",
    title: "Contact",
    body: `Questions about this policy can be sent to ${siteConfig.email.privacy} or ${siteConfig.phone.display}. Registered office: ${siteConfig.legalName} (CIN: ${siteConfig.legal.cin}), ${siteConfig.address.full}.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }])} />

      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated 19 October 2026" />

      <LegalDocument
        clauses={clauses}
        notice={
          <p>
            Neolen is in active pre-launch development. This policy describes our current practices and
            will be finalized with legal counsel before commercial launch. Contact{" "}
            <a href={`mailto:${siteConfig.email.privacy}`} className="font-medium underline underline-offset-4">
              {siteConfig.email.privacy}
            </a>{" "}
            with any questions.
          </p>
        }
      />
    </>
  )
}
