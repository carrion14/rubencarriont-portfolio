"use client"

import { useEffect, useRef } from "react"

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const revealed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already visible on mount (e.g. hero section), show immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible")
      revealed.current = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          revealed.current = true
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
