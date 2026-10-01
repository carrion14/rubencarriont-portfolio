"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ExternalLink, Mail } from "lucide-react"

import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import WorkSection from "@/components/work-section"
import SideRays from "@/components/ui/side-rays"

const navigation = [
  ["projects", "Proyectos"],
  ["experience", "Experiencia"],
  ["education", "Formación"],
  ["about", "Sobre mí"],
] as const

export default function ProfessionalPortfolio() {
  const navigate = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const y = element.getBoundingClientRect().top + window.scrollY - 16
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <main className="relative w-full overflow-hidden bg-transparent pb-20">
      <div className="noise pointer-events-none fixed inset-0 z-[999]" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="liquid-pill mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 shadow-[0_16px_40px_rgba(0,113,227,0.09)]">
          <button onClick={() => navigate("top")} className="text-sm font-semibold text-[#1d1d1f]">
            Rubén Carrión
          </button>
          <nav className="hidden items-center gap-5 md:flex" aria-label="Navegación del portfolio">
            {navigation.map(([id, label]) => (
              <button key={id} onClick={() => navigate(id)} className="text-xs font-medium text-[#6e6e73] transition-colors hover:text-[#0071e3]">
                {label}
              </button>
            ))}
          </nav>
          <button onClick={() => navigate("contact")} className="rounded-full bg-[#0071e3] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#0077ed] active:scale-95">
            Contacto
          </button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[96svh] w-full items-center justify-center overflow-hidden px-6 pb-20 pt-28 sm:px-8">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_48%,#ffffff_100%)]" />
        <SideRays className="absolute inset-0 z-[1]" speed={2.1} rayColor1="#005CFF" rayColor2="#00C8FF" intensity={1.55} spread={2.1} origin="top-right" tilt={-7} saturation={1.25} blend={0.48} falloff={1.65} opacity={0.65} />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.45),rgba(255,255,255,0.08)_36%,rgba(255,255,255,0.8)_78%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 max-w-4xl lg:order-1">
            <p className="liquid-pill mb-6 inline-flex px-4 py-2 text-xs font-medium text-[#0071e3]">
              Portfolio profesional · Barcelona
            </p>
            <h1 className="text-5xl font-semibold leading-[0.96] tracking-tighter text-[#1d1d1f] sm:text-7xl md:text-8xl">
              Diseño con criterio. <span className="hero-name">Ejecución que funciona.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-[#6e6e73] sm:text-xl">
              Soy <strong className="key-phrase">Rubén Carrión, diseñador gráfico y creador digital</strong>. Trabajo en campañas, contenido, packaging, retail, web y producción visual, conectando creatividad, marca y necesidades reales de negocio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate("projects")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95">
                Ver proyectos <ArrowDown className="h-4 w-4" />
              </button>
              <button onClick={() => navigate("experience")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/55 px-6 py-3.5 text-sm font-semibold text-[#1d1d1f] backdrop-blur-xl transition-all hover:bg-white/75 active:scale-95">
                Ver experiencia <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="order-1 mx-auto overflow-hidden rounded-full border border-white/70 bg-white/45 p-1.5 shadow-[0_18px_50px_rgba(0,113,227,0.12)] backdrop-blur-2xl lg:order-2 lg:mx-0">
            <Image src="/img/brand/foto_perfil.png" alt="Retrato de Rubén Carrión" width={240} height={240} priority sizes="(max-width: 1024px) 160px, 240px" className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40 lg:h-60 lg:w-60" />
          </div>
        </div>
      </section>

      <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
      <section id="experience"><WorkSection onNavigate={navigate} ctaLabel="Hablemos de una oportunidad" /></section>
      <section id="education"><EducationSection onNavigate={navigate} /></section>

      <section id="about" className="relative px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-white/60 bg-white/40 p-6 shadow-[0_24px_70px_rgba(29,29,31,0.06)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Image src="/img/brand/foto_cara.png" alt="Rubén Carrión" width={340} height={420} sizes="(max-width: 1024px) 80vw, 340px" className="mx-auto max-h-[27rem] w-full max-w-sm rounded-3xl object-cover" />
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Sobre mí</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
              Perfil creativo <span className="editorial-accent">con visión global.</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#6e6e73] sm:text-lg">
              <p>Mi perfil combina <strong className="key-phrase">diseño gráfico, contenido, web y herramientas de inteligencia artificial</strong>. Me adapto con facilidad a equipos, marcas y formatos distintos.</p>
              <p>He desarrollado trabajo real para <strong className="key-phrase">Kärcher España, Bluesun y CPP Chemical Group</strong>, desde campañas y retail hasta packaging, maquetación, redes y entornos digitales.</p>
              <p>Me interesa convertir ideas en piezas claras, coherentes y bien ejecutadas, cuidando tanto el concepto como los detalles de producción.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#0071e3]/15 bg-[#eef7ff]/75 p-8 sm:p-12">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Contacto</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">¿Hablamos?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6e6e73]">Disponible para oportunidades profesionales, colaboraciones y proyectos en los que diseño y ejecución tengan el mismo peso.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:rubencarrion6@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95">
              <Mail className="h-4 w-4" /> rubencarrion6@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rubencarriontorres/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#1d1d1f] transition-all hover:bg-white active:scale-95">
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <Link href="/" className="mt-7 inline-block text-xs font-medium text-[#86868b] transition-colors hover:text-[#0071e3]">Ver web completa</Link>
        </div>
      </section>
    </main>
  )
}
