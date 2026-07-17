"use client"

import { ArrowDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ScrollReveal from "@/components/ui/scroll-reveal"

const skillGroups = [
  {
    title: "Adobe Suite",
    skills: [
      { name: "Photoshop", level: 90 },
      { name: "Illustrator", level: 90 },
      { name: "InDesign", level: 85 },
      { name: "After Effects", level: 65 },
      { name: "Premiere", level: 60 },
      { name: "Adobe XD", level: 70 },
    ],
  },
  {
    title: "IA & Automatización",
    skills: [
      { name: "Prompt Engineering", level: 95 },
      { name: "ChatGPT / Claude / Codex", level: 90 },
      { name: "Seedream / Nano Banana Pro", level: 90 },
      { name: "OpenClaw", level: 85 },
      { name: "Seedance / Google Veo", level: 85 },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "Lovable", level: 90 },
      { name: "Figma / Claude Design", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Claude Code", level: 80 },
      { name: "HTML / CSS", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "React / Next.js", level: 55 },
    ],
  },
]

export default function SkillsSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const titleRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-8 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-14">
        <div ref={titleRef} className="reveal">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071e3]">Herramientas</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Skills
          </h2>
          <ScrollReveal
            baseOpacity={0.45}
            baseRotation={0.8}
            blurStrength={1.2}
            containerClassName="mt-4 max-w-xl"
            textClassName="text-base leading-relaxed text-[#86868b] sm:text-lg"
            wordAnimationEnd="top 45%"
          >
            Herramientas creativas, automatización e interfaces web para llevar una idea desde la dirección visual hasta una pieza funcional.
          </ScrollReveal>
        </div>

        <div ref={gridRef} className="reveal reveal-delay-1 grid gap-4 sm:grid-cols-3 mobile-row">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl bg-[rgba(255,255,255,0.4)] p-4 sm:p-7 transition-all duration-500 hover:bg-[rgba(255,255,255,0.6)]">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-[#1d1d1f]">{skill.name}</span>
                      <span className="text-xs text-[#86868b]">{skill.level}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-[rgba(0,0,0,0.06)]">
                      <div
                        className="h-full rounded-full bg-[#0071e3] transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onNavigate("education")}
          className="flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-blue-600"
        >
          Ver formación
          <ArrowDown className="h-3 w-3" />
        </button>
      </div>
    </section>
  )
}
