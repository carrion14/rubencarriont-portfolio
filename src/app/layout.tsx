import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Ruben Carrion | Disenador Grafico e IA Designer",
    template: "%s | Ruben Carrion",
  },
  description:
    "Portfolio de Ruben Carrion, disenador grafico e IA Designer especializado en branding, campanas visuales, maquetacion, retail, contenido con IA y automatizacion creativa.",
  metadataBase: new URL("https://rubencarriont.com"),
  alternates: {
    canonical: "/",
  },
  applicationName: "Ruben Carrion Portfolio",
  authors: [{ name: "Ruben Carrion", url: "https://rubencarriont.com" }],
  creator: "Ruben Carrion",
  publisher: "Ruben Carrion",
  keywords: [
    "Ruben Carrion",
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
    title: "Ruben Carrion | Disenador Grafico e IA Designer",
    description:
      "Diseno grafico, branding, retail, campanas visuales, contenido con IA y automatizacion creativa.",
    url: "/",
    siteName: "Ruben Carrion Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/img/brand/foto_perfil.png",
        width: 1200,
        height: 1200,
        alt: "Ruben Carrion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruben Carrion | Disenador Grafico e IA Designer",
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
      <head>
        <link rel="icon" href="/img/brand/logo.png" type="image/png" />
      </head>
      <body className="font-sans text-foreground">{children}</body>
    </html>
  )
}
