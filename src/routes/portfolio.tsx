import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Calendar, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Precious Lawrence" },
      { name: "description", content: "Selected experiences, projects, responsibilities, and professional contributions." },
      { property: "og:title", content: "Portfolio — Precious Lawrence" },
      { property: "og:description", content: "Professional experience in customer care, virtual assistance, and administration." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const experience = [
  {
    role: "Customer Care Representative",
    company: "Quitech Nig Ltd",
    duration: "May 2025 – December 2025",
    items: [
      "Responded to customer inquiries professionally.",
      "Assisted with issue resolution.",
      "Maintained customer records.",
      "Provided customer support across communication channels.",
      "Contributed to positive customer experiences.",
    ],
  },
  {
    role: "Virtual Assistant",
    company: "Salarify",
    duration: "February 2024 – January 2025",
    items: [
      "Managed administrative tasks.",
      "Supported documentation processes.",
      "Assisted with scheduling and coordination.",
      "Conducted online research.",
      "Organized information and reports.",
    ],
  },
];

const categories = ["All", "Customer Service", "Administration", "Research", "Documentation", "Projects"] as const;
type Category = typeof categories[number];

const projects = Array.from({ length: 12 }).map((_, i) => {
  const cats: Category[] = ["Customer Service", "Administration", "Research", "Documentation", "Projects"];
  return {
    id: i + 1,
    title: `Project Title ${String(i + 1).padStart(2, "0")}`,
    desc: "A short description of this project will appear here once the work sample is added.",
    category: cats[i % cats.length],
  };
});

function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-12 md:pt-20 pb-24">
        <div className="max-w-4xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">— Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
            Portfolio &amp; <span className="italic">Professional</span> Experience
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Selected experiences, projects, responsibilities, and professional contributions.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Experience</p>
            <h2 className="font-display text-4xl md:text-5xl mb-16">Professional Roles</h2>
          </Reveal>
          <div className="space-y-8">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.1}>
                <article className="bg-background border border-border p-8 md:p-12 group hover:border-foreground transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-8 border-b border-border">
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl">{e.role}</h3>
                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-2"><Building2 size={14} /> {e.company}</span>
                        <span className="inline-flex items-center gap-2"><Calendar size={14} /> {e.duration}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                    {e.items.map((it) => (
                      <li key={it} className="flex gap-3 text-foreground/80">
                        <span className="text-beige-dark mt-2">—</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Gallery</p>
                <h2 className="font-display text-4xl md:text-5xl">Selected Work</h2>
              </div>
              <p className="text-muted-foreground max-w-xs">Click any card to view in detail.</p>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm border transition-all ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.button
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightbox(p.id)}
                  className="group text-left"
                >
                  <div className="aspect-[4/5] bg-beige relative overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center text-beige-dark">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16">
                        <rect x="3" y="3" width="18" height="18" rx="1" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-500 grid place-items-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-background text-sm uppercase tracking-widest">View</span>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 text-xs uppercase tracking-wider">{p.category}</span>
                  </div>
                  <div className="pt-5">
                    <h3 className="font-display text-xl group-hover:italic transition-all">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="border-t border-border pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Upcoming</p>
                <h2 className="font-display text-4xl md:text-5xl">More Projects Coming Soon</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] border border-dashed border-border grid place-items-center text-muted-foreground hover:bg-beige/30 transition-colors">
                  <div className="text-center">
                    <Plus size={32} strokeWidth={1} className="mx-auto mb-3" />
                    <p className="text-sm uppercase tracking-widest">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm grid place-items-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-background p-2" aria-label="Close">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-background p-8 md:p-12"
            >
              <div className="aspect-[16/10] bg-beige grid place-items-center text-beige-dark mb-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-24 h-24">
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              {(() => {
                const p = projects.find((x) => x.id === lightbox)!;
                return (
                  <>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{p.category}</p>
                    <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
