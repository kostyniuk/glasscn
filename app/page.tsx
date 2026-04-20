import Image from "next/image"

import { Announcement } from "@/components/home/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/home/page-header"
import { RootComponents } from "@/components/home/root-components"
import { SiteHeader } from "@/components/home/site-header"
import { GlassPanel } from "@/components/ui/glass-panel"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const title = "Beautifully Frosted Components"
const description = (
  <>
    An Apple-inspired glassmorphic design system based on{" "}
    <a
      href="https://ui.shadcn.com"
      target="_blank"
      rel="noreferrer"
      className="font-semibold underline underline-offset-4 transition-colors hover:text-primary"
    >
      shadcn/ui
    </a>
    . Elevate your Next.js applications with incredibly premium, translucent
    components.
  </>
)

export default function Page() {
  return (
    <div className="relative flex min-h-dvh flex-1 flex-col overflow-hidden">
      <SiteHeader />
      {/* Base background color */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[#f9fafb] transition-colors duration-700 dark:bg-[#09090b]"
      />

      {/* Dynamic Warm Mesh Gradient Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 mix-blend-normal dark:opacity-[0.35] dark:mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(251, 146, 60, 0.4), transparent 45%), radial-gradient(circle at 85% 15%, rgba(251, 191, 36, 0.35), transparent 45%), radial-gradient(circle at 50% 70%, rgba(244, 63, 94, 0.25), transparent 55%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      {/* Central intense glow to make header glass elements pop */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[15%] left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.45),transparent_65%)] blur-[90px] dark:opacity-60"
      />

      {/* Subtle Noise Texture for a premium feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />
      <PageHeader className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <GlassPanel
          tone="hero"
          className="mb-6 rounded-full px-2 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-none"
        >
          <Announcement />
        </GlassPanel>
        <PageHeaderHeading className="max-w-5xl bg-gradient-to-br from-foreground via-foreground/90 to-foreground/60 bg-clip-text pb-2 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tighter text-transparent drop-shadow-sm md:text-7xl">
          {title}
        </PageHeaderHeading>
        <PageHeaderDescription className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-foreground/80 md:text-xl">
          {description}
        </PageHeaderDescription>
        <PageActions className="mt-10">
          <GlassPanel
            tone="hero"
            className="flex flex-wrap items-center justify-center gap-3 px-3 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          >
            <a
              href="#components"
              className={cn(
                buttonVariants({ size: "sm" }),
                "h-[36px] rounded-full px-6 font-medium transition-transform active:scale-95"
              )}
            >
              New Project
            </a>
            <a
              href="/components"
              className={cn(
                buttonVariants({ size: "sm", variant: "ghost" }),
                "h-[36px] rounded-full px-6 font-medium transition-transform active:scale-95"
              )}
            >
              View Components
            </a>
          </GlassPanel>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper flex-1 pt-2 pb-12 md:pt-4 md:pb-16">
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
