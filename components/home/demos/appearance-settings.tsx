"use client"

import * as React from "react"
import { IconMinus, IconPlus } from "@tabler/icons-react"

import { DemoShell } from "@/components/home/demos/demo-shell"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export function AppearanceSettings() {
  const [gpuCount, setGpuCount] = React.useState(8)

  const handleGpuAdjustment = React.useCallback((adjustment: number) => {
    setGpuCount((prevCount) =>
      Math.max(1, Math.min(99, prevCount + adjustment))
    )
  }, [])

  const handleGpuInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10)
      if (!Number.isNaN(value) && value >= 1 && value <= 99) {
        setGpuCount(value)
      }
    },
    []
  )

  return (
    <DemoShell>
      <FieldSet>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Compute Environment</FieldLegend>
            <FieldDescription>
              Select the compute environment for your cluster.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes">
              <FieldLabel htmlFor="kubernetes-r2h">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      Run GPU workloads on a K8s configured cluster. This is the
                      default.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    value="kubernetes"
                    id="kubernetes-r2h"
                    aria-label="Kubernetes"
                  />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="vm-z4k">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Virtual Machine</FieldTitle>
                    <FieldDescription>
                      Access a VM configured cluster to run workloads. (Coming
                      soon)
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    value="vm"
                    id="vm-z4k"
                    aria-label="Virtual Machine"
                  />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="number-of-gpus-f6l">
                Number of GPUs
              </FieldLabel>
              <FieldDescription>You can add more later.</FieldDescription>
            </FieldContent>
            <div
              role="group"
              aria-label="GPU count controls"
              className="inline-flex h-8 shrink-0 items-stretch overflow-hidden rounded-full border border-border bg-input/50"
            >
              <Input
                id="number-of-gpus-f6l"
                value={gpuCount}
                onChange={handleGpuInputChange}
                size={3}
                className="h-full w-14! min-w-0 rounded-none border-0 bg-transparent px-0 py-0 text-center font-mono text-base tabular-nums shadow-none focus-visible:border-0 focus-visible:ring-0 aria-invalid:ring-0"
                maxLength={3}
              />
              <div className="w-px bg-border/80" />
              <Button
                variant="ghost"
                size="icon-sm"
                type="button"
                aria-label="Decrement"
                className="h-full w-8 rounded-none border-0 p-0 shadow-none hover:bg-foreground/[0.04] dark:hover:bg-white/[0.05]"
                onClick={() => handleGpuAdjustment(-1)}
                disabled={gpuCount <= 1}
              >
                <IconMinus className="size-4" />
              </Button>
              <div className="w-px bg-border/80" />
              <Button
                variant="ghost"
                size="icon-sm"
                type="button"
                aria-label="Increment"
                className="h-full w-8 rounded-none border-0 p-0 shadow-none hover:bg-foreground/[0.04] dark:hover:bg-white/[0.05]"
                onClick={() => handleGpuAdjustment(1)}
                disabled={gpuCount >= 99}
              >
                <IconPlus className="size-4" />
              </Button>
            </div>
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="tinting">Wallpaper Tinting</FieldLabel>
              <FieldDescription>
                Allow the wallpaper to be tinted.
              </FieldDescription>
            </FieldContent>
            <Switch id="tinting" defaultChecked />
          </Field>
        </FieldGroup>
      </FieldSet>
    </DemoShell>
  )
}
