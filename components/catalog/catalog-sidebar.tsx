import type { CatalogEntry } from "@/components/catalog/catalog-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CatalogSidebar({ entries }: { entries: CatalogEntry[] }) {
  return (
    <Card className="gap-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-sm">Browse Components</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav className="space-y-1">
          {entries.map((entry) => (
            <a
              key={entry.id}
              href={`#${entry.id}`}
              className="block rounded-2xl px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-white/6 hover:text-foreground dark:hover:bg-white/4"
            >
              {entry.title}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
