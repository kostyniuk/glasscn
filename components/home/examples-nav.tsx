"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const examples = [
  "Examples",
  "Dashboard",
  "Tasks",
  "Playground",
  "Authentication",
  "RTL",
]

export function ExamplesNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <ScrollArea className="max-w-[96%] md:max-w-[640px] lg:max-w-none">
        <div className="flex items-center">
          {examples.map((example, index) => (
            <a
              key={example}
              href="#components"
              data-active={index === 0}
              className="flex h-8 items-center justify-center gap-2 rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
            >
              {example}
              {example === "RTL" && (
                <span className="flex size-2 rounded-full bg-sky-500" title="New" />
              )}
            </a>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
