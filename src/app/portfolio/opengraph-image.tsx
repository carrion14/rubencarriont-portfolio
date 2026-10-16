import { ogSize, renderOgCard } from "@/lib/og-card"

export const alt = "Portfolio de diseño gráfico de Rubén Carrión"
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderOgCard({
    kicker: "PORTFOLIO · DISEÑO GRÁFICO",
    title: "Diseño que sale de la pantalla",
    accent: "y llega a la tienda.",
  })
}
