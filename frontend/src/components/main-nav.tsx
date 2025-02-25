"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6 pl-12">      
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold lg:inline-block">
          <span style={{ color: "#009A49" }}>ne</span>:
          <span style={{ color: "#FF7900" }}>one</span> simulate
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/summary"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/summary" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Summary
        </Link>

        <Link
          href="/tests"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/tests") &&
              !pathname?.startsWith("/tests")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Tests
        </Link>

        {/* <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/tests")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Blocks
        </Link>
        <Link
          href="/charts"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Charts
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Themes
        </Link>
        <Link
          href="/colors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Colors
        </Link> */}
      </nav>
    </div>
  )
}
