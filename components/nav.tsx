"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const countryLinks = [
  { href: "/us", label: "US" },
  { href: "/ca", label: "CA" },
  { href: "/au", label: "AU" },
  { href: "/sg", label: "SG" },
  { href: "/uk", label: "UK" },
];

function BooksnbLogo({ light }: { light: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline">
      <svg viewBox="0 0 110 104" width="40" height="38" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M55 34 L14 27 L14 70 L55 78 Z" fill="#0D9488" />
        <path d="M55 34 L96 27 L96 70 L55 78 Z" fill="#14B8A6" />
        <path d="M55 34 L55 78" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M45 25 C49 31 61 31 65 25" stroke="#FF6B5C" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <span
        className={`font-bold text-xl transition-colors duration-300 ${light ? "text-white" : "text-foreground"}`}
        style={{ fontWeight: 900, letterSpacing: "-0.04em" }}
      >
        books <span style={{ color: "var(--bnb-coral)" }}>&amp;</span> beyond
      </span>
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Every page sits on the same dark background now, so the nav floats
  // transparent over it everywhere and only picks up an elevated surface on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-card/90 backdrop-blur-md border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <BooksnbLogo light={transparent} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                transparent
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Country switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className={`flex items-center gap-1 rounded-lg px-2 py-1 border transition-colors duration-300 ${
              transparent ? "border-white/20" : "border-border"
            }`}
          >
            {countryLinks.map((c, i) => (
              <span key={c.href} className="flex items-center">
                {i > 0 && (
                  <span className={transparent ? "text-white/20 mx-1" : "text-border mx-1"}>
                    |
                  </span>
                )}
                <Link
                  href={c.href}
                  className={`text-xs font-mono font-medium transition-colors duration-300 px-1 ${
                    transparent
                      ? "text-white/70 hover:text-brand-forest-light"
                      : "text-muted-foreground hover:text-brand-forest"
                  }`}
                >
                  {c.label}
                </Link>
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-sm text-white px-4 py-2 rounded-lg transition-colors"
            style={{ background: "var(--brand-gradient)" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            transparent ? "hover:bg-white/10" : "hover:bg-muted"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 mb-1 transition-colors duration-300 ${transparent ? "bg-white" : "bg-foreground"}`} />
          <div className={`w-5 h-0.5 mb-1 transition-colors duration-300 ${transparent ? "bg-white" : "bg-foreground"}`} />
          <div className={`w-5 h-0.5 transition-colors duration-300 ${transparent ? "bg-white" : "bg-foreground"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              {countryLinks.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="text-xs font-mono font-medium text-muted-foreground hover:text-brand-forest border border-border rounded px-2 py-1"
                  onClick={() => setOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="text-sm text-white px-4 py-2 rounded-lg text-center mt-1"
              style={{ background: "var(--brand-gradient)" }}
              onClick={() => setOpen(false)}
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
