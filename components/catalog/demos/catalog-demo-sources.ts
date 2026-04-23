// Clean, copy-friendly source snippets for each catalog demo.
// Kept close to the runtime demos but trimmed to what a consumer
// would actually paste (no `DemoCanvas` wrapper).

export const avatarSource = `import { Star } from "lucide-react"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { GlassPanel } from "@/components/ui/glass-panel"

export function AvatarExample() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium">Collaborators</div>
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
      <GlassPanel tone="inline" className="flex px-4 py-3">
        <Avatar>
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="ml-3 text-sm">
          <div className="font-medium">glasscn</div>
          <div className="text-muted-foreground">Frosted profile state</div>
        </div>
      </GlassPanel>
    </div>
  )
}`

export const badgeSource = `import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Stable</Badge>
      <Badge variant="secondary">Translucent</Badge>
      <Badge variant="outline">Glass Outline</Badge>
      <Badge variant="ghost">Passive</Badge>
      <Badge variant="destructive">Attention</Badge>
      <Badge variant="link">Inline Link</Badge>
    </div>
  )
}`

export const buttonSource = `import { Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primary Action</Button>
      <Button variant="outline">Secondary</Button>
      <Button variant="secondary">Soft Fill</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="icon-sm" aria-label="Settings">
        <Settings2 className="size-4" />
      </Button>
    </div>
  )
}`

export const buttonGroupSource = `import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"

export function ButtonGroupExample() {
  return (
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
  )
}`

export const cardSource = `import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GlassPanel } from "@/components/ui/glass-panel"

export function CardExample() {
  return (
    <Card className="w-full max-w-sm gap-8 p-4">
      <CardHeader className="gap-2.5">
        <CardTitle>Glass Revenue</CardTitle>
        <CardDescription>Monthly recurring revenue.</CardDescription>
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
  )
}`

export const checkboxSource = `import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

export function CheckboxExample() {
  return (
    <FieldGroup className="gap-3">
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
  )
}`

export const commandSource = `import { Palette, Settings2, Sparkles } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandExample() {
  return (
    <Command className="w-full max-w-md">
      <CommandInput placeholder="Search surfaces, actions, themes..." />
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
  )
}`

export const dialogSource = `import { Button } from "@/components/ui/button"
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
  Field,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="lg" />}>
        Configure Glass Scene
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Refine the glass treatment</DialogTitle>
          <DialogDescription>
            Balance blur, edge contrast, and glow.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup className="gap-3">
          <Field>
            <Label htmlFor="blur">Blur strength</Label>
            <Input id="blur" defaultValue="18px" />
          </Field>
          <Field>
            <Label htmlFor="density">Surface density</Label>
            <Input id="density" defaultValue="soft glow" />
          </Field>
        </FieldGroup>
        <DialogFooter showCloseButton>
          <Button>Save Preset</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

export const dropdownMenuSource = `import { Lock, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuExample() {
  return (
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
  )
}`

export const emptySource = `import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyExample() {
  return (
    <Empty className="max-w-lg">
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
  )
}`

export const fieldSource = `import {
  Field,
  FieldDescription,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function FieldExample() {
  return (
    <FieldGroup className="w-full max-w-lg gap-5">
      <Field>
        <Label htmlFor="field-email">Workspace email</Label>
        <Input id="field-email" defaultValue="hello@glasscn.dev" />
        <FieldDescription>Used for account alerts and recovery.</FieldDescription>
      </Field>
      <FieldSeparator>Preferences</FieldSeparator>
      <FieldLabel>
        <Field orientation="horizontal" className="items-center">
          <Switch defaultChecked />
          <FieldContent>
            <FieldTitle>Adaptive reflections</FieldTitle>
            <FieldDescription>Respond to theme automatically.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}`

export const inputSource = `import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputExample() {
  return (
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
  )
}`

export const inputGroupSource = `import { Search, Send } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupExample() {
  return (
    <InputGroup className="w-full max-w-lg">
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
  )
}`

export const itemSource = `import { ChevronRight, Palette, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemExample() {
  return (
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
  )
}`

export const labelSource = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelExample() {
  return (
    <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="workspace">Workspace name</Label>
        <Input id="workspace" defaultValue="glasscn studio" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="region">Primary region</Label>
        <Input id="region" defaultValue="Stockholm" />
      </div>
    </div>
  )
}`

export const popoverSource = `import { Button } from "@/components/ui/button"
import { GlassPanel } from "@/components/ui/glass-panel"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="lg" />}>
        Preview Layer Stack
      </PopoverTrigger>
      <PopoverContent className="gap-0 overflow-hidden rounded-3xl p-0">
        <GlassPanel tone="overlay" className="rounded-[inherit] border-0 p-0 shadow-none">
          <PopoverHeader className="px-4 py-4">
            <PopoverTitle>Glass recipe</PopoverTitle>
            <PopoverDescription>
              Subtle frost, balanced glow, readable contrast.
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
  )
}`

export const radioGroupSource = `import * as React from "react"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupExample() {
  const [value, setValue] = React.useState("balanced")
  const presets = [
    ["soft", "Soft Frost", "Lower contrast and softer reflections."],
    ["balanced", "Balanced", "Default density for product screens."],
    ["vivid", "Vivid", "Sharper glow and stronger edge lighting."],
  ] as const

  return (
    <RadioGroup value={value} onValueChange={setValue} className="w-full max-w-md gap-3">
      {presets.map(([id, title, description]) => (
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
  )
}`

export const scrollAreaSource = `import { GlassPanel } from "@/components/ui/glass-panel"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ScrollAreaExample() {
  const items = [
    "Foundation tokens synced across components.",
    "Overlay blur intensity adjusted for dark mode.",
    "Command palette spacing tightened for dense content.",
    "Dropdown panel corners aligned with surface geometry.",
    "Tooltip contrast tuned for bright backgrounds.",
    "Form fields updated with calmer border treatments.",
  ]

  return (
    <ScrollArea className="h-56 w-full max-w-lg rounded-3xl border p-2">
      <div className="space-y-2 p-2">
        {items.map((item) => (
          <GlassPanel key={item} tone="inline" className="rounded-2xl px-4 py-3 text-sm">
            {item}
          </GlassPanel>
        ))}
      </div>
    </ScrollArea>
  )
}`

export const selectSource = `import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectExample() {
  const [value, setValue] = React.useState("luma")

  return (
    <Select value={value} onValueChange={(v) => v && setValue(v)}>
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
  )
}`

export const separatorSource = `import { Badge } from "@/components/ui/badge"
import { GlassPanel } from "@/components/ui/glass-panel"
import { Separator } from "@/components/ui/separator"

export function SeparatorExample() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <div className="flex items-center gap-4">
        <Badge variant="outline">Layers</Badge>
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground">Spatial rhythm</span>
      </div>
      <GlassPanel tone="inline" className="flex items-center gap-4 rounded-3xl px-4 py-3">
        <span className="text-sm">Surface</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Overlay</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Inline</span>
      </GlassPanel>
    </div>
  )
}`

export const sliderSource = `import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export function SliderExample() {
  const [value, setValue] = React.useState([72])

  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Reflection intensity</span>
        <Badge variant="secondary">{value[0]}%</Badge>
      </div>
      <Slider
        value={value}
        onValueChange={(next) =>
          setValue(Array.isArray(next) ? [...next] : [next])
        }
        max={100}
        step={1}
      />
    </div>
  )
}`

export const spinnerSource = `import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassPanel } from "@/components/ui/glass-panel"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <GlassPanel tone="inline" className="flex items-center gap-2 px-4 py-3">
        <Spinner />
        Syncing layers
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
  )
}`

export const switchSource = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchExample() {
  return (
    <FieldGroup className="gap-3">
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
  )
}`

export const tabsSource = `import { Badge } from "@/components/ui/badge"
import { GlassPanel } from "@/components/ui/glass-panel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsExample() {
  return (
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
  )
}`

export const tabCardSource = `import { Globe, Shield, Sparkles } from "lucide-react"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TabCard } from "@/components/ui/tab-card"

const tabs = [
  {
    value: "overview",
    label: "Overview",
    children: (
      <>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-4" />
            Workspace Overview
          </CardTitle>
          <CardDescription>
            Monitor the current glass surface state across the product.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-3">
          {[
            ["12", "Scenes"],
            ["4", "Themes"],
            ["98%", "Readiness"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[1.25rem] bg-white/[0.1] px-4 py-3 dark:bg-white/[0.05]"
            >
              <div className="text-lg font-semibold tracking-tight">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </CardContent>
      </>
    ),
  },
  {
    value: "analytics",
    label: "Analytics",
    children: (
      <>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="size-4" />
            Adoption Signals
          </CardTitle>
          <CardDescription>
            Compare surface performance without breaking the glass shell.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-end gap-2">
            {[44, 72, 58, 81, 66, 92].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-full bg-white/[0.12] dark:bg-white/[0.06]"
                style={{ height }}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            Weekly interaction depth is up 18% after consolidating controls
            into card-linked tabs.
          </div>
        </CardContent>
      </>
    ),
  },
  {
    value: "security",
    label: "Security",
    children: (
      <>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="size-4" />
            Access Controls
          </CardTitle>
          <CardDescription>
            Keep critical settings visible while preserving a single surface.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "Require approval for production changes",
            "Mirror theme tokens across admin workspaces",
            "Preserve audit snapshots for 30 days",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] bg-white/[0.1] px-4 py-3 text-sm dark:bg-white/[0.05]"
            >
              {item}
            </div>
          ))}
        </CardContent>
      </>
    ),
  },
]

export function TabCardExample() {
  return (
    <TabCard
      tabs={tabs}
      variant="rounded"
      className="max-w-xl"
      listClassName="w-80 rounded-none border-0 bg-transparent p-0"
      triggerClassName="data-active:border-transparent data-active:bg-input/50 data-active:backdrop-blur-[10px] data-active:backdrop-saturate-[1.35] dark:data-active:border-transparent dark:data-active:bg-input/20 dark:data-active:backdrop-blur-[10px] dark:data-active:backdrop-saturate-[1.35] w-30"
      cardClassName="border-0 bg-input/50 py-0 shadow-none ring-0 backdrop-blur-[10px] backdrop-saturate-[1.35] [&>[aria-hidden]]:hidden"
    />
  )
}`

export const textareaSource = `import {
  Field,
  FieldDescription,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaExample() {
  return (
    <Field className="w-full max-w-lg">
      <Label htmlFor="textarea-feedback">Feedback</Label>
      <Textarea
        id="textarea-feedback"
        defaultValue="The new frosted sidebar feels calmer and easier to scan."
      />
      <FieldDescription>
        Multi-line input with the same soft glass treatment.
      </FieldDescription>
    </Field>
  )
}`

export const tooltipSource = `import { Bell, Command, WandSparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipExample() {
  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
          <Bell className="size-4" />
        </TooltipTrigger>
        <TooltipContent>Notification settings</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
          <Command className="size-4" />
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
  )
}`
