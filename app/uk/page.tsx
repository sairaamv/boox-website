import type { Metadata } from "next";
import { Check } from "lucide-react";
import CtaButton from "@/components/cta-button";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "UK Accounting & Tax Services",
  description:
    "HMRC-compliant bookkeeping, VAT returns, PAYE payroll, and Companies House filings for UK businesses. Books & Beyond.",
  alternates: {
    canonical: "https://booksnb.com/uk",
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
  name: "Books & Beyond — UK Accounting Services",
  url: "https://booksnb.com/uk",
  description:
    "HMRC-compliant bookkeeping, VAT returns, PAYE payroll, and Companies House filings for UK businesses.",
  email: "hello@booksnb.com",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  knowsAbout: ["HMRC compliance", "VAT returns", "PAYE", "RTI", "Corporation Tax", "Companies House", "FRS 102", "Xero", "Sage"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
    { "@type": "ListItem", position: 2, name: "UK Accounting Services", item: "https://booksnb.com/uk" },
  ],
};

const ukServices = [
  {
    title: "Bookkeeping",
    desc: "FRS 102-aligned bookkeeping with monthly management accounts and Making Tax Digital (MTD) ready records.",
    features: ["Daily transaction categorization", "Monthly P&L and balance sheet", "Xero, Sage, and QuickBooks support", "MTD-compatible record-keeping"],
  },
  {
    title: "Tax Filing",
    desc: "Corporation Tax (CT600), self-assessment, and iXBRL-tagged accounts filed with HMRC on time.",
    features: ["Corporation Tax CT600 filing", "iXBRL-tagged statutory accounts", "Self-assessment tax returns", "R&D tax credit claims"],
  },
  {
    title: "VAT",
    desc: "VAT registration, quarterly MTD-compliant returns, and scheme selection for maximum efficiency.",
    features: ["VAT registration and de-registration", "Quarterly MTD VAT returns", "Flat Rate and Cash Accounting scheme management", "VAT enquiry support"],
  },
  {
    title: "Payroll & PAYE",
    desc: "RTI-compliant payroll, auto-enrolment pension management, and year-end P60 / P11D filing.",
    features: ["Monthly payroll processing and payslips", "RTI Full Payment Submission (FPS)", "Auto-enrolment pension contributions", "P60, P11D, and P45 preparation"],
  },
  {
    title: "Companies House",
    desc: "Annual accounts, confirmation statements, and director filings — all lodged on time.",
    features: ["Annual accounts preparation and filing", "Confirmation statement (CS01)", "Director appointment / resignation filings", "Registered office and PSC register maintenance"],
  },
  {
    title: "CFO Advisory",
    desc: "Management reporting and strategic financial guidance for growing UK businesses.",
    features: ["Monthly management reporting", "Cash flow forecasting", "Budget vs. actuals analysis", "Board-ready financial packages"],
  },
];

const whyBooksAndBeyond = [
  {
    title: "MTD-ready from day one",
    desc: "All VAT filings submitted via MTD-compatible software — no bridging workarounds needed.",
  },
  {
    title: "Corporation Tax and Companies House handled together",
    desc: "We file your CT600 and Companies House accounts at the same time — no duplication, no gaps.",
  },
  {
    title: "Xero and Sage specialists",
    desc: "We work in your existing software and keep your chart of accounts clean and audit-ready.",
  },
];

export default function UKPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="inline-flex text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground mb-6">
          AI Agent + HMRC-compliant
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl">
          HMRC-Compliant Accounting for UK Businesses
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          VAT returns, PAYE payroll, Corporation Tax, and Companies House filings
          — our AI Agent handles the lot, a dedicated accountant signs off.
        </p>
        <CtaButton href="/contact" variant="primary">
          Book a Call
        </CtaButton>
      </section>

      {/* Services */}
      <section className="border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10">Services for UK businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ukServices.map((s) => (
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
        <h2 className="text-2xl font-bold mb-10">Why Books & Beyond for UK businesses</h2>
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
            {["Xero", "Sage", "QuickBooks"].map((s) => (
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
          <p className="text-sm text-muted-foreground italic mb-4">&ldquo;VAT, PAYE, Corporation Tax — they handle it all without me having to chase anyone. Our Companies House filings have been on time every year since we switched.&rdquo;</p>
          <div className="text-sm font-semibold">James W.</div>
          <div className="text-xs text-muted-foreground">Founder, Meridian Studio — London, UK</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s sort your UK books.</h2>
          <p className="text-white/80 mb-8">
            Books & Beyond — AI Agent + HMRC-compliant, and no-nonsense about your numbers.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-forest-light text-ink font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
