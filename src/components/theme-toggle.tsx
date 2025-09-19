"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // Handles hydration mismatch for SSR/CSR
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  // checked = light theme enabled (inverted logic)
  const checked = theme === "light"

  return (
    <div className="fixed md:bottom-4 md:right-4 md:top-auto top-4 right-4 bottom-auto z-50 flex items-center gap-2 p-2 bg-background/80 rounded-full backdrop-blur-sm border border-gray-300 dark:border-white/20">
      <Moon className="h-3 w-3" />
      <Switch 
        checked={checked}
        onCheckedChange={(value) => setTheme(value ? "light" : "dark")}
        aria-label="Toggle dark mode"
      />
      <Sun className="h-3 w-3" />
    </div>
  )
}
