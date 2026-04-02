import type { Metadata, Viewport } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Spieli.eu - Spielplätze für Familien entdecken",
  description:
    "Finde die besten Spielplätze in deiner Region. Interaktive Karten mit Informationen zu Spielplätzen für Familien mit Kindern.",
  keywords: ["Spielplatz", "Kinder", "Familie", "Spielplätze finden", "Outdoor", "Freizeit"],
  openGraph: {
    title: "Spieli.eu - Spielplätze für Familien entdecken",
    description: "Finde die besten Spielplätze in deiner Region mit interaktiven Karten.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#3d8b5f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${nunito.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
