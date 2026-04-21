"use client"

import * as React from "react"
import { ArrowUpRight, Code2, Eye } from "lucide-react"

import type { CatalogEntry } from "@/components/catalog/catalog-config"
import { CodeBlock } from "@/components/catalog/code-block"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SOURCE_BASE_URL = "https://github.com/kostyniuk/glasscn/blob/main"

type Tab = "preview" | "code"

export function ComponentSection({ entry }: { entry: CatalogEntry }) {
  const Preview = entry.preview
  const [tab, setTab] = React.useState<Tab>("preview")
  const sourceHref = `${SOURCE_BASE_URL}/${entry.sourcePath}`

  return (
    <article
      id={entry.id}
      aria-labelledby={`${entry.id}-title`}
      className={cn(
        "relative flex scroll-mt-28 flex-col overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.04] backdrop-blur-xl transition-colors",
        "hover:border-white/20 dark:border-white/8 dark:bg-white/[0.02] dark:hover:border-white/14",
        "[contain-intrinsic-size:720px_420px] [content-visibility:auto]"
      )}
    >
      {/* Header: identity + tabs + external links */}
      <header className="flex flex-col gap-3 border-b border-white/8 px-5 py-4 md:gap-4 dark:border-white/6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1 space-y-1">
            <h3
              id={`${entry.id}-title`}
              className="font-heading truncate text-base font-semibold tracking-tight md:text-lg"
            >
              {entry.title}
            </h3>
            <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">
              {entry.description}
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
            <a
              href={sourceHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "xs" }),
                "rounded-full text-muted-foreground"
              )}
              title="View source on GitHub"
            >
              Source
              <ArrowUpRight className="size-3" />
            </a>
            {entry.docsHref ? (
              <a
                href={entry.docsHref}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "xs" }),
                  "rounded-full text-muted-foreground"
                )}
              >
                Docs
                <ArrowUpRight className="size-3" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <TabSwitcher value={tab} onChange={setTab} />
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href={sourceHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "xs" }),
                "rounded-full text-muted-foreground"
              )}
            >
              Source
              <ArrowUpRight className="size-3" />
            </a>
            {entry.docsHref ? (
              <a
                href={entry.docsHref}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "xs" }),
                  "rounded-full text-muted-foreground"
                )}
              >
                Docs
                <ArrowUpRight className="size-3" />
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* Body: preview OR code (swapped, not stacked, to keep tiles compact) */}
      <div className="relative flex flex-1 flex-col">
        {tab === "preview" ? (
          <div
            className={cn(
              "flex min-h-[280px] flex-1 items-center justify-center px-5 py-6",
              // Subtle dot grid so small primitives (unchecked checkboxes,
              // radios, low-contrast borders) have something to sit on —
              // without adding another card. Tone adapts per theme.
              "bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:18px_18px]",
              "dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]"
            )}
          >
            <div className="flex w-full max-w-[560px] items-center justify-center">
              <Preview />
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-5">
            <CodeBlock code={entry.source} className="flex-1" maxHeight="100%" />
          </div>
        )}
      </div>

      {/* Notes (optional) */}
      {entry.notes ? (
        <footer className="border-t border-white/8 px-5 py-3 dark:border-white/6">
          <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
            {entry.notes}
          </p>
        </footer>
      ) : null}
    </article>
  )
}

function TabSwitcher({
  value,
  onChange,
}: {
  value: Tab
  onChange: (tab: Tab) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="Preview or code"
      className="inline-flex items-center gap-0.5 rounded-full border border-white/12 bg-white/[0.04] p-0.5 text-xs dark:border-white/8 dark:bg-white/[0.03]"
    >
      <TabButton
        active={value === "preview"}
        onClick={() => onChange("preview")}
        icon={<Eye className="size-3" />}
        label="Preview"
      />
      <TabButton
        active={value === "code"}
        onClick={() => onChange("code")}
        icon={<Code2 className="size-3" />}
        label="Code"
      />
    </div>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium transition-colors",
        active
          ? "bg-white/15 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] dark:bg-white/10"
          : "text-muted-foreground hover:bg-white/6 hover:text-foreground dark:hover:bg-white/[0.04]"
      )}
    >
      {icon}
      {label}
    </button>
  )
}
