import { projects } from "@/lib/projects-data"

export const siteUrl = "https://rubencarriont.com"
export const siteName = "Rubén Carrión"
export const contactEmail = "rubencarrion6@gmail.com"
export const linkedinUrl = "https://www.linkedin.com/in/rubencarriontorres/"
export const portraitUrl = `${siteUrl}/img/brand/ruben-carrion-retrato.jpg`

const personId = `${siteUrl}/#person`
const websiteId = `${siteUrl}/#website`
const businessId = `${siteUrl}/#business`

const person = {
  "@type": "Person",
  "@id": personId,
  name: "Rubén Carrión",
  givenName: "Rubén",
  familyName: "Carrión",
  url: siteUrl,
  image: portraitUrl,
  email: `mailto:${contactEmail}`,
  jobTitle: "Diseñador gráfico y community manager",
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressRegion: "Cataluña", addressCountry: "ES" },
  sameAs: [linkedinUrl],
  knowsAbout: [
    "Diseño gráfico",
    "Identidad visual",
    "Packaging",
    "Maquetación editorial",
    "Gestión de redes sociales",
    "Edición de vídeo",
    "Diseño web",
    "SEO local",
    "Perfil de Empresa de Google",
    "IA generativa aplicada al diseño",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Institut Escola del Treball" },
    { "@type": "EducationalOrganization", name: "Centro Villar" },
  ],
}

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: siteName,
  inLanguage: "es-ES",
  publisher: { "@id": personId },
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [website, person],
}

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Diseñador gráfico y community manager en Barcelona",
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      inLanguage: "es-ES",
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: "Rubén Carrión · Diseño, redes y web",
      url: siteUrl,
      image: portraitUrl,
      email: `mailto:${contactEmail}`,
      founder: { "@id": personId },
      areaServed: [
        { "@type": "City", name: "Barcelona" },
        { "@type": "City", name: "Badalona" },
        { "@type": "AdministrativeArea", name: "Área metropolitana de Barcelona" },
      ],
      sameAs: [linkedinUrl],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          "Diseño gráfico e identidad visual",
          "Gestión de redes sociales y contenido",
          "Diseño y desarrollo web",
          "SEO local y Perfil de Empresa de Google",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, provider: { "@id": personId } } })),
      },
    },
  ],
}

export const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/portfolio#webpage`,
      url: `${siteUrl}/portfolio`,
      name: "Portfolio de Rubén Carrión",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      inLanguage: "es-ES",
    },
    {
      "@type": "ItemList",
      name: "Proyectos de diseño de Rubén Carrión",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          dateCreated: project.year,
          creator: { "@id": personId },
          ...(project.images[0]?.startsWith("/") ? { image: `${siteUrl}${project.images[0]}` } : {}),
          ...(project.externalUrl ? { url: project.externalUrl } : {}),
        },
      })),
    },
  ],
}

// Evita que un "</script>" dentro de los datos cierre la etiqueta antes de tiempo.
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
