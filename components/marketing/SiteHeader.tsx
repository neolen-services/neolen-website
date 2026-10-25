"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { appLinks, primaryNav } from "@/lib/site-config"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src="/logo.png" alt="Neolen" width={28} height={28} className="size-7 rounded-full" priority />
          <span className="text-xl font-semibold leading-none tracking-tight text-ink-1">Neolen</span>
          <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />
          <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-3 sm:block">
            Bio LLM Lab
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            // Hash links point at sections of the home page and are never "active".
            const active =
              !item.href.includes("#") && (pathname === item.href || pathname.startsWith(item.href + "/"))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium text-ink-3 transition-colors hover:text-ink-1",
                  active && "text-ink-1"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link href={appLinks.signIn}>Sign in</Link>
          </Button>
          <Button asChild size="sm" variant="light" className="text-sm">
            <Link href="/contact#research-access">
              Request access
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-background px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="outline" className="w-full justify-center">
              <Link href={appLinks.signIn} onClick={() => setOpen(false)}>Sign in</Link>
            </Button>
            <Button asChild variant="light" className="w-full justify-center">
              <Link href="/contact#research-access" onClick={() => setOpen(false)}>
                Request access
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
