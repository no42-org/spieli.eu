"use client"

import { MapPin, ExternalLink, TreeDeciduous, Sun } from "lucide-react"

interface Region {
  name: string
  description: string
  mapUrl: string
  icon: React.ReactNode
}

const regions: Region[] = [
  {
    name: "Landkreis Heilbronn",
    description: "Entdecke zahlreiche Spielplätze im Landkreis Heilbronn. Von kleinen Nachbarschaftsspielplätzen bis hin zu großen Abenteuerspielplätzen.",
    mapUrl: "https://heilbronn.spieli.eu/",
    icon: <Sun className="h-8 w-8" />,
  },
  {
    name: "Landkreis Fulda",
    description: "Finde Spielplätze in der Region Fulda. Ideal für Familienausflüge und Outdoor-Abenteuer mit deinen Kindern.",
    mapUrl: "https://fulda.spieli.eu/",
    icon: <TreeDeciduous className="h-8 w-8" />,
  },
]

export function RegionCards() {
  return (
    <section id="regionen" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Wähle deine Region
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Klicke auf eine Region, um die interaktive Spielplatzkarte zu öffnen 
            und Spielplätze in deiner Nähe zu entdecken.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {regions.map((region) => (
            <a
              key={region.name}
              href={region.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Icon background */}
              <div className="absolute -right-4 -top-4 text-primary/5 transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-32 w-32" strokeWidth={1} />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {region.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  {region.name}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {region.description}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
                  Zur Karte
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Weitere Regionen folgen bald...
          </p>
        </div>
      </div>
    </section>
  )
}
