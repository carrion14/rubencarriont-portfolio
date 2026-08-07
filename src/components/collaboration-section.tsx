"use client"

import { BriefcaseBusiness, CalendarCheck, Handshake, Layers3, MessageSquareText, Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const collaborationCards = [
  {
    icon: BriefcaseBusiness,
    title: "¿Necesitas un profesional freelance?",
    text: "Puedo incorporarme a un proyecto concreto o cubrir necesidades recurrentes de diseño, contenido, web, marketing para redes y producción digital con un alcance claro.",
    button: "Cuéntame tu proyecto",
    target: "contact",
  },
  {
    icon: Handshake,
    title: "¿Buscas incorporar a alguien al equipo?",
    text: "Estoy abierto a oportunidades en equipos creativos, agencias y departamentos de diseño, marketing o comunicación donde pueda aportar diseño, producción e IA aplicada.",
    button: "Ver experiencia",
    target: "work",
  },
]

const processSteps = [
  {
    icon: MessageSquareText,
    title: "Contexto",
    text: "Entiendo el objetivo, el público, los materiales disponibles y las limitaciones reales.",
  },
  {
    icon: CalendarCheck,
    title: "Propuesta",
    text: "Defino alcance, entregables, calendario y forma de trabajo antes de producir.",
  },
  {
    icon: Layers3,
    title: "Producción",
    text: "Diseño, adapto, maqueto o construyo las piezas manteniendo revisiones claras.",
  },
  {
    icon: Send,
    title: "Entrega",
    text: "Preparo archivos finales, versiones necesarias y criterios para que el material se pueda usar.",
  },
]

export default function CollaborationSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const cardsRef = useScrollReveal<HTMLDivElement>()
  const processRef = useScrollReveal<HTMLDivElement>()

  return (
    <div className="relative flex w-full flex-col items-center justify-center px-8 pb-24 pt-0 sm:pb-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="text-sm leading-relaxed text-[#6e6e73] sm:text-base">
            Puedo ayudarte en proyectos puntuales, necesidades recurrentes o incorporándome a un equipo creativo donde haga falta diseño, producción visual, marketing para redes y criterio digital.
          </p>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 grid gap-5 md:grid-cols-2">
          {collaborationCards.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="flex min-h-[20rem] flex-col justify-between rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_18px_55px_rgba(29,29,31,0.06)] backdrop-blur-2xl sm:p-8"
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#6e6e73] sm:text-base">{card.text}</p>
                </div>

                <button
                  onClick={() => onNavigate(card.target)}
                  className="mt-8 w-fit rounded-full bg-[#0071e3] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95"
                >
                  {card.button}
                </button>
              </article>
            )
          })}
        </div>

        <div ref={processRef} className="reveal reveal-delay-2 rounded-3xl border border-white/60 bg-white/35 p-6 shadow-[0_18px_55px_rgba(29,29,31,0.05)] backdrop-blur-2xl sm:p-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Proceso</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Un proceso claro desde el primer día.</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6e6e73] sm:text-base">
              Un proceso claro para entender el objetivo, concretar el alcance y avanzar con revisiones y decisiones ordenadas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="rounded-2xl bg-white/45 p-5">
                  <Icon className="h-5 w-5 text-[#0071e3]" />
                  <h4 className="mt-4 text-base font-semibold text-[#1d1d1f]">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{step.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
