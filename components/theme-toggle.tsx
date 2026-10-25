"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const emptySubscribe = () => () => {}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  // True after hydration only — avoids a server/client mismatch on the icon.
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-line bg-surface-overlay px-1 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <span
        className={cn(
          "flex size-6 items-center justify-center rounded-full bg-surface text-foreground shadow-card transition-transform duration-200 ease-out",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      >
        {mounted ? (
          isDark ? (
            <MoonIcon className="size-3.5" />
          ) : (
            <SunIcon className="size-3.5" />
          )
        ) : null}
      </span>
    </button>
  )
}
