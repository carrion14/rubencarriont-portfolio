"use client"

import { Check, FileText } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const starts = [
  { title: "Diagnóstico práctico", price: "150 €", items: ["Revisión de redes, web, Google e imagen.", "Reunión breve.", "Tres prioridades.", "Plan de acción de una página."], note: "Se descuentan 100 € si se contrata una implementación superior a 500 € durante los siguientes 15 días." },
  { title: "Google Business", price: "290 €", items: ["Optimización de categorías e información.", "Descripción, servicios, imágenes y enlaces.", "Recomendaciones para conseguir y gestionar reseñas.", "Una revisión."] },
  { title: "Puesta a punto visual", price: "desde 450 €", items: ["Revisión del sistema visual existente.", "Paleta, tipografías y criterios básicos.", "Plantillas o aplicaciones prioritarias."], note: "No incluye una identidad completa creada desde cero." },
]

const monthly = [
  { title: "Presencia esencial", price: "450 €/mes", items: ["Estrategia inicial sencilla y calendario.", "8 piezas mensuales.", "Hasta 2 reels editados con material aportado por el cliente.", "8 stories sencillas.", "Textos, programación y reunión mensual.", "Una red principal y adaptación espejo cuando sea viable."], note: "No incluye grabación presencial." },
  { title: "Contenido local", price: "650 €/mes", featured: true, items: ["Una sesión presencial mensual de hasta 90 minutos.", "8 piezas, con hasta 4 reels.", "Entre 8 y 12 stories.", "Ideas, guiones breves, edición, textos y publicación.", "Revisión mensual.", "Gestión básica limitada."] },
  { title: "Visibilidad activa", price: "850 €/mes", items: ["Una sesión larga o dos sesiones cortas mensuales.", "12 piezas, con hasta 6 reels.", "Entre 12 y 16 stories.", "Estrategia, guiones, grabación, edición y publicación.", "Revisión de métricas.", "Gestión de comunidad limitada según el alcance."] },
]

const references = ["Web de una página: desde 750 €.", "Web profesional de hasta cinco páginas: desde 1.250 €.", "Mantenimiento web: entre 75 y 150 €/mes.", "SEO local continuado: entre 200 y 300 €/mes.", "Identidad visual esencial: desde 750 €.", "Identidad visual completa: desde 1.200 €."]

function OfferCard({ offer }: { offer: typeof starts[number] & { featured?: boolean } }) {
  return <article className={`relative rounded-3xl border p-6 ${offer.featured ? "border-[#0071e3]/30 bg-[#eef7ff]/90 shadow-[0_24px_70px_rgba(0,113,227,0.12)]" : "border-white/60 bg-white/45"}`}>
    {offer.featured && <span className="absolute right-5 top-5 rounded-full bg-[#0071e3] px-3 py-1 text-[11px] font-semibold text-white">Recomendada</span>}
    <h3 className="pr-24 text-xl font-semibold text-[#1d1d1f]">{offer.title}</h3>
    <p className="mt-2 text-2xl font-semibold text-[#0071e3]">{offer.price}</p>
    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#6e6e73]">{offer.items.map(item => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]" />{item}</li>)}</ul>
    {offer.note && <p className="mt-5 rounded-2xl bg-white/55 p-3 text-xs leading-relaxed text-[#6e6e73]">{offer.note}</p>}
  </article>
}

export default function OffersSection() {
  const ref = useScrollReveal<HTMLDivElement>()
  return <section className="relative px-8 py-24 sm:py-28"><div ref={ref} className="reveal mx-auto flex max-w-6xl flex-col gap-16">
    <div><p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Formas de empezar</p><h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Primero resolvemos una prioridad.</h2><p className="mt-4 text-base text-[#6e6e73] sm:text-lg">Puedes empezar con una mejora concreta antes de ampliar la colaboración.</p><div className="mt-8 grid gap-4 lg:grid-cols-3">{starts.map(offer => <OfferCard key={offer.title} offer={offer} />)}</div></div>
    <div><p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Contenido mensual</p><h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">Contenido constante con un alcance controlado.</h2><div className="mt-8 grid gap-4 lg:grid-cols-3">{monthly.map(offer => <OfferCard key={offer.title} offer={offer} />)}</div><p className="mt-5 text-sm leading-relaxed text-[#6e6e73]">Publicidad, inversión en campañas, desplazamientos fuera del área acordada y atención continua de mensajes se presupuestan aparte.</p></div>
    <div className="rounded-3xl border border-white/60 bg-white/45 p-6 sm:p-8"><div className="flex items-center gap-3"><FileText className="h-5 w-5 text-[#0071e3]"/><h2 className="text-2xl font-semibold text-[#1d1d1f]">Web, SEO e identidad</h2></div><p className="mt-3 text-sm text-[#6e6e73]">Referencias transparentes para orientar una primera conversación, no una tienda cerrada.</p><div className="mt-6 grid gap-3 md:grid-cols-2">{references.map(item => <p key={item} className="rounded-2xl bg-white/55 p-4 text-sm font-medium text-[#1d1d1f]">{item}</p>)}</div><p className="mt-5 text-xs leading-relaxed text-[#6e6e73]">Los importes son orientativos, sin IVA, y se concretan según alcance, calendario, materiales, licencias, idiomas, desplazamientos y necesidades técnicas.</p></div>
  </div></section>
}
