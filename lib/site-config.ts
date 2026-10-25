const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neolen.com"
// The signed-in research app is deployed separately from this public website.
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.neolen.com"

export const siteConfig = {
  name: "Neolen",
  legalName: "Neolen Services Private Limited",
  tagline: "Bio LLM lab for medicine & biology",
  // Long-form description for structured data (Organization/WebSite/SoftwareApplication),
  // where length isn't constrained by search-result truncation.
  description:
    "Neolen is a Bio LLM lab building its own large language model for medicine and biology: fast, accurate, and built to hallucinate less, with the goal of matching or beating most frontier models in the field. We're building it to power a personal doctor for everyone, and to give researchers at pharma companies and independent researchers an AI that can help with anything their work needs, from literature and evidence to drug discovery and repurposing.",
  // Short-form description for <meta name="description">, Open Graph, and Twitter cards —
  // kept under ~155 characters so it isn't truncated in search results.
  metaDescription:
    "Neolen is building a fast, accurate LLM for medicine and biology, made to hallucinate less, for a personal doctor for everyone and an AI for researchers.",
  url: siteUrl,
  // Bare host for use in running text ("neolen.com"), whatever the protocol.
  host: siteUrl.replace(/^https?:\/\//, ""),
  // Single shared inbox for now — dedicated aliases (partnerships@, careers@, press@, etc.)
  // aren't set up yet. Split these out once those mailboxes exist.
  email: {
    general: "support@neolen.com",
    partnerships: "support@neolen.com",
    careers: "support@neolen.com",
    press: "support@neolen.com",
    privacy: "support@neolen.com",
  },
  phone: {
    display: "+91 76785 11552",
    href: "+917678511552",
  },
  address: {
    line1: "Keshav Market, Rajaram Ki Bagiya, Shamshabad Road",
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "282001",
    full: "Keshav Market, Rajaram Ki Bagiya, Shamshabad Road, Agra, Uttar Pradesh, India - 282001",
  },
  legal: {
    cin: "U72900UP2021PTC156376",
    registrationNumber: "156376",
  },
  founder: "Sumit",
  keywords: [
    "biomedical LLM",
    "medical large language model",
    "bio LLM",
    "LLM for biology",
    "medical question answering",
    "AI research tool",
    "AI drug discovery",
    "drug repurposing",
    "biomedical research AI",
    "AI personal doctor",
  ],
} as const

// Links into the separate research app (sign-in lives there, not on this site).
export const appLinks = {
  url: appUrl,
  signIn: `${appUrl}/login`,
  // Bare "host/login" for use in running text, whatever the protocol.
  signInHost: `${appUrl.replace(/^https?:\/\//, "")}/login`,
}

export type NavLink = {
  label: string
  href: string
  description?: string
}

export const primaryNav: NavLink[] = [
  { label: "Model", href: "/#model" },
  { label: "Research tool", href: "/#research-tool" },
  { label: "FAQ", href: "/frequently-asked-questions" },
  { label: "Contact", href: "/contact" },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Lab",
    links: [
      { label: "Why our own model", href: "/#model" },
      { label: "Who it's for", href: "/#who-it-serves" },
      { label: "Research tool", href: "/#research-tool" },
      { label: "Our bar", href: "/#focus" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQ", href: "/frequently-asked-questions" },
      { label: "Contact", href: "/contact" },
      { label: "Sign in", href: appLinks.signIn },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]
