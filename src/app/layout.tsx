import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Rubén Carrión — Diseñador gráfico, web e IA en Barcelona",
    template: "%s | Rubén Carrión",
  },
  description:
    "Portfolio de Rubén Carrión: branding, packaging, maquetación, campañas, contenido, diseño web e inteligencia artificial aplicada.",
  metadataBase: new URL("https://rubencarriont.com"),
  alternates: {
    canonical: "/",
  },
  applicationName: "Rubén Carrión Portfolio",
  authors: [{ name: "Rubén Carrión", url: "https://rubencarriont.com" }],
  creator: "Rubén Carrión",
  publisher: "Rubén Carrión",
  keywords: [
    "Rubén Carrión",
    "portfolio diseñador gráfico",
    "diseñador gráfico Barcelona",
    "branding",
    "packaging",
    "maquetación",
    "diseño web",
    "IA aplicada al diseño",
    "retail design",
    "Kärcher",
    "Barcelona",
  ],
  openGraph: {
    title: "Rubén Carrión — Diseñador gráfico, web e IA en Barcelona",
    description:
      "Portfolio de Rubén Carrión: branding, packaging, maquetación, campañas, contenido, diseño web e inteligencia artificial aplicada.",
    url: "/",
    siteName: "Rubén Carrión Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/img/brand/foto_perfil.png",
        width: 1200,
        height: 1200,
        alt: "Rubén Carrión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubén Carrión — Diseñador gráfico, web e IA en Barcelona",
    description:
      "Portfolio de Rubén Carrión: branding, packaging, maquetación, campañas, contenido, diseño web e inteligencia artificial aplicada.",
    images: ["/img/brand/foto_perfil.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <body className="font-sans text-foreground">{children}</body>
    </html>
  )
}
