import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rubén Carrión · Diseño, redes y web",
    short_name: "Rubén Carrión",
    description: "Diseñador gráfico y community manager en Barcelona.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#f8fbff",
    lang: "es-ES",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
