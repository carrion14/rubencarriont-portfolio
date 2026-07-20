"use client"

import { useState } from "react"
import { Mail, Globe, Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

const contactEmail = "rubencarrion6@gmail.com"

export default function ContactSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  void onNavigate

  const titleRef = useScrollReveal<HTMLDivElement>()
  const contentRef = useScrollReveal<HTMLDivElement>()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const message = String(formData.get("message") || "").trim()
    const subject = `Nuevo mensaje desde rubencarriont.com${name ? ` - ${name}` : ""}`
    const body = [
      name ? `Nombre: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      message,
    ].filter((line) => line !== null).join("\n")

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    form.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-14">
        <div ref={titleRef} className="reveal">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Contacto</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Hablemos
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
              ¿Tienes un proyecto en mente? ¿Necesitas diseño, branding o automatización con IA? Háblame sin compromiso.
            </ScrollReveal>

            <div className="space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 text-sm font-medium text-[#6e6e73] transition-all hover:bg-[rgba(255,255,255,0.7)]"
              >
                <Mail className="h-5 w-5 text-[#0071e3] shrink-0" />
                {contactEmail}
              </a>
              <a
                href="https://www.linkedin.com/in/rubencarriontorres/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 text-sm font-medium text-[#6e6e73] transition-all hover:bg-[rgba(255,255,255,0.7)]"
              >
                <Globe className="h-5 w-5 text-[#0071e3] shrink-0" />
                LinkedIn /rubencarriontorres
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              autoComplete="name"
              required
              className="rounded-2xl bg-[rgba(255,255,255,0.5)] px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] transition-all focus:bg-[rgba(255,255,255,0.7)] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="rounded-2xl bg-[rgba(255,255,255,0.5)] px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] transition-all focus:bg-[rgba(255,255,255,0.7)] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30"
            />
            <textarea
              name="message"
              placeholder="Cuéntame tu idea..."
              rows={4}
              required
              className="rounded-2xl bg-[rgba(255,255,255,0.5)] px-4 py-3.5 text-sm text-[#1d1d1f] placeholder:text-[#86868b] transition-all focus:bg-[rgba(255,255,255,0.7)] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30"
            />
            <button
              type="submit"
              disabled={sent}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#0071e3] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95 disabled:opacity-70"
            >
              {sent ? "Correo abierto" : "Enviar"}
              <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-xs leading-relaxed text-[#86868b]" role="status">
                Se ha abierto tu app de correo con el mensaje preparado. Revísalo y pulsa enviar para que llegue a {contactEmail}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
