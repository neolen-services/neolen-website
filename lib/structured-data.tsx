import { siteConfig } from "@/lib/site-config"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonLdObject = Record<string, any>

export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email.general,
    telephone: siteConfig.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    identifier: siteConfig.legal.cin,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    knowsAbout: [
      "Large language models",
      "Medical question answering",
      "Biology",
      "Biomedical research",
      "Drug discovery",
      "Drug repurposing",
    ],
  }
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  }
}

export function softwareApplicationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${siteConfig.name} Research Tool`,
    applicationCategory: "HealthApplication",
    applicationSubCategory: "AI research tool for biomedical research and drug discovery",
    operatingSystem: "Web",
    description:
      "An AI research tool for researchers, powered by Neolen's own LLM for medicine and biology. Literature, clinical, and biological sources in one place, built for drug discovery, drug repurposing, and any other biomedical research — from finding evidence to forming and testing hypotheses.",
    url: siteConfig.url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      description:
        "Early access for researchers at pharma companies and independent researchers working on cures for diseases.",
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  // Escape "<" so a value like "</script>" can't prematurely close the tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
