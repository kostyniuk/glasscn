import Link from "next/link"
import { IconBrandGithub } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { FrostGlass } from "@/components/ui/frost-glass"
import { ThemeToggle } from "./theme-toggle"

export async function SiteHeader() {
  let stars = null
  try {
    const res = await fetch("https://api.github.com/repos/kostyniuk/glasscn", {
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const repo = await res.json()
      stars = repo.stargazers_count
    }
  } catch (e) {}

  return (
    <div className="fixed z-50 flex w-full justify-center">
      <div className="mt-2 w-[calc(100%-2rem)] overflow-hidden rounded-4xl sm:w-[calc(50%-10px)]">
        <FrostGlass variant="clear">
          <div className="flex h-12 items-center justify-between px-5">
            <ThemeToggle />
            <Link href="#components">
              <Button variant="ghost">Components</Button>
            </Link>
            <Link href="https://github.com/kostyniuk/glasscn" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="flex cursor-pointer flex-row items-center gap-2">
                <IconBrandGithub className="size-5" />
                {stars !== null ? <span className="text-sm font-medium">{stars}</span> : null}
              </Button>
            </Link>
          </div>
        </FrostGlass>
      </div>
    </div>
  )
}
