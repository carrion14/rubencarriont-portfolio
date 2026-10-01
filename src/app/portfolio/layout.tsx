import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio profesional",
  description:
    "Portfolio profesional de Rubén Carrión: diseño gráfico, contenido, web, experiencia y formación.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio profesional | Rubén Carrión",
    description: "Proyectos, experiencia y formación de Rubén Carrión.",
    url: "/portfolio",
    images: [{ url: "/img/brand/foto_perfil.png", width: 1200, height: 1200, alt: "Rubén Carrión" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio profesional | Rubén Carrión",
    description: "Proyectos, experiencia y formación de Rubén Carrión.",
    images: ["/img/brand/foto_perfil.png"],
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
