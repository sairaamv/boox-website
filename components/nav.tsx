"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  FileText,
  Users,
  Search,
  BarChart2,
  Info,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";

const agentLinks = [
  { href: "/services#bookkeeping-agent", label: "Bookkeeping Agent", desc: "Daily reconciliation & categorization", Icon: BookOpen },
  { href: "/services#tax-agent", label: "Tax Agent", desc: "Deadlines tracked, filings prepared", Icon: FileText },
  { href: "/services#payroll-agent", label: "Payroll Agent", desc: "Payroll run end-to-end, every cycle", Icon: Users },
  { href: "/services#audit-agent", label: "Audit Agent", desc: "Audit-ready workpapers, always", Icon: Search },
  { href: "/services#cfo-agent", label: "CFO Agent", desc: "Forecasts & board decks, automatically", Icon: BarChart2 },
];

const companyLinks = [
  { href: "/about", label: "About", desc: "Who we are, how we work", Icon: Info },
  { href: "/contact", label: "Contact", desc: "Talk to an accountant", Icon: Mail },
];

const countryLinks = [
  { href: "/us", label: "United States", code: "IRS" },
  { href: "/ca", label: "Canada", code: "CRA" },
  { href: "/au", label: "Australia", code: "ATO" },
  { href: "/sg", label: "Singapore", code: "IRAS" },
  { href: "/uk", label: "United Kingdom", code: "HMRC" },
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

function DesktopDropdown({
  label,
  transparent,
  open,
  onToggle,
  onClose,
  children,
}: {
  label: string;
  transparent: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
          transparent ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div className="bg-card border border-border rounded-lg shadow-lg p-2 min-w-[280px]">{children}</div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({
  href,
  label,
  desc,
  Icon,
  onClick,
}: {
  href: string;
  label: string;
  desc?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-3 rounded-md px-3 py-2.5 hover:bg-muted transition-colors"
    >
      {Icon && <Icon className="h-4 w-4 text-brand-forest mt-0.5 shrink-0" />}
      <div>
        <div className="text-sm font-medium text-foreground">{label}</div>
        {desc && <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>}
      </div>
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<"agents" | "company" | "countries" | null>(null);
  const [mobileSection, setMobileSection] = useState<"agents" | "company" | "countries" | null>(null);

  // Every page sits on the same dark background now, so the nav floats
  // transparent over it everywhere and only picks up an elevated surface on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled;
  const closeMenu = () => setMenu(null);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        transparent ? "bg-transparent border-transparent" : "bg-card/90 backdrop-blur-md border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <BooksnbLogo light={transparent} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <DesktopDropdown
            label="AI Agents"
            transparent={transparent}
            open={menu === "agents"}
            onToggle={() => setMenu(menu === "agents" ? null : "agents")}
            onClose={closeMenu}
          >
            {agentLinks.map((a) => (
              <DropdownItem key={a.href} {...a} onClick={closeMenu} />
            ))}
            <div className="border-t border-border mt-1 pt-1">
              <DropdownItem href="/services" label="View all services →" onClick={closeMenu} />
            </div>
          </DesktopDropdown>

          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors duration-300 ${
              transparent ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Pricing
          </Link>

          <DesktopDropdown
            label="Company"
            transparent={transparent}
            open={menu === "company"}
            onToggle={() => setMenu(menu === "company" ? null : "company")}
            onClose={closeMenu}
          >
            {companyLinks.map((c) => (
              <DropdownItem key={c.href} {...c} onClick={closeMenu} />
            ))}
          </DesktopDropdown>

          <DesktopDropdown
            label="Countries"
            transparent={transparent}
            open={menu === "countries"}
            onToggle={() => setMenu(menu === "countries" ? null : "countries")}
            onClose={closeMenu}
          >
            {countryLinks.map((c) => (
              <DropdownItem key={c.href} href={c.href} label={c.label} desc={c.code} Icon={MapPin} onClick={closeMenu} />
            ))}
          </DesktopDropdown>

          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors duration-300 ${
              transparent ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Resources
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm text-white px-4 py-2 rounded-lg transition-colors"
            style={{ background: "var(--brand-gradient)" }}
          >
            Schedule Demo
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
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1 pt-3">
            {(
              [
                { key: "agents" as const, label: "AI Agents", items: agentLinks },
                { key: "company" as const, label: "Company", items: companyLinks },
                {
                  key: "countries" as const,
                  label: "Countries",
                  items: countryLinks.map((c) => ({ href: c.href, label: c.label, desc: c.code, Icon: MapPin })),
                },
              ]
            ).map((group) => (
              <div key={group.key} className="border-b border-border last:border-0">
                <button
                  className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-foreground"
                  onClick={() => setMobileSection(mobileSection === group.key ? null : group.key)}
                >
                  {group.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === group.key ? "rotate-180" : ""}`} />
                </button>
                {mobileSection === group.key && (
                  <div className="pb-2">
                    {group.items.map((item) => (
                      <DropdownItem key={item.href} {...item} onClick={() => setOpen(false)} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/pricing"
              className="text-sm font-medium text-foreground py-2.5"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground py-2.5"
              onClick={() => setOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white px-4 py-2 rounded-lg text-center mt-3"
              style={{ background: "var(--brand-gradient)" }}
              onClick={() => setOpen(false)}
            >
              Schedule Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
