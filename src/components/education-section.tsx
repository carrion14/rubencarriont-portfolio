"use client"

import { ChevronRight, GraduationCap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const education = [
  {
    title: "Bootcamp Front-End",
    school: "IT Academy de Barcelona Activa",
    period: "may. 2025 — nov. 2025",
    description: "Módulo 1 completado (aprobado). Fundamentos de JavaScript, lógica de programación, arrays, objetos, funciones, manipulación del DOM y ES6+.",
  },
  {
    title: "GS Diseño Gráfico",
    school: "Institut Escola del Treball",
    period: "sept. 2023 — jun. 2025",
    description: "Ciclo Formativo de Grado Superior en diseño gráfico, editorial e imprenta. Branding, edición de vídeo y diseño editorial.",
  },
  {
    title: "GS Cine y Producción Audiovisual",
    school: "Centro Villar",
    period: "sept. 2021 — jun. 2023",
    description: "Ciclo Formativo de Grado Superior en cinematografía y producción de vídeo. Multimedia, branding y narrativa audiovisual.",
  },
]

export default function EducationSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="band band-gray">
      <div className="container-wide">
        <div ref={titleRef} className="reveal text-center">
          <p className="kicker">Formación</p>
          <h2 className="headline mt-3">Cine, diseño <span className="headline-muted">y algo de código.</span></h2>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {education.map((item) => (
            <article key={item.title} className="tile p-8 md:p-10">
              <GraduationCap className="h-8 w-8 text-[#0071e3]" strokeWidth={1.6} />
              <p className="mt-6 text-sm text-[#86868b]">{item.period}</p>
              <h3 className="mt-1 text-[1.5rem] font-bold leading-tight tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-1 text-[1.0625rem] text-[#1d1d1f]">{item.school}</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#6e6e73]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button type="button" onClick={() => onNavigate("projects")} className="link-apple">
            Ver proyectos <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
