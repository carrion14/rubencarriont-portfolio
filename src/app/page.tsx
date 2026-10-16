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
import GlobalNav from "@/components/global-nav"
import { useActiveSection } from "@/hooks/use-active-section"
import SiteFooter from "@/components/site-footer"
import { homeJsonLd, serializeJsonLd } from "@/lib/seo"

const navLinks = [
  { id: "services", label: "Servicios" },
  { id: "projects", label: "Proyectos" },
  { id: "process", label: "Proceso" },
  { id: "about", label: "Sobre mí" },
]

export default function Home() {
  const [activeSection, navigate] = useActiveSection()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }}
      />
      <GlobalNav links={navLinks} activeId={activeSection} />
      <main className="relative w-full">
        <section id="hero"><HeroSection onNavigate={navigate} /></section>
        <ProblemsSection />
        <section id="services">
          <ServicesSection />
          <OffersSection onNavigate={navigate} />
        </section>
        <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
        <section id="process"><CollaborationSection /></section>
        <section id="about"><AboutSection onNavigate={navigate} /></section>
        <section id="work"><WorkSection onNavigate={navigate} /></section>
        <section id="contact"><ContactSection onNavigate={navigate} /></section>
      </main>
      <SiteFooter />
    </>
  )
}
