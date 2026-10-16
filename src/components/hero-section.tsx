"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SideRays from "@/components/ui/side-rays"
import StarBorder from "@/components/ui/star-border"

const clients = ["Kärcher España", "Bluesun", "CPP Chemical Group", "Berbel Tattoo"]

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
        className="reveal visible relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-8 pb-28 pt-24 text-left sm:px-10 lg:grid-cols-[1fr_auto] lg:gap-14 lg:px-8 lg:py-24"
      >
        <div className="order-2 max-w-4xl lg:order-1">
          <h1 className="mb-6 text-5xl font-semibold tracking-tighter text-[#1d1d1f] sm:text-7xl md:text-8xl">
            <span className="liquid-pill mb-6 flex w-fit px-4 py-2 text-xs font-medium leading-normal tracking-normal text-[#0066cc]">
              Diseñador gráfico y community manager en Barcelona
            </span>
            Tu negocio ya tiene valor.{" "}<span className="hero-name">Hagamos que se vea.</span>
          </h1>
          <div className="mb-8 grid max-w-2xl gap-4 text-base leading-relaxed text-[#515154] sm:text-xl">
            <p>
              Trabajo con <strong className="key-phrase">negocios pequeños de Barcelona y Badalona</strong> que hacen bien su trabajo pero no lo parecen en Instagram, en Google o en su web. Yo me ocupo del diseño, del contenido y de la web. Tú sigues con lo tuyo.
            </p>
            <p className="text-sm text-[#6e6e73] sm:text-base">
              Antes de proponerte nada miro qué está fallando de verdad. A veces es solo la ficha de Google.
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
            className="press inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#0066cc] transition-colors hover:text-[#004f9e]"
          >
            Ver proyectos <ArrowRight className="h-4 w-4" />
          </button>
          </div>
        </div>
        <div className="order-1 mx-auto overflow-hidden rounded-full border border-white/70 bg-white/45 p-1.5 shadow-[0_18px_50px_rgba(0,113,227,0.12)] backdrop-blur-2xl lg:order-2 lg:mx-0">
          <Image src="/img/brand/foto_perfil.png" alt="Rubén Carrión, diseñador gráfico en Barcelona" width={224} height={224} priority sizes="(max-width: 1024px) 160px, 224px" className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40 lg:h-56 lg:w-56" />
        </div>
        <div className="order-3 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#1d1d1f]/[0.06] pt-6 text-sm text-[#86868b] lg:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.08em]">He trabajado para</span>
          {clients.map((client) => (
            <span key={client} className="font-semibold tracking-tight text-[#515154]">{client}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
