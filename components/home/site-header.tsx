import Link from "next/link"
import { IconBrandGithub, IconStarFilled } from "@tabler/icons-react"

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
  } catch { }

  return (
    <div className="fixed z-50 flex w-full justify-center">
      <div className="mt-2 w-[calc(100%-2rem)] overflow-hidden rounded-4xl sm:w-[calc(50%-10px)]">
        <FrostGlass variant="clear">
          <div className="flex h-12 items-center justify-between px-3 sm:px-5">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <ThemeToggle />
              <Link href="/">
                <Button variant="ghost" className="px-2.5 sm:px-3">
                  Home
                </Button>
              </Link>
              <Link href="/showcase">
                <Button variant="ghost" className="px-2.5 sm:px-3">
                  Showcase
                </Button>
              </Link>
              <Link href="/components">
                <Button variant="ghost" className="px-2.5 sm:px-3">
                  Components
                </Button>
              </Link>
            </div>
            <Link
              href="https://github.com/kostyniuk/glasscn"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="ghost"
                className="flex cursor-pointer flex-row items-center gap-0 sm:gap-2"
              >
                <IconBrandGithub className="size-5" />
                {stars ? (
                  <span className="hidden text-sm font-medium sm:inline">
                    {stars}
                  </span>
                ) : (
                  <span className="hidden items-center gap-1.5 text-sm font-medium sm:flex">
                    Be first one to
                    <IconStarFilled className="size-4 text-amber-500 dark:text-amber-400" />
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </FrostGlass>
      </div>
    </div>
  )
}
