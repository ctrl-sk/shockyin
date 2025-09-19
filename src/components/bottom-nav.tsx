"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Tools", href: "/tools" },
  { name: "Notes", href: "/notes" },
  { name: "Contact", href: "/contact" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-40">
      <div className="mx-auto flex max-w-md items-center py-2 gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-center rounded-lg px-3 py-2 text-xs font-medium transition-all border border-gray-300 hover:border-gray-500 dark:border-white/20 dark:hover:border-white/40",
                isActive
                  ? "text-primary border-primary/50 bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
