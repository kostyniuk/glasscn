"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Tiny TSX tokenizer — good enough for catalog previews without pulling in
 * a full highlighter. Ordering matters: we peel comments and strings first
 * so we don't re-tokenize their contents.
 */
type Token = {
  value: string
  kind:
    | "plain"
    | "comment"
    | "string"
    | "keyword"
    | "tag"
    | "attr"
    | "number"
    | "punctuation"
}

const KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "default",
  "return",
  "const",
  "let",
  "var",
  "function",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "new",
  "class",
  "extends",
  "async",
  "await",
  "true",
  "false",
  "null",
  "undefined",
  "as",
  "typeof",
  "void",
])

function tokenize(source: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  const len = source.length

  const push = (kind: Token["kind"], value: string) => {
    if (!value) return
    tokens.push({ kind, value })
  }

  while (i < len) {
    const ch = source[i]
    const next = source[i + 1]

    // line comments
    if (ch === "/" && next === "/") {
      let j = i
      while (j < len && source[j] !== "\n") j++
      push("comment", source.slice(i, j))
      i = j
      continue
    }

    // block comments
    if (ch === "/" && next === "*") {
      let j = i + 2
      while (j < len - 1 && !(source[j] === "*" && source[j + 1] === "/")) j++
      j = Math.min(len, j + 2)
      push("comment", source.slice(i, j))
      i = j
      continue
    }

    // strings: ", ', `
    if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch
      let j = i + 1
      while (j < len) {
        if (source[j] === "\\") {
          j += 2
          continue
        }
        if (source[j] === quote) {
          j++
          break
        }
        j++
      }
      push("string", source.slice(i, j))
      i = j
      continue
    }

    // JSX tag opening: <Name or </Name
    if (
      ch === "<" &&
      (/[A-Za-z/]/.test(next ?? "") || next === ">")
    ) {
      // match the `<` or `</`
      let j = i + 1
      if (source[j] === "/") j++
      while (j < len && /[A-Za-z0-9_.]/.test(source[j] ?? "")) j++
      push("tag", source.slice(i, j))
      i = j
      continue
    }

    // JSX tag close tokens
    if (ch === ">" || (ch === "/" && next === ">")) {
      const segment = ch === "/" ? "/>" : ">"
      push("tag", segment)
      i += segment.length
      continue
    }

    // numbers
    if (/[0-9]/.test(ch)) {
      let j = i
      while (j < len && /[0-9.]/.test(source[j] ?? "")) j++
      push("number", source.slice(i, j))
      i = j
      continue
    }

    // identifiers / keywords
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i
      while (j < len && /[A-Za-z0-9_$]/.test(source[j] ?? "")) j++
      const word = source.slice(i, j)
      if (KEYWORDS.has(word)) {
        push("keyword", word)
      } else {
        // Attribute-like when followed by `=`, tag-like when uppercase
        const rest = source.slice(j).trimStart()
        if (rest.startsWith("=") && !rest.startsWith("==") && !rest.startsWith("=>")) {
          push("attr", word)
        } else {
          push("plain", word)
        }
      }
      i = j
      continue
    }

    // punctuation
    if (/[{}()[\],;:.=+\-*/%!?<>|&]/.test(ch)) {
      push("punctuation", ch)
      i++
      continue
    }

    // whitespace and anything else passes through as plain
    push("plain", ch)
    i++
  }

  return tokens
}

const KIND_CLASS: Record<Token["kind"], string> = {
  plain: "text-foreground/85",
  comment: "text-muted-foreground/70 italic",
  string: "text-emerald-300/90 dark:text-emerald-300/90",
  keyword: "text-sky-300/95 dark:text-sky-300/95",
  tag: "text-fuchsia-300/90 dark:text-fuchsia-300/90",
  attr: "text-amber-200/95 dark:text-amber-200/95",
  number: "text-orange-200/95 dark:text-orange-200/95",
  punctuation: "text-foreground/60",
}

export function CodeBlock({
  code,
  className,
  maxHeight = "28rem",
}: {
  code: string
  className?: string
  maxHeight?: string
}) {
  const [copied, setCopied] = React.useState(false)
  const tokens = React.useMemo(() => tokenize(code), [code])

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      // swallow: not all browsers expose clipboard in insecure contexts
    }
  }

  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-zinc-950/80 dark:border-white/8 dark:bg-black/55",
        className
      )}
    >
      <div className="absolute top-2.5 right-2.5 z-10">
        <Button
          type="button"
          onClick={onCopy}
          size="icon-xs"
          variant="ghost"
          aria-label={copied ? "Copied" : "Copy code"}
          className="rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </Button>
      </div>
      <pre
        className="flex-1 overflow-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-white/85"
        style={{ maxHeight }}
      >
        <code>
          {tokens.map((token, index) => (
            <span key={index} className={KIND_CLASS[token.kind]}>
              {token.value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
