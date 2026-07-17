"use client"

import { ArrowDown } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ProfileCard from "@/components/ui/profile-card"
import ScrollReveal from "@/components/ui/scroll-reveal"

export default function AboutSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const contentRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative flex w-full items-center justify-center px-8 py-24 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-24">
        <div ref={titleRef} className="reveal shrink-0">
          <ProfileCard
            avatarUrl="/img/brand/foto_cara.png"
            miniAvatarUrl="/img/brand/foto_perfil.png"
            name="Rubén Carrión"
            title="Diseñador Gráfico & IA Designer"
            handle="rubencarriont"
            status="Disponible"
            contactText="Contactar"
            className="w-[min(82vw,23rem)]"
            onContactClick={() => onNavigate("contact")}
          />
        </div>

        <div ref={contentRef} className="reveal reveal-delay-1 flex max-w-xl flex-col gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Presentación</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
              Sobre <span className="text-gradient">mí</span>
            </h2>
          </div>

          <div className="space-y-5 text-[#6e6e73]">
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              Soy Rubén Carrión, diseñador gráfico con experiencia en branding, packaging y publicidad. Actualmente trabajo como IA Designer en Kärcher España, donde aplico inteligencia artificial al diseño y la automatización de procesos creativos.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              Especializado en diseño de envases, campañas visuales y maquetación editorial. Me formé en Producción Audiovisual y Diseño Gráfico, y ahora estoy metido de lleno en automatización con IA y desarrollo frontend.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              He trabajado con Kärcher, NTRSV, Xomega, Tecnocon, Bluesun, CPP Chemical Group y más. Mi enfoque: diseño con criterio, sin humo.
            </ScrollReveal>
          </div>

          <button
            onClick={() => onNavigate("work")}
            className="mt-2 flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-blue-600 active:text-[#005bb5]"
          >
            Ver experiencia
            <ArrowDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  )
}
