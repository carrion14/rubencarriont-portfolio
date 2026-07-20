"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { flushSync } from "react-dom"
import { X, ChevronLeft, ChevronRight, Book } from "lucide-react"
import { projects, type Project } from "@/lib/projects-data"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

const filters = [
  { key: "design", label: "Diseño" },
  { key: "ia", label: "IA" },
  { key: "web", label: "Web" },
] as const

type FilterKey = (typeof filters)[number]["key"]

function isVideoAsset(src: string) {
  return src.toLowerCase().endsWith(".mp4")
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
    return (
      <video
        src={src}
        className={className}
        controls={controls}
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }

  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes} className={className} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1200}
      sizes={sizes}
      className={className}
    />
  )
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

    flushSync(() => {
      setTurn(direction)
    })
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
            <BookImage src={images[0]} />
          </div>
        ) : (
          <>
            <div className="book-spine" />

            <div className="book-static-page book-static-page-left">
              <BookImage src={images[leftPage]} />
            </div>

            <div className="book-static-page book-static-page-right">
              {rightPage < images.length ? <BookImage src={images[rightPage]} /> : <div className="book-blank-page" />}
            </div>
          </>
        )}

        {turn === "next" && !isCover && rightPage < images.length && (
          <div className="book-turn-page book-turn-page-next">
            <div className="book-turn-face book-turn-front">
              <BookImage src={images[rightPage]} />
            </div>
            <div className="book-turn-face book-turn-back">
              {images[rightPage + 1] ? <BookImage src={images[rightPage + 1]} /> : <div className="book-blank-page" />}
            </div>
          </div>
        )}

        {turn === "prev" && spread > 1 && (
          <div className="book-turn-page book-turn-page-prev">
            <div className="book-turn-face book-turn-front">
              <BookImage src={images[leftPage]} />
            </div>
            <div className="book-turn-face book-turn-back">
              <BookImage src={images[leftPage - 1]} />
            </div>
          </div>
        )}
      </div>

      {spreadCount > 1 && (
        <div className="book-controls">
          <button
            onClick={() => changeSpread("prev")}
            disabled={!canGoPrev || !!turn}
            className="book-control-button"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="book-page-count">
            {isCover ? "Portada" : `${spread} / ${spreadCount - 1}`}
          </span>
          <button
            onClick={() => changeSpread("next")}
            disabled={!canGoNext || !!turn}
            className="book-control-button"
            aria-label="Página siguiente"
          >
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return
    touchStartRef.current = { x: e.clientX, y: e.clientY }
    touchMovedRef.current = false
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch" || !touchStartRef.current) return
    const dx = Math.abs(e.clientX - touchStartRef.current.x)
    const dy = Math.abs(e.clientY - touchStartRef.current.y)
    if (dx > 10 || dy > 10) touchMovedRef.current = true
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
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      className="group relative overflow-hidden rounded-2xl text-left transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.4)] p-1 transition-all duration-500 group-hover:bg-[rgba(255,255,255,0.6)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[rgba(0,0,0,0.02)]">
          <ProjectMedia
            src={project.images[0]}
            alt={project.title}
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
        <p className="text-xs font-medium text-[#0071e3]">{project.year}</p>
        <h3 className="text-sm font-semibold text-[#1d1d1f]">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#86868b]">{project.description}</p>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center sm:p-8" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] backdrop-blur-2xl" />
      <div
        className="relative z-10 mx-auto flex max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-h-[85vh] sm:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#6e6e73] shadow-sm backdrop-blur-md transition-all hover:bg-white hover:text-[#1d1d1f]"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden md:flex-row md:overflow-hidden">
          <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.02)] md:w-3/5 md:min-h-[60vh]">
            <div className="flex w-full min-w-0 items-center justify-center p-3 sm:p-6 md:h-full">
              {project.hasBookAnimation ? (
                <BookViewer images={project.images} />
              ) : (
                <ProjectMedia
                  src={project.images[imgIndex]}
                  alt={project.title}
                  className="max-h-[45vh] max-w-full rounded-xl object-contain shadow-sm md:max-h-[65vh]"
                  sizes="(max-width: 768px) 88vw, 52vw"
                  controls
                />
              )}
            </div>
            {!project.hasBookAnimation && project.images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#6e6e73] shadow-sm backdrop-blur-md transition-all hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setImgIndex((i) => (i + 1) % project.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#6e6e73] shadow-sm backdrop-blur-md transition-all hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`h-1 w-1 rounded-full transition-all ${i === imgIndex ? "w-4 bg-[#0071e3]" : "bg-[rgba(0,0,0,0.15)]"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex min-w-0 flex-col gap-4 p-5 sm:p-7 md:w-2/5 md:overflow-y-auto">
            <div>
              <p className="text-xs font-medium text-[#0071e3]">{project.year}</p>
              <h2 className="text-xl font-semibold text-[#1d1d1f]">{project.title}</h2>
            </div>
            <p className="text-sm leading-relaxed text-[#6e6e73]">{project.longDescription || project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[rgba(0,113,227,0.07)] px-2.5 py-0.5 text-xs font-medium text-[#0071e3]">{tag}</span>
              ))}
            </div>
            {project.tools && project.tools.length > 0 && (
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#86868b]">Herramientas</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-[rgba(0,0,0,0.04)] px-2.5 py-0.5 text-xs text-[#6e6e73]">{tool}</span>
                  ))}
                </div>
              </div>
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
  const [activeFilter, setActiveFilter] = useState<FilterKey>("design")
  const [showAll, setShowAll] = useState(false)

  // Mapeo de categorías a filtros
  const categoryMap: Record<FilterKey, string[]> = {
    design: ["design", "branding", "editorial", "poster"],
    ia: ["ia"],
    web: [],
  }

  const filtered = projects.filter((p) => categoryMap[activeFilter].includes(p.category))
  const displayed = showAll ? filtered : filtered.slice(0, 4)

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-10">
        <div ref={titleRef} className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Portfolio</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Proyectos</h2>
            <ScrollReveal
              baseOpacity={0.45}
              baseRotation={0.8}
              blurStrength={1.2}
              containerClassName="mt-4 max-w-xl"
              textClassName="text-base leading-relaxed text-[#86868b] sm:text-lg"
              wordAnimationEnd="top 45%"
            >
              Una selección de identidades, piezas editoriales, carteles y sistemas visuales construidos con criterio gráfico.
            </ScrollReveal>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="shrink-0 rounded-full bg-[rgba(0,0,0,0.04)] px-4 py-2 text-xs font-medium text-[#0071e3] transition-all hover:bg-[rgba(0,0,0,0.08)] active:scale-95"
          >
            {showAll ? "Ver menos" : "Ver todos"}
          </button>
        </div>

        {/* Filtros */}
        <div ref={gridRef} className="reveal reveal-delay-1 flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => { setActiveFilter(f.key); setShowAll(false) }}
              className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                activeFilter === f.key
                  ? "bg-[#0071e3] text-white shadow-sm"
                  : "bg-[rgba(0,0,0,0.04)] text-[#6e6e73] hover:bg-[rgba(0,0,0,0.08)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {displayed.length > 0 ? (
            displayed.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center text-sm text-[#86868b]">
              No hay proyectos de esta categoría todavía.
            </div>
          )}
        </div>

        <button
          onClick={() => onNavigate("contact")}
          className="flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-blue-600"
        >
          Contactar
        </button>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
