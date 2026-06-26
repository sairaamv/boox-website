import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl text-brand-forest tracking-tight">
              BooX
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Virtual Accounting. Humans + AI.
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
          © 2024 BooX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
