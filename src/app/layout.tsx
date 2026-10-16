import type { Metadata, Viewport } from "next"
import "./globals.css"

import { serializeJsonLd, siteJsonLd, siteName, siteUrl } from "@/lib/seo"

const title = "Diseñador gráfico en Barcelona · Redes y web | Rubén Carrión"
const description =
  "Diseño gráfico, gestión de redes, web y SEO local para negocios pequeños de Barcelona y Badalona. Experiencia con Kärcher España, Bluesun y CPP."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Rubén Carrión",
  },
  description,
  alternates: {
    canonical: "/",
  },
  applicationName: siteName,
  authors: [{ name: "Rubén Carrión", url: siteUrl }],
  creator: "Rubén Carrión",
  publisher: "Rubén Carrión",
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  category: "design",
}

export const viewport: Viewport = {
  themeColor: "#f8fbff",
  colorScheme: "light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className="antialiased">
      <body className="font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
