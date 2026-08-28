"use client"

import { CheckCircle2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const processSteps = [
  ["Diagnóstico", "Conozco el negocio, su situación y el problema real."],
  ["Prioridades", "Decidimos qué necesita resolverse primero y qué puede esperar."],
  ["Propuesta y acuerdo", "Concretamos resultado, alcance, calendario, precio y responsabilidades."],
  ["Preparación y planificación", "Reunimos materiales, accesos e información y organizamos la producción."],
  ["Producción", "Ejecuto el trabajo acordado."],
  ["Revisión final", "Recogemos el feedback incluido y comprobamos los entregables."],
  ["Entrega", "Entrego, publico o pongo en marcha el trabajo y acordamos el siguiente paso."],
]

const limits = [
  "Las revisiones incluidas se definen en cada propuesta.",
  "Los trabajos fuera del alcance se presupuestan aparte.",
  "No se garantizan ventas, seguidores ni posiciones concretas en buscadores.",
  "Sí se responde por el proceso y los entregables acordados.",
  "Los plazos dependen también de la entrega de materiales y las aprobaciones del cliente.",
]

export default function CollaborationSection() {
  const processRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="relative px-8 py-24 sm:py-28">
      <div ref={processRef} className="reveal mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Proceso</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Un recorrido claro de principio a fin.</h2>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73] sm:text-lg">Primero entendemos el problema. Después ordenamos prioridades, alcance y responsabilidades antes de producir.</p>
        </div>
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-7">
          {processSteps.map(([title, text], index) => (
            <li key={title} className="relative rounded-3xl border border-white/60 bg-white/45 p-5 lg:min-h-64">
              <span className="text-xs font-semibold text-[#0071e3]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-base font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{text}</p>
            </li>
          ))}
        </ol>
        <aside className="rounded-3xl border border-[#0071e3]/15 bg-[#eef7ff]/75 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-[#1d1d1f]">Un alcance claro desde el principio.</h3>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-[#6e6e73] md:grid-cols-2">
            {limits.map(item => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]" />{item}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  )
}
