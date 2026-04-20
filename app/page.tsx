import Image from "next/image"

import { Announcement } from "@/components/home/announcement"
import { ExamplesNav } from "@/components/home/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/home/page-header"
import { PageNav } from "@/components/home/page-nav"
import { RootComponents } from "@/components/home/root-components"
import { ThemeSelector } from "@/components/home/theme-selector"
import { GlassPanel } from "@/components/ui/glass-panel"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const title = "The Foundation for your Design System"
const description =
  "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code."

export default function Page() {
  return (
    <div className="relative flex min-h-dvh flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.9),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(131,157,255,0.2),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(87,199,255,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.16),transparent_18%),radial-gradient(circle_at_82%_12%,rgba(118,145,255,0.15),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(87,199,255,0.08),transparent_28%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_35%,transparent_100%)]"
      />
      <PageHeader>
        <GlassPanel tone="hero" className="rounded-full px-1.5 py-1.5">
          <Announcement />
        </GlassPanel>
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <GlassPanel tone="hero" className="flex flex-wrap items-center justify-center gap-2 px-2 py-2">
            <a
              href="#components"
              className={cn(
                buttonVariants({ size: "sm" }),
                "h-[31px] rounded-full"
              )}
            >
              New Project
            </a>
            <a
              href="#components"
              className={cn(
                buttonVariants({ size: "sm", variant: "ghost" }),
                "rounded-full"
              )}
            >
              View Components
            </a>
          </GlassPanel>
        </PageActions>
      </PageHeader>
      <PageNav className="hidden md:flex">
        <GlassPanel tone="hero" className="flex flex-1 items-center justify-between gap-4 px-3 py-2">
          <ExamplesNav className="flex-1 overflow-hidden" />
          <ThemeSelector className="hidden md:flex" />
        </GlassPanel>
      </PageNav>
      <div className="container-wrapper flex-1 pb-12 pt-2 md:pb-16 md:pt-4">
        <div className="container">
          <GlassPanel
            tone="surface"
            className="-mx-2 w-[160vw] overflow-hidden p-4 sm:-mx-4 md:hidden md:w-[150vw]"
          >
            <section>
              <Image
                src="/home/dashboard-01-light.png"
                width={1400}
                height={875}
                alt="Dashboard"
                className="block rounded-[1.25rem] dark:hidden"
                priority
              />
              <Image
                src="/home/dashboard-01-dark.png"
                width={1400}
                height={875}
                alt="Dashboard"
                className="hidden rounded-[1.25rem] dark:block"
                priority
              />
            </section>
          </GlassPanel>
          <section className="hidden theme-container md:block">
            <div className="rounded-[2rem] px-1 py-3 md:px-0 md:py-4">
              <RootComponents />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
