import type { Metadata } from "next";
import { Check } from "lucide-react";
import CtaButton from "@/components/cta-button";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Singapore Accounting & Tax Services",
  description:
    "IRAS-compliant bookkeeping, GST filing, CPF payroll, and ACRA-ready financial statements for Singapore businesses. Books & Beyond.",
  alternates: {
    canonical: "https://booksnb.com/sg",
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
  name: "Books & Beyond — Singapore Accounting Services",
  url: "https://booksnb.com/sg",
  description:
    "IRAS-compliant bookkeeping, GST filing, CPF payroll, and ACRA-ready financial statements for Singapore businesses.",
  email: "hello@booksnb.com",
  areaServed: { "@type": "Country", name: "Singapore" },
  knowsAbout: ["IRAS compliance", "GST filing", "CPF contributions", "SFRS", "ACRA", "corporate income tax", "Xero"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
    { "@type": "ListItem", position: 2, name: "Singapore Accounting Services", item: "https://booksnb.com/sg" },
  ],
};

const sgServices = [
  {
    title: "Bookkeeping",
    desc: "SFRS-aligned bookkeeping with monthly financial statements and Xero support.",
    features: ["Daily transaction categorization", "Monthly P&L and balance sheet", "Xero and QuickBooks support", "SFRS-compliant reporting"],
  },
  {
    title: "Tax Filing",
    desc: "Corporate income tax, GST returns, and estimated chargeable income (ECI) filed to IRAS on time.",
    features: ["Corporate income tax (Form C / C-S)", "Estimated chargeable income (ECI)", "GST filing (quarterly)", "Withholding tax reporting"],
  },
  {
    title: "GST Compliance",
    desc: "GST registration, quarterly filing, and input tax claim management.",
    features: ["GST registration and de-registration", "Quarterly GST F5 / F7 returns", "Input tax claim review", "GST audit support"],
  },
  {
    title: "Payroll & CPF",
    desc: "Full-service payroll with CPF contribution calculations and IR8A filing.",
    features: ["Monthly payroll processing", "CPF contribution calculations and submission", "IR8A annual return filing", "Leave and claims management"],
  },
  {
    title: "ACRA & Compliance",
    desc: "Annual return filing, directors' resolutions, and statutory register maintenance.",
    features: ["ACRA annual return filing", "Unaudited financial statements preparation", "Directors' and members' resolutions", "Statutory register maintenance"],
  },
  {
    title: "CFO Advisory",
    desc: "Strategic financial reporting and cash flow management for growing Singapore businesses.",
    features: ["Monthly management reporting", "Cash flow forecasting", "Budget vs. actuals analysis", "Board-ready financial packages"],
  },
];

const whyBooksAndBeyond = [
  {
    title: "IRAS-compliant filing",
    desc: "Every return — ECI, Form C-S, GST F5 — filed accurately and on time with no late-filing penalties.",
  },
  {
    title: "CPF handled end-to-end",
    desc: "We calculate contributions, submit via CPF e-Submit, and produce IR8A forms at year end.",
  },
  {
    title: "ACRA-ready financials",
    desc: "We prepare unaudited financial statements and handle annual return lodgement with ACRA.",
  },
];

export default function SGPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="inline-flex text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground mb-6">
          IRAS-compliant, ACRA-ready
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl">
          IRAS-Compliant Accounting for Singapore Businesses
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          GST filing, CPF payroll, corporate tax, and ACRA annual returns —
          we keep your Singapore books clean and compliant.
        </p>
        <CtaButton href="/contact" variant="primary">
          Book a Call
        </CtaButton>
      </section>

      {/* Services */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10">Services for Singapore businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sgServices.map((s) => (
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
        <h2 className="text-2xl font-bold mb-10">Why Books & Beyond for Singapore businesses</h2>
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
            {["Xero", "QuickBooks"].map((s) => (
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
          <p className="text-sm text-muted-foreground italic mb-4">&ldquo;GST, CPF, ECI — they know Singapore compliance inside out. Our books have never been this clean, and IRAS has never been a stress.&rdquo;</p>
          <div className="text-sm font-semibold">Priya T.</div>
          <div className="text-xs text-muted-foreground">Co-founder, NovaTech Solutions — Singapore</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-forest text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s sort your Singapore books.</h2>
          <p className="text-white/80 mb-8">
            Books & Beyond — IRAS-compliant, CPF-accurate, and ACRA-ready for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-forest font-medium px-8 py-3 rounded-lg hover:bg-muted transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
