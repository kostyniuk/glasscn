import { ArrowRightIcon } from "lucide-react"

import { badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function Announcement() {
  return (
    <a
      href="#components"
      className={cn(
        badgeVariants({ variant: "secondary" }),
        "h-auto rounded-full bg-white/40 px-4 py-2 text-sm shadow-none dark:bg-white/10"
      )}
    >
      shadcn/skills, presets and more <ArrowRightIcon className="size-4" />
    </a>
  )
}
