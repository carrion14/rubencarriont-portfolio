"use client"

import Image from "next/image"
import { Globe, Mail } from "lucide-react"

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
        className="reveal visible relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center sm:px-8"
      >
        <div className="mb-6 overflow-hidden rounded-full border border-white/70 bg-white/45 p-1 shadow-[0_18px_50px_rgba(0,113,227,0.12)] backdrop-blur-2xl">
          <Image
            src="/img/brand/foto_perfil.png"
            alt="Retrato de Rubén Carrión"
            width={96}
            height={96}
            priority
            sizes="96px"
            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
          />
        </div>

        <p className="liquid-pill mb-5 inline-flex px-4 py-2 text-xs font-medium text-[#0071e3]">
          Diseñador gráfico · Creativo digital · IA aplicada
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tighter text-[#1d1d1f] sm:text-7xl md:text-8xl">
          Rubén <span className="hero-name">Carrión</span>
        </h1>

        <div className="mb-9 grid max-w-3xl gap-4 text-base leading-relaxed text-[#6e6e73] sm:text-xl">
          <p>
            Diseñador gráfico especializado en branding, packaging, maquetación editorial, campañas y producción visual. También desarrollo páginas web y aplico inteligencia artificial, generación de recursos y automatización para agilizar procesos creativos y construir soluciones digitales más completas.
          </p>
          <p className="text-sm text-[#86868b] sm:text-base">
            He trabajado en proyectos reales de marca, producto, comunicación y contenido para empresas como Kärcher España, Bluesun y CPP Chemical Group. Estoy disponible para proyectos freelance y para oportunidades dentro de equipos creativos, de marketing o comunicación.
          </p>
        </div>

        <div className="mb-9 flex w-full max-w-2xl flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <StarBorder
            onClick={() => onNavigate("projects")}
            className="hero-star-button hero-star-button-primary"
            color="#7cc8ff"
            speed="5s"
            thickness={1}
          >
            Ver proyectos
          </StarBorder>
          <StarBorder
            onClick={() => onNavigate("contact")}
            className="hero-star-button hero-star-button-secondary"
            color="#0071e3"
            speed="6s"
            thickness={1}
          >
            Trabaja conmigo
          </StarBorder>
          <button
            onClick={() => onNavigate("work")}
            className="liquid-pill px-5 py-3 text-sm font-semibold text-[#0071e3] transition-all hover:text-blue-600 active:scale-95"
          >
            Ver experiencia
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/rubencarriontorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-pill flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#6e6e73] transition-all hover:text-[#0071e3]"
          >
            <Globe className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href="mailto:rubencarrion6@gmail.com"
            className="liquid-pill flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#6e6e73] transition-all hover:text-[#0071e3]"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
