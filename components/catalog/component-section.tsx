"use client"

import * as React from "react"
import { ArrowUpRight, Code2, Eye } from "lucide-react"

import type { CatalogEntry } from "@/components/catalog/catalog-config"
import { CodeBlock } from "@/components/catalog/code-block"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
      className="flex scroll-mt-28 flex-col gap-4"
    >
      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1 space-y-1.5">
            <h3
              id={`${entry.id}-title`}
              className="truncate font-heading text-xl font-semibold tracking-tight md:text-2xl"
            >
              {entry.title}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {entry.description}
            </p>
          </div>

          <div className="hidden shrink-0 flex-col items-end gap-1.5 sm:flex">
            <div className="flex items-center gap-1.5">
              <a
                href={sourceHref}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "h-8 rounded-full text-muted-foreground"
                )}
                title="View source on GitHub"
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
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8 rounded-full text-muted-foreground"
                  )}
                >
                  Docs
                  <ArrowUpRight className="size-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <TabSwitcher value={tab} onChange={setTab} />
        </div>
      </header>

      <div className="flex w-full flex-col">
        {tab === "preview" ? (
          <Card
            className={cn(
              "gap-0 py-0 backdrop-blur-xl transition-colors hover:ring-foreground/10",
              // Subtle dot grid so small primitives have something to sit on
              "bg-[radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:18px_18px]",
              "dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]"
            )}
          >
            <CardContent className="flex min-h-[350px] w-full items-center justify-center p-6">
              <div className="flex w-full max-w-[560px] items-center justify-center">
                <Preview />
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex w-full flex-col">
            <CodeBlock
              code={entry.source}
              maxHeight="350px"
              className="rounded-[1.5rem]"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 sm:hidden">
        <a
          href={sourceHref}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full text-muted-foreground"
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
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full text-muted-foreground"
            )}
          >
            Docs
            <ArrowUpRight className="size-3.5" />
          </a>
        ) : null}
      </div>

      {entry.notes ? (
        <Card className="gap-0 py-0">
          <CardContent className="p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {entry.notes}
            </p>
          </CardContent>
        </Card>
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
        icon={<Eye className="size-3.5" />}
        label="Preview"
      />
      <TabButton
        active={value === "code"}
        onClick={() => onChange("code")}
        icon={<Code2 className="size-3.5" />}
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
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-colors",
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
