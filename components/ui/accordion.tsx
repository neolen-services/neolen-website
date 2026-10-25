"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface AccordionItemData {
  id: string
  question: string
  answer: React.ReactNode
}

// FAQ rows — one open at a time; the plus rotates 45° to close.
export function Accordion({
  items,
  className,
  defaultOpenId,
}: {
  items: AccordionItemData[]
  className?: string
  defaultOpenId?: string
}) {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId ?? null)

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="border-b border-line last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full flex-1 items-center justify-between gap-4 py-5 text-left text-sm font-medium outline-none transition-all hover:text-blue focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.question}
              <PlusIcon
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <p className="pt-0 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
