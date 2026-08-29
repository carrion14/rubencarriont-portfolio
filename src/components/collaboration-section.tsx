"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const processSteps = [
  ["Diagnóstico y prioridades", "Conozco el negocio, su situación y el problema real. Decidimos qué necesita resolverse primero y qué puede esperar."],
  ["Propuesta y preparación", "Concretamos resultado, alcance, calendario, precio y responsabilidades. Después reunimos materiales, accesos e información y organizamos la producción."],
  ["Producción", "Ejecuto el trabajo acordado siguiendo las prioridades y el calendario definidos."],
  ["Revisión y entrega", "Recogemos el feedback incluido, comprobamos los entregables y publico, entrego o pongo en marcha el trabajo. Finalmente acordamos el siguiente paso."],
]

export default function CollaborationSection() {
  const processRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="relative px-6 py-20 sm:px-8 sm:py-24">
      <div ref={processRef} className="reveal mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Proceso</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Un recorrido claro <span className="editorial-accent">de principio a fin.</span></h2>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73] sm:text-lg"><strong className="key-phrase">Primero entendemos el problema.</strong> Después ordenamos prioridades, alcance y responsabilidades antes de producir.</p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, text], index) => (
            <li key={title} className="relative rounded-3xl border border-white/60 bg-white/45 p-6 lg:min-h-64">
              <span className="text-xs font-semibold text-[#0071e3]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{text}</p>
            </li>
          ))}
        </ol>
        <aside className="rounded-2xl border border-[#0071e3]/15 bg-[#eef7ff]/75 px-5 py-4 text-sm leading-relaxed text-[#5f6670] sm:px-6">
          <strong className="text-[#1d1d1f]">Alcance claro desde el principio:</strong> cada propuesta define entregables, revisiones, responsabilidades y plazos; cualquier ampliación se acuerda aparte.
        </aside>
      </div>
    </section>
  )
}
