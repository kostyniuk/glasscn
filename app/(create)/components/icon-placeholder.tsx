"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"
import * as TablerIcons from "@tabler/icons-react"

type IconLibraryName = "lucide" | "tabler" | "hugeicons" | "phosphor" | "remixicon"

type IconPlaceholderProps = {
  [K in IconLibraryName]: string
} & React.ComponentProps<"svg">

function getIconComponent(name?: string) {
  if (!name) {
    return null
  }

  return (
    (
      LucideIcons as unknown as Record<
        string,
        React.ComponentType<React.ComponentProps<"svg">>
      >
    )[name] ||
    (
      TablerIcons as unknown as Record<
        string,
        React.ComponentType<React.ComponentProps<"svg">>
      >
    )[name] ||
    null
  )
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = getIconComponent(lucide) || getIconComponent(tabler)

  if (!Icon) {
    return null
  }

  return <Icon {...props} />
}
