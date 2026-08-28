"use client"

import { useEffect, useState } from "react"
import { FolderOpen, Home, MessageSquare, PanelsTopLeft, Route, User } from "lucide-react"

import Dock from "@/components/ui/dock"

const sections = [
  { id: "hero", label: "Inicio", icon: Home },
  { id: "services", label: "Servicios", icon: PanelsTopLeft },
  { id: "projects", label: "Proyectos", icon: FolderOpen },
  { id: "process", label: "Proceso", icon: Route },
  { id: "about", label: "Sobre mí", icon: User },
  { id: "contact", label: "Contacto", icon: MessageSquare },
]

export default function NavFloat({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (id: string) => void
}) {
  const items = sections.map((section) => {
    const Icon = section.icon

    return {
      label: section.label,
      active: activeSection === section.id,
      onClick: () => onNavigate(section.id),
      icon: <Icon className="h-[1.15rem] w-[1.15rem]" />,
    }
  })

  return (
    <>
      <button
        onClick={() => onNavigate("contact")}
        className="liquid-pill fixed right-4 top-4 z-50 px-4 py-2 text-xs font-semibold text-[#0071e3] shadow-[0_16px_40px_rgba(0,113,227,0.12)] transition-all hover:-translate-y-0.5 hover:text-[#005bb5] active:scale-95 sm:right-6 sm:top-6"
      >
        Hablemos
      </button>
      <nav className="fixed inset-x-0 bottom-3 z-50 flex justify-center px-3 sm:bottom-5">
        <Dock items={items} panelHeight={70} baseItemSize={46} magnification={66} />
      </nav>
    </>
  )
}

export function useActiveSection(): [string, (id: string) => void] {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.28, rootMargin: "-12% 0px -45% 0px" },
    )

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navigate = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 12
      window.scrollTo({ top: y, behavior: "smooth" })
      setActive(id)
    }
  }

  return [active, navigate]
}
