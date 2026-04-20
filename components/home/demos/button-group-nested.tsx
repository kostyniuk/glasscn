import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { DemoShell } from "@/components/home/demos/demo-shell"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupNested() {
  return (
    <DemoShell className="flex justify-center px-3 py-3">
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </DemoShell>
  )
}
