"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SideRays from "@/components/ui/side-rays"
import StarBorder from "@/components/ui/star-border"

export default function HeroSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const contentRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_48%,#ffffff_100%)]" />
      <SideRays
        className="absolute inset-0 z-[1]"
        speed={2.25}
        rayColor1="#005CFF"
        rayColor2="#00C8FF"
        intensity={1.7}
        spread={2.12}
        origin="top-right"
        tilt={-7}
        saturation={1.35}
        blend={0.5}
        falloff={1.62}
        opacity={0.72}
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.38),rgba(255,255,255,0.08)_34%,rgba(255,255,255,0.74)_76%)]" />
      <div className="ios-glow-top pointer-events-none absolute inset-0 z-[3]" />
      <div className="ios-glow-bottom pointer-events-none absolute inset-0 z-[3]" />

      <div
        ref={contentRef}
        className="reveal visible relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-24 text-left lg:grid-cols-[1fr_auto] lg:px-8"
      >
        <div className="max-w-4xl">
          <p className="liquid-pill mb-6 inline-flex px-4 py-2 text-xs font-medium text-[#0071e3]">
            Diseño · Contenido · Web y marketing digital
          </p>
          <h1 className="mb-6 text-5xl font-semibold tracking-tighter text-[#1d1d1f] sm:text-7xl md:text-8xl">
            Tu negocio ya tiene valor.{" "}<span className="hero-name">Hagamos que se vea.</span>
          </h1>
          <div className="mb-8 grid max-w-3xl gap-4 text-base leading-relaxed text-[#6e6e73] sm:text-xl">
            <p>
              Ayudo a pequeños negocios que funcionan bien, pero cuya presencia digital no refleja su calidad. Combino diseño, contenido para redes, web y marketing para mejorar su imagen, ganar visibilidad y generar más oportunidades sin que necesiten un equipo de marketing completo.
            </p>
            <p className="text-sm text-[#86868b] sm:text-base">
              Analizo qué necesita realmente cada negocio y preparo una solución con prioridades, alcance y objetivos claros.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <StarBorder
            onClick={() => onNavigate("contact")}
            className="hero-star-button hero-star-button-primary"
            color="#7cc8ff"
            speed="5s"
            thickness={1}
          >
            Cuéntame qué necesitas
          </StarBorder>
          <StarBorder
            onClick={() => onNavigate("services")}
            className="hero-star-button hero-star-button-secondary"
            color="#0071e3"
            speed="6s"
            thickness={1}
          >
            Ver servicios
          </StarBorder>
          <button
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#0071e3] transition-all hover:text-blue-600 active:scale-95"
          >
            Ver proyectos <ArrowRight className="h-4 w-4" />
          </button>
          </div>
        </div>
        <div className="mx-auto overflow-hidden rounded-full border border-white/70 bg-white/45 p-1 shadow-[0_18px_50px_rgba(0,113,227,0.12)] backdrop-blur-2xl lg:mx-0">
          <Image src="/img/brand/foto_perfil.png" alt="Retrato de Rubén Carrión" width={144} height={144} priority sizes="144px" className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36" />
        </div>
      </div>
    </section>
  )
}
