import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Precious Lawrence" },
      { name: "description", content: "Get in touch with Precious Lawrence regarding administration, communications, customer support, virtual assistance, and research opportunities." },
      { property: "og:title", content: "Contact — Precious Lawrence" },
      { property: "og:description", content: "Let's connect — open to opportunities and collaborations." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please enter a subject").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const info = [
  { icon: MapPin, label: "Location", value: "Surulere, Lagos, Nigeria", href: null },
  { icon: Mail, label: "Email", value: "preciousibukunlawrence@gmail.com", href: "mailto:preciousibukunlawrence@gmail.com" },
  { icon: Phone, label: "Phone", value: "+234 915 327 5447", href: "tel:+2349153275447" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const field = (name: keyof typeof form, type: string, label: string, textarea = false) => (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">{label}</label>
      {textarea ? (
        <textarea
          id={name}
          rows={6}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-foreground outline-none transition-colors resize-none"
        />
      ) : (
        <input
          id={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-foreground outline-none transition-colors"
        />
      )}
      {errors[name] && <p className="mt-2 text-sm text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-12 md:pt-20 pb-24">
        <div className="max-w-4xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">— Contact</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
            Let's <span className="italic">Connect</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            I would love to hear about opportunities, collaborations, and professional engagements.
          </p>
        </div>
      </section>

      <section className="bg-beige/40 py-20">
        <div className="container-px mx-auto max-w-6xl grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <Reveal>
            <div className="flex items-center gap-5">
              <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-full overflow-hidden ring-4 ring-background shadow-lg shadow-foreground/15">
                <img src={portrait} alt="Precious Lawrence" className="w-full h-full object-cover object-top" width={224} height={224} />
              </div>
              <div>
                <p className="font-display italic text-2xl">Precious Lawrence</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Available for opportunities</p>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {info.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="bg-background p-6 md:p-8 h-full">
                  <c.icon size={22} strokeWidth={1.25} className="mb-4" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-display text-lg hover:italic break-words">{c.value}</a>
                  ) : (
                    <p className="font-display text-lg">{c.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-5xl grid lg:grid-cols-5 gap-16">
          <Reveal className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">— Send Message</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Have a question or opportunity to share?</h2>
            <p className="mt-6 text-muted-foreground">Fill out the form and I will respond within 24 – 48 hours.</p>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={submit} className="space-y-8" noValidate>
              {field("name", "text", "Full Name")}
              {field("email", "email", "Email Address")}
              {field("subject", "text", "Subject")}
              {field("message", "text", "Message", true)}
              <button
                type="submit"
                disabled={loading || sent}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/85 transition-all disabled:opacity-70"
              >
                {sent ? (<><Check size={16} /> Sent</>) : loading ? "Sending…" : (<>Send Message <Send size={15} className="group-hover:translate-x-1 transition-transform" /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="bg-ink text-background rounded-md px-8 py-16 md:p-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-6">— Availability</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">Open To Opportunities</h2>
            <p className="mt-6 text-lg text-background/75 max-w-2xl mx-auto">
              I am interested in opportunities related to administration, communications, customer support, virtual assistance, research, and operations support.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
