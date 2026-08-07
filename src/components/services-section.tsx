"use client"

import { Bot, Layers3, Palette } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const capabilities = [
  {
    title: "Diseño gráfico e identidad",
    text: "Branding, identidad visual, packaging, campañas, publicidad, maquetación editorial y preparación de piezas para medios físicos y digitales.",
    tags: ["Branding", "Packaging", "Editorial", "Campañas"],
    icon: Palette,
  },
  {
    title: "Contenido, redes y marketing digital",
    text: "Creación y adaptación de contenido para marcas, redes sociales y campañas: estrategia de publicaciones, recursos gráficos, fotografía, vídeo ligero y formatos orientados a objetivos de marketing.",
    tags: ["Contenido", "Marketing para redes", "Fotografía", "Vídeo"],
    icon: Layers3,
  },
  {
    title: "Web, IA y automatización",
    text: "Diseño y creación de páginas web, prototipos y recursos digitales, utilizando inteligencia artificial y automatización cuando mejoran el proceso y el resultado.",
    tags: ["Web", "IA generativa", "Automatización", "Prototipos"],
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
            Capacidades para conectar diseño, contenido, marketing y tecnología.
          </h2>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-4 md:grid-cols-3">
          {capabilities.map((card) => {
            const Icon = card.icon
            return (
              <article key={card.title} className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_18px_55px_rgba(29,29,31,0.06)] backdrop-blur-2xl">
                <Icon className="mb-5 h-5 w-5 text-[#0071e3]" />
                <h3 className="text-lg font-semibold text-[#1d1d1f]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{card.text}</p>
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
