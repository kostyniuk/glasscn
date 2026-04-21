# PRD: glasscn Architecture And Distribution

## Document Status

- Status: Draft
- Product: glasscn
- Last updated: 2026-04-21
- Owner: glasscn maintainers

## 1. Summary

This document explains:

1. how glasscn works today
2. what the "glass effect" actually is in technical terms
3. whether glasscn is a wrapper around shadcn, a replacement for shadcn defaults, or a sibling component set
4. how glasscn can be opened up for other developers to use

The short version:

- Today, glasscn is a **local component library inside this repo**, built in the **shadcn style of code ownership**
- It does **not** currently ship an installable public registry or npm package
- The public `components/ui/*` components are **not runtime wrappers around an upstream `shadcn/ui` package**
- In practice, glasscn currently behaves like a **glass-themed sibling implementation of shadcn-style components**
- The glass effect is implemented in **two ways**:
  - directly in each component's classes
  - through shared glass primitives such as `FrostGlass` and `GlassPanel`

The recommended path for public adoption is:

1. keep the local-code-ownership model
2. publish glasscn as a **custom shadcn registry**
3. optionally add an npm package later for teams that want versioned imports instead of copied source

## 2. Problem Statement

glasscn already has a recognizable visual identity and a working public component surface, but it is not yet packaged in a way that makes it easy for outside developers to adopt.

Today, a user can browse the project and copy components manually, but they cannot yet do something like:

```bash
npx shadcn@latest add https://glasscn.dev/r/button
```

or:

```tsx
import { Button } from "@glasscn/ui"
```

That creates confusion around what glasscn actually is:

- Is it a theme on top of shadcn?
- Is it a wrapper around upstream shadcn components?
- Is it its own component library?
- How should a user install and own the code?

This document defines the current answer and the recommended product direction.

## 3. Product Goals

- Explain the current glasscn architecture in plain language
- Define the current component ownership model clearly
- Clarify what "glass effect" means technically
- Define the easiest path for external adoption
- Preserve the shadcn value proposition of local source ownership
- Make future distribution decisions consistent across docs, code, and marketing

## 4. Non-Goals

- Full implementation plan for a custom registry protocol
- API design for every future component
- Design token standardization across every style family
- Pricing, licensing, or commercialization strategy
- Detailed migration guide from stock shadcn

## 5. Target Users

- Developers evaluating glasscn for a new Next.js app
- Teams already using shadcn who want a premium glass aesthetic
- Contributors working on glasscn architecture and distribution
- Maintainers who need one canonical explanation of the product

## 6. Current State

## 6.1 Repo Structure

There are three important layers in the repo today:

### A. Public app-facing components

- Path: `components/ui/*`
- These are the components currently intended for real app usage in this repo
- The new `/components` page documents this public surface

Examples:

- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/dialog.tsx`
- `components/ui/input.tsx`

### B. Shared glass primitives

- Path: `components/ui/frost-glass.tsx`
- Path: `components/ui/glass-panel.tsx`

These are the base visual primitives that define the reusable glass behavior:

- blur
- saturation
- translucent fills
- borders
- noise overlay
- shadows
- tone presets such as `hero`, `surface`, `overlay`, `inline`

These are not currently cataloged as public shadcn-style components, but they are central to the visual system.

### C. Registry/base and preview components

- Path: `registry/bases/base/*`
- These are used for showcase/preview work and registry-style experimentation
- They are not the same thing as the current public `components/ui` surface

This layer is useful internally, but it is not yet the public install story for users.

## 6.2 Tooling State

The repo includes a `components.json` file using the shadcn schema.

Important current facts:

- `style` is set to `base-luma`
- aliases map public UI code to `@/components/ui`
- `registries` is currently empty

That means:

- glasscn follows shadcn conventions
- but glasscn is **not yet published as a custom shadcn registry**

## 7. What glasscn Is Today

glasscn today is best described as:

> A locally owned, shadcn-style component library with a custom glass visual system.

This is important because glasscn is **not** one of these simpler models:

### It is not a runtime wrapper over an installed `shadcn/ui` package

There is no upstream runtime package being imported and re-skinned.

For example, `components/ui/button.tsx` defines the button locally and styles it locally. It does not do something like:

```tsx
import { Button } from "shadcn-ui"
```

and then wrap or restyle that import.

### It is not just a CSS theme switch over untouched stock shadcn files

Some shadcn-style conventions are preserved, but the local component source files are already edited and adapted.

The styling is not simply "install normal shadcn and then import one CSS theme file". The components themselves contain glass-oriented class decisions.

### It is not a fork that transparently replaces upstream shadcn defaults

Users do not currently install stock shadcn components and automatically get glasscn behavior.

Instead, they would need the glasscn component source itself.

## 8. What The Glass Effect Actually Is

The glass effect in glasscn is implemented through a combination of:

### 8.1 Shared glass wrappers

Two files define the reusable glass foundation:

- `components/ui/frost-glass.tsx`
- `components/ui/glass-panel.tsx`

`FrostGlass` is the low-level primitive.

It applies:

- `backdrop-blur-*`
- `backdrop-saturate-*`
- translucent backgrounds
- border styling
- soft shadows
- optional noise texture

`GlassPanel` is a higher-level convenience wrapper around `FrostGlass`.

It adds semantic tones:

- `hero`
- `surface`
- `overlay`
- `inline`

This gives the product a reusable language for glass surfaces.

### 8.2 Component-level styling

Many public components do not rely on `GlassPanel` directly, but they still encode the glass look in their own class definitions.

Examples:

- `components/ui/button.tsx`
- `components/ui/input.tsx`
- `components/ui/select.tsx`
- `components/ui/dialog.tsx`

These components use:

- translucent fills like `bg-input/50`
- softened borders
- rounded geometry
- subtle rings and shadows
- overlay styles consistent with the glass system

### 8.3 Composition-level surfaces

At the page and demo level, glasscn frequently wraps component groups in `GlassPanel` to make the full scene feel coherent.

Examples:

- hero surfaces
- section containers
- popover-like demo panels
- showcase shells

## 9. Answer To The Core Architecture Question

This section is the canonical answer.

### Is glasscn a wrapper over shadcn?

Not in the usual runtime sense.

glasscn does not import a third-party shadcn component package and wrap it. The components are owned locally inside this repo.

### Is glasscn changing default shadcn components?

Yes, but only in the sense that the local source follows the shadcn code-ownership model and has been customized.

This repo contains its own local component implementations. Those local files are where the design changes live.

### Is glasscn exporting sibling components to default shadcn components?

Yes, this is the closest accurate description.

The best mental model is:

> glasscn is a sibling component set built in the shadcn style, with its own local source files and its own glass visual system.

That means:

- same broad developer experience as shadcn
- local ownership of code
- but a different design system and implementation details

## 10. How People Can Use glasscn Today

Right now, external usage is limited.

The realistic ways someone can use glasscn today are:

### Option A. Clone or fork the repo

This is the most complete path today.

Pros:

- full visual system
- all current pages and demos
- easiest way to see intended behavior

Cons:

- heavy adoption path
- not selective
- poor fit for teams that only want a few components

### Option B. Copy component files manually

A user can copy files from `components/ui/*`, plus required supporting files and styles.

Pros:

- flexible
- follows the local-source idea

Cons:

- not standardized
- easy to miss dependencies
- poor onboarding experience

### Option C. Use glasscn as inspiration only

A user can replicate the visual ideas manually in their own shadcn project.

Pros:

- low coupling

Cons:

- not an actual productized adoption path

## 11. How People Should Be Able To Use glasscn

The product should support two adoption modes.

## 11.1 Primary model: Custom shadcn registry

This should be the main public distribution model.

Why this is the best fit:

- it matches the shadcn philosophy of local source ownership
- it lets users install only the components they want
- it avoids runtime dependency lock-in
- it keeps glasscn aligned with the ecosystem it is inspired by

Target user experience:

```bash
npx shadcn@latest add https://glasscn.dev/r/button
```

or a named registry setup flow where users configure glasscn once and then run:

```bash
npx shadcn@latest add button dialog input
```

with glasscn as the registry source.

### Registry requirements

To support this, glasscn needs:

- a published registry endpoint
- component metadata per public component
- dependency declarations between components
- installation instructions for base styles and helpers
- a clear contract for shared files like:
  - `frost-glass.tsx`
  - `glass-panel.tsx`
  - theme tokens / CSS variables
  - utility helpers

### Product rule

If a public component depends on the glass foundation, the registry install must also bring in the required shared primitives and styles.

Otherwise the installed component will not actually look like glasscn.

## 11.2 Secondary model: npm package

An npm package can exist later, but it should be secondary.

Possible future package:

```tsx
import { Button } from "@glasscn/ui"
```

This is useful for:

- teams that prefer versioned runtime dependencies
- internal design system consumers
- rapid evaluation

But it changes the ownership model:

- users would depend on a runtime package
- component customization becomes less direct
- this is less aligned with classic shadcn expectations

### Recommendation

Do not make npm packaging the first public delivery model.

Build the custom registry first.

## 12. Recommended Product Direction

## Phase 1. Clarify the product

- Keep documenting the public surface in `/components`
- Distinguish public components from showcase-only and registry-only code
- Treat `components/ui/*` as the canonical public source

## Phase 2. Prepare installability

- finalize the public component list
- map per-component dependencies
- identify required shared foundation files
- define which CSS variables and global styles are required

## Phase 3. Publish a custom registry

- populate the `registries` strategy properly
- expose installable component entries
- publish docs for setup and add flows

## Phase 4. Optional npm package

- only after registry adoption is stable
- only if there is clear demand for package-based consumption

## 13. Product Requirements

For glasscn to be meaningfully usable by others, the public distribution model must satisfy these requirements:

### R1. Selective install

Users must be able to install only the components they need.

### R2. Glass fidelity

Installed components must preserve the intended glass appearance without manual guesswork.

### R3. Local ownership

Users should be able to own and edit the installed source code, consistent with shadcn expectations.

### R4. Dependency completeness

If a component needs `GlassPanel`, `FrostGlass`, shared CSS variables, or helper files, those must be included automatically or documented clearly as hard requirements.

### R5. Clear positioning

The docs must clearly say that glasscn is:

- shadcn-style
- locally owned
- glass-themed
- not a runtime wrapper over upstream shadcn

## 14. Risks

### Risk 1. Ambiguous product positioning

If glasscn is described as "shadcn with glass effect" without more detail, users may assume it is a theme-only drop-in layer.

Mitigation:

- state clearly that the public source lives in local component files

### Risk 2. Incomplete installs

If users install a component without the glass foundation files, the result will look broken or plain.

Mitigation:

- registry metadata must include shared dependencies

### Risk 3. Split public surface

The repo currently has both `components/ui` and `registry/bases/base/ui`.

Mitigation:

- define `components/ui` as canonical public API
- treat registry code as internal or future distribution infrastructure unless explicitly promoted

## 15. Open Decisions

These are still product decisions, not settled facts:

1. Will glasscn support only local-source installation, or also an npm package?
2. Will `GlassPanel` and `FrostGlass` remain internal foundation files, or become publicly documented primitives?
3. Will future public components live only in `components/ui`, or be generated from a registry source of truth?
4. Will glasscn expose multiple style families publicly, or one canonical glass style?

## 16. Final Recommendation

glasscn should be positioned as:

> A glass-themed, shadcn-style component system with local code ownership.

The implementation truth today is:

- public components are local files in `components/ui`
- the glass effect is partly embedded directly in those components
- shared visual glass behavior is provided by `FrostGlass` and `GlassPanel`
- glasscn is not currently an installable public registry

The recommended external adoption path is:

1. keep `components/ui` as the canonical public surface
2. publish glasscn as a custom shadcn registry
3. optionally add an npm package later if there is demand

That gives users the clearest mental model and preserves the strongest part of the shadcn experience: owning the component source directly.
