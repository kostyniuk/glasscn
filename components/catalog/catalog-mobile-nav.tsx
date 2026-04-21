"use client"

import * as React from "react"

import { GlassPanel } from "@/components/ui/glass-panel"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { CatalogCategory, CatalogEntry } from "@/components/catalog/catalog-config"

export function CatalogMobileNav({
  categories,
  entries,
}: {
  categories: Array<{ id: CatalogCategory; title: string }>
  entries: CatalogEntry[]
}) {
  const [value, setValue] = React.useState(entries[0]?.id ?? "")

  React.useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1)
      if (hash && entries.some((entry) => entry.id === hash)) {
        setValue(hash)
      }
    }

    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [entries])

  return (
    <GlassPanel
      tone="surface"
      className="sticky top-[4.5rem] z-20 mb-6 rounded-[1.5rem] p-1 lg:hidden"
    >
      <Select
        value={value}
        onValueChange={(nextValue) => {
          if (!nextValue) {
            return
          }

          setValue(nextValue)
          const element = document.getElementById(nextValue)
          element?.scrollIntoView({ behavior: "smooth", block: "start" })
          window.history.replaceState(null, "", `#${nextValue}`)
        }}
      >
        <SelectTrigger className="w-full border-transparent bg-transparent shadow-none focus-visible:ring-0">
          <SelectValue placeholder="Jump to component" />
        </SelectTrigger>
        <SelectContent align="start">
          {categories.map((category) => {
            const categoryEntries = entries.filter(
              (entry) => entry.category === category.id
            )

            return (
              <SelectGroup key={category.id}>
                <SelectLabel>{category.title}</SelectLabel>
                {categoryEntries.map((entry) => (
                  <SelectItem key={entry.id} value={entry.id}>
                    {entry.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            )
          })}
        </SelectContent>
      </Select>
    </GlassPanel>
  )
}
