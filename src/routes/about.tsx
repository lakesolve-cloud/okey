import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, BookOpen, School, Calendar, Building2 } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Precious Lawrence" },
      { name: "description", content: "Graduate of History and Diplomatic Studies with experience in administration, customer support, communication, and virtual assistance." },
      { property: "og:title", content: "About — Precious Lawrence" },
      { property: "og:description", content: "Graduate · Research Enthusiast · Administrative Professional" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { icon: GraduationCap, school: "Tai Solarin University of Education", deg: "Bachelor of Science (B.Sc.)", field: "History and Diplomatic Studies", years: "2021 – 2025" },
  { icon: BookOpen, school: "Royalty Baptist Academy", deg: "Senior Secondary School Certificate", field: "Senior Secondary Education", years: "2018 – 2020" },
  { icon: School, school: "Access Point Academy", deg: "Junior Secondary Education", field: "Foundational Education", years: "2015 – 2018" },
];

const skills = [
  { name: "Communication", level: 95 },
  { name: "Research", level: 92 },
  { name: "Documentation", level: 90 },
  { name: "Microsoft Word", level: 95 },
  { name: "Microsoft Excel", level: 85 },
  { name: "Microsoft PowerPoint", level: 88 },
  { name: "Team Collaboration", level: 93 },
  { name: "Problem Solving", level: 88 },
  { name: "Time Management", level: 90 },
  { name: "Adaptability", level: 92 },
  { name: "Customer Service", level: 90 },
  { name: "Administrative Support", level: 92 },
];

const values = [
  { title: "Integrity", desc: "Maintaining professionalism and accountability." },
  { title: "Excellence", desc: "Consistently striving for quality outcomes." },
  { title: "Growth", desc: "Committed to learning and self-improvement." },
  { title: "Collaboration", desc: "Working effectively with others toward common goals." },
];

function About() {
  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-12 md:pt-20 pb-24">
        <div className="max-w-4xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">— About</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
            About <span className="italic">Precious</span> Lawrence
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground">
            Graduate · Research Enthusiast · Administrative Professional
          </p>
        </div>
      </section>

      <section className="bg-beige/40 py-24 md:py-32">
        <div className="container-px mx-auto max-w-5xl grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] max-w-sm">
              <div className="absolute -inset-4 bg-beige rounded-2xl -rotate-2" aria-hidden />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-foreground/10">
                <img src={portrait} alt="Portrait of Precious Lawrence" className="w-full h-full object-cover object-top" width={800} height={1000} />
              </div>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Biography</p>
          </Reveal>
          <Reveal className="md:col-span-7 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>Precious Lawrence is a graduate of History and Diplomatic Studies with a growing professional background in administration, customer support, communication, and virtual assistance.</p>
            <p>Through academic training and professional experiences, she has developed strong organizational abilities, research capabilities, documentation skills, and communication expertise.</p>
            <p>She is passionate about supporting teams, solving problems, managing information, and contributing to environments that encourage learning, collaboration, and professional growth.</p>
            <p className="font-display italic text-2xl text-foreground">"Her goal is to build a meaningful career where she can create value through effective communication, efficient administration, and continuous improvement."</p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Education</p>
            <h2 className="font-display text-4xl md:text-5xl mb-16">Academic Journey</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.school} delay={i * 0.1}>
                  <div className="relative pl-20 md:pl-24">
                    <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-background border border-border rounded-full grid place-items-center">
                      <t.icon size={20} strokeWidth={1.5} />
                    </div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">{t.years}</p>
                    <h3 className="font-display text-2xl md:text-3xl mt-2">{t.school}</h3>
                    <p className="mt-2 font-medium">{t.deg}</p>
                    <p className="text-muted-foreground">{t.field}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Skills</p>
            <h2 className="font-display text-4xl md:text-5xl mb-16">Professional Skillset</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-sm text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-px bg-foreground/15 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-foreground transition-all duration-1000" style={{ width: `${s.level}%`, height: "2px", top: "-0.5px" }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Values</p>
            <h2 className="font-display text-4xl md:text-5xl mb-16">Professional Values</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <p className="font-display text-6xl text-beige-dark mb-4">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
