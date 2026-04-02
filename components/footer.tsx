"use client"

import { MapPin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer id="ueber-uns" className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              spieli<span className="text-primary">.eu</span>
            </span>
          </a>

          {/* Description */}
          <p className="max-w-md text-sm text-muted-foreground">
            Ein Projekt für Familien, um die besten Spielplätze in Deutschland zu entdecken. 
            Basierend auf OpenStreetMap-Daten.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://www.openstreetmap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              OpenStreetMap
            </a>
            <span className="text-border">|</span>
            <a
              href="#regionen"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Regionen
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Gemacht mit</span>
            <Heart className="h-3 w-3 fill-secondary text-secondary" />
            <span>für Familien</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
