import type { Metadata } from "next";
import { Check } from "lucide-react";
import CtaButton from "@/components/cta-button";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "US Accounting & Tax Services",
  description:
    "IRS-compliant bookkeeping, federal and state tax filing, and payroll for US businesses. Books & Beyond.",
  alternates: {
    canonical: "https://booksnb.com/us",
    languages: {
      "en-US": "https://booksnb.com/us",
      "en-CA": "https://booksnb.com/ca",
      "en-AU": "https://booksnb.com/au",
      "en-GB": "https://booksnb.com/uk",
      "en-SG": "https://booksnb.com/sg",
      "x-default": "https://booksnb.com",
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Books & Beyond — US Accounting Services",
  url: "https://booksnb.com/us",
  description:
    "IRS-compliant bookkeeping, federal and state tax filing, and payroll for US businesses.",
  email: "hello@booksnb.com",
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: ["IRS compliance", "GAAP bookkeeping", "QuickBooks", "Xero", "US payroll", "sales tax nexus"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
    { "@type": "ListItem", position: 2, name: "US Accounting Services", item: "https://booksnb.com/us" },
  ],
};

const usServices = [
  {
    title: "Bookkeeping",
    desc: "GAAP-aligned bookkeeping with daily reconciliations and monthly financial statements.",
    features: ["Daily transaction categorization", "Monthly P&L and balance sheet", "QuickBooks and Xero support", "GAAP-compliant reporting"],
  },
  {
    title: "Tax Filing",
    desc: "Federal and state tax compliance handled end-to-end, including sales tax nexus tracking.",
    features: ["Federal corporate income tax", "State income tax returns", "1099 filing and contractor management", "Sales tax nexus tracking and filing"],
  },
  {
    title: "Payroll",
    desc: "Full-service payroll processing with quarterly compliance filings.",
    features: ["Payroll processing and direct deposit", "Quarterly 941 filings", "W-2 and W-3 preparation", "Multi-state payroll support"],
  },
  {
    title: "Audit Support",
    desc: "IRS audit prep, documentation, and workpaper preparation.",
    features: ["IRS correspondence handling", "Audit-ready workpapers", "Internal control documentation", "Supporting schedules and reconciliations"],
  },
  {
    title: "CFO Advisory",
    desc: "Strategic financial guidance for growing US businesses.",
    features: ["Monthly management reporting", "Cash flow forecasting", "Budget vs. actuals analysis", "Board-ready financial packages"],
  },
];

export default function USPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="inline-flex text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground mb-6">
          AI Agent + IRS-compliant reporting
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl">
          IRS-Compliant Accounting for US Businesses
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          From federal tax filings to state sales tax nexus — our AI Agent
          handles the numbers, a dedicated CPA signs off, while you run the business.
        </p>
        <CtaButton href="/contact" variant="primary">
          Schedule Demo
        </CtaButton>
      </section>

      {/* Services */}
      <section className="border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10">Services for US businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usServices.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Books & Beyond */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold mb-10">Why Books & Beyond for US businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "IRS-aligned reporting",
              desc: "All financial statements and filings produced to IRS standards. No surprises at tax time.",
            },
            {
              title: "Multi-state sales tax handled",
              desc: "We track nexus, calculate rates, and file returns across every state where you have obligations.",
            },
            {
              title: "QuickBooks + Xero certified",
              desc: "We work in your existing software — no migration required.",
            },
          ].map((vp) => (
            <div key={vp.title} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">{vp.title}</h3>
              <p className="text-sm text-muted-foreground">{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software strip */}
      <section className="border-y border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground text-center mb-4">
            Software we support
          </p>
          <div className="flex justify-center gap-8">
            {["QuickBooks", "Xero"].map((s) => (
              <span key={s} className="text-sm font-medium text-muted-foreground border border-border rounded-lg px-4 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm max-w-xl mx-auto text-center">
          <p className="text-sm text-muted-foreground italic mb-4">&ldquo;Switched to Books &amp; Beyond after my third IRS headache in two years. Our books are cleaner, filings are on time, and I finally understand my own P&amp;L.&rdquo;</p>
          <div className="text-sm font-semibold">Marcus D.</div>
          <div className="text-xs text-muted-foreground">Owner, Redwood Supply Co. — Portland, OR</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-y border-border text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s sort your US books.</h2>
          <p className="text-white/80 mb-8">
            Books & Beyond — IRS-compliant, thorough, and built for your business size.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-forest-light text-ink font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Schedule Demo
          </a>
        </div>
      </section>
    </>
  );
}
