"use client"

import * as React from "react"

const DEFAULT_PARAMS = {
  iconLibrary: "lucide",
  style: "luma",
  font: "inter",
  fontHeading: "inherit",
} as const

type DesignSystemSearchParams = typeof DEFAULT_PARAMS

export function useDesignSystemSearchParams() {
  const setParams = React.useCallback(
    (_next: Partial<DesignSystemSearchParams>) => {},
    []
  )

  return [DEFAULT_PARAMS, setParams] as const
}

export type { DesignSystemSearchParams }
