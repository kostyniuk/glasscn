"use client"

import * as React from "react"
import { IconInfoCircle, IconStar } from "@tabler/icons-react"

import { DemoShell } from "@/components/home/demos/demo-shell"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function InputGroupButtonExample() {
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <DemoShell>
      <div className="grid w-full max-w-sm gap-6">
        <Label htmlFor="input-secure-19" className="sr-only">
          Input Secure
        </Label>
        <InputGroup className="[--radius:9999px]">
          <InputGroupInput id="input-secure-19" className="pl-0.5!" />
          <Popover>
            <PopoverTrigger render={<InputGroupAddon />}>
              <InputGroupButton variant="secondary" size="icon-xs" aria-label="Info">
                <IconInfoCircle />
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              alignOffset={10}
              className="flex flex-col gap-1 rounded-xl text-sm"
            >
              <p className="font-medium">Your connection is not secure.</p>
              <p>You should not enter any sensitive information on this site.</p>
            </PopoverContent>
          </Popover>
          <InputGroupAddon className="pl-1! text-muted-foreground">
            https://
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              onClick={() => setIsFavorite(!isFavorite)}
              size="icon-xs"
              aria-label="Favorite"
            >
              <IconStar
                data-favorite={isFavorite}
                className="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
              />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </DemoShell>
  )
}
