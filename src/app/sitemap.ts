import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rubencarriont.com",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://rubencarriont.com/portfolio",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
