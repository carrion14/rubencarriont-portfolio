"use client"

import { Globe2, Layers3, Palette } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const capabilities = [
  {
    title: "Diseño gráfico",
    text: "Identidades, campañas, flyers, cartelería, packaging. Preparé más de 60 etiquetas para Bluesun y campañas para la web y las tiendas de Kärcher, así que la parte de producción, la que no se ve, la tengo muy trabajada.",
    aiNote: "Uso IA cuando ahorra tiempo o abre una idea visual. El criterio lo pongo yo.",
    tags: ["Identidad visual", "Campañas", "Impresión", "Piezas comerciales", "Adaptaciones"],
    icon: Palette,
  },
  {
    title: "Contenido para redes sociales",
    text: "Puedo llevar el proceso entero o solo una parte: decidir qué contar, grabar, editar, escribir los textos y publicar. En Kärcher España coordiné su Instagram durante meses.",
    aiNote: "La IA me ayuda a idear y adaptar formatos. Lo que se graba es real.",
    tags: ["Estrategia", "Grabación", "Diseño", "Edición", "Publicación"],
    icon: Layers3,
  },
  {
    title: "Web, SEO y Google Business",
    text: "Diseño y programo webs (esta también) y me ocupo del SEO local y del Perfil de Empresa de Google, que en un negocio de barrio pesa tanto como la propia web.",
    aiNote: "IA puntual para revisar datos y ordenar procesos.",
    tags: ["Diseño web", "Desarrollo web", "SEO local", "Google Business", "Mantenimiento"],
    icon: Globe2,
    featured: true,
  },
]

export default function ServicesSection() {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div ref={titleRef} className="reveal max-w-3xl">
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Hago varias cosas. <span className="editorial-accent">No hace falta que las contrates todas.</span>
          </h2>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-4 md:grid-cols-3">
          {capabilities.map((card) => {
            const Icon = card.icon
            return (
              <article key={card.title} className={`surface surface-hover flex flex-col p-6 ${card.featured ? "surface-accent" : ""}`}>
                <Icon className="mb-5 h-5 w-5 text-[#0071e3]" />
                <h3 className="text-lg font-semibold text-[#1d1d1f]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{card.text}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#86868b]">{card.aiNote}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[rgba(0,113,227,0.07)] px-3 py-1 text-xs font-medium text-[#0071e3]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
