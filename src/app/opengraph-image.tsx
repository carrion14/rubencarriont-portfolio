import { ogSize, renderOgCard } from "@/lib/og-card"

export const alt = "Rubén Carrión, diseñador gráfico y community manager en Barcelona"
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderOgCard({
    kicker: "RUBÉN CARRIÓN · BARCELONA",
    title: "Tu negocio ya tiene valor.",
    accent: "Hagamos que se vea.",
  })
}
