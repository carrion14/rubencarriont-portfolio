import type { MetadataRoute } from "next"

import { projects } from "@/lib/projects-data"
import { portraitUrl, siteUrl } from "@/lib/seo"

const lastModified = new Date("2026-10-22")

// Imágenes de los proyectos para Google Imágenes (solo fotos locales, sin vídeos ni embeds).
const projectImages = projects
  .flatMap((project) => project.images.slice(0, 3))
  .filter((src) => src.startsWith("/") && !src.toLowerCase().endsWith(".mp4"))
  .map((src) => `${siteUrl}${encodeURI(src)}`)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [portraitUrl],
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: projectImages,
    },
  ]
}
