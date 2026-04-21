import * as React from "react"

import { catalogEntries } from "@/components/catalog/catalog-config"
import { CatalogMobileNav } from "@/components/catalog/catalog-mobile-nav"
import { CatalogSidebar } from "@/components/catalog/catalog-sidebar"
import { ComponentSection } from "@/components/catalog/component-section"
import { GlassPanel } from "@/components/ui/glass-panel"

export function CatalogPage() {
  return (
    <main className="container-wrapper relative z-10 flex-1 pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="container">
        {/* Page header */}
        <div className="mb-8 max-w-3xl space-y-4 lg:mb-10">
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
              The current public glasscn component surface, filtered down to
              the pieces that visibly use the translucent design language.
              Every tile includes a live preview and a copy-ready code
              snippet.
            </p>
          </div>
        </div>

        <CatalogMobileNav entries={catalogEntries} />

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="hidden lg:block lg:sticky lg:top-[200px] lg:h-fit lg:self-start">
            <CatalogSidebar entries={catalogEntries} />
          </div>

          <div className="min-w-0 space-y-5">
            <header className="flex items-baseline gap-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                Components
              </h2>
              <span className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
                {catalogEntries.length}
              </span>
            </header>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-5">
              {catalogEntries.map((entry) => (
                <ComponentSection key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
