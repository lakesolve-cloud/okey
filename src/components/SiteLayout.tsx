import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Precious<span className="text-muted-foreground">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors relative group"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-sm px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/85 transition-all"
        >
          Get in touch
        </Link>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <nav className="container-px py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-lg" activeProps={{ className: "text-foreground font-medium" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-background mt-32">
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl mb-3">Precious Lawrence</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Administration · Communication · Research
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-background/80 hover:text-background transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5 shrink-0" /><a href="mailto:preciousibukunlawrence@gmail.com" className="hover:text-background break-all">preciousibukunlawrence@gmail.com</a></li>
              <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 shrink-0" /><a href="tel:+2349153275447" className="hover:text-background">+234 915 327 5447</a></li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /><span>Surulere, Lagos, Nigeria</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">Connect</h4>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-background/20 grid place-items-center hover:bg-background hover:text-ink transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-background/50">
          <p>© 2026 Precious Lawrence. All Rights Reserved.</p>
          <p className="font-display italic">Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
