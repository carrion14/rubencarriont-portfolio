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
    <section className="band band-gray">
      <div className="container-wide">
        <div ref={titleRef} className="reveal mx-auto max-w-[820px] text-center">
          <p className="kicker">Cómo puedo ayudarte</p>
          <h2 className="headline mt-3">Lo que suelo encontrar. <span className="headline-muted">Y cómo lo arreglo.</span></h2>
        </div>
        <div ref={cardsRef} className="reveal reveal-delay-1 mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, problem, result }) => (
            <article key={title} className="tile flex flex-col p-8 md:p-10">
              <Icon className="h-8 w-8 text-[#0071e3]" strokeWidth={1.6} />
              <h3 className="mt-6 text-[1.75rem] font-bold leading-tight tracking-[-0.025em] text-[#1d1d1f]">{title}</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#6e6e73]">{problem}</p>
              <p className="mt-auto pt-8 text-[1.0625rem] font-semibold leading-relaxed text-[#1d1d1f]">{result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
