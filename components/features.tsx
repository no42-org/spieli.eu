"use client"

import { Map, Baby, Accessibility, Camera } from "lucide-react"

const features = [
  {
    icon: <Map className="h-6 w-6" />,
    title: "Interaktive Karten",
    description: "Übersichtliche Karten mit allen Spielplätzen in deiner Region. Einfach navigieren und den nächsten Spielplatz finden.",
  },
  {
    icon: <Baby className="h-6 w-6" />,
    title: "Altersgerechte Infos",
    description: "Informationen zu Spielgeräten und Empfehlungen für verschiedene Altersgruppen.",
  },
  {
    icon: <Accessibility className="h-6 w-6" />,
    title: "Barrierefreiheit",
    description: "Hinweise zur Zugänglichkeit und barrierefreien Ausstattung der Spielplätze.",
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Aktuelle Fotos",
    description: "Bilder von den Spielplätzen, damit du weißt, was dich vor Ort erwartet.",
  },
]

export function Features() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Was dich erwartet
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Unsere Spielplatzkarten bieten dir alle wichtigen Informationen 
            für einen gelungenen Familienausflug.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
