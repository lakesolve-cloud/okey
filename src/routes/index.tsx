import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Briefcase, MessageCircle, Search, FileText, Users, Headphones } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Precious Lawrence — Administration, Communication & Research" },
      { name: "description", content: "Graduate of History and Diplomatic Studies passionate about administration, communication, research, and professional excellence." },
      { property: "og:title", content: "Precious Lawrence — Portfolio" },
      { property: "og:description", content: "Helping organizations stay organized, communicate effectively, and achieve meaningful results." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const competencies = [
  { icon: Briefcase, title: "Administrative Support", desc: "Supporting day-to-day operations, documentation, scheduling, and organizational activities." },
  { icon: Headphones, title: "Customer Service", desc: "Providing professional support and maintaining positive customer experiences." },
  { icon: Search, title: "Research & Analysis", desc: "Gathering, evaluating, and presenting information effectively." },
  { icon: MessageCircle, title: "Communication", desc: "Strong written and verbal communication skills across professional environments." },
  { icon: FileText, title: "Documentation", desc: "Preparing reports, records, correspondence, and structured information." },
  { icon: Users, title: "Team Collaboration", desc: "Working effectively with teams to achieve shared goals." },
];

const highlights = [
  { stat: "B.Sc", label: "Graduate" },
  { stat: "2+", label: "Professional Roles" },
  { stat: "Strong", label: "Research Background" },
  { stat: "MS Office", label: "Proficiency" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl pt-12 md:pt-20 pb-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 animate-fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">— Portfolio · 2026</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
              Communication.<br />
              <span className="italic text-muted-foreground">Research.</span><br />
              Administration.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Helping organizations stay organized, communicate effectively, and achieve meaningful results.
            </p>
            <p className="mt-6 text-base text-foreground/80 max-w-xl leading-relaxed">
              My name is Precious Lawrence, a graduate of History and Diplomatic Studies with a passion for administration, communication, research, and professional excellence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full hover:bg-foreground/85 transition-all">
                View Portfolio
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute -inset-6 bg-beige rounded-2xl -rotate-2" aria-hidden />
                <div className="absolute -inset-3 border border-foreground/15 rounded-2xl rotate-1" aria-hidden />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-foreground/15 animate-float-soft">
                  <img
                    src={portrait}
                    alt="Precious Lawrence — History and Diplomatic Studies graduate"
                    className="w-full h-full object-cover object-top"
                    width={1024}
                    height={1280}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-background border border-border px-5 py-3 rounded-xl shadow-md z-10">
                  <p className="font-display italic text-lg">Precious Lawrence</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">History &amp; Diplomatic Studies Graduate</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">— About Me</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              A motivated and adaptable professional with a background in History and Diplomatic Studies.
            </h2>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-3xl">
              My academic training has strengthened my research, communication, analytical thinking, and documentation skills. I enjoy working in environments where I can contribute through organization, collaboration, and continuous learning.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:gap-3 transition-all">
              Learn More <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* COMPETENCIES */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Capabilities</p>
              <h2 className="font-display text-4xl md:text-5xl">Core Competencies</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Skills cultivated through academic training and professional experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {competencies.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="bg-background p-8 md:p-10 h-full group hover:bg-beige/50 transition-colors duration-500">
                  <c.icon size={28} strokeWidth={1.25} className="mb-6" />
                  <h3 className="font-display text-2xl mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-ink text-background py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-6">— Highlights</p>
            <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl">Professional milestones and proficiencies.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.08}>
                <div className="border-t border-background/20 pt-6">
                  <p className="font-display text-5xl md:text-6xl">{h.stat}</p>
                  <p className="mt-3 text-sm uppercase tracking-widest text-background/60">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">— Philosophy</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight italic text-balance">
              "Every organization succeeds when communication is clear, processes are organized, and people work together effectively."
            </h2>
            <p className="mt-10 text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
              I strive to bring professionalism, accountability, and a positive attitude to every role I undertake.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="bg-beige rounded-md px-8 py-16 md:p-20 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-balance">Let's Work Together</h2>
            <p className="mt-6 text-lg text-foreground/75 max-w-2xl mx-auto">
              I am open to opportunities in administration, customer support, communications, virtual assistance, research, and operations support.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/85 transition-all">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
