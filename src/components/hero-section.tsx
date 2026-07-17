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
        intensity={2.2}
        spread={2.12}
        origin="top-right"
        tilt={-7}
        saturation={1.58}
        blend={0.56}
        falloff={1.58}
        opacity={0.84}
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.42),rgba(255,255,255,0.1)_34%,rgba(255,255,255,0.7)_76%)]" />
      <div className="ios-glow-top pointer-events-none absolute inset-0 z-[3]" />
      <div className="ios-glow-bottom pointer-events-none absolute inset-0 z-[3]" />

      <div
        ref={contentRef}
        className="reveal visible relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-8 text-center"
      >
        <div className="mb-6 overflow-hidden rounded-full border border-white/70 bg-white/45 p-1 shadow-[0_18px_50px_rgba(0,113,227,0.12)] backdrop-blur-2xl">
          <Image
            src="/img/brand/foto_perfil.png"
            alt="Ruben Carrion"
            width={96}
            height={96}
            priority
            sizes="96px"
            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
          />
        </div>

        <h1 className="mb-2 text-5xl font-semibold tracking-tighter text-[#1d1d1f] sm:text-7xl md:text-8xl">
          Ruben <span className="hero-name">Carrion</span>
        </h1>

        <p className="mb-1 text-lg font-medium text-[#6e6e73] sm:text-xl">
          Disenador Grafico & <span className="text-[#0071e3]">IA Designer</span>
        </p>

        <p className="mb-10 max-w-md text-base leading-relaxed text-[#86868b] sm:text-lg">
          Branding, packaging, publicidad y automatizacion con IA.
        </p>

        <div className="mb-10 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:flex-row">
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
            onClick={() => onNavigate("work")}
            className="hero-star-button hero-star-button-secondary"
            color="#0071e3"
            speed="6s"
            thickness={1}
          >
            Ver experiencia
          </StarBorder>
          <StarBorder
            onClick={() => onNavigate("contact")}
            className="hero-star-button hero-star-button-secondary"
            color="#0071e3"
            speed="7s"
            thickness={1}
          >
            Contacto
          </StarBorder>
        </div>

        <div className="flex items-center gap-4">
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
