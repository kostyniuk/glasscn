"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface RevealProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode
  delay?: number
  y?: number
  duration?: number
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
