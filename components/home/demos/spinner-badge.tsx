import { DemoShell } from "@/components/home/demos/demo-shell"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadge() {
  return (
    <DemoShell>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>
          <Spinner />
          Syncing
        </Badge>
        <Badge variant="secondary">
          <Spinner />
          Updating
        </Badge>
        <Badge variant="outline">
          <Spinner />
          Loading
        </Badge>
      </div>
    </DemoShell>
  )
}
