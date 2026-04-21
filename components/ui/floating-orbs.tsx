"use client"

import * as React from "react"
import { motion } from "motion/react"

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[20%] z-[-5] h-48 w-48 rounded-full border border-white/20 bg-primary/20 opacity-30 blur-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-primary/10 dark:opacity-40"
      />
      {/* Orb 2 */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -25, 0],
          rotate: [0, -20, 10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] top-[30%] z-[-5] h-64 w-64 rounded-full border border-white/20 bg-blue-400/20 opacity-20 blur-3xl backdrop-blur-3xl dark:border-white/10 dark:bg-blue-400/10 dark:opacity-30"
      />
      {/* Orb 3 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[40%] top-[60%] z-[-5] h-56 w-56 rounded-full border border-white/20 bg-rose-400/20 opacity-20 blur-3xl backdrop-blur-3xl dark:border-white/10 dark:bg-rose-400/10 dark:opacity-30"
      />
    </div>
  )
}
