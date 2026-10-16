"use client"

import { ArrowDown } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ProfileCard from "@/components/ui/profile-card"

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
            <p className="eyebrow">Sobre mí</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
              Estudié cine. <span className="editorial-accent">Luego diseño. Ahora también programo.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-[#6e6e73] sm:text-lg">
            <p>
              Soy Rubén Carrión, <strong className="key-phrase">diseñador gráfico y community manager en Barcelona</strong>. Vengo del audiovisual, me formé en diseño en l&apos;Escola del Treball y en 2025 hice el bootcamp front-end de Barcelona Activa. Por eso puedo llevar el vídeo, la imagen y la web de un mismo negocio sin pasarle la pelota a nadie.
            </p>
            <p>
              He pasado por <strong className="key-phrase">Kärcher España, Bluesun y CPP Chemical Group</strong>: campañas, retail, packaging, etiquetas que tenían que cumplir normativa europea. Ahí aprendí que un diseño precioso que no llega a imprenta a tiempo sirve de poco.
            </p>
            <p>
              Cuando alguien me escribe, lo primero que hago es preguntar.
            </p>
          </div>

          <button
            onClick={() => onNavigate("work")}
            className="press mt-2 flex w-fit items-center gap-2 text-sm font-medium text-[#0066cc] transition-colors hover:text-[#004f9e]"
          >
            Ver experiencia
            <ArrowDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  )
}
