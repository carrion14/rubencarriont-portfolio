import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center px-8 py-24 sm:px-16">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 max-w-2xl text-5xl font-semibold tracking-tighter text-[#1d1d1f] sm:text-7xl">
        Esta página no existe. <span className="hero-name">O ya no.</span>
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-[#6e6e73]">
        Puede que el enlace sea antiguo. Lo que buscabas seguramente está en la página principal o en el portfolio.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="press rounded-full bg-[#0071e3] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077ed]">
          Ir al inicio
        </Link>
        <Link href="/portfolio" className="press rounded-full bg-[rgba(0,0,0,0.05)] px-6 py-3 text-sm font-semibold text-[#1d1d1f] transition-colors hover:bg-[rgba(0,0,0,0.08)]">
          Ver portfolio
        </Link>
      </div>
    </main>
  )
}
