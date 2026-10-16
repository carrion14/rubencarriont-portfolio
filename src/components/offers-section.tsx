"use client"

import { ArrowRight, CalendarDays, Globe2, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const waysToWork = [
  {
    icon: Sparkles,
    title: "Resolver una prioridad",
    text: "Una mejora concreta y cerrada. Poner al día la ficha de Google, ordenar el logo y los colores, revisar la web que nadie ha tocado desde que se hizo.",
    detail: "Va bien cuando sabes que algo falla aunque no tengas claro el qué.",
  },
  {
    icon: CalendarDays,
    title: "Mantener una presencia constante",
    text: "Contenido para redes cada mes, con un ritmo que se pueda mantener. Yo propongo las ideas, grabo, edito y publico.",
    detail: "Cuántas publicaciones y cuánta grabación lo decidimos según lo que necesite tu negocio. No hay paquete cerrado.",
  },
  {
    icon: Globe2,
    title: "Mejorar la presencia digital",
    text: "Web, SEO local, ficha de Google e imagen trabajadas a la vez, para que todo cuente lo mismo.",
    detail: "Es el encargo más largo. Lo partimos en fases para que veas resultados pronto.",
  },
]

export default function OffersSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative px-6 py-20 sm:px-8 sm:py-24">
      <div ref={ref} className="reveal mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Formas de colaborar</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Empezamos por <span className="editorial-accent">lo que más necesita tu negocio.</span></h2>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73] sm:text-lg">Cuéntame qué pasa y te preparo una propuesta a medida. <strong className="key-phrase">Si solo hace falta arreglar la ficha de Google, la propuesta será eso.</strong></p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {waysToWork.map(({ icon: Icon, title, text, detail }) => (
            <article key={title} className="surface surface-hover p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{text}</p>
              <p className="mt-5 border-t border-[#0071e3]/10 pt-5 text-xs leading-relaxed text-[#86868b]">{detail}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#0071e3]/15 bg-[#eef7ff]/75 p-6 sm:flex-row sm:items-center sm:p-8">
          <div><h3 className="text-xl font-semibold text-[#1d1d1f]">¿No sabes por dónde empezar?</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6e6e73]">Es lo más normal. Cuéntame qué te preocupa y lo ordenamos juntos.</p></div>
          <button onClick={() => onNavigate("contact")} className="press inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-colors hover:bg-[#0077ed] sm:w-auto">Cuéntame qué necesitas <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  )
}
