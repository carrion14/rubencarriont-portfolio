"use client"

import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import CollaborationSection from "@/components/collaboration-section"
import WorkSection from "@/components/work-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import NavFloat, { useActiveSection } from "@/components/nav-float"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rubén Carrión",
  url: "https://rubencarriont.com",
  image: "https://rubencarriont.com/img/brand/foto_perfil.png",
  jobTitle: "Diseñador gráfico, web e IA",
  email: "mailto:rubencarrion6@gmail.com",
  sameAs: ["https://www.linkedin.com/in/rubencarriontorres/"],
  knowsAbout: [
    "Diseño gráfico",
    "Branding",
    "Packaging",
    "Maquetación",
    "Campañas visuales",
    "Diseño web",
    "Inteligencia artificial aplicada al diseño",
  ],
}

export default function Home() {
  const [activeSection, navigate] = useActiveSection()

  return (
    <div className="scroll-wrapper" style={{ overflow: "visible", width: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="relative w-full bg-transparent pb-32">
        <div className="noise pointer-events-none fixed inset-0 z-[999]" />

        <NavFloat activeSection={activeSection} onNavigate={navigate} />

        <section id="hero"><HeroSection onNavigate={navigate} /></section>
        <section id="services">
          <ServicesSection />
          <CollaborationSection onNavigate={navigate} />
        </section>
        <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
        <section id="about"><AboutSection onNavigate={navigate} /></section>
        <section id="work"><WorkSection onNavigate={navigate} /></section>
        <section id="contact"><ContactSection onNavigate={navigate} /></section>
      </main>
    </div>
  )
}
