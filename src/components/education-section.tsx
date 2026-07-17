"use client"

import { ArrowDown, GraduationCap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

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
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-12">
        <div ref={titleRef} className="reveal">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Formación</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            <GraduationCap className="mr-2 inline-block h-7 w-7 text-[#0071e3] align-middle" />
            Educación
          </h2>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-3">
          {education.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 sm:p-7 transition-all duration-500 hover:bg-[rgba(255,255,255,0.75)] hover:shadow-sm"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,113,227,0.1)]">
                  <GraduationCap className="h-4 w-4 text-[#0071e3]" />
                </div>
                <span className="rounded-full bg-[rgba(0,113,227,0.07)] px-2.5 py-0.5 text-xs font-medium text-[#0071e3]">
                  {item.period}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f]">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#6e6e73]">{item.school}</p>
              <ScrollReveal
                baseOpacity={0.45}
                baseRotation={0.8}
                blurStrength={1.2}
                containerClassName="mt-2"
                textClassName="text-sm leading-relaxed text-[#86868b]"
                wordAnimationEnd="top 45%"
              >
                {item.description}
              </ScrollReveal>
            </div>
          ))}
        </div>

        <button
          onClick={() => onNavigate("projects")}
          className="flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-blue-600"
        >
          Ver proyectos
          <ArrowDown className="h-3 w-3" />
        </button>
      </div>
    </section>
  )
}
