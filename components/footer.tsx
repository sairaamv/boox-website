import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{ background: "var(--brand-gradient)" }}
              >
                <svg viewBox="0 0 110 104" className="w-[56%] h-[56%]" fill="none" aria-hidden="true">
                  <path d="M55 34 L14 27 L14 70 L55 78 Z" fill="#FFFFFF" />
                  <path d="M55 34 L96 27 L96 70 L55 78 Z" fill="#CFF5EE" />
                  <path d="M55 34 L55 78" stroke="#0D9488" strokeWidth="3" />
                  <path d="M45 25 C49 31 61 31 65 25" stroke="#FF6B5C" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
              <span
                className="font-bold text-lg text-foreground"
                style={{ fontWeight: 900, letterSpacing: "-0.04em" }}
              >
                books <span style={{ color: "var(--bnb-coral)" }}>&amp;</span> beyond
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Books & Beyond — Virtual Accounting & Auditing.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Company
            </p>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Countries
            </p>
            <ul className="space-y-2">
              {[
                { href: "/us", label: "United States" },
                { href: "/ca", label: "Canada" },
                { href: "/au", label: "Australia" },
                { href: "/sg", label: "Singapore" },
                { href: "/uk", label: "United Kingdom" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-xs text-muted-foreground">
          © 2025 Books & Beyond (booksnb.com). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
