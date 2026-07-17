"use client"

import { ArrowDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

const jobs = [
  {
    role: "Diseñador Gráfico & IA Designer",
    company: "Kärcher España",
    period: "Ene 2026 — Actualidad",
    description: "Diseño de identidades visuales, automatización de workflows con IA, dashboards de ventas y contenido generado con inteligencia artificial para campañas de marketing.",
    tags: ["IA", "Branding", "Automation", "Dashboards"],
  },
  {
    role: "Diseñador y Maquetador",
    company: "Bluesun",
    period: "2024 — 2025",
    description: "Lideré el proyecto de rediseño integral de packaging tras cambio de ley europea. Maqueté más de 60 etiquetas garantizando coherencia. Diseño de envases, catálogos y publicidad.",
    tags: ["Packaging", "Maquetación", "Etiquetado", "Legislación"],
  },
  {
    role: "Diseñador Gráfico y Marketing",
    company: "CPP Chemical Group",
    period: "2022",
    description: "Diseño de envases, catálogos y publicidad. Apoyo en campañas de marketing digital y offline. Gestión de identidad visual corporativa.",
    tags: ["Packaging", "Publicidad", "Marketing", "Branding"],
  },
  {
    role: "Administración y Atención al Cliente",
    company: "Tusgsal",
    period: "2021 — 2023",
    description: "Desarrollo de habilidades de comunicación y resolución de incidencias. Atención al público y gestión administrativa.",
    tags: ["Atención al cliente", "Comunicación", "Gestión"],
  },
]

export default function WorkSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const listRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-14">

        <div ref={titleRef} className="reveal flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Trayectoria</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
              Experiencia
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/rubencarriontorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[rgba(0,0,0,0.04)] px-4 py-2 text-xs font-medium text-[#6e6e73] transition-all hover:bg-[rgba(0,0,0,0.08)]"
          >
            LinkedIn ↗
          </a>
        </div>

        <div ref={listRef} className="reveal reveal-delay-1 space-y-2">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group rounded-2xl p-4 sm:p-7 transition-all duration-500 hover:bg-[rgba(255,255,255,0.5)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">{job.role}</h3>
                    <p className="text-sm font-medium text-[#6e6e73]">{job.company}</p>
                  </div>
                  <ScrollReveal
                    baseOpacity={0.45}
                    baseRotation={0.8}
                    blurStrength={1.2}
                    textClassName="text-sm leading-relaxed text-[#86868b]"
                    wordAnimationEnd="top 45%"
                  >
                    {job.description}
                  </ScrollReveal>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[rgba(0,0,0,0.04)] px-2.5 py-0.5 text-xs font-medium text-[#6e6e73]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-block rounded-full bg-[rgba(0,113,227,0.07)] px-3 py-1 text-xs font-medium text-[#0071e3]">
                    {job.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onNavigate("skills")}
          className="flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-blue-600"
        >
          Ver skills
          <ArrowDown className="h-3 w-3" />
        </button>
      </div>
    </section>
  )
}
