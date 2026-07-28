"use client"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import NavFloat, { useActiveSection } from "@/components/nav-float"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rubén Carrión",
  url: "https://rubencarriont.com",
  image: "https://rubencarriont.com/img/brand/foto_perfil.png",
  jobTitle: "Disenador Grafico e IA Designer",
  email: "mailto:rubencarrion6@gmail.com",
  sameAs: ["https://www.linkedin.com/in/rubencarriontorres/"],
  knowsAbout: [
    "Diseno grafico",
    "Branding",
    "Maquetacion",
    "Retail design",
    "Inteligencia artificial generativa",
    "Automatizacion creativa",
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
        <section id="about"><AboutSection onNavigate={navigate} /></section>
        <section id="work"><WorkSection onNavigate={navigate} /></section>
        <section id="skills"><SkillsSection onNavigate={navigate} /></section>
        <section id="education"><EducationSection onNavigate={navigate} /></section>
        <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
        <section id="contact"><ContactSection onNavigate={navigate} /></section>
      </main>
    </div>
  )
}
