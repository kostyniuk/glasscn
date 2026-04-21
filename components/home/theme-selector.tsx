"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassPanel } from "@/components/ui/glass-panel"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const ADD_COMMAND =
  "npx shadcn@latest add --yes avatar badge button button-group card checkbox command dialog dropdown-menu empty field input input-group item label popover radio-group scroll-area select separator slider spinner switch textarea tooltip"

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { theme, setTheme } = useTheme()
  const [copied, setCopied] = React.useState(false)

  const value = theme ?? "system"

  async function copyCommand() {
    await navigator.clipboard.writeText(ADD_COMMAND)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <GlassPanel tone="inline" className="p-1">
        <Select
          value={value}
          onValueChange={(nextValue) => {
            if (nextValue) {
              setTheme(nextValue)
            }
          }}
        >
          <SelectTrigger className="w-36 border-transparent bg-transparent shadow-none focus-visible:ring-0">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </GlassPanel>
      <GlassPanel tone="inline" className="p-1">
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-full"
          onClick={copyCommand}
          aria-label="Copy shadcn add command"
        >
          {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
        </Button>
      </GlassPanel>
    </div>
  )
}
