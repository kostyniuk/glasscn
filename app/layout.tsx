import { Outfit, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "glasscn",
  description: "shadcn components with Apple-like glass styling",
}

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontMono.variable,
        geist.variable,
        outfit.variable
      )}
    >
      <body className="style-luma min-h-dvh overflow-x-hidden">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
