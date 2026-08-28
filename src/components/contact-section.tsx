"use client"

import { FileText, Globe, Mail, Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

const contactEmail = "rubencarrion6@gmail.com"

const inputClass =
  "rounded-2xl bg-[rgba(255,255,255,0.55)] px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] transition-all focus:bg-[rgba(255,255,255,0.76)] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30"

export default function ContactSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  void onNavigate

  const titleRef = useScrollReveal<HTMLDivElement>()
  const contentRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-14">
        <div ref={titleRef} className="reveal">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Contacto</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Hablemos de <span className="editorial-accent">la prioridad de tu negocio.</span>
          </h2>
        </div>

        <div ref={contentRef} className="reveal reveal-delay-1 grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-6">
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed text-[#6e6e73] sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              Cuéntame qué parte de tu presencia digital quieres mejorar. Te responderé con las preguntas necesarias y un siguiente paso claro.
            </ScrollReveal>

            <div className="space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 text-sm font-medium text-[#6e6e73] transition-all hover:bg-[rgba(255,255,255,0.7)]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#0071e3]" />
                {contactEmail}
              </a>
              <a
                href="https://www.linkedin.com/in/rubencarriontorres/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 text-sm font-medium text-[#6e6e73] transition-all hover:bg-[rgba(255,255,255,0.7)]"
              >
                <Globe className="h-5 w-5 shrink-0 text-[#0071e3]" />
                LinkedIn /rubencarriontorres
              </a>
              <span aria-disabled="true" title="Catálogo pendiente de incorporar" className="flex cursor-not-allowed items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.35)] p-4 text-sm font-medium text-[#86868b] opacity-70">
                <FileText className="h-5 w-5 shrink-0 text-[#0071e3]" />
                Ver catálogo de servicios
              </span>
            </div>
          </div>

          <form action={`https://formsubmit.co/${contactEmail}`} method="POST" className="flex flex-col gap-4">
            <input type="hidden" name="_subject" value="Consulta de negocio desde rubencarriont.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://rubencarriont.com/?contact=sent" />
            <label className="sr-only" htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Nombre" autoComplete="name" required className={inputClass} />
            <label className="sr-only" htmlFor="company">Negocio o empresa</label>
            <input id="company" name="company" type="text" placeholder="Negocio o empresa" autoComplete="organization" required className={inputClass} />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required className={inputClass} />
            <label className="text-xs font-semibold text-[#6e6e73]" htmlFor="improvement">¿Qué quieres mejorar?</label>
            <select id="improvement" name="improvement" required className={inputClass} defaultValue="">
              <option value="" disabled>Selecciona una opción</option>
              <option>Redes sociales</option><option>Web</option><option>Google Business</option><option>Imagen visual</option><option>No lo tengo claro</option>
            </select>
            <label className="sr-only" htmlFor="explanation">Breve explicación</label>
            <textarea id="explanation" name="explanation" placeholder="Breve explicación" rows={4} required className={inputClass} />
            <label className="sr-only" htmlFor="timeline">Plazo aproximado</label>
            <input id="timeline" name="timeline" type="text" placeholder="Plazo aproximado" required className={inputClass} />
            <label className="flex items-start gap-3 rounded-2xl bg-white/35 p-4 text-xs leading-relaxed text-[#6e6e73]">
              <input name="privacy" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-[#c7c7cc] accent-[#0071e3]" />
              Acepto que Rubén Carrión use estos datos solo para responder a esta consulta. No se enviarán newsletters ni comunicaciones comerciales automáticas.
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#0071e3] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95"
            >
              Cuéntame qué necesitas
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
