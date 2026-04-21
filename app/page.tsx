import Image from "next/image"
import { IconBrandGithub } from "@tabler/icons-react"

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
import { Card, CardContent } from "@/components/ui/card"
import ShinyText from "@/components/ui/shiny-text"
import { Reveal } from "@/components/ui/reveal"
import { FloatingOrbs } from "@/components/ui/floating-orbs"
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
    . Elevate your applications with beautifull translucent components.
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
      <FloatingOrbs />
      <PageHeader className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* <GlassPanel
          tone="hero"
          className="mb-6 rounded-full px-2 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-none"
        >
          <Announcement />
        </GlassPanel> */}
        <div className="group relative mx-auto mb-2 max-w-5xl">
          {/* Ambient background glow */}
          <div className="absolute inset-0 z-0 mx-auto w-3/4 scale-90 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 opacity-60 blur-3xl transition-all duration-700 group-hover:scale-100 group-hover:opacity-80 dark:opacity-80" />

          {/* Glassy, gradient text */}
          <h1 className="relative z-10 text-5xl font-black tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:text-7xl lg:text-8xl dark:drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
            <ShinyText
              text="GlassCN"
              speed={3}
              color="var(--primary)"
              shineColor="rgba(255,255,255,0.8)"
              className="bg-gradient-to-b from-primary/90 via-primary/80 to-primary/40 bg-clip-text"
            />
          </h1>
        </div>
        <Reveal delay={0.1}>
          <PageHeaderHeading className="max-w-5xl bg-gradient-to-br from-foreground via-foreground/90 to-foreground/60 bg-clip-text pb-2 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tighter text-transparent drop-shadow-sm md:text-7xl">
            {title}
          </PageHeaderHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <PageHeaderDescription className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-foreground/80 md:text-xl">
            {description}
          </PageHeaderDescription>
        </Reveal>
        <Reveal delay={0.3}>
          <PageActions className="mt-10">
            <GlassPanel
              tone="hero"
              className="px-3 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://github.com/kostyniuk/glasscn"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "h-[36px] items-center gap-2 rounded-full bg-foreground px-6 leading-none font-medium text-background transition-transform hover:bg-foreground/90 active:scale-95"
                  )}
                >
                  <IconBrandGithub className="size-4" />
                  GitHub
                </a>
                <a
                  href="/components"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "h-[36px] items-center rounded-full px-6 leading-none font-medium transition-transform active:scale-95"
                  )}
                >
                  View Components
                </a>
              </div>
            </GlassPanel>
          </PageActions>
        </Reveal>
      </PageHeader>
      <div className="container-wrapper flex-1 pt-2 pb-12 md:pt-4 md:pb-16">
        <div className="container">
          <Reveal delay={0.4}>
            <Card className="-mx-2 w-[160vw] gap-0 overflow-hidden py-0 sm:-mx-4 md:hidden md:w-[150vw]">
              <CardContent className="p-4">
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
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.4}>
            <section className="hidden theme-container md:block">
              <div className="rounded-[2rem] px-1 py-3 md:px-0 md:py-4">
                <RootComponents />
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
