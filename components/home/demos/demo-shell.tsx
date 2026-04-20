import * as React from "react"

import { GlassPanel } from "@/components/ui/glass-panel"
import { cn } from "@/lib/utils"

export function DemoShell({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <GlassPanel
      tone="surface"
      className={cn("p-4 md:p-5 backdrop-blur-[18px]", className)}
    >
      {children}
    </GlassPanel>
  )
}
