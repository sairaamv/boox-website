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
                <svg
                  viewBox="0 0 110 96"
                  className="w-[56%] h-[56%] text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M55 30 C44 22 26 22 14 28 L14 72 C26 66 44 66 55 72" />
                  <path d="M55 30 C66 22 84 22 96 28 L96 72 C84 66 66 66 55 72" />
                  <path d="M55 30 L55 72" />
                </svg>
              </span>
              <span
                className="font-bold text-lg text-foreground"
                style={{ letterSpacing: "-0.04em" }}
              >
                books<span className="text-brand-forest">nb</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Virtual Accounting & Auditing.
              <br />
              Humans + AI.
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
