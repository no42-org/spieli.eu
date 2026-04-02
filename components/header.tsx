"use client"

import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            spieli<span className="text-primary">.eu</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#regionen" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Regionen
          </a>
          <a href="#ueber-uns" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Über uns
          </a>
        </nav>
      </div>
    </header>
  )
}
