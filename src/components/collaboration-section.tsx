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
    <section className="band band-black">
      <div ref={processRef} className="reveal container-wide">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="kicker">Proceso</p>
          <h2 className="headline mt-3 text-[#f5f5f7]">Cómo trabajamos. <span className="headline-muted">Sin sorpresas en la factura.</span></h2>
          <p className="lead mx-auto mt-6 max-w-[640px]">Primero entiendo el problema. Alcance, plazos y precio quedan por escrito antes de empezar.</p>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-[#333336] sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {processSteps.map(([title, text], index) => (
            <li key={title} className="bg-[#1d1d1f] p-8 md:p-9">
              <span className="block text-[3.5rem] font-bold leading-none tracking-[-0.04em] text-[#2997ff] tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[1.375rem] font-bold tracking-[-0.02em] text-[#f5f5f7]">{title}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-[#a1a1a6]">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-12 max-w-[640px] text-center text-[1.0625rem] leading-relaxed text-[#a1a1a6]">
          <strong className="font-semibold text-[#f5f5f7]">Lo que no está en la propuesta se presupuesta aparte.</strong> Cada una deja escrito qué se entrega, cuántas revisiones entran y quién hace qué.
        </p>
      </div>
    </section>
  )
}
