"use client"

import { ImageIcon, MapPin, Share2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const problems = [
  {
    icon: Share2,
    title: "Redes que van a rachas",
    problem: "Tres publicaciones en marzo y ninguna en abril. Pasa cuando no hay tiempo para grabar ni editar, y nadie decide qué contar.",
    result: "Montamos un calendario que se pueda cumplir y me encargo de grabar, editar y publicar. Prefiero constancia a volumen.",
  },
  {
    icon: MapPin,
    title: "Google y la web, a medias",
    problem: "Un horario antiguo en Google, fotos de hace años, una web que en el móvil no se lee. El cliente duda y acaba llamando a otro.",
    result: "Pongo al día la ficha de Google y la web para que quien te busca entienda en pocos segundos qué haces y cómo contactarte.",
  },
  {
    icon: ImageIcon,
    title: "Cada pieza va por su lado",
    problem: "El logo de la tarjeta no es el del rótulo, y en Instagram aparece otro color. El negocio parece más pequeño de lo que es.",
    result: "Defino una línea visual sencilla y la aplico en redes, web, cartelería e impresión.",
  },
]

export default function ProblemsSection() {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative px-8 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div ref={titleRef} className="reveal max-w-3xl">
          <p className="eyebrow">Cómo puedo ayudarte</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Lo que suelo encontrar. <span className="editorial-accent">Y cómo lo arreglo.</span></h2>
        </div>
        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-4 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, problem, result }) => (
            <article key={title} className="surface surface-hover p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]"><Icon className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{problem}</p>
              <div className="mt-5 border-t border-[#0071e3]/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">Qué hago</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1d1d1f]">{result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
