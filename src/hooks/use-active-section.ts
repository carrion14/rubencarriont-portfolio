"use client"

import { useEffect, useState } from "react"

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
      const y = el.getBoundingClientRect().top + window.scrollY - 48
      window.scrollTo({ top: y, behavior: "smooth" })
      setActive(id)
    }
  }

  return [active, navigate]
}
