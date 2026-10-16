"use client"

import { ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const contactEmail = "rubencarrion6@gmail.com"

const inputClass =
  "w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3.5 text-[1.0625rem] text-[#1d1d1f] placeholder:text-[#86868b] transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-4 focus:ring-[#0071e3]/15"

export default function ContactSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  void onNavigate

  const titleRef = useScrollReveal<HTMLDivElement>()
  const contentRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="band band-gray">
      <div className="container-apple">
        <div ref={titleRef} className="reveal mx-auto max-w-[760px] text-center">
          <p className="kicker">Contacto</p>
          <h2 className="headline mt-3">Cuéntame qué está fallando. <span className="headline-muted">Te contesto yo.</span></h2>
          <p className="lead mx-auto mt-6 max-w-[620px]">
            Escríbeme con lo que tengas, aunque no sepas bien qué necesitas. Normalmente respondo con un par de preguntas y una idea de por dónde empezar.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <a href={`mailto:${contactEmail}`} className="link-apple">
              {contactEmail} <ChevronRight className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/rubencarriontorres/" target="_blank" rel="noopener noreferrer" className="link-apple">
              LinkedIn <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div ref={contentRef} className="reveal reveal-delay-1 tile mx-auto mt-14 max-w-[760px] p-6 sm:p-10 md:mt-16">
          <form action={`https://formsubmit.co/${contactEmail}`} method="POST" className="grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="_subject" value="Consulta de negocio desde rubencarriont.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Honeypot antispam: FormSubmit descarta los envíos que rellenan este campo */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <input type="hidden" name="_next" value="https://rubencarriont.com/?contact=sent" />
            <label className="sr-only" htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Nombre" autoComplete="name" required maxLength={120} className={inputClass} />
            <label className="sr-only" htmlFor="company">Negocio o empresa</label>
            <input id="company" name="company" type="text" placeholder="Negocio o empresa" autoComplete="organization" required maxLength={160} className={inputClass} />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required maxLength={254} className={`${inputClass} sm:col-span-2`} />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-[#1d1d1f]" htmlFor="improvement">¿Qué quieres mejorar?</label>
              <select id="improvement" name="improvement" required className={inputClass} defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Redes sociales</option><option>Web</option><option>Google Business</option><option>Imagen visual</option><option>No lo tengo claro</option>
              </select>
            </div>
            <label className="sr-only" htmlFor="explanation">Breve explicación</label>
            <textarea id="explanation" name="explanation" placeholder="¿Qué está pasando? Con dos líneas me basta" rows={4} required maxLength={3000} className={`${inputClass} sm:col-span-2`} />
            <label className="sr-only" htmlFor="timeline">Plazo aproximado</label>
            <input id="timeline" name="timeline" type="text" placeholder="Plazo aproximado" required maxLength={120} className={`${inputClass} sm:col-span-2`} />
            <label className="flex items-start gap-3 text-sm leading-relaxed text-[#6e6e73] sm:col-span-2">
              <input name="privacy" type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#c7c7cc] accent-[#0071e3]" />
              Acepto que Rubén Carrión use estos datos solo para responder a esta consulta. No se enviarán newsletters ni comunicaciones comerciales automáticas.
            </label>

            <button type="submit" className="btn-apple btn-primary mt-2 sm:col-span-2">
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
