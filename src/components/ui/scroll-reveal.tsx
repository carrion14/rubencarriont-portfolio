"use client"

import { type ReactNode, useEffect, useMemo, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

type ScrollRevealProps = {
  children: ReactNode
  scrollContainerRef?: React.RefObject<HTMLElement | null>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
  rotationEnd?: string
  wordAnimationEnd?: string
}

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.45,
  baseRotation = 0.8,
  blurStrength = 1.2,
  containerClassName,
  textClassName,
  rotationEnd = "top 45%",
  wordAnimationEnd = "top 45%",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children

    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word

      return (
        <span className="scroll-reveal-word" key={`${word}-${index}`}>
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const scroller = scrollContainerRef?.current ?? window

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            end: rotationEnd,
            scrub: true,
          },
        },
      )

      const wordElements = el.querySelectorAll(".scroll-reveal-word")

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: "opacity" },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.018,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            end: wordAnimationEnd,
            scrub: true,
          },
        },
      )

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "none",
            filter: "blur(0px)",
            stagger: 0.018,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top 85%",
              end: wordAnimationEnd,
              scrub: true,
            },
          },
        )
      }
    }, el)

    return () => ctx.revert()
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ])

  return (
    <div ref={containerRef} className={cn("scroll-reveal", containerClassName)}>
      <p className={cn("scroll-reveal-text", textClassName)}>{splitText}</p>
    </div>
  )
}
