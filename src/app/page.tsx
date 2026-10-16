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
import SiteFooter from "@/components/site-footer"
import { homeJsonLd, serializeJsonLd } from "@/lib/seo"

export default function Home() {
  const [activeSection, navigate] = useActiveSection()

  return (
    <div className="scroll-wrapper" style={{ overflow: "visible", width: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }}
      />
      <main className="relative w-full bg-transparent">
        <div className="noise pointer-events-none fixed inset-0 z-[999]" />

        <NavFloat activeSection={activeSection} onNavigate={navigate} />

        <section id="hero"><HeroSection onNavigate={navigate} /></section>
        <ProblemsSection />
        <section id="services">
          <ServicesSection />
          <OffersSection onNavigate={navigate} />
        </section>
        <section id="projects"><ProjectsSection onNavigate={navigate} /></section>
        <section id="process"><CollaborationSection /></section>
        <section id="about"><AboutSection onNavigate={navigate} /></section>
        <div id="work"><WorkSection onNavigate={navigate} /></div>
        <section id="contact"><ContactSection onNavigate={navigate} /></section>
        <SiteFooter />
      </main>
    </div>
  )
}
