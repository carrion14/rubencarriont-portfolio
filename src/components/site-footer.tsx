import Link from "next/link"

const year = new Date().getFullYear()

export default function SiteFooter({ variant = "home" }: { variant?: "home" | "portfolio" }) {
  return (
    <footer className="bg-[#f5f5f7] px-5 pb-10 pt-6 text-xs leading-relaxed text-[#6e6e73]">
      <div className="mx-auto max-w-[980px]">
        <p className="border-b border-[#d2d2d7] pb-4">
          Rubén Carrión, diseñador gráfico y community manager en Barcelona. Trabajo con negocios de Barcelona, Badalona y alrededores.
        </p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {year} Rubén Carrión. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-2 gap-y-1">
            {variant === "home" ? (
              <Link href="/portfolio" className="text-[#424245] hover:underline">Portfolio profesional</Link>
            ) : (
              <Link href="/" className="text-[#424245] hover:underline">Servicios para negocios</Link>
            )}
            <span aria-hidden="true" className="text-[#d2d2d7]">|</span>
            <a href="mailto:rubencarrion6@gmail.com" className="text-[#424245] hover:underline">Email</a>
            <span aria-hidden="true" className="text-[#d2d2d7]">|</span>
            <a href="https://www.linkedin.com/in/rubencarriontorres/" target="_blank" rel="noopener noreferrer" className="text-[#424245] hover:underline">LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
