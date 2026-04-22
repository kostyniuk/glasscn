import { GlassPanel } from "@/components/ui/glass-panel"
import { FieldSeparator } from "@/components/ui/field"
import { AppearanceSettings } from "@/components/home/demos/appearance-settings"
import { ButtonGroupDemo } from "@/components/home/demos/button-group-demo"
import { ButtonGroupInputGroup } from "@/components/home/demos/button-group-input-group"
import { ButtonGroupNested } from "@/components/home/demos/button-group-nested"
import { ButtonGroupPopover } from "@/components/home/demos/button-group-popover"
import { EmptyAvatarGroup } from "@/components/home/demos/empty-avatar-group"
import { FieldCheckbox } from "@/components/home/demos/field-checkbox"
import { FieldDemo } from "@/components/home/demos/field-demo"
import { FieldHear } from "@/components/home/demos/field-hear"
import { FieldSlider } from "@/components/home/demos/field-slider"
import { InputGroupButtonExample } from "@/components/home/demos/input-group-button"
import { InputGroupDemo } from "@/components/home/demos/input-group-demo"
import { ItemDemo } from "@/components/home/demos/item-demo"
import { NotionPromptForm } from "@/components/home/demos/notion-prompt-form"
import { SpinnerBadge } from "@/components/home/demos/spinner-badge"
import { SpinnerEmpty } from "@/components/home/demos/spinner-empty"

export function RootComponents() {
  return (
    <div
      id="components"
      className="mx-auto grid gap-8 py-1 theme-container md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 2xl:gap-8"
    >
      <div className="order-1 flex flex-col gap-6 md:order-none *:[div]:w-full *:[div]:max-w-full">
        <FieldDemo />
      </div>
      <div className="order-4 flex flex-col gap-6 md:order-none *:[div]:w-full *:[div]:max-w-full">
        <EmptyAvatarGroup />
        <SpinnerBadge />
        <ButtonGroupInputGroup />
        <FieldSlider />
        <InputGroupDemo />
      </div>
      <div className="order-2 flex flex-col gap-6 md:order-none *:[div]:w-full *:[div]:max-w-full">
        <div className="flex flex-col gap-6 md:hidden">
          <GlassPanel tone="inline" className="rounded-[1.25rem] px-4 py-3">
            <FieldSeparator className="my-0">Appearance Settings</FieldSeparator>
          </GlassPanel>
          <AppearanceSettings />
        </div>
        <InputGroupButtonExample />
        <ItemDemo />
        <GlassPanel
          tone="inline"
          className="hidden rounded-[1.25rem] px-4 py-3 md:flex"
        >
          <FieldSeparator className="my-0">Appearance Settings</FieldSeparator>
        </GlassPanel>
        <div className="hidden md:block">
          <AppearanceSettings />
        </div>
      </div>
      <div className="order-3 flex flex-col gap-6 md:order-first lg:hidden xl:order-last xl:flex *:[div]:w-full *:[div]:max-w-full">
        <NotionPromptForm />
        <ButtonGroupDemo />
        <FieldCheckbox />
        <div className="flex justify-between gap-4">
          <ButtonGroupNested />
          <ButtonGroupPopover />
        </div>
        <FieldHear />
        <SpinnerEmpty />
      </div>
    </div>
  )
}
