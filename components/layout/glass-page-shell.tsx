import * as React from "react"

import { SiteHeader } from "@/components/home/site-header"
import { cn } from "@/lib/utils"

export async function GlassPageShell({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "style-luma relative flex min-h-dvh flex-1 flex-col overflow-x-hidden",
        className
      )}
    >
      <SiteHeader />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[#f9fafb] transition-colors duration-700 dark:bg-[#09090b]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 mix-blend-normal dark:opacity-[0.35] dark:mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(251, 146, 60, 0.4), transparent 45%), radial-gradient(circle at 85% 15%, rgba(251, 191, 36, 0.35), transparent 45%), radial-gradient(circle at 50% 70%, rgba(244, 63, 94, 0.25), transparent 55%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent 100%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[15%] left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.45),transparent_65%)] blur-[90px] dark:opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />
      {children}
    </div>
  )
}
