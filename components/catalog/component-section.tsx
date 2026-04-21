import { ArrowUpRight } from "lucide-react"

import type { CatalogEntry } from "@/components/catalog/catalog-config"
import { Badge } from "@/components/ui/badge"
import { GlassPanel } from "@/components/ui/glass-panel"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SOURCE_BASE_URL = "https://github.com/kostyniuk/glasscn/blob/main"

export function ComponentSection({ entry }: { entry: CatalogEntry }) {
  const Preview = entry.preview
  const sourceHref = `${SOURCE_BASE_URL}/${entry.sourcePath}`

  return (
    <article
      id={entry.id}
      aria-labelledby={`${entry.id}-title`}
      className="scroll-mt-28 [contain-intrinsic-size:720px_420px] [content-visibility:auto]"
    >
      <GlassPanel tone="surface" className="rounded-[2rem] p-5 md:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">public</Badge>
                <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {entry.category}
                </span>
              </div>
              <div className="space-y-1">
                <h3
                  id={`${entry.id}-title`}
                  className="font-heading text-2xl font-semibold tracking-tight"
                >
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {entry.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={sourceHref}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "xs" }),
                  "rounded-full"
                )}
              >
                Source
                <ArrowUpRight className="size-3.5" />
              </a>
              {entry.docsHref ? (
                <a
                  href={entry.docsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "xs" }),
                    "rounded-full"
                  )}
                >
                  Docs
                  <ArrowUpRight className="size-3.5" />
                </a>
              ) : null}
            </div>
          </div>
          <GlassPanel tone="overlay" className="rounded-[1.75rem] p-4 md:p-5">
            <Preview />
          </GlassPanel>
          {entry.notes ? (
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:border-white/8 dark:bg-white/[0.02]">
              {entry.notes}
            </div>
          ) : null}
        </div>
      </GlassPanel>
    </article>
  )
}
