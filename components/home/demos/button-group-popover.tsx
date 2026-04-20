import { BotIcon, ChevronDownIcon } from "lucide-react"

import { DemoShell } from "@/components/home/demos/demo-shell"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { GlassPanel } from "@/components/ui/glass-panel"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export function ButtonGroupPopover() {
  return (
    <DemoShell className="px-3 py-3">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          <BotIcon /> Copilot
        </Button>
        <Popover>
          <PopoverTrigger
            render={<Button variant="outline" size="icon-sm" aria-label="Open Popover" />}
          >
            <ChevronDownIcon />
          </PopoverTrigger>
          <PopoverContent align="end" className="gap-0 overflow-hidden rounded-[1.5rem] p-0 text-sm">
            <GlassPanel tone="overlay" className="gap-0 rounded-[inherit] border-0 p-0 shadow-none">
              <div className="px-4 py-3">
                <div className="text-sm font-medium">Agent Tasks</div>
              </div>
              <Separator />
              <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
                <Textarea
                  placeholder="Describe your task in natural language."
                  className="mb-4 resize-none"
                />
                <p className="font-medium">Start a new task with Copilot</p>
                <p className="text-muted-foreground">
                  Describe your task in natural language. Copilot will work in the
                  background and open a pull request for your review.
                </p>
              </div>
            </GlassPanel>
          </PopoverContent>
        </Popover>
      </ButtonGroup>
    </DemoShell>
  )
}
