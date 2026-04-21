"use client"

import * as React from "react"

import type { CatalogEntry } from "@/components/catalog/catalog-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function CatalogSidebar({ entries }: { entries: CatalogEntry[] }) {
  const [activeId, setActiveId] = React.useState(entries[0]?.id ?? "")

  React.useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.slice(1)
      if (hash && entries.some((entry) => entry.id === hash)) {
        setActiveId(hash)
        return
      }

      let current = entries[0]?.id ?? ""
      for (const entry of entries) {
        const element = document.getElementById(entry.id)
        if (!element) {
          continue
        }
        if (element.getBoundingClientRect().top <= 180) {
          current = entry.id
        }
      }
      setActiveId(current)
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    window.addEventListener("hashchange", updateActive)

    return () => {
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("hashchange", updateActive)
    }
  }, [entries])

  return (
    <Card className="gap-0 py-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-sm">Browse Components</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav className="space-y-1">
          {entries.map((entry) => (
            <a
              key={entry.id}
              href={`#${entry.id}`}
              className={cn(
                "block rounded-2xl px-3 py-1 text-sm transition-colors",
                activeId === entry.id
                  ? "border-2 bg-white/12 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] dark:bg-white/8"
                  : "text-muted-foreground hover:bg-white/6 hover:text-foreground dark:hover:bg-white/4"
              )}
            >
              {entry.title}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
