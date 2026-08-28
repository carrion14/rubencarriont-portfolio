"use client"

import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import CollaborationSection from "@/components/collaboration-section"
import WorkSection from "@/components/work-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import ProblemsSection from "@/components/problems-section"
import OffersSection from "@/components/offers-section"
import NavFloat, { useActiveSection } from "@/components/nav-float"

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rubén Carrión",
  url: "https://rubencarriont.com",
  image: "https://rubencarriont.com/img/brand/foto_perfil.png",
  email: "mailto:rubencarrion6@gmail.com",
  areaServed: ["Barcelona", "Badalona", "Área metropolitana de Barcelona"],
  sameAs: "https://www.linkedin.com/in/rubencarriontorres/",
  provider: {
    "@type": "Person",
    name: "Rubén Carrión",
    jobTitle: "Diseñador gráfico y community manager",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de presencia visual y digital",
    itemListElement: [
      "Diseño gráfico e identidad visual",
      "Contenido para redes sociales",
      "Diseño y desarrollo web",
      "SEO local y Perfil de Empresa de Google",
      "Inteligencia artificial y automatización aplicada",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
}

export default function Home() {
  const [activeSection, navigate] = useActiveSection()

  return (
    <div className="scroll-wrapper" style={{ overflow: "visible", width: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <main className="relative w-full bg-transparent pb-32">
        <div className="noise pointer-events-none fixed inset-0 z-[999]" />

        <NavFloat activeSection={activeSection} onNavigate={navigate} />

        <section id="hero"><HeroSection onNavigate={navigate} /></section>
        <ProblemsSection />
        <section id="services">
          <ServicesSection />
          <OffersSection />
        </section>
        <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
        <section id="process"><CollaborationSection /></section>
        <section id="about"><AboutSection onNavigate={navigate} /></section>
        <WorkSection onNavigate={navigate} />
        <section id="contact"><ContactSection onNavigate={navigate} /></section>
      </main>
    </div>
  )
}
