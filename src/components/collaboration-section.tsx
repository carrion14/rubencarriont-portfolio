"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const processSteps = [
  ["Diagnóstico", "Hablamos de tu negocio y de lo que te preocupa. Muchas veces el problema no es el que parecía, así que decidimos qué va primero y qué puede esperar."],
  ["Propuesta", "Te paso por escrito qué voy a entregar, en qué plazo y por cuánto. Luego reúno lo que necesito: fotos, accesos, logos, textos."],
  ["Producción", "Me pongo con lo acordado. Si a mitad aparece algo nuevo, lo hablamos antes de tocarlo."],
  ["Entrega", "Revisamos juntos, ajusto lo que entra en las revisiones y lo publico o te lo entrego listo. Después vemos si hay siguiente paso, o no."],
]

export default function CollaborationSection() {
  const processRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="relative px-6 py-20 sm:px-8 sm:py-24">
      <div ref={processRef} className="reveal mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Proceso</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Cómo trabajamos. <span className="editorial-accent">Sin sorpresas en la factura.</span></h2>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73] sm:text-lg">Primero entiendo el problema. <strong className="key-phrase">Alcance, plazos y precio quedan por escrito antes de empezar.</strong></p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, text], index) => (
            <li key={title} className="surface relative p-6 lg:min-h-64">
              <span className="text-3xl font-semibold tracking-tight text-[#0071e3]/25 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{text}</p>
            </li>
          ))}
        </ol>
        <aside className="rounded-2xl border border-[#0071e3]/15 bg-[#eef7ff]/75 px-5 py-4 text-sm leading-relaxed text-[#5f6670] sm:px-6">
          <strong className="text-[#1d1d1f]">Lo que no está en la propuesta se presupuesta aparte.</strong> Cada una deja escrito qué se entrega, cuántas revisiones entran y quién hace qué.
        </aside>
      </div>
    </section>
  )
}
