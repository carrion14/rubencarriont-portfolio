import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Rubén Carrión | Diseño, redes y presencia digital en Barcelona",
    template: "%s | Rubén Carrión",
  },
  description:
    "Ayudo a pequeños negocios de Barcelona y Badalona a mejorar su diseño, contenido para redes, web, SEO y Perfil de Empresa de Google.",
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
    "community manager Barcelona",
    "contenido para redes sociales",
    "SEO local",
    "Google Business",
    "retail design",
    "Kärcher",
    "Barcelona",
  ],
  openGraph: {
    title: "Rubén Carrión | Diseño, redes y presencia digital en Barcelona",
    description:
      "Ayudo a pequeños negocios de Barcelona y Badalona a mejorar su diseño, contenido para redes, web, SEO y Perfil de Empresa de Google.",
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
    title: "Rubén Carrión | Diseño, redes y presencia digital en Barcelona",
    description:
      "Ayudo a pequeños negocios de Barcelona y Badalona a mejorar su diseño, contenido para redes, web, SEO y Perfil de Empresa de Google.",
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
