import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RegionCards } from "@/components/region-cards"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <RegionCards />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
