import PreviewExample from "@/registry/bases/base/blocks/preview"
import { GlassPageShell } from "@/components/layout/glass-page-shell"

export default async function ShowcasePage() {
  return (
    <GlassPageShell>
      <main className="container-wrapper relative z-10 flex-1 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container">
          <PreviewExample />
        </div>
      </main>
    </GlassPageShell>
  )
}
