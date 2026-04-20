import { DemoShell } from "@/components/home/demos/demo-shell"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function FieldCheckbox() {
  return (
    <DemoShell className="px-4 py-3">
      <FieldLabel htmlFor="checkbox-demo" className="w-full">
        <Field orientation="horizontal">
          <Checkbox id="checkbox-demo" defaultChecked />
          <FieldLabel htmlFor="checkbox-demo" className="line-clamp-1">
            I agree to the terms and conditions
          </FieldLabel>
        </Field>
      </FieldLabel>
    </DemoShell>
  )
}
