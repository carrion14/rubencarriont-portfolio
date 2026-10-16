"use client"

import Image from "next/image"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { RevealWords, ScrollZoom } from "@/components/motion"

const capabilities = [
  {
    title: "Diseño gráfico",
    text: "Identidades, campañas, flyers, cartelería, packaging. Preparé más de 60 etiquetas para Bluesun y campañas para la web y las tiendas de Kärcher, así que la parte de producción, la que no se ve, la tengo muy trabajada.",
    aiNote: "Uso IA cuando ahorra tiempo o abre una idea visual. El criterio lo pongo yo.",
    tags: ["Identidad visual", "Campañas", "Impresión", "Packaging"],
    image: { src: "/img/projects/2023-ntrsv-visual-identity/1_ciwqcm.png", alt: "Identidad visual de NTRSV" },
    layout: "md:col-span-3",
  },
  {
    title: "Contenido para redes sociales",
    text: "Puedo llevar el proceso entero o solo una parte: decidir qué contar, grabar, editar, escribir los textos y publicar. En Kärcher España coordiné su Instagram durante meses.",
    aiNote: "La IA me ayuda a idear y adaptar formatos. Lo que se graba es real.",
    tags: ["Estrategia", "Grabación", "Edición", "Publicación"],
    image: { src: "/img/projects/2026-karcher-brand-campaign/hpw-c-100.jpg", alt: "Pieza para redes de la campaña Built for Life de Kärcher" },
    layout: "md:col-span-3",
  },
]

export default function ServicesSection() {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="band band-white">
      <div className="container-wide">
        <div ref={titleRef} className="reveal mx-auto max-w-[820px] text-center">
          <p className="kicker">Servicios</p>
          <h2 className="headline mt-3"><RevealWords text="Hago varias cosas." /> <RevealWords text="No hace falta que las contrates todas." className="headline-muted" delay={0.3} /></h2>
        </div>

        <div ref={cardsRef} className="reveal-stagger mt-14 grid gap-5 md:mt-20 md:grid-cols-6">
          {capabilities.map((card) => (
            <article key={card.title} className={`tile tile-lift flex flex-col ${card.layout}`}>
              <div className="p-8 md:p-10">
                <h3 className="headline-sm">{card.title}</h3>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#6e6e73]">{card.text}</p>
                <p className="mt-4 text-sm text-[#86868b]">{card.aiNote}</p>
                <p className="mt-5 text-sm font-semibold text-[#1d1d1f]">{card.tags.join(" · ")}</p>
              </div>
              <div className="relative mx-8 mt-auto aspect-[16/10] overflow-hidden rounded-t-[1.25rem] md:mx-10">
                <ScrollZoom className="absolute inset-0">
                  <Image src={card.image.src} alt={card.image.alt} fill sizes="(max-width: 768px) 90vw, 520px" className="object-cover" />
                </ScrollZoom>
              </div>
            </article>
          ))}

          <article className="tile tile-dark grid items-center gap-8 md:col-span-6 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="kicker !text-[#2997ff]">Lo que más piden</p>
              <h3 className="headline-sm mt-3 text-[#f5f5f7]">Web, SEO local y Google Business</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#a1a1a6]">
                Diseño y programo webs (esta también) y me ocupo del SEO local y del Perfil de Empresa de Google, que en un negocio de barrio pesa tanto como la propia web.
              </p>
              <p className="mt-4 text-sm text-[#86868b]">IA puntual para revisar datos y ordenar procesos.</p>
              <p className="mt-5 text-sm font-semibold text-[#f5f5f7]">Diseño web · Desarrollo · SEO local · Mantenimiento</p>
            </div>
            <div className="relative mx-8 mb-8 aspect-[16/10] overflow-hidden rounded-[1.25rem] md:mx-0 md:mb-0 md:mr-12">
              <ScrollZoom className="absolute inset-0">
                <Image src="/img/projects/2026-berbel-tattoo-web/berbel-catalogo.png" alt="Catálogo de la web de Berbel Tattoo" fill sizes="(max-width: 768px) 90vw, 520px" className="object-cover object-top" />
              </ScrollZoom>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
