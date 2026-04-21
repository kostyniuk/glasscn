"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

import { cn } from "@/lib/utils"
import { FrostGlass } from "@/components/ui/frost-glass"

type GlassPanelTone = "hero" | "surface" | "overlay" | "inline"

interface GlassPanelProps extends React.ComponentProps<typeof FrostGlass> {
  tone?: GlassPanelTone
  spotlight?: boolean
}

const toneStyles: Record<GlassPanelTone, string> = {
  hero: "rounded-[1.75rem] border-zinc-950/[0.12] bg-white/18 px-4 py-3 shadow-[0_18px_42px_rgba(15,23,42,0.08)] dark:border-white/14 dark:bg-white/[0.05] dark:shadow-[0_18px_42px_rgba(0,0,0,0.18)]",
  surface:
    "rounded-[1.75rem] border-zinc-950/[0.08] bg-white/14 shadow-[0_14px_36px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_14px_36px_rgba(0,0,0,0.16)]",
  overlay:
    "rounded-[1.5rem] border-zinc-950/[0.1] bg-white/24 shadow-[0_16px_34px_rgba(15,23,42,0.12)] dark:border-white/12 dark:bg-white/[0.08] dark:shadow-[0_16px_34px_rgba(0,0,0,0.2)]",
  inline:
    "w-fit rounded-full border-zinc-950/[0.1] bg-white/14 px-2 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.05] dark:shadow-[0_10px_24px_rgba(0,0,0,0.14)]",
}

function GlassPanel({
  tone = "surface",
  variant,
  className,
  spotlight = false,
  children,
  ...props
}: GlassPanelProps) {
  const resolvedVariant =
    variant ?? (tone === "hero" ? "clear" : tone === "overlay" ? "frosted" : "subtle")

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <FrostGlass
      variant={resolvedVariant}
      className={cn(toneStyles[tone], spotlight && "group relative", className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:mix-blend-screen"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                var(--color-primary) 0%,
                transparent 40%
              )
            `,
            opacity: 0.15,
            zIndex: 0,
          }}
        />
      )}
      {children}
    </FrostGlass>
  )
}

export { GlassPanel }
