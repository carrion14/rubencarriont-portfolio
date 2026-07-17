"use client"

import Image from "next/image"
import { useCallback, useRef, type PointerEvent } from "react"

import { cn } from "@/lib/utils"

type ProfileCardProps = {
  avatarUrl: string
  miniAvatarUrl?: string
  name: string
  title: string
  handle: string
  status?: string
  contactText?: string
  className?: string
  onContactClick?: () => void
}

export default function ProfileCard({
  avatarUrl,
  miniAvatarUrl,
  name,
  title,
  handle,
  status = "Disponible",
  contactText = "Contactar",
  className,
  onContactClick,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const setPointer = useCallback((clientX: number, clientY: number) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100))
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100))
    const centerX = percentX - 50
    const centerY = percentY - 50

    card.style.setProperty("--pc-pointer-x", `${percentX}%`)
    card.style.setProperty("--pc-pointer-y", `${percentY}%`)
    card.style.setProperty("--pc-rotate-x", `${-(centerY / 7)}deg`)
    card.style.setProperty("--pc-rotate-y", `${centerX / 8}deg`)
  }, [])

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      setPointer(event.clientX, event.clientY)
    },
    [setPointer],
  )

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    card.style.setProperty("--pc-pointer-x", "50%")
    card.style.setProperty("--pc-pointer-y", "50%")
    card.style.setProperty("--pc-rotate-x", "0deg")
    card.style.setProperty("--pc-rotate-y", "0deg")
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn("profile-card", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="profile-card-glow" />
      <div className="profile-card-shell">
        <div className="profile-card-shine" />
        <Image
          className="profile-card-avatar"
          src={avatarUrl}
          alt={`${name} avatar`}
          width={368}
          height={512}
          sizes="(max-width: 768px) 82vw, 23rem"
        />

        <div className="profile-card-heading">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>

        <div className="profile-card-user">
          <div className="profile-card-user-details">
            <Image
              src={miniAvatarUrl ?? avatarUrl}
              alt=""
              className="profile-card-mini-avatar"
              width={48}
              height={48}
              sizes="48px"
            />
            <div>
              <p className="profile-card-handle">@{handle}</p>
              <p className="profile-card-status">{status}</p>
            </div>
          </div>
          <button type="button" className="profile-card-contact" onClick={onContactClick}>
            {contactText}
          </button>
        </div>
      </div>
    </div>
  )
}
