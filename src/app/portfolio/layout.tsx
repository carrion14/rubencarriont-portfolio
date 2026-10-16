import type { Metadata } from "next"

import { portfolioJsonLd, serializeJsonLd } from "@/lib/seo"

const title = "Portfolio de diseño gráfico, campañas y web"
const description =
  "Proyectos de Rubén Carrión para Kärcher España, Bluesun, Berbel Tattoo y otros: campañas, retail, packaging, editorial, redes sociales y web."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `${title} | Rubén Carrión`,
    description,
    url: "/portfolio",
    type: "profile",
    firstName: "Rubén",
    lastName: "Carrión",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Rubén Carrión`,
    description,
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(portfolioJsonLd) }}
      />
      {children}
    </>
  )
}
