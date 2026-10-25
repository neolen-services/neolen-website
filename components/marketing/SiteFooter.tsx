import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/marketing/Container"
import { footerNav, siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <Image src="/logo.png" alt="Neolen" width={28} height={28} className="size-7 rounded-full" />
              <span className="text-xl font-semibold leading-none tracking-tight text-ink-1">Neolen</span>
            </Link>
            <p className="font-editorial max-w-sm text-2xl leading-snug text-ink-1">
              A world-class LLM for <em className="text-brand-gradient">medicine and biology</em>.
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-ink-3">
              We&rsquo;re a Bio LLM lab building our own model to power a personal doctor for
              everyone, and an AI for the researchers working on cures.
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-1">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-3 transition-colors hover:text-ink-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 border-t border-line pt-6 text-xs leading-relaxed text-ink-3 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-1">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
            <p>CIN: {siteConfig.legal.cin}</p>
            <p>{siteConfig.address.full}</p>
          </div>
          <p className="text-pretty lg:text-right">
            Neolen&rsquo;s AI can make mistakes. It is not a substitute for professional medical care,
            and research outputs are not proof of clinical efficacy. Research decisions require review
            by qualified experts.
          </p>
        </div>
      </Container>
    </footer>
  )
}
