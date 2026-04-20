const FONTS: Array<{
  name: string
  value: string
  font: {
    style: {
      fontFamily: string
    }
  }
  type: string
}> = [
  {
    name: "Inter",
    value: "inter",
    font: {
      style: {
        fontFamily: "var(--font-sans)",
      },
    },
    type: "sans",
  },
  {
    name: "Geist",
    value: "geist",
    font: {
      style: {
        fontFamily: "var(--font-sans)",
      },
    },
    type: "sans",
  },
  {
    name: "JetBrains Mono",
    value: "jetbrains-mono",
    font: {
      style: {
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      },
    },
    type: "mono",
  },
  {
    name: "Figtree",
    value: "figtree",
    font: {
      style: {
        fontFamily: "var(--font-sans)",
      },
    },
    type: "sans",
  },
] 

export { FONTS }
