"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronRight } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import { Marquee, RevealWords } from "@/components/motion"

const showcase = [
  { src: "/img/projects/2026-karcher-kira-b200-magazine/page-01.jpg", alt: "Portada de la revista Kärcher KIRA B 200", ratio: "aspect-[3/4]", width: "w-[58vw] md:w-[17%]", speed: -60 },
  { src: "/img/projects/2026-berbel-tattoo-web/berbel-home.png", alt: "Página de inicio de la web de Berbel Tattoo", ratio: "aspect-[4/3]", width: "w-[78vw] md:w-[27%]", speed: 30 },
  { src: "/img/projects/2023-mitsuo-jkatsui-editorial-libro/1_1_xjmx8r.png", alt: "Cartel editorial de Mitsuo Katsui", ratio: "aspect-square", width: "w-[64vw] md:w-[19%]", speed: -90 },
  { src: "/img/projects/2026-karcher-retail-print/karcher-center-valencia-vinilo.jpeg", alt: "Vinilo de fachada del Kärcher Center Valencia", ratio: "aspect-[4/3]", width: "w-[78vw] md:w-[27%]", speed: 10 },
]

const clients = ["Kärcher España", "Bluesun", "CPP Chemical Group", "Berbel Tattoo"]

const ease = [0.22, 1, 0.36, 1] as const

function ShowcaseTile({ item, index, progress }: { item: (typeof showcase)[number]; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const reduce = useReducedMotion()
  const y = useTransform(progress, [0, 1], [0, item.speed])
  return (
    <motion.figure
      className={`${item.width} ${item.ratio} relative overflow-hidden rounded-[1.5rem] bg-[#f5f5f7] shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:flex-shrink`}
      initial={reduce ? false : { opacity: 0, y: 120, rotate: index % 2 ? 2 : -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1.2, ease, delay: 0.7 + index * 0.12 }}
    >
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <Image src={item.src} alt={item.alt} fill priority={index < 2} sizes="(max-width: 768px) 78vw, 330px" className="scale-110 object-cover" />
      </motion.div>
    </motion.figure>
  )
}

export default function HeroSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const galleryScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.06])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  return (
    <div ref={ref} className="band band-white overflow-hidden !px-0 pb-16 pt-28 md:pb-24 md:pt-36">
      <motion.div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center" style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.35, duration: 0.9 }}>
          <Image
            src="/img/brand/ruben-carrion-retrato.jpg"
            alt="Rubén Carrión, diseñador gráfico en Barcelona"
            width={72}
            height={72}
            priority
            className="mb-5 h-16 w-16 rounded-full object-cover md:h-[72px] md:w-[72px]"
          />
        </motion.div>
        <h1>
          <motion.span
            className="kicker mb-3 text-[#6e6e73]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            Diseñador gráfico y community manager en Barcelona
          </motion.span>
          <span className="headline-hero block">
            <RevealWords text="Tu negocio ya tiene valor." immediate delay={0.15} />
            <br className="hidden sm:block" />{" "}
            <RevealWords text="Hagamos que se vea." immediate delay={0.45} wordClassName="hero-name" />
          </span>
        </h1>
        <motion.p
          className="lead mt-6 max-w-[640px]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.75 }}
        >
          Trabajo con negocios pequeños de Barcelona y Badalona que hacen bien su trabajo pero no lo parecen en Instagram, en Google o en su web. Yo me ocupo del diseño, del contenido y de la web. Tú sigues con lo tuyo.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
        >
          <button type="button" onClick={() => onNavigate("contact")} className="btn-apple btn-primary">
            Cuéntame qué necesitas
          </button>
          <button type="button" onClick={() => onNavigate("projects")} className="link-apple group">
            Ver proyectos <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="snap-row mt-16 md:mx-auto md:mt-20 md:max-w-[1200px] md:items-end md:justify-center md:gap-4 md:overflow-visible md:px-5"
        style={reduce ? undefined : { scale: galleryScale }}
      >
        {showcase.map((item, index) => (
          <ShowcaseTile key={item.src} item={item} index={index} progress={scrollYProgress} />
        ))}
      </motion.div>

      <div className="mx-auto mt-14 max-w-[980px] px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868b]">He trabajado para</p>
        <Marquee items={clients} className="mt-5 text-[1.0625rem] font-semibold tracking-tight text-[#6e6e73]" />
      </div>
    </div>
  )
}
