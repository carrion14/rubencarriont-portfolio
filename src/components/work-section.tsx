"use client"

import { ArrowDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const jobs = [
  {
    role: "Diseñador Gráfico & IA Designer",
    company: "Kärcher España",
    period: "Enero de 2026 — Actualidad",
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
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-14">
        <div ref={titleRef} className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Experiencia</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
              Trayectoria profesional
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/rubencarriontorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[rgba(0,0,0,0.04)] px-4 py-2 text-xs font-medium text-[#6e6e73] transition-all hover:bg-[rgba(0,0,0,0.08)]"
          >
            LinkedIn
          </a>
        </div>

        <div ref={listRef} className="reveal reveal-delay-1 space-y-3">
          {jobs.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="group rounded-3xl bg-white/30 p-5 transition-all duration-500 hover:bg-[rgba(255,255,255,0.55)] sm:p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">{job.role}</h3>
                    <p className="text-sm font-medium text-[#6e6e73]">{job.company}</p>
                  </div>

                  <div className="grid gap-4 text-sm leading-relaxed text-[#6e6e73] md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#86868b]">Responsabilidades</p>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#86868b]">Resultados verificables</p>
                      <ul className="space-y-2">
                        {job.results.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

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
            </article>
          ))}
        </div>

        <button
          onClick={() => onNavigate("contact")}
          className="flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-blue-600"
        >
          {ctaLabel}
          <ArrowDown className="h-3 w-3" />
        </button>
      </div>
    </section>
  )
}
