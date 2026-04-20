import * as React from "react"

import { cn } from "@/lib/utils"

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

type FrostGlassVariant = "clear" | "frosted" | "subtle"

interface FrostGlassProps extends React.ComponentProps<"div"> {
  variant?: FrostGlassVariant
  noise?: boolean
}

function FrostGlass({
  variant = "clear",
  noise = true,
  className,
  children,
  ...props
}: FrostGlassProps) {
  const variantStyles: Record<FrostGlassVariant, string> = {
    clear: [
      "backdrop-blur-[8px] backdrop-saturate-[1.8]",
      "bg-white/[0.22] dark:bg-white/[0.06]",
      "border border-white/[0.52] dark:border-white/[0.14]",
      "shadow-[0_10px_34px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
    ].join(" "),
    frosted: [
      "backdrop-blur-[18px] backdrop-saturate-[1.5]",
      "bg-white/[0.32] dark:bg-white/[0.09]",
      "border border-white/[0.38] dark:border-white/[0.13]",
      "shadow-[0_16px_44px_rgba(15,23,42,0.10)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.24)]",
    ].join(" "),
    subtle: [
      "backdrop-blur-[10px] backdrop-saturate-[1.35]",
      "bg-white/[0.16] dark:bg-white/[0.04]",
      "border border-white/[0.3] dark:border-white/[0.1]",
      "shadow-[0_8px_20px_rgba(15,23,42,0.07)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
    ].join(" "),
  }

  return (
    <div
      data-slot="frost-glass"
      data-variant={variant}
      className={cn(
        "relative overflow-hidden rounded-[inherit] transition-all duration-300",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {noise && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-[0.03] mix-blend-overlay dark:opacity-[0.04]"
          style={{ backgroundImage: NOISE_SVG }}
        />
      )}
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}

export { FrostGlass }
export type { FrostGlassProps, FrostGlassVariant }
