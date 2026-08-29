"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { Book, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react"
import { projects, type Project } from "@/lib/projects-data"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

const filters = [
  { key: "all", label: "Todos" },
  { key: "design", label: "Diseño" },
  { key: "content", label: "Contenido y redes" },
  { key: "web", label: "Web" },
] as const

type FilterKey = (typeof filters)[number]["key"]

function isVideoAsset(src: string) {
  return src.toLowerCase().endsWith(".mp4")
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function projectText(project: Project) {
  return normalize(`${project.title} ${project.description} ${project.longDescription ?? ""} ${project.tags.join(" ")} ${project.category}`)
}

function projectMatchesFilter(project: Project, filter: FilterKey): boolean {
  if (filter === "all") return true
  return getProjectServiceKey(project) === filter
}

function getProjectServiceKey(project: Project): Exclude<FilterKey, "all"> {
  if (["karcher-instagram-ai-design", "karcher-amazon-banners", "cruz-cafune-concert"].includes(project.id)) return "content"
  if (["berbel-tattoo-web", "karcher-web-campaigns"].includes(project.id) || project.category === "web") return "web"
  return "design"
}

function getProjectServiceCategory(project: Project) {
  const labels = { design: "Diseño", content: "Contenido y redes", web: "Web" }
  return labels[getProjectServiceKey(project)]
}

function getProjectYear(project: Project) {
  const year = Number.parseInt(project.year, 10)
  return Number.isNaN(year) ? 0 : year
}

function sortProjectsByPriority(items: Project[]) {
  const priority = { content: 0, design: 1, web: 2 }
  return items
    .map((project, index) => ({ project, index }))
    .sort((a, b) => priority[getProjectServiceKey(a.project)] - priority[getProjectServiceKey(b.project)] || getProjectYear(b.project) - getProjectYear(a.project) || a.index - b.index)
    .map(({ project }) => project)
}

function getProjectContext(project: Project) {
  if (project.tags.some((tag) => normalize(tag).includes("berbel"))) return "Berbel Tattoo"
  const knownClients = ["Karcher", "Kärcher", "Bluesun", "CPP", "NTRSV", "Xomega", "Tecnocon", "Nike"]
  const clientTag = project.tags.find((tag) => knownClients.some((client) => normalize(tag).includes(normalize(client))))
  if (clientTag) return clientTag === "Karcher" ? "Kärcher España" : clientTag
  if (projectText(project).includes("karcher")) return "Kärcher España"
  return project.category === "poster" ? "Proyecto gráfico" : "Proyecto personal"
}

function getMainCategory(project: Project) {
  return getProjectServiceCategory(project)
}

function getSecondaryTags(project: Project) {
  const context = normalize(getProjectContext(project))
  const main = normalize(getMainCategory(project))

  return project.tags
    .filter((tag) => {
      const clean = normalize(tag)
      return clean !== context && clean !== main && !clean.includes("karcher")
    })
    .slice(0, 2)
}

function getResponsibility(project: Project) {
  const main = getMainCategory(project)
  if (main === "Web") return "Diseño web, experiencia de usuario y desarrollo frontend aplicado al proyecto."
  if (main === "Contenido y redes") return "Estrategia visual, composición, adaptación a formatos y producción de contenido para campañas o redes."
  return "Diseño gráfico, composición visual y preparación de entregables."
}

function ProjectMedia({
  src,
  alt,
  className,
  controls = false,
  fill = false,
  sizes = "(max-width: 768px) 92vw, 50vw",
}: {
  src: string
  alt: string
  className?: string
  controls?: boolean
  fill?: boolean
  sizes?: string
}) {
  if (isVideoAsset(src)) {
    return <video src={src} className={className} controls={controls} muted loop playsInline preload="metadata" />
  }

  if (fill) return <Image src={src} alt={alt} fill sizes={sizes} className={className} />

  return <Image src={src} alt={alt} width={1600} height={1200} sizes={sizes} className={className} />
}

function BookImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 768px) 82vw, 32rem" />
}

function BookViewer({ images }: { images: string[] }) {
  const [spread, setSpread] = useState(0)
  const [turn, setTurn] = useState<"next" | "prev" | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  if (images.length === 0) return null

  const isCover = spread === 0
  const spreadCount = 1 + Math.ceil(Math.max(0, images.length - 1) / 2)
  const leftPage = isCover ? 0 : 1 + (spread - 1) * 2
  const rightPage = leftPage + 1
  const canGoPrev = spread > 0
  const canGoNext = spread < spreadCount - 1

  const changeSpread = (direction: "next" | "prev") => {
    if (turn) return
    if (direction === "next" && !canGoNext) return
    if (direction === "prev" && !canGoPrev) return

    flushSync(() => setTurn(direction))
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setSpread((current) => current + (direction === "next" ? 1 : -1))
      setTurn(null)
    }, 620)
  }

  return (
    <div className="book-viewer">
      <div className={`book-stage ${isCover ? "book-stage-cover" : ""}`}>
        {isCover ? (
          <div className="book-static-page book-cover-page">
            <BookImage src={images[0]} alt="Portada del libro" />
          </div>
        ) : (
          <>
            <div className="book-spine" />
            <div className="book-static-page book-static-page-left">
              <BookImage src={images[leftPage]} alt="Página izquierda del libro" />
            </div>
            <div className="book-static-page book-static-page-right">
              {rightPage < images.length ? <BookImage src={images[rightPage]} alt="Página derecha del libro" /> : <div className="book-blank-page" />}
            </div>
          </>
        )}

        {turn === "next" && !isCover && rightPage < images.length && (
          <div className="book-turn-page book-turn-page-next">
            <div className="book-turn-face book-turn-front">
              <BookImage src={images[rightPage]} alt="Página en movimiento" />
            </div>
            <div className="book-turn-face book-turn-back">
              {images[rightPage + 1] ? <BookImage src={images[rightPage + 1]} alt="Página siguiente" /> : <div className="book-blank-page" />}
            </div>
          </div>
        )}

        {turn === "prev" && spread > 1 && (
          <div className="book-turn-page book-turn-page-prev">
            <div className="book-turn-face book-turn-front">
              <BookImage src={images[leftPage]} alt="Página en movimiento" />
            </div>
            <div className="book-turn-face book-turn-back">
              <BookImage src={images[leftPage - 1]} alt="Página anterior" />
            </div>
          </div>
        )}
      </div>

      {spreadCount > 1 && (
        <div className="book-controls">
          <button onClick={() => changeSpread("prev")} disabled={!canGoPrev || !!turn} className="book-control-button" aria-label="Página anterior">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="book-page-count">{isCover ? "Portada" : `${spread} / ${spreadCount - 1}`}</span>
          <button onClick={() => changeSpread("next")} disabled={!canGoNext || !!turn} className="book-control-button" aria-label="Página siguiente">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const touchMovedRef = useRef(false)
  const mainCategory = getMainCategory(project)
  const secondaryTags = getSecondaryTags(project)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return
    touchStartRef.current = { x: e.clientX, y: e.clientY }
    touchMovedRef.current = false
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch" || !touchStartRef.current) return
    const dx = Math.abs(e.clientX - touchStartRef.current.x)
    const dy = Math.abs(e.clientY - touchStartRef.current.y)
    if (dx > 12 || dy > 12) touchMovedRef.current = true
  }

  const handleClick = () => {
    if (touchMovedRef.current) {
      touchMovedRef.current = false
      return
    }
    onClick()
  }

  return (
    <div
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick()
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl text-left transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/35"
    >
      <div className="overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.4)] p-1 transition-all duration-500 group-hover:bg-[rgba(255,255,255,0.6)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[rgba(0,0,0,0.02)]">
          <ProjectMedia
            src={project.images[0]}
            alt={`Miniatura del proyecto ${project.title}`}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
          />
          {project.hasBookAnimation && (
            <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-[#0071e3] shadow-sm backdrop-blur-md">
              <Book className="h-3 w-3" /> Libro
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 px-1">
        <p className="text-xs font-medium text-[#0071e3]">{getProjectContext(project)} · {project.year}</p>
        <h3 className="text-sm font-semibold text-[#1d1d1f]">{project.title}</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[#0071e3]/10 px-2 py-0.5 text-[11px] font-medium text-[#0071e3]">{mainCategory}</span>
          {secondaryTags.map((tag) => (
            <span key={tag} className="rounded-full bg-[rgba(0,0,0,0.04)] px-2 py-0.5 text-[11px] font-medium text-[#6e6e73]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)
  const mainCategory = getMainCategory(project)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center sm:p-8" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] backdrop-blur-2xl" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative z-10 mx-auto flex max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-h-[85vh] sm:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#6e6e73] shadow-sm backdrop-blur-md transition-all hover:bg-white hover:text-[#1d1d1f]" aria-label="Cerrar proyecto">
          <X className="h-4 w-4" />
        </button>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden md:flex-row md:overflow-hidden">
          <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.02)] md:w-3/5 md:min-h-[60vh]">
            <div className="flex w-full min-w-0 items-center justify-center p-3 sm:p-6 md:h-full">
              {project.hasBookAnimation ? (
                <BookViewer images={project.images} />
              ) : (
                <ProjectMedia src={project.images[imgIndex]} alt={project.title} className="max-h-[45vh] max-w-full rounded-xl object-contain shadow-sm md:max-h-[65vh]" sizes="(max-width: 768px) 88vw, 52vw" controls />
              )}
            </div>
            {!project.hasBookAnimation && project.images.length > 1 && (
              <>
                <button onClick={() => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)} className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#6e6e73] shadow-sm backdrop-blur-md transition-all hover:bg-white" aria-label="Imagen anterior">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => setImgIndex((i) => (i + 1) % project.images.length)} className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#6e6e73] shadow-sm backdrop-blur-md transition-all hover:bg-white" aria-label="Imagen siguiente">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((_, i) => (
                    <button key={i} onClick={() => setImgIndex(i)} className={`h-1 w-1 rounded-full transition-all ${i === imgIndex ? "w-4 bg-[#0071e3]" : "bg-[rgba(0,0,0,0.15)]"}`} aria-label={`Ver imagen ${i + 1}`} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex min-w-0 flex-col gap-5 p-5 sm:p-7 md:w-2/5 md:overflow-y-auto">
            <div>
              <p className="text-xs font-medium text-[#0071e3]">{getProjectContext(project)} · {project.year}</p>
              <h2 id="project-modal-title" className="text-xl font-semibold text-[#1d1d1f]">{project.title}</h2>
            </div>

            <div className="rounded-2xl bg-[rgba(0,0,0,0.03)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Ficha del proyecto</p>
              <dl className="mt-3 space-y-3 text-sm leading-relaxed text-[#6e6e73]">
                <div>
                  <dt className="font-semibold text-[#1d1d1f]">Contexto / objetivo</dt>
                  <dd>{project.longDescription || project.description}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d1d1f]">Responsabilidad</dt>
                  <dd>{getResponsibility(project)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d1d1f]">Categoría principal</dt>
                  <dd>{mainCategory}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[rgba(0,113,227,0.07)] px-2.5 py-0.5 text-xs font-medium text-[#0071e3]">{tag}</span>
              ))}
            </div>
            {project.tools && project.tools.length > 0 && (
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#86868b]">Herramientas / entregables</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-[rgba(0,0,0,0.04)] px-2.5 py-0.5 text-xs text-[#6e6e73]">{tool}</span>
                  ))}
                </div>
              </div>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95"
              >
                Visitar página
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollReveal<HTMLDivElement>()
  const [selected, setSelected] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all")
  const [showAll, setShowAll] = useState(false)
  const filtered = sortProjectsByPriority(projects.filter((project) => projectMatchesFilter(project, activeFilter)))
  const visibleProjects = showAll ? filtered : filtered.slice(0, 8)

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div ref={titleRef} className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Portfolio</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Proyectos</h2>
            <ScrollReveal baseOpacity={0.45} baseRotation={0.8} blurStrength={1.2} containerClassName="mt-4 max-w-2xl" textClassName="text-base leading-relaxed text-[#86868b] sm:text-lg" wordAnimationEnd="top 45%">
              Proyectos reales organizados por contenido y redes, diseño, web e IA aplicada. Puedes abrir cada caso para ver sus piezas y el contexto del trabajo.
            </ScrollReveal>
          </div>
          <button onClick={() => onNavigate("contact")} className="shrink-0 rounded-full bg-[#0071e3] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:bg-[#0077ed] active:scale-95">
            Hablemos
          </button>
        </div>

        <div ref={gridRef} className="reveal reveal-delay-1 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                setActiveFilter(filter.key)
                setShowAll(false)
              }}
              aria-pressed={activeFilter === filter.key}
              className={`rounded-full px-5 py-2 text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30 ${
                activeFilter === filter.key
                  ? "bg-[#0071e3] text-white shadow-sm"
                  : "bg-[rgba(0,0,0,0.04)] text-[#6e6e73] hover:bg-[rgba(0,0,0,0.08)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {filtered.length > 0 ? (
            visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />)
          ) : (
            <div className="col-span-full py-24 text-center text-sm text-[#86868b]">
              Todavía no hay proyectos públicos en esta categoría.
            </div>
          )}
        </div>

        {filtered.length > 8 && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="rounded-full bg-[rgba(0,0,0,0.05)] px-6 py-3 text-sm font-semibold text-[#1d1d1f] transition-all hover:bg-[rgba(0,0,0,0.08)] active:scale-95"
            >
              {showAll ? "Ver menos" : `Ver más proyectos (${filtered.length - visibleProjects.length})`}
            </button>
          </div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
