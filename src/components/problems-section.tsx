"use client"

import { ImageIcon, MapPin, Share2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const problems = [
  {
    icon: Share2,
    title: "Redes sociales irregulares",
    problem: "Cuando falta tiempo, estrategia o capacidad para grabar y editar, las redes terminan abandonadas o se publican sin una dirección clara.",
    result: "Transformo esa actividad irregular en una presencia constante, estratégica y profesional que comunica mejor el valor del negocio.",
  },
  {
    icon: MapPin,
    title: "Web o Google desactualizados",
    problem: "Una web descuidada o un Perfil de Empresa de Google incompleto dificultan que las personas encuentren, entiendan y elijan el negocio.",
    result: "Convierto estos canales en una presencia clara, actualizada y mejor preparada para atraer consultas.",
  },
  {
    icon: ImageIcon,
    title: "Imagen poco coherente",
    problem: "Cuando la identidad visual cambia en cada soporte, el negocio transmite menos profesionalidad de la que realmente tiene.",
    result: "Ordeno y aplico una identidad clara y coherente en redes, web, campañas e impresión.",
  },
]

export default function ProblemsSection() {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative px-8 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div ref={titleRef} className="reveal max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Cómo puedo ayudarte</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Tres problemas habituales. <span className="editorial-accent">Tres mejoras visibles.</span></h2>
        </div>
        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-4 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, problem, result }) => (
            <article key={title} className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_18px_55px_rgba(29,29,31,0.06)] backdrop-blur-2xl">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]"><Icon className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{problem}</p>
              <div className="mt-5 border-t border-[#0071e3]/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">Resultado</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1d1d1f]">{result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
