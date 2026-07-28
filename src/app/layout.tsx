import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Rubén Carrión | Disenador Grafico e IA Designer",
    template: "%s | Rubén Carrión",
  },
  description:
    "Portfolio de Rubén Carrión, disenador grafico e IA Designer especializado en branding, campanas visuales, maquetacion, retail, contenido con IA y automatizacion creativa.",
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
    "portfolio disenador grafico",
    "IA Designer",
    "branding",
    "diseno grafico",
    "maquetacion",
    "retail design",
    "Karcher",
    "Barcelona",
  ],
  openGraph: {
    title: "Rubén Carrión | Disenador Grafico e IA Designer",
    description:
      "Diseno grafico, branding, retail, campanas visuales, contenido con IA y automatizacion creativa.",
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
    title: "Rubén Carrión | Disenador Grafico e IA Designer",
    description:
      "Portfolio de diseno grafico, IA generativa, campanas visuales y automatizacion creativa.",
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
