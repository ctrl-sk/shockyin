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

  // checked = dark theme enabled
  const checked = theme === "dark"

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 p-2 bg-background/80 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40">
      <Sun className="h-3 w-3" />
      <Switch
        checked={checked}
        onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-3 w-3" />
    </div>
  )
}
