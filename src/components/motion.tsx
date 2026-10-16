"use client"

import { Fragment, type ReactNode, useRef } from "react"
import { motion, type MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react"

// Curva de salida suave sin rebote: el contenido llega y se asienta, no salta.
const ease = [0.22, 1, 0.36, 1] as const

/** Bloque que aparece al entrar en pantalla: sube un poco y pasa de desenfocado a nítido. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "article" | "li" | "figure"
}) {
  const reduce = useReducedMotion()
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Component>
  )
}

/** Titular cuyas palabras entran una a una. Recibe texto plano para poder partirlo. */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  immediate = false,
  wordClassName = "",
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  immediate?: boolean
}) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  const animateProps = immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } }

  return (
    <motion.span
      className={className}
      initial={reduce ? false : "hidden"}
      {...animateProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { opacity: 0, y: "0.35em", filter: "blur(12px)" },
              show: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.8, ease } },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  )
}

/** Contenedor que escalona la entrada de sus hijos <StaggerItem>. */
export function Stagger({ children, className, stagger = 0.1 }: { children: ReactNode; className?: string; stagger?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease } },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Imagen con un leve zoom de salida ligado al scroll, como las fotos de producto de Apple. */
export function ScrollZoom({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1])
  return (
    <div ref={ref} className={className}>
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
        {children}
      </motion.div>
    </div>
  )
}

function ScrollWord({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{" "}
    </motion.span>
  )
}

/** Frase que se "enciende" palabra a palabra mientras haces scroll. */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] })
  const words = text.split(" ")

  if (reduce) return <p className={className}>{text}</p>

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <ScrollWord key={`${word}-${index}`} word={word} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]} />
      ))}
    </p>
  )
}

/** Cinta continua (marquee). Duplica el contenido para que el bucle no tenga corte. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="shrink-0">{item}</li>
      ))}
    </ul>
  )
  return (
    <div className={`marquee ${className ?? ""}`}>
      {row(false)}
      {row(true)}
    </div>
  )
}
