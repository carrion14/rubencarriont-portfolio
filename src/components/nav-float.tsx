"use client"

import { useEffect, useState } from "react"
import { Briefcase, FolderOpen, GraduationCap, Home, MessageSquare, Sparkles, User } from "lucide-react"

import Dock from "@/components/ui/dock"

const sections = [
  { id: "hero", label: "Inicio", icon: Home },
  { id: "about", label: "Sobre mí", icon: User },
  { id: "work", label: "Experiencia", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "education", label: "Formación", icon: GraduationCap },
  { id: "projects", label: "Proyectos", icon: FolderOpen },
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
    <nav className="fixed inset-x-0 bottom-3 z-50 flex justify-center px-3 sm:bottom-5">
      <Dock items={items} panelHeight={70} baseItemSize={46} magnification={66} />
    </nav>
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
