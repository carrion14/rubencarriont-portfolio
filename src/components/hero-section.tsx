"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

const showcase = [
  { src: "/img/projects/2026-karcher-kira-b200-magazine/page-01.jpg", alt: "Portada de la revista Kärcher KIRA B 200", ratio: "aspect-[3/4]", width: "w-[58vw] md:w-[17%]" },
  { src: "/img/projects/2026-berbel-tattoo-web/berbel-home.png", alt: "Página de inicio de la web de Berbel Tattoo", ratio: "aspect-[4/3]", width: "w-[78vw] md:w-[27%]" },
  { src: "/img/projects/2023-mitsuo-jkatsui-editorial-libro/1_1_xjmx8r.png", alt: "Cartel editorial de Mitsuo Katsui", ratio: "aspect-square", width: "w-[64vw] md:w-[19%]" },
  { src: "/img/projects/2026-karcher-retail-print/karcher-center-valencia-vinilo.jpeg", alt: "Vinilo de fachada del Kärcher Center Valencia", ratio: "aspect-[4/3]", width: "w-[78vw] md:w-[27%]" },
]

const clients = ["Kärcher España", "Bluesun", "CPP Chemical Group", "Berbel Tattoo"]

export default function HeroSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <div className="band band-white overflow-hidden !px-0 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center">
        <Image
          src="/img/brand/ruben-carrion-retrato.jpg"
          alt="Rubén Carrión, diseñador gráfico en Barcelona"
          width={72}
          height={72}
          priority
          className="mb-5 h-16 w-16 rounded-full object-cover md:h-[72px] md:w-[72px]"
        />
        <h1>
          <span className="kicker mb-3 text-[#6e6e73]">Diseñador gráfico y community manager en Barcelona</span>
          <span className="headline-hero block">
            Tu negocio ya tiene valor.
            <br className="hidden sm:block" /> <span className="hero-name">Hagamos que se vea.</span>
          </span>
        </h1>
        <p className="lead mt-6 max-w-[640px]">
          Trabajo con negocios pequeños de Barcelona y Badalona que hacen bien su trabajo pero no lo parecen en Instagram, en Google o en su web. Yo me ocupo del diseño, del contenido y de la web. Tú sigues con lo tuyo.
        </p>
        <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
          <button type="button" onClick={() => onNavigate("contact")} className="btn-apple btn-primary">
            Cuéntame qué necesitas
          </button>
          <button type="button" onClick={() => onNavigate("projects")} className="link-apple">
            Ver proyectos <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="snap-row mt-16 md:mx-auto md:mt-20 md:max-w-[1200px] md:items-end md:justify-center md:gap-4 md:overflow-visible md:px-5">
        {showcase.map((item, index) => (
          <figure key={item.src} className={`${item.width} ${item.ratio} relative overflow-hidden rounded-[1.5rem] bg-[#f5f5f7] md:flex-shrink`}>
            <Image src={item.src} alt={item.alt} fill priority={index < 2} sizes="(max-width: 768px) 78vw, 330px" className="object-cover" />
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-[980px] flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 text-center">
        <span className="w-full text-xs font-semibold uppercase tracking-[0.08em] text-[#86868b] sm:w-auto">He trabajado para</span>
        {clients.map((client) => (
          <span key={client} className="text-[1.0625rem] font-semibold tracking-tight text-[#6e6e73]">{client}</span>
        ))}
      </div>
    </div>
  )
}
