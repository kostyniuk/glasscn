"use client"

import * as React from "react"
import {
  Bell,
  ChevronRight,
  Command as CommandIcon,
  CreditCard,
  Globe,
  Lock,
  Mail,
  Palette,
  Search,
  Send,
  Settings2,
  Shield,
  Sparkles,
  Star,
  User,
  Users,
  WandSparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
} from "@/components/ui/field"
import { GlassPanel } from "@/components/ui/glass-panel"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function DemoCanvas({ className, children }: React.ComponentProps<"div">) {
  // Transparent centering container. The owning ComponentSection provides the
  // surface, so we intentionally avoid borders or fills here to prevent the
  // previous "card-in-card-in-card" nesting.
  return (
    <div
      className={["flex w-full flex-1 items-center justify-center", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}

export function AvatarCatalogDemo() {
  return (
    <DemoCanvas className="justify-between gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium text-foreground/80">
          Collaborators
        </div>
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
            <AvatarBadge>
              <Star className="size-2" />
            </AvatarBadge>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/maxleiter.png" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
      </div>
      <GlassPanel tone="inline" className="hidden px-4 py-3 sm:flex">
        <Avatar>
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="ml-3 text-sm">
          <div className="font-medium">glasscn</div>
          <div className="text-muted-foreground">Frosted profile state</div>
        </div>
      </GlassPanel>
    </DemoCanvas>
  )
}

export function BadgeCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="flex max-w-md flex-wrap items-center justify-center gap-3">
        <Badge>Stable</Badge>
        <Badge variant="secondary">Translucent</Badge>
        <Badge variant="outline">Glass Outline</Badge>
        <Badge variant="ghost">Passive</Badge>
        <Badge variant="destructive">Attention</Badge>
        <Badge variant="link">Inline Link</Badge>
      </div>
    </DemoCanvas>
  )
}

export function ButtonCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="flex max-w-lg flex-wrap items-center justify-center gap-3">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary</Button>
        <Button variant="secondary">Soft Fill</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="icon-sm" aria-label="Settings">
          <Settings2 className="size-4" />
        </Button>
      </div>
    </DemoCanvas>
  )
}

export function ButtonGroupCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="flex flex-col items-center gap-4">
        <ButtonGroup>
          <Button variant="outline">Overview</Button>
          <Button variant="outline">Insights</Button>
          <Button>Deploy</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText>
            <Sparkles className="size-4" />
            AI Preset
          </ButtonGroupText>
          <Button variant="outline">Draft</Button>
          <Button variant="outline">Publish</Button>
        </ButtonGroup>
      </div>
    </DemoCanvas>
  )
}

export function CardCatalogDemo() {
  return (
    <DemoCanvas>
      <Card className="w-full max-w-sm gap-8 bg-white/8 p-4 dark:bg-white/[0.04]">
        <CardHeader className="gap-2.5">
          <CardTitle>Glass Revenue</CardTitle>
          <CardDescription>
            Monthly recurring revenue across premium tiers.
          </CardDescription>
          <CardAction>
            <Badge variant="secondary">+18%</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-4xl font-semibold tracking-tight">$48,240</div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <GlassPanel tone="inline" className="rounded-[1.75rem] px-4 py-4">
                <div className="font-medium">Pro</div>
                <div className="text-muted-foreground">432</div>
              </GlassPanel>
              <GlassPanel tone="inline" className="rounded-[1.75rem] px-4 py-4">
                <div className="font-medium">Team</div>
                <div className="text-muted-foreground">187</div>
              </GlassPanel>
              <GlassPanel tone="inline" className="rounded-[1.75rem] px-4 py-4">
                <div className="font-medium">Scale</div>
                <div className="text-muted-foreground">29</div>
              </GlassPanel>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-between pt-4">
          <span className="text-muted-foreground">Updated 6m ago</span>
          <Button size="sm">Open Report</Button>
        </CardFooter>
      </Card>
    </DemoCanvas>
  )
}

export function CheckboxCatalogDemo() {
  return (
    <DemoCanvas>
      <FieldGroup className="w-full max-w-md gap-3">
        <FieldLabel>
          <Field orientation="horizontal" className="items-center">
            <Checkbox defaultChecked />
            <FieldContent>
              <FieldTitle>Blurred notifications</FieldTitle>
              <FieldDescription>
                Receive alerts when deployment metrics change.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel>
          <Field orientation="horizontal" className="items-center">
            <Checkbox />
            <FieldContent>
              <FieldTitle>Daily digest</FieldTitle>
              <FieldDescription>
                Collect all updates in one premium summary.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </DemoCanvas>
  )
}

export function CommandCatalogDemo() {
  return (
    <DemoCanvas>
      <Command
        // cmdk auto-selects the first item on mount when value is empty, which
        // would scroll the full catalog page down to this demo.
        defaultValue="catalog-preview-idle"
        className="w-full max-w-md bg-white/10 dark:bg-white/[0.05]"
      >
        <CommandInput placeholder="Search surfaces, actions, and themes..." />
        <CommandList>
          <CommandEmpty>No matches found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem>
              <Sparkles className="size-4" />
              Generate glass presets
              <CommandShortcut>G</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Palette className="size-4" />
              Change color temperature
              <CommandShortcut>P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings2 className="size-4" />
              Open preferences
              <CommandShortcut>,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </DemoCanvas>
  )
}

export function DialogCatalogDemo() {
  return (
    <DemoCanvas>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" size="lg" />}>
          Configure Glass Scene
        </DialogTrigger>
        <DialogContent className="bg-popover/85 backdrop-blur-2xl dark:bg-popover/75">
          <DialogHeader>
            <DialogTitle>Refine the glass treatment</DialogTitle>
            <DialogDescription>
              Balance blur, edge contrast, and glow so overlays remain readable.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="gap-3">
            <Field>
              <Label htmlFor="dialog-blur">Blur strength</Label>
              <Input id="dialog-blur" defaultValue="18px" />
            </Field>
            <Field>
              <Label htmlFor="dialog-density">Surface density</Label>
              <Input id="dialog-density" defaultValue="soft glow" />
            </Field>
          </FieldGroup>
          <DialogFooter showCloseButton>
            <Button>Save Preset</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DemoCanvas>
  )
}

export function DropdownMenuCatalogDemo() {
  return (
    <DemoCanvas>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="lg" />}>
          Workspace Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-56">
          <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Sparkles className="size-4" />
              Create frosted draft
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users className="size-4" />
              Invite collaborators
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Lock className="size-4" />
            Reset locked theme
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DemoCanvas>
  )
}

export function EmptyCatalogDemo() {
  return (
    <DemoCanvas>
      <Empty className="max-w-lg rounded-[1.75rem] border-white/10 bg-white/[0.03]">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Sparkles className="size-5" />
          </EmptyMedia>
          <EmptyTitle>No presets yet</EmptyTitle>
          <EmptyDescription>
            Save your favorite blur, tint, and border combinations to reuse them
            across the product.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Create first preset</Button>
        </EmptyContent>
      </Empty>
    </DemoCanvas>
  )
}

export function FieldCatalogDemo() {
  return (
    <DemoCanvas>
      <FieldGroup className="w-full max-w-lg gap-5">
        <Field>
          <Label htmlFor="field-email">Workspace email</Label>
          <Input id="field-email" defaultValue="hello@glasscn.dev" />
          <FieldDescription>
            Used for account alerts and access recovery.
          </FieldDescription>
        </Field>
        <FieldSeparator>Preferences</FieldSeparator>
        <FieldLabel>
          <Field orientation="horizontal" className="items-center">
            <Switch defaultChecked />
            <FieldContent>
              <FieldTitle>Adaptive reflections</FieldTitle>
              <FieldDescription>
                Respond to theme and ambient brightness automatically.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </DemoCanvas>
  )
}

export function InputCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="input-search">Search</Label>
          <Input id="input-search" placeholder="Find a surface..." />
        </Field>
        <Field>
          <Label htmlFor="input-email">Email</Label>
          <Input id="input-email" defaultValue="team@glasscn.dev" />
        </Field>
      </div>
    </DemoCanvas>
  )
}

export function InputGroupCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="w-full max-w-lg">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <Search className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search translucent components..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" aria-label="Send query">
              <Send className="size-3.5" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </DemoCanvas>
  )
}

export function ItemCatalogDemo() {
  return (
    <DemoCanvas>
      <ItemGroup className="w-full max-w-lg gap-3">
        <Item variant="outline">
          <ItemMedia>
            <Shield className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Security Center</ItemTitle>
            <ItemDescription>
              Review permissions, tokens, and trusted devices.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="size-4" />
          </ItemActions>
        </Item>
        <Item variant="muted">
          <ItemMedia>
            <Palette className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Appearance Presets</ItemTitle>
            <ItemDescription>
              Save and reuse your favorite glass scenes.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="secondary">6 saved</Badge>
          </ItemActions>
        </Item>
      </ItemGroup>
    </DemoCanvas>
  )
}

export function LabelCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="label-workspace">Workspace name</Label>
          <Input id="label-workspace" defaultValue="glasscn studio" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="label-region">Primary region</Label>
          <Input id="label-region" defaultValue="Stockholm" />
        </div>
      </div>
    </DemoCanvas>
  )
}

export function PopoverCatalogDemo() {
  return (
    <DemoCanvas>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="lg" />}>
          Preview Layer Stack
        </PopoverTrigger>
        <PopoverContent className="gap-0 overflow-hidden rounded-[1.5rem] p-0">
          <GlassPanel
            tone="overlay"
            className="rounded-[inherit] border-0 p-0 shadow-none"
          >
            <PopoverHeader className="px-4 py-4">
              <PopoverTitle>Glass recipe</PopoverTitle>
              <PopoverDescription>
                Subtle frost, balanced glow, readable text contrast.
              </PopoverDescription>
            </PopoverHeader>
            <Separator />
            <div className="space-y-3 px-4 py-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Blur</span>
                <span>18px</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tint</span>
                <span>Warm neutral</span>
              </div>
            </div>
          </GlassPanel>
        </PopoverContent>
      </Popover>
    </DemoCanvas>
  )
}

export function RadioGroupCatalogDemo() {
  const [value, setValue] = React.useState("balanced")

  return (
    <DemoCanvas>
      <RadioGroup
        value={value}
        onValueChange={setValue}
        className="w-full max-w-md gap-3"
      >
        {[
          ["soft", "Soft Frost", "Lower contrast and softer reflections."],
          ["balanced", "Balanced", "Default density for most product screens."],
          ["vivid", "Vivid", "Sharper glow and stronger edge lighting."],
        ].map(([id, title, description]) => (
          <FieldLabel key={id}>
            <Field orientation="horizontal" className="items-center">
              <RadioGroupItem value={id} />
              <FieldContent>
                <FieldTitle>{title}</FieldTitle>
                <FieldDescription>{description}</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </DemoCanvas>
  )
}

export function ScrollAreaCatalogDemo() {
  return (
    <DemoCanvas>
      <ScrollArea className="h-56 w-full max-w-lg rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-2">
        <div className="space-y-2 p-2">
          {[
            "Foundation tokens synced across components.",
            "Overlay blur intensity adjusted for dark mode.",
            "Command palette spacing tightened for dense content.",
            "Dropdown panel corners aligned with surface geometry.",
            "Tooltip contrast tuned for bright backgrounds.",
            "Form fields updated with calmer border treatments.",
            "Buttons now retain glass identity in ghost mode.",
            "Preview shells added for component documentation.",
          ].map((item) => (
            <GlassPanel
              key={item}
              tone="inline"
              className="w-full rounded-[1.25rem] px-4 py-3 text-sm"
            >
              {item}
            </GlassPanel>
          ))}
        </div>
      </ScrollArea>
    </DemoCanvas>
  )
}

export function SelectCatalogDemo() {
  const [value, setValue] = React.useState("luma")

  return (
    <DemoCanvas>
      <Select
        value={value}
        onValueChange={(nextValue) => {
          if (nextValue) {
            setValue(nextValue)
          }
        }}
      >
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Choose a preset" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Glass preset</SelectLabel>
            <SelectItem value="luma">Luma</SelectItem>
            <SelectItem value="nova">Nova</SelectItem>
            <SelectItem value="clear">Clear Frost</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </DemoCanvas>
  )
}

export function SeparatorCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="flex w-full max-w-lg flex-col gap-4">
        <div className="flex items-center gap-4">
          <Badge variant="outline">Layers</Badge>
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">Spatial rhythm</span>
        </div>
        <GlassPanel
          tone="inline"
          className="flex items-center gap-4 rounded-[1.5rem] px-4 py-3"
        >
          <span className="text-sm">Surface</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Overlay</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Inline</span>
        </GlassPanel>
      </div>
    </DemoCanvas>
  )
}

export function SliderCatalogDemo() {
  const [value, setValue] = React.useState([72])

  return (
    <DemoCanvas>
      <div className="w-full max-w-lg space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Reflection intensity</span>
          <Badge variant="secondary">{value[0]}%</Badge>
        </div>
        <Slider
          value={value}
          onValueChange={(nextValue) => {
            setValue(Array.isArray(nextValue) ? [...nextValue] : [nextValue])
          }}
          max={100}
          step={1}
        />
      </div>
    </DemoCanvas>
  )
}

export function SpinnerCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <GlassPanel tone="inline" className="px-4 py-3">
          <div className="flex w-fit items-center gap-2">
            <Spinner />
            <span className="leading-none">Syncing layers</span>
          </div>
        </GlassPanel>
        <Button variant="outline">
          <Spinner className="size-4" />
          Deploying
        </Button>
        <Badge variant="secondary">
          <Spinner className="size-3" />
          Rendering
        </Badge>
      </div>
    </DemoCanvas>
  )
}

export function SwitchCatalogDemo() {
  return (
    <DemoCanvas>
      <FieldGroup className="w-full max-w-md gap-3">
        <FieldLabel>
          <Field orientation="horizontal" className="items-center">
            <Switch defaultChecked />
            <FieldContent>
              <FieldTitle>Live backdrop blur</FieldTitle>
              <FieldDescription>
                Animate the frosted background as theme changes.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel>
          <Field orientation="horizontal" className="items-center">
            <Switch />
            <FieldContent>
              <FieldTitle>Reduced motion</FieldTitle>
              <FieldDescription>
                Tone down glow shifts and entrance transitions.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </DemoCanvas>
  )
}

export function TabsCatalogDemo() {
  return (
    <DemoCanvas>
      <Tabs defaultValue="overview" className="w-full max-w-lg">
        <TabsList className="w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-4">
          <GlassPanel tone="inline" className="space-y-3 rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Workspace overview</div>
              <Badge variant="secondary">Live</Badge>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl bg-white/8 px-3 py-2 dark:bg-white/[0.04]">
                <div className="font-medium">12</div>
                <div className="text-muted-foreground">Layers</div>
              </div>
              <div className="rounded-2xl bg-white/8 px-3 py-2 dark:bg-white/[0.04]">
                <div className="font-medium">4</div>
                <div className="text-muted-foreground">Themes</div>
              </div>
              <div className="rounded-2xl bg-white/8 px-3 py-2 dark:bg-white/[0.04]">
                <div className="font-medium">98%</div>
                <div className="text-muted-foreground">Ready</div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
        <TabsContent value="activity" className="pt-4">
          <GlassPanel tone="inline" className="rounded-3xl p-4">
            <div className="space-y-2 text-sm">
              <div className="font-medium">Recent activity</div>
              <div className="text-muted-foreground">
                Theme variables were synced across the latest glass surfaces.
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
        <TabsContent value="settings" className="pt-4">
          <GlassPanel tone="inline" className="rounded-3xl p-4">
            <div className="space-y-2 text-sm">
              <div className="font-medium">Appearance settings</div>
              <div className="text-muted-foreground">
                Keep tabs readable while preserving the translucent shell.
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </DemoCanvas>
  )
}

export function TextareaCatalogDemo() {
  return (
    <DemoCanvas>
      <Field className="w-full max-w-lg">
        <Label htmlFor="textarea-feedback">Feedback</Label>
        <Textarea
          id="textarea-feedback"
          defaultValue="The new frosted sidebar feels calmer and easier to scan."
        />
        <FieldDescription>
          Multi-line input with the same soft glass treatment as the rest of the
          form system.
        </FieldDescription>
      </Field>
    </DemoCanvas>
  )
}

export function TooltipCatalogDemo() {
  return (
    <DemoCanvas>
      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
            <Bell className="size-4" />
          </TooltipTrigger>
          <TooltipContent>Notification settings</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
            <CommandIcon className="size-4" />
          </TooltipTrigger>
          <TooltipContent>Open command palette</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
            <WandSparkles className="size-4" />
          </TooltipTrigger>
          <TooltipContent>Apply glass preset</TooltipContent>
        </Tooltip>
      </div>
    </DemoCanvas>
  )
}

export function CommandNoteVisual() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <Badge variant="outline">cmdk</Badge>
      <span>Paired with dialog-ready composition.</span>
    </div>
  )
}

export function PublicUtilityCluster() {
  const items = [
    { icon: Mail, label: "Inbox" },
    { icon: Globe, label: "Region" },
    { icon: User, label: "Profile" },
    { icon: CreditCard, label: "Billing" },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map(({ icon: Icon, label }) => (
        <GlassPanel
          key={label}
          tone="inline"
          className="flex items-center gap-2 rounded-[1.25rem] px-3 py-2"
        >
          <Icon className="size-4" />
          <span className="text-sm">{label}</span>
        </GlassPanel>
      ))}
    </div>
  )
}
