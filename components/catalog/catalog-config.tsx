import type * as React from "react"

import {
  AvatarCatalogDemo,
  BadgeCatalogDemo,
  ButtonCatalogDemo,
  ButtonGroupCatalogDemo,
  CardCatalogDemo,
  CheckboxCatalogDemo,
  CommandCatalogDemo,
  DialogCatalogDemo,
  DropdownMenuCatalogDemo,
  EmptyCatalogDemo,
  FieldCatalogDemo,
  InputCatalogDemo,
  InputGroupCatalogDemo,
  ItemCatalogDemo,
  LabelCatalogDemo,
  PopoverCatalogDemo,
  RadioGroupCatalogDemo,
  ScrollAreaCatalogDemo,
  SelectCatalogDemo,
  SeparatorCatalogDemo,
  SliderCatalogDemo,
  SpinnerCatalogDemo,
  SwitchCatalogDemo,
  TextareaCatalogDemo,
  TooltipCatalogDemo,
} from "@/components/catalog/demos/catalog-demos"

export type CatalogCategory =
  | "foundations"
  | "forms"
  | "overlays"
  | "utilities"

export type CatalogEntry = {
  id: string
  title: string
  category: CatalogCategory
  description: string
  sourcePath: string
  docsHref?: string
  preview: React.ComponentType
  notes?: string
}

export const catalogCategories: Array<{
  id: CatalogCategory
  title: string
  description: string
}> = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Core display primitives and structural surfaces.",
  },
  {
    id: "forms",
    title: "Forms & Inputs",
    description: "Controls, labels, and grouped data entry patterns.",
  },
  {
    id: "overlays",
    title: "Overlays & Interaction",
    description: "Floating surfaces and action-heavy entry points.",
  },
  {
    id: "utilities",
    title: "Utilities",
    description: "Commanding, scrolling, and supporting building blocks.",
  },
]

const docs = (slug: string) => `https://ui.shadcn.com/docs/components/${slug}`

export const catalogEntries: CatalogEntry[] = [
  {
    id: "avatar",
    title: "Avatar",
    category: "foundations",
    description: "User identity surfaces with group and status states.",
    sourcePath: "components/ui/avatar.tsx",
    docsHref: docs("avatar"),
    preview: AvatarCatalogDemo,
  },
  {
    id: "badge",
    title: "Badge",
    category: "foundations",
    description: "Compact status labels with soft glass emphasis.",
    sourcePath: "components/ui/badge.tsx",
    docsHref: docs("badge"),
    preview: BadgeCatalogDemo,
  },
  {
    id: "button",
    title: "Button",
    category: "foundations",
    description: "Primary actions and icon controls with frosted states.",
    sourcePath: "components/ui/button.tsx",
    docsHref: docs("button"),
    preview: ButtonCatalogDemo,
  },
  {
    id: "button-group",
    title: "Button Group",
    category: "foundations",
    description: "Segmented action clusters tuned for glass layouts.",
    sourcePath: "components/ui/button-group.tsx",
    docsHref: docs("button-group"),
    preview: ButtonGroupCatalogDemo,
  },
  {
    id: "card",
    title: "Card",
    category: "foundations",
    description: "Structured content surfaces for dashboards and settings.",
    sourcePath: "components/ui/card.tsx",
    docsHref: docs("card"),
    preview: CardCatalogDemo,
  },
  {
    id: "empty",
    title: "Empty",
    category: "foundations",
    description: "Calm empty states with supportive calls to action.",
    sourcePath: "components/ui/empty.tsx",
    docsHref: docs("empty"),
    preview: EmptyCatalogDemo,
  },
  {
    id: "item",
    title: "Item",
    category: "foundations",
    description: "Composable rows for lists, cards, and navigation cells.",
    sourcePath: "components/ui/item.tsx",
    docsHref: docs("item"),
    preview: ItemCatalogDemo,
  },
  {
    id: "separator",
    title: "Separator",
    category: "foundations",
    description: "Low-contrast dividers that preserve surface rhythm.",
    sourcePath: "components/ui/separator.tsx",
    docsHref: docs("separator"),
    preview: SeparatorCatalogDemo,
  },
  {
    id: "spinner",
    title: "Spinner",
    category: "foundations",
    description: "Loading indicators that blend into glass controls.",
    sourcePath: "components/ui/spinner.tsx",
    docsHref: docs("spinner"),
    preview: SpinnerCatalogDemo,
  },
  {
    id: "checkbox",
    title: "Checkbox",
    category: "forms",
    description: "Compact binary controls for lists and grouped settings.",
    sourcePath: "components/ui/checkbox.tsx",
    docsHref: docs("checkbox"),
    preview: CheckboxCatalogDemo,
  },
  {
    id: "field",
    title: "Field",
    category: "forms",
    description: "High-level form composition for labels, descriptions, and states.",
    sourcePath: "components/ui/field.tsx",
    docsHref: docs("field"),
    preview: FieldCatalogDemo,
    notes:
      "Use Field when you want labels, descriptions, grouped controls, and validation messaging to share one glass-aware structure.",
  },
  {
    id: "input",
    title: "Input",
    category: "forms",
    description: "Single-line text entry with translucent focus treatment.",
    sourcePath: "components/ui/input.tsx",
    docsHref: docs("input"),
    preview: InputCatalogDemo,
  },
  {
    id: "input-group",
    title: "Input Group",
    category: "forms",
    description: "Composes inputs, icons, and buttons into one surface.",
    sourcePath: "components/ui/input-group.tsx",
    docsHref: docs("input-group"),
    preview: InputGroupCatalogDemo,
    notes:
      "Best for command bars, search fields, and mixed-action inputs where controls should read as a single glass surface.",
  },
  {
    id: "label",
    title: "Label",
    category: "forms",
    description: "Typographic labels sized to pair with glass form controls.",
    sourcePath: "components/ui/label.tsx",
    docsHref: docs("label"),
    preview: LabelCatalogDemo,
  },
  {
    id: "radio-group",
    title: "Radio Group",
    category: "forms",
    description: "Single-choice selection with card-like option rows.",
    sourcePath: "components/ui/radio-group.tsx",
    docsHref: docs("radio-group"),
    preview: RadioGroupCatalogDemo,
  },
  {
    id: "select",
    title: "Select",
    category: "forms",
    description: "Popover-backed selection lists with frosted menus.",
    sourcePath: "components/ui/select.tsx",
    docsHref: docs("select"),
    preview: SelectCatalogDemo,
  },
  {
    id: "slider",
    title: "Slider",
    category: "forms",
    description: "Range control with tactile glass handles.",
    sourcePath: "components/ui/slider.tsx",
    docsHref: docs("slider"),
    preview: SliderCatalogDemo,
  },
  {
    id: "switch",
    title: "Switch",
    category: "forms",
    description: "Compact toggles for ambient settings and modes.",
    sourcePath: "components/ui/switch.tsx",
    docsHref: docs("switch"),
    preview: SwitchCatalogDemo,
  },
  {
    id: "textarea",
    title: "Textarea",
    category: "forms",
    description: "Multi-line entry with the same softened glass fill.",
    sourcePath: "components/ui/textarea.tsx",
    docsHref: docs("textarea"),
    preview: TextareaCatalogDemo,
  },
  {
    id: "dialog",
    title: "Dialog",
    category: "overlays",
    description: "Modal surfaces with heavy blur and strong focus framing.",
    sourcePath: "components/ui/dialog.tsx",
    docsHref: docs("dialog"),
    preview: DialogCatalogDemo,
  },
  {
    id: "dropdown-menu",
    title: "Dropdown Menu",
    category: "overlays",
    description: "Contextual action lists rendered as frosted menus.",
    sourcePath: "components/ui/dropdown-menu.tsx",
    docsHref: docs("dropdown-menu"),
    preview: DropdownMenuCatalogDemo,
  },
  {
    id: "popover",
    title: "Popover",
    category: "overlays",
    description: "Inline floating detail panels for secondary content.",
    sourcePath: "components/ui/popover.tsx",
    docsHref: docs("popover"),
    preview: PopoverCatalogDemo,
  },
  {
    id: "tooltip",
    title: "Tooltip",
    category: "overlays",
    description: "Quick hints layered above frosted controls.",
    sourcePath: "components/ui/tooltip.tsx",
    docsHref: docs("tooltip"),
    preview: TooltipCatalogDemo,
  },
  {
    id: "command",
    title: "Command",
    category: "utilities",
    description: "A command surface for search-first navigation and actions.",
    sourcePath: "components/ui/command.tsx",
    docsHref: docs("command"),
    preview: CommandCatalogDemo,
    notes:
      "Built on cmdk and designed to compose naturally with Dialog for command-palette flows.",
  },
  {
    id: "scroll-area",
    title: "Scroll Area",
    category: "utilities",
    description: "Custom scrolling containers that stay visually soft.",
    sourcePath: "components/ui/scroll-area.tsx",
    docsHref: docs("scroll-area"),
    preview: ScrollAreaCatalogDemo,
  },
]
