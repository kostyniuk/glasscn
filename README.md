# glasscn

Apple-inspired glassmorphic components built in the shadcn style.

glasscn is a locally owned component library and demo site built with Next.js, React 19, and Tailwind CSS v4. It keeps the shadcn philosophy of source ownership, but swaps the default visual language for frosted surfaces, translucent controls, soft borders, and premium motion.

![glasscn preview](./public/home/glasscn-dashboard.png)

## What it includes

- 25 glass-styled UI components documented in a live catalog
- shared glass primitives like `FrostGlass` and `GlassPanel`
- a landing page, component catalog, and showcase route
- shadcn-style project structure with local source ownership
- a registry/base layer for preview and future distribution work

## Current status

glasscn is currently a working app and component library inside this repository.

It is **not yet** published as:

- a public custom shadcn registry
- an npm package

Today, the source of truth lives in this repo under [`components/ui`](./components/ui) and the component previews/catalog pages that use those files directly.

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS v4
- shadcn CLI conventions via `components.json`
- Base UI, `cmdk`, `motion`, `recharts`, and icon libraries for supporting primitives

## Routes

- `/` - marketing landing page for GlassCN
- `/components` - component catalog with preview and source tabs
- `/showcase` - registry/base preview surface

## Component surface

The current catalog includes:

- Badge
- Button
- Button Group
- Card
- Checkbox
- Command
- Dialog
- Dropdown Menu
- Empty
- Field
- Input
- Input Group
- Item
- Label
- Popover
- Radio Group
- Scroll Area
- Select
- Separator
- Slider
- Spinner
- Switch
- Tabs
- Textarea
- Tooltip

## Project structure

```text
app/                  Next.js routes and page shells
components/ui/        Public glass component surface used by the app
components/catalog/   Catalog page, demos, and source presentation
registry/             Base registry experiments, styles, and previews
docs/                 Product and architecture notes
public/               Static assets and screenshots
```

## Local development

Install dependencies with your preferred package manager:

```bash
npm install
```

or:

```bash
bun install
```

Start the development server:

```bash
npm run dev
```

Useful commands:

```bash
npm run lint
npm run typecheck
npm run build
```

## Design approach

The glass effect in glasscn comes from two layers:

1. shared primitives such as `FrostGlass` and `GlassPanel`
2. component-level styling inside each local UI component

That means glasscn is not a runtime wrapper around an external `shadcn/ui` package. The components are owned and styled locally in this codebase.

## Notes for contributors

- `components.json` already follows shadcn conventions
- the current style is set to `base-luma`
- `registries` is still empty, so public registry distribution is not wired up yet

More architecture context lives in [`docs/PRD-glasscn-architecture-and-distribution.md`](./docs/PRD-glasscn-architecture-and-distribution.md).
