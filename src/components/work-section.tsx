"use client"

import { ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const jobs = [
  {
    role: "Diseñador Gráfico & IA Designer",
    company: "Kärcher España",
    period: "Enero de 2026 — Septiembre de 2026",
    responsibilities: [
      "Diseño y adaptación de campañas para web, Amazon, retail, ferias, contenido social y materiales internos.",
      "Creación de piezas editoriales, banners, soportes impresos y recursos visuales con criterio de marca.",
      "Uso de IA generativa supervisada para acelerar producción visual y explorar nuevas escenas de producto.",
    ],
    results: [
      "Contenido y materiales preparados para necesidades recurrentes de marketing, retail y comunicación visual.",
      "Publicaciones y recursos para Instagram coordinados durante varios meses.",
    ],
    tags: ["Diseño gráfico", "Campañas", "Retail", "IA aplicada", "Maquetación"],
  },
  {
    role: "Diseñador y Maquetador",
    company: "Bluesun",
    period: "2024 — 2025",
    responsibilities: [
      "Diseño aplicado a packaging, etiquetas, catálogos y piezas comerciales.",
      "Adaptación de información obligatoria tras cambios normativos europeos.",
      "Preparación de artes finales y control de coherencia visual entre referencias.",
    ],
    results: [
      "Más de 60 etiquetas preparadas con una línea visual coherente y listas para producción interna.",
    ],
    tags: ["Packaging", "Etiquetado", "Arte final", "Maquetación"],
  },
  {
    role: "Diseñador Gráfico y Marketing",
    company: "CPP Chemical Group",
    period: "2022",
    responsibilities: [
      "Diseño de envases, catálogos, materiales publicitarios y piezas de apoyo comercial.",
      "Apoyo en campañas de marketing digital y offline.",
      "Aplicación de identidad visual corporativa en distintos formatos.",
    ],
    results: [
      "Materiales de producto y comunicación preparados para canales comerciales y de marketing.",
    ],
    tags: ["Packaging", "Publicidad", "Marketing", "Branding"],
  },
  {
    role: "Administración y Atención al Cliente",
    company: "Tusgsal",
    period: "2021 — 2023",
    responsibilities: [
      "Atención al público, comunicación con usuarios y gestión administrativa.",
      "Resolución de incidencias y trabajo con necesidades cambiantes.",
    ],
    results: [
      "Base práctica en comunicación, organización y respuesta ágil ante problemas reales.",
    ],
    tags: ["Comunicación", "Gestión", "Atención al cliente"],
  },
]

export default function WorkSection({
  onNavigate,
  ctaLabel = "Cuéntame qué necesita tu negocio",
}: {
  onNavigate: (section: string) => void
  ctaLabel?: string
}) {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const listRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="band band-white">
      <div className="container-apple">
        <div ref={titleRef} className="reveal text-center">
          <p className="kicker">Experiencia</p>
          <h2 className="headline mt-3">Trayectoria profesional</h2>
          <a href="https://www.linkedin.com/in/rubencarriontorres/" target="_blank" rel="noopener noreferrer" className="link-apple mt-5">
            Ver perfil en LinkedIn <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div ref={listRef} className="reveal-stagger mt-14 border-t border-[#d2d2d7] md:mt-20">
          {jobs.map((job) => (
            <article key={`${job.company}-${job.period}`} className="grid gap-6 border-b border-[#d2d2d7] py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
              <div>
                <p className="text-sm text-[#86868b]">{job.period}</p>
                <h3 className="mt-2 text-[1.5rem] font-bold leading-tight tracking-[-0.02em]">{job.company}</h3>
                <p className="mt-1 text-[1.0625rem] text-[#6e6e73]">{job.role}</p>
              </div>
              <div className="grid gap-6 text-[1.0625rem] leading-relaxed text-[#6e6e73] sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#1d1d1f]">Qué hacía</p>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#1d1d1f]">Resultados</p>
                  <ul className="space-y-2">
                    {job.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[#86868b]">{job.tags.join(" · ")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button type="button" onClick={() => onNavigate("contact")} className="link-apple">
            {ctaLabel} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
