"use client"

import { Trees, Users, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent/30 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute left-4 top-20 hidden text-primary/10 md:block">
        <Trees className="h-32 w-32" strokeWidth={1} />
      </div>
      <div className="absolute bottom-10 right-10 hidden text-secondary/20 md:block">
        <Trees className="h-24 w-24" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Spielplätze in Deutschland entdecken
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Finde den perfekten Spielplatz für deine Familie
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Entdecke Spielplätze in deiner Nähe mit unseren interaktiven Karten. 
            Detaillierte Informationen zu Spielgeräten, Ausstattung und mehr - 
            alles auf einen Blick.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Für Familien</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Interaktive Karten</span>
            </div>
            <div className="flex items-center gap-2">
              <Trees className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Outdoor-Abenteuer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
