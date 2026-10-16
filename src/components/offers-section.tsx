"use client"

import { ArrowRight, CalendarDays, Globe2, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { RevealWords } from "@/components/motion"

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
  const gridRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="band band-gray">
      <div ref={ref} className="reveal container-wide">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="kicker">Formas de colaborar</p>
          <h2 className="headline mt-3"><RevealWords text="Empezamos por lo que más necesita tu negocio." /></h2>
          <p className="lead mx-auto mt-6 max-w-[640px]">Cuéntame qué pasa y te preparo una propuesta a medida. Si solo hace falta arreglar la ficha de Google, la propuesta será eso.</p>
        </div>

        <div ref={gridRef} className="reveal-stagger mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {waysToWork.map(({ icon: Icon, title, text, detail }) => (
            <article key={title} className="text-center md:text-left">
              <Icon className="mx-auto h-9 w-9 text-[#1d1d1f] md:mx-0" strokeWidth={1.5} />
              <h3 className="mt-5 text-[1.5rem] font-bold leading-tight tracking-[-0.02em]">{title}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-[#6e6e73]">{text}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#86868b]">{detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <h3 className="headline-sm">¿No sabes por dónde empezar?</h3>
          <p className="mt-3 text-[1.0625rem] text-[#6e6e73]">Es lo más normal. Cuéntame qué te preocupa y lo ordenamos juntos.</p>
          <button type="button" onClick={() => onNavigate("contact")} className="btn-apple btn-primary mt-7">
            Cuéntame qué necesitas <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
