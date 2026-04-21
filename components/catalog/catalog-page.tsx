import * as React from "react"

import {
  catalogCategories,
  catalogEntries,
  type CatalogCategory,
} from "@/components/catalog/catalog-config"
import { CatalogMobileNav } from "@/components/catalog/catalog-mobile-nav"
import { CatalogSidebar } from "@/components/catalog/catalog-sidebar"
import { ComponentSection } from "@/components/catalog/component-section"
import { ThemeSelector } from "@/components/home/theme-selector"
import { GlassPanel } from "@/components/ui/glass-panel"

const groupedEntries = new Map<CatalogCategory, typeof catalogEntries>()
for (const category of catalogCategories) {
  groupedEntries.set(
    category.id,
    catalogEntries.filter((entry) => entry.category === category.id)
  )
}

export function CatalogPage() {
  return (
    <main className="container-wrapper relative z-10 flex-1 pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="container">
        {/* Page header */}
        <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <GlassPanel
              tone="inline"
              className="w-fit rounded-full px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase"
            >
              Public Catalog
            </GlassPanel>
            <div className="space-y-3">
              <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Glass Components
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                The current public glasscn component surface. Every tile below
                includes a live preview and a copy-ready code snippet using the
                project&apos;s translucent design language.
              </p>
            </div>
          </div>
          <ThemeSelector className="w-full justify-start lg:w-auto lg:justify-end" />
        </div>

        <CatalogMobileNav categories={catalogCategories} entries={catalogEntries} />

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <div className="hidden lg:block">
            <CatalogSidebar categories={catalogCategories} entries={catalogEntries} />
          </div>

          <div className="min-w-0 space-y-14">
            {catalogCategories.map((category) => {
              const entries = groupedEntries.get(category.id) ?? []
              if (entries.length === 0) return null

              return (
                <section
                  key={category.id}
                  id={`category-${category.id}`}
                  className="space-y-5 scroll-mt-28"
                >
                  <header className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                        {category.title}
                      </h2>
                      <span className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
                        {entries.length}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {category.description}
                    </p>
                  </header>

                  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-5">
                    {entries.map((entry) => (
                      <ComponentSection key={entry.id} entry={entry} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
