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
            title="Diseñador gráfico, web e IA"
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
              Diseñador polivalente, <span className="text-gradient">pero no genérico.</span>
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
              Llevo tres años trabajando en contextos reales de marca y producción visual: branding, packaging, maquetación, campañas, contenido y materiales para equipos comerciales o de marketing.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              En Kärcher España he creado y adaptado piezas para campañas, retail, Amazon, web, editorial e Instagram, coordinando diseño y publicación durante varios meses. También aplico IA generativa, desarrollo web y automatizaciones sencillas cuando ayudan a producir mejor y más rápido.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              textClassName="text-base leading-relaxed sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              En los equipos donde he trabajado valoran mi rapidez, mi agilidad para sacar trabajo adelante y mi facilidad para orientarme a las necesidades del equipo. Vivo en Barcelona y puedo colaborar en remoto, híbrido o presencial.
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
