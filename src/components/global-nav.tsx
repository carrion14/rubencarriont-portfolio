"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export type NavLink = { id: string; label: string }

export default function GlobalNav({
  links,
  activeId,
  ctaId = "contact",
  ctaLabel = "Hablemos",
  homeHref = "/",
}: {
  links: NavLink[]
  activeId?: string
  ctaId?: string
  ctaLabel?: string
  homeHref?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", close)
    return () => document.removeEventListener("keydown", close)
  }, [open])

  return (
    <header className="global-nav">
      <nav aria-label="Navegación principal" className="mx-auto flex h-full max-w-[1024px] items-center justify-between gap-6 px-5">
        <Link href={homeHref} className="text-[0.9375rem] font-semibold tracking-tight text-[#1d1d1f]">
          Rubén Carrión
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} aria-current={activeId === link.id ? "true" : undefined} className="global-nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={`#${ctaId}`} className="rounded-full bg-[#0071e3] px-3.5 py-1 text-xs font-medium text-white transition-colors hover:bg-[#0077ed]">
            {ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] md:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-12 bg-[#fbfbfd]/95 px-8 pt-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)} className="block py-2 text-[1.75rem] font-semibold tracking-tight text-[#1d1d1f]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
