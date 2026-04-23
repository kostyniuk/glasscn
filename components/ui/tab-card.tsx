import type { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const tabTriggerVariants = cva(
  "group-data-horizontal/tabs:after:bottom-0 data-active:z-10 data-active:h-full data-active:border-transparent data-active:bg-muted group-data-[variant=default]/tabs-list:data-active:shadow-none dark:data-active:border-transparent dark:data-active:bg-muted",
  {
    variants: {
      variant: {
        default: "rounded-none",
        rounded:
          "rounded-none data-active:rounded-t-lg data-active:rounded-b-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const cardVariants = cva("border-0 bg-muted shadow-none ring-0", {
  variants: {
    variant: {
      default: "rounded-none",
      rounded: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type TabCardItem = {
  value: string
  label: ReactNode
  children: ReactNode
}

export type TabCardProps = {
  tabs: TabCardItem[]
  defaultValue?: string
  className?: string
  listClassName?: string
  triggerClassName?: string
  contentClassName?: string
  cardClassName?: string
} & VariantProps<typeof tabTriggerVariants>

export function TabCard({
  tabs,
  defaultValue = tabs[0]?.value,
  variant,
  className,
  listClassName,
  triggerClassName,
  contentClassName,
  cardClassName: cardClassNameProp,
}: TabCardProps) {
  return (
    <Tabs defaultValue={defaultValue} className={cn("w-full gap-0", className)}>
      <TabsList className={cn("bg-transparent p-0", listClassName)}>
        {tabs.map((tab) => (
          <TabsTrigger
            className={cn(tabTriggerVariants({ variant }), triggerClassName)}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent
          className={contentClassName}
          key={tab.value}
          value={tab.value}
        >
          <Card
            className={cn(
              cardVariants({ variant }),
              variant === "rounded" && index === 0 && "rounded-tl-none",
              cardClassNameProp
            )}
          >
            {tab.children}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
