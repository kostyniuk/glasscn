import { CatalogPage } from "@/components/catalog/catalog-page"
import { GlassPageShell } from "@/components/layout/glass-page-shell"

export default async function ComponentsPage() {
  return (
    <GlassPageShell>
      <CatalogPage />
    </GlassPageShell>
  )
}
