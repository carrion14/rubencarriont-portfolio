"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { RevealWords, ScrollZoom } from "@/components/motion"

export default function AboutSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const contentRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="band band-gray">
      <div ref={contentRef} className="reveal container-wide grid items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-20">
        <div className="tile relative mx-auto aspect-[4/5] w-full max-w-[440px]">
          <ScrollZoom className="absolute inset-0">
            <Image src="/img/brand/foto_cara.png" alt="Retrato de Rubén Carrión" fill sizes="(max-width: 768px) 90vw, 440px" className="object-cover" />
          </ScrollZoom>
        </div>

        <div className="max-w-[560px]">
          <p className="kicker">Sobre mí</p>
          <h2 className="headline mt-3"><RevealWords text="Estudié cine." /> <RevealWords text="Luego diseño. Ahora también programo." className="headline-muted" delay={0.3} /></h2>
          <div className="mt-8 space-y-5 text-[1.1875rem] leading-relaxed text-[#6e6e73]">
            <p>
              Soy Rubén Carrión, <strong className="font-semibold text-[#1d1d1f]">diseñador gráfico y community manager en Barcelona</strong>. Vengo del audiovisual, me formé en diseño en l&apos;Escola del Treball y en 2025 hice el bootcamp front-end de Barcelona Activa. Por eso puedo llevar el vídeo, la imagen y la web de un mismo negocio sin pasarle la pelota a nadie.
            </p>
            <p>
              He pasado por <strong className="font-semibold text-[#1d1d1f]">Kärcher España, Bluesun y CPP Chemical Group</strong>: campañas, retail, packaging, etiquetas que tenían que cumplir normativa europea. Ahí aprendí que un diseño precioso que no llega a imprenta a tiempo sirve de poco.
            </p>
            <p>Cuando alguien me escribe, lo primero que hago es preguntar.</p>
          </div>
          <button type="button" onClick={() => onNavigate("work")} className="link-apple mt-8">
            Ver experiencia <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
