import PreviewExample from "@/registry/bases/base/blocks/preview"
import { SiteHeader } from "@/components/home/site-header"

export default function ComponentsPage() {
  return (
    <div className="style-luma min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <PreviewExample />
      </main>
    </div>
  )
}
