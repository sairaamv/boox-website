import type { Metadata } from "next";
import { Check } from "lucide-react";
import CtaButton from "@/components/cta-button";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Australian Accounting & Tax Services",
  description:
    "ATO-registered bookkeeping, BAS lodgement, GST, and superannuation compliance for Australian businesses. Books & Beyond.",
  alternates: {
    canonical: "https://booksnb.com/au",
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
  name: "Books & Beyond — Australian Accounting Services",
  url: "https://booksnb.com/au",
  description:
    "ATO-registered bookkeeping, BAS lodgement, GST, STP payroll, and superannuation compliance for Australian businesses.",
  email: "hello@booksnb.com",
  areaServed: { "@type": "Country", name: "Australia" },
  knowsAbout: ["ATO compliance", "BAS lodgement", "GST", "STP", "superannuation", "AASB", "Xero", "MYOB"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
    { "@type": "ListItem", position: 2, name: "Australian Accounting Services", item: "https://booksnb.com/au" },
  ],
};

const auServices = [
  {
    title: "Bookkeeping",
    desc: "Xero-primary bookkeeping with MYOB support, aligned to Australian accounting standards.",
    features: ["Daily transaction categorization", "Monthly P&L and balance sheet", "Xero (primary) and MYOB support", "AASB-compliant reporting"],
  },
  {
    title: "Tax Filing",
    desc: "BAS lodgement, GST, PAYG, and EOFY returns — everything the ATO requires.",
    features: ["BAS lodgement (monthly/quarterly)", "GST reconciliation and reporting", "PAYG withholding and instalments", "Company tax return (EOFY)"],
  },
  {
    title: "Payroll",
    desc: "Single Touch Payroll compliance with super contributions and payslip management.",
    features: ["STP-compliant payroll processing", "Superannuation calculation and reporting", "Payslip generation", "PAYG withholding management"],
  },
  {
    title: "Audit Support",
    desc: "ATO audit prep and internal control documentation to keep you prepared.",
    features: ["ATO correspondence handling", "Audit-ready workpapers", "Internal control documentation", "Supporting schedules and reconciliations"],
  },
  {
    title: "CFO Advisory",
    desc: "Management reporting and cash flow forecasting for growing Australian businesses.",
    features: ["Monthly management reporting", "Cash flow forecasting", "Budget vs. actuals analysis", "Board-ready financial packages"],
  },
];

const whyBooksAndBeyond = [
  {
    title: "ATO-registered advisors",
    desc: "Our accountants are registered with the ATO and understand the full compliance landscape.",
  },
  {
    title: "Xero specialists (MYOB supported)",
    desc: "Xero is our primary platform — we know it deeply. MYOB support available on request.",
  },
  {
    title: "STP-compliant payroll",
    desc: "We handle Single Touch Payroll reporting correctly, every pay cycle.",
  },
];

export default function AUPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="inline-flex text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground mb-6">
          ATO-registered, BAS-ready
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl">
          ATO-Registered Accounting for Australian Businesses
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          BAS lodgement, EOFY returns, Single Touch Payroll — we keep your books
          ATO-ready all year.
        </p>
        <CtaButton href="/contact" variant="primary">
          Book a Call
        </CtaButton>
      </section>

      {/* Services */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10">Services for Australian businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auServices.map((s) => (
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
        <h2 className="text-2xl font-bold mb-10">Why Books & Beyond for Australian businesses</h2>
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
            {["Xero", "MYOB"].map((s) => (
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
          <p className="text-sm text-muted-foreground italic mb-4">&ldquo;GST, BAS, superannuation — they handle all of it without me having to explain Australian tax to anyone. A huge relief.&rdquo;</p>
          <div className="text-sm font-semibold">Tom B.</div>
          <div className="text-xs text-muted-foreground">Director, Coastline Digital — Melbourne, VIC</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-forest text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s sort your Australian books.</h2>
          <p className="text-white/80 mb-8">
            Books & Beyond — ATO-registered, BAS-ready, and no-nonsense about your numbers.
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
