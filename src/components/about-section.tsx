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
            title="Diseño, contenido y presencia digital"
            handle="rubencarriont"
            status="Disponible"
            contactText="Contactar"
            className="w-[min(82vw,23rem)]"
            onContactClick={() => onNavigate("contact")}
          />
        </div>

        <div ref={contentRef} className="reveal reveal-delay-1 flex max-w-xl flex-col gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Sobre mí</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
              Un colaborador versátil <span className="editorial-accent">con visión global.</span>
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
              Soy Rubén Carrión, diseñador gráfico, community manager y especialista en inteligencia artificial. Ayudo a pequeños negocios a mejorar su presencia visual y digital conectando diseño, contenido, web y marketing.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              He trabajado en proyectos reales de branding, packaging, campañas, contenido, web y producción visual para empresas como Kärcher España, Bluesun y CPP Chemical Group. Esa experiencia me permite combinar creatividad, ejecución y criterio comercial.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              No intento incluir todos mis servicios en cada proyecto. Primero detecto qué necesita el negocio y después preparo una solución concreta, con prioridades y límites claros.
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
