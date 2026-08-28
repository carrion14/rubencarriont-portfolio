"use client"

import { ArrowRight, CalendarDays, Globe2, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const waysToWork = [
  {
    icon: Sparkles,
    title: "Resolver una prioridad",
    text: "Podemos empezar por una mejora concreta: ordenar la imagen, actualizar Google Business, revisar la web o definir qué necesita atención primero.",
    detail: "Ideal cuando sabes que algo debe mejorar, aunque todavía no tengas claro el alcance.",
  },
  {
    icon: CalendarDays,
    title: "Mantener una presencia constante",
    text: "Planificamos y producimos contenido para redes con un ritmo realista, desde la estrategia y las ideas hasta el diseño, la edición y la publicación.",
    detail: "El alcance se adapta al volumen de contenido, la grabación y la gestión que necesite el negocio.",
  },
  {
    icon: Globe2,
    title: "Mejorar la presencia digital",
    text: "Trabajamos web, SEO local, Google Business e identidad visual de forma coordinada para que el negocio se entienda y se perciba mejor.",
    detail: "La propuesta se prepara según prioridades, materiales, calendario y necesidades técnicas.",
  },
]

export default function OffersSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative px-6 py-20 sm:px-8 sm:py-24">
      <div ref={ref} className="reveal mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Formas de colaborar</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Empezamos por lo que más necesita tu negocio.</h2>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73] sm:text-lg">No necesitas contratarlo todo. Cuéntame tu situación y prepararé una propuesta clara, proporcionada y sin servicios innecesarios.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {waysToWork.map(({ icon: Icon, title, text, detail }) => (
            <article key={title} className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_18px_55px_rgba(29,29,31,0.05)] backdrop-blur-2xl sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{text}</p>
              <p className="mt-5 border-t border-[#0071e3]/10 pt-5 text-xs leading-relaxed text-[#86868b]">{detail}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#0071e3]/15 bg-[#eef7ff]/75 p-6 sm:flex-row sm:items-center sm:p-8">
          <div><h3 className="text-xl font-semibold text-[#1d1d1f]">¿No sabes por dónde empezar?</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6e6e73]">Explícame qué está fallando o qué quieres mejorar. Te responderé con las preguntas necesarias y un siguiente paso claro.</p></div>
          <button onClick={() => onNavigate("contact")} className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95 sm:w-auto">Cuéntame qué necesitas <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  )
}
