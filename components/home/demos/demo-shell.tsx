import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function DemoShell({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <Card className="gap-0 py-0 backdrop-blur-[18px]">
      <CardContent className={cn("p-4 md:p-5", className)}>
        {children}
      </CardContent>
    </Card>
  )
}
