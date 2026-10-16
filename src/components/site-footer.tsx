import Link from "next/link"

const year = new Date().getFullYear()

export default function SiteFooter({ variant = "home" }: { variant?: "home" | "portfolio" }) {
  return (
    <footer className={`relative px-6 pt-12 sm:px-8 ${variant === "home" ? "pb-36" : "pb-12"}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#1d1d1f]/[0.08] pt-8 text-sm text-[#6e6e73] sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-semibold text-[#1d1d1f]">Rubén Carrión</p>
          <p className="mt-1 leading-relaxed">Diseñador gráfico y community manager en Barcelona. Trabajo con negocios de Barcelona, Badalona y alrededores.</p>
        </div>
        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
          {variant === "home" ? (
            <Link href="/portfolio" className="transition-colors hover:text-[#0066cc]">Portfolio profesional</Link>
          ) : (
            <Link href="/" className="transition-colors hover:text-[#0066cc]">Servicios para negocios</Link>
          )}
          <a href="mailto:rubencarrion6@gmail.com" className="transition-colors hover:text-[#0066cc]">rubencarrion6@gmail.com</a>
          <a href="https://www.linkedin.com/in/rubencarriontorres/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0066cc]">LinkedIn</a>
        </nav>
        <p className="text-xs text-[#86868b]">© {year} Rubén Carrión</p>
      </div>
    </footer>
  )
}
