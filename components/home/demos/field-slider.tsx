"use client"

import { useState } from "react"

import { DemoShell } from "@/components/home/demos/demo-shell"
import { Field, FieldDescription, FieldTitle } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function FieldSlider() {
  const [value, setValue] = useState([200, 800])

  return (
    <DemoShell>
      <div className="w-full max-w-md">
        <Field>
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($
            <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
            <span className="font-medium tabular-nums">{value[1]}</span>).
          </FieldDescription>
          <Slider
            value={value}
            onValueChange={(nextValue) =>
              setValue(Array.isArray(nextValue) ? [...nextValue] : [nextValue])
            }
            max={1000}
            min={0}
            step={10}
            className="mt-2 w-full"
            aria-label="Price Range"
          />
        </Field>
      </div>
    </DemoShell>
  )
}
