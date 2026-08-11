import type { Metadata } from "next";
import { Check } from "lucide-react";
import CtaButton from "@/components/cta-button";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Canadian Accounting & Tax Services",
  description:
    "CRA-compliant bookkeeping, T2 corporate returns, HST/GST, and payroll for Canadian businesses. Books & Beyond.",
  alternates: {
    canonical: "https://booksnb.com/ca",
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
  name: "Books & Beyond — Canadian Accounting Services",
  url: "https://booksnb.com/ca",
  description:
    "CRA-compliant bookkeeping, T2 corporate returns, GST/HST filing, and payroll for Canadian businesses.",
  email: "hello@booksnb.com",
  areaServed: { "@type": "Country", name: "Canada" },
  knowsAbout: ["CRA compliance", "GST/HST", "T2 returns", "ASPE", "IFRS", "QuickBooks", "Xero", "Wave"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
    { "@type": "ListItem", position: 2, name: "Canadian Accounting Services", item: "https://booksnb.com/ca" },
  ],
};

const caServices = [
  {
    title: "Bookkeeping",
    desc: "ASPE and IFRS-aligned bookkeeping with full support for QuickBooks, Xero, and Wave.",
    features: ["Daily transaction categorization", "Monthly P&L and balance sheet", "QuickBooks, Xero, and Wave support", "ASPE/IFRS-compliant reporting"],
  },
  {
    title: "Tax Filing",
    desc: "GST/HST filing, T2 corporate returns, and CRA compliance handled accurately.",
    features: ["GST/HST filing across provinces", "T2 corporate income tax returns", "CRA compliance and remittances", "Provincial tax filings"],
  },
  {
    title: "Payroll",
    desc: "Full-cycle Canadian payroll including ROEs, T4s, and payroll remittances.",
    features: ["Payroll processing and direct deposit", "T4 and T4A preparation", "Record of Employment (ROE) filing", "CRA payroll remittances"],
  },
  {
    title: "Audit Support",
    desc: "CRA audit prep and documentation so you're never caught off guard.",
    features: ["CRA correspondence handling", "Audit-ready workpapers", "Supporting schedules and reconciliations", "Internal control documentation"],
  },
  {
    title: "CFO Advisory",
    desc: "Board-ready financials and strategic financial planning for Canadian businesses.",
    features: ["Monthly management reporting", "Cash flow planning and forecasting", "Budget vs. actuals analysis", "Investor-ready financial packages"],
  },
];

const whyBooksAndBeyond = [
  {
    title: "CRA-compliant filings, every time",
    desc: "We know the CRA's requirements inside out — your filings are accurate and on time.",
  },
  {
    title: "GST/HST expertise across provinces",
    desc: "We handle the complexity of provincial tax variations so you don't have to.",
  },
  {
    title: "QuickBooks, Xero, and Wave certified",
    desc: "We work in your existing accounting software — no disruption to your workflow.",
  },
];

export default function CAPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="inline-flex text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground mb-6">
          AI Agent + CRA-compliant filing
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl">
          CRA-Compliant Accounting for Canadian Businesses
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          GST/HST, T2 returns, ASPE reporting — tracked by an AI Agent, filed by
          accountants who know Canadian tax law inside out.
        </p>
        <CtaButton href="/contact" variant="primary">
          Schedule Demo
        </CtaButton>
      </section>

      {/* Services */}
      <section className="border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10">Services for Canadian businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caServices.map((s) => (
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
        <h2 className="text-2xl font-bold mb-10">Why Books & Beyond for Canadian businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {whyBooksAndBeyond.map((vp) => (
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
            {["QuickBooks", "Xero", "Wave"].map((s) => (
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
          <p className="text-sm text-muted-foreground italic mb-4">&ldquo;As a Canadian e-commerce business, HST and CRA compliance was a nightmare. Books &amp; Beyond sorted it out in the first month.&rdquo;</p>
          <div className="text-sm font-semibold">Leila F.</div>
          <div className="text-xs text-muted-foreground">Founder, Mapleraft Studio — Vancouver, BC</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-y border-border text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s sort your Canadian books.</h2>
          <p className="text-white/80 mb-8">
            Books & Beyond — CRA-compliant, thorough, and built around your business.
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
