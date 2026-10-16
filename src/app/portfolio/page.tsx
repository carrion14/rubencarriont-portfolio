"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import EducationSection from "@/components/education-section"
import GlobalNav from "@/components/global-nav"
import ProjectsSection from "@/components/projects-section"
import SiteFooter from "@/components/site-footer"
import WorkSection from "@/components/work-section"
import { useActiveSection } from "@/hooks/use-active-section"

const navLinks = [
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "education", label: "Formación" },
  { id: "about", label: "Sobre mí" },
]

export default function ProfessionalPortfolio() {
  const [activeSection, navigate] = useActiveSection()

  return (
    <>
      <GlobalNav links={navLinks} activeId={activeSection} ctaLabel="Contacto" />
      <main className="relative w-full">
        <section id="top" className="band band-white pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="container-apple flex flex-col items-center text-center">
            <Image src="/img/brand/ruben-carrion-retrato.jpg" alt="Rubén Carrión, diseñador gráfico en Barcelona" width={72} height={72} priority className="mb-5 h-16 w-16 rounded-full object-cover md:h-[72px] md:w-[72px]" />
            <h1>
              <span className="kicker mb-3 text-[#6e6e73]">Portfolio de Rubén Carrión · Diseñador gráfico en Barcelona</span>
              <span className="headline-hero block">
                Diseño que sale de la pantalla <span className="hero-name">y llega a la tienda.</span>
              </span>
            </h1>
            <p className="lead mt-6 max-w-[640px]">
              He hecho campañas para la web y el retail de Kärcher España, más de 60 etiquetas para Bluesun y la web de Berbel Tattoo, programada desde cero. Esto es una selección.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
              <button type="button" onClick={() => navigate("projects")} className="btn-apple btn-primary">Ver proyectos</button>
              <button type="button" onClick={() => navigate("experience")} className="link-apple">
                Ver experiencia <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
        <section id="experience"><WorkSection onNavigate={navigate} ctaLabel="Hablemos de una oportunidad" /></section>
        <section id="education"><EducationSection onNavigate={navigate} /></section>

        <section id="about" className="band band-white">
          <div className="container-wide grid items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-20">
            <div className="tile relative mx-auto aspect-[4/5] w-full max-w-[440px]">
              <Image src="/img/brand/foto_cara.png" alt="Retrato de Rubén Carrión" fill sizes="(max-width: 768px) 90vw, 440px" className="object-cover" />
            </div>
            <div className="max-w-[560px]">
              <p className="kicker">Sobre mí</p>
              <h2 className="headline mt-3">Un perfil mixto, <span className="headline-muted">y a propósito.</span></h2>
              <div className="mt-8 space-y-5 text-[1.1875rem] leading-relaxed text-[#6e6e73]">
                <p>Estudié cine y producción audiovisual, después <strong className="font-semibold text-[#1d1d1f]">diseño gráfico en l&apos;Escola del Treball</strong>, y en 2025 me metí en un bootcamp de front-end. Cada etapa me dejó una herramienta que sigo usando.</p>
                <p>En <strong className="font-semibold text-[#1d1d1f]">Kärcher España, Bluesun y CPP Chemical Group</strong> he tocado casi de todo: banners para Amazon, un stand de feria, una revista de producto, etiquetado con normativa europea. Me adapto rápido a marcas con manual estricto.</p>
                <p>Lo que más disfruto es el último tramo, cuando una pieza pasa de idea a archivo listo para imprenta o para publicar.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="band band-black text-center">
          <div className="container-apple">
            <p className="kicker">Contacto</p>
            <h2 className="headline mt-3 text-[#f5f5f7]">¿Hablamos?</h2>
            <p className="lead mx-auto mt-6 max-w-[560px]">Disponible para oportunidades profesionales, colaboraciones y proyectos en los que diseño y ejecución tengan el mismo peso.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
              <a href="mailto:rubencarrion6@gmail.com" className="btn-apple btn-primary">Escríbeme</a>
              <a href="https://www.linkedin.com/in/rubencarriontorres/" target="_blank" rel="noopener noreferrer" className="link-apple">
                LinkedIn <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <Link href="/" className="link-apple mt-8 text-sm">Ver servicios para negocios</Link>
          </div>
        </section>
      </main>
      <SiteFooter variant="portfolio" />
    </>
  )
}
