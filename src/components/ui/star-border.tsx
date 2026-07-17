"use client"

import { type CSSProperties, type ElementType, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type StarBorderProps = {
  as?: ElementType
  className?: string
  color?: string
  speed?: string
  thickness?: number
  children: ReactNode
  style?: CSSProperties
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export default function StarBorder({
  as: Component = "button",
  className,
  color = "#0071e3",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) {
  return (
    <Component
      className={cn("star-border-container", className)}
      style={{
        padding: `${thickness}px 0`,
        ...style,
      }}
      {...rest}
    >
      <div
        className="star-border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="star-border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="star-border-content">{children}</div>
    </Component>
  )
}
