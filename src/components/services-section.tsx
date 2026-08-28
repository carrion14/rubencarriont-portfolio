"use client"

import { Bot, Globe2, Layers3, Palette } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const capabilities = [
  {
    title: "Diseño gráfico e identidad",
    text: "Combino criterio estético y funcional para crear identidades, campañas, flyers, piezas impresas, materiales comerciales y adaptaciones para medios físicos y digitales.",
    tags: ["Identidad visual", "Campañas", "Impresión", "Piezas comerciales", "Adaptaciones"],
    icon: Palette,
  },
  {
    title: "Contenido para redes sociales",
    text: "Puedo gestionar el proceso completo: estrategia, planificación, ideas, grabación, diseño, edición de vídeo, textos, publicación y revisión de resultados.",
    tags: ["Estrategia", "Grabación", "Diseño", "Edición", "Publicación"],
    icon: Layers3,
  },
  {
    title: "Web, SEO y Google Business",
    text: "Creo, adapto y mejoro páginas web; trabajo su claridad y SEO básico; y optimizo el Perfil de Empresa de Google para reforzar la visibilidad local.",
    tags: ["Diseño web", "Desarrollo web", "SEO local", "Google Business", "Mantenimiento"],
    icon: Globe2,
    featured: true,
  },
  {
    title: "IA y automatización",
    text: "Aplico inteligencia artificial y automatizaciones en necesidades concretas cuando ayudan a ahorrar tiempo, ordenar procesos o mejorar la producción.",
    note: "Servicio complementario disponible para proyectos concretos.",
    tags: ["IA aplicada", "Automatización", "Producción", "Organización"],
    icon: Bot,
  },
]

export default function ServicesSection() {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div ref={titleRef} className="reveal max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Servicios</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Una visión global. <span className="editorial-accent">Solo lo que necesitas ahora.</span>
          </h2>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-4 md:grid-cols-2">
          {capabilities.map((card) => {
            const Icon = card.icon
            return (
              <article key={card.title} className={`rounded-3xl border p-6 shadow-[0_18px_55px_rgba(29,29,31,0.06)] backdrop-blur-2xl ${card.featured ? "border-[#0071e3]/20 bg-[#eef7ff]/75" : "border-white/60 bg-white/45"}`}>
                <Icon className="mb-5 h-5 w-5 text-[#0071e3]" />
                <h3 className="text-lg font-semibold text-[#1d1d1f]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{card.text}</p>
                {card.note && <p className="mt-3 text-xs font-semibold text-[#0071e3]">{card.note}</p>}
                <div className="mt-5 flex flex-wrap gap-2">
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
