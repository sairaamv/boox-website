import type { Metadata } from "next";
import { BookOpen, FileText, Users, Search, BarChart2, Check } from "lucide-react";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping, tax filing, payroll, audit support, and CFO advisory — all jurisdictions covered by Books & Beyond.",
  alternates: { canonical: "https://booksnb.com/services" },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Books & Beyond Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Bookkeeping",
        serviceType: "Bookkeeping",
        description:
          "Accurate daily reconciliations, transaction categorization, and monthly reporting for businesses in the US, Canada, Australia, Singapore, and UK.",
        provider: { "@type": "Organization", name: "Books & Beyond" },
        areaServed: ["US", "CA", "AU", "SG", "GB"],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Tax Filing",
        serviceType: "Tax Preparation",
        description:
          "Federal, state, and corporate tax filing across IRS, CRA, ATO, IRAS, and HMRC jurisdictions.",
        provider: { "@type": "Organization", name: "Books & Beyond" },
        areaServed: ["US", "CA", "AU", "SG", "GB"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Payroll",
        serviceType: "Payroll Services",
        description:
          "End-to-end payroll processing compliant with W-2, T4, STP, PAYE, and CPF requirements.",
        provider: { "@type": "Organization", name: "Books & Beyond" },
        areaServed: ["US", "CA", "AU", "SG", "GB"],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Audit Support",
        serviceType: "Audit Support",
        description:
          "Audit-ready workpapers and IRS/CRA/ATO/IRAS/HMRC audit response support.",
        provider: { "@type": "Organization", name: "Books & Beyond" },
        areaServed: ["US", "CA", "AU", "SG", "GB"],
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "CFO Advisory",
        serviceType: "Financial Advisory",
        description:
          "Strategic financial guidance, management reporting, and cash flow forecasting.",
        provider: { "@type": "Organization", name: "Books & Beyond" },
        areaServed: ["US", "CA", "AU", "SG", "GB"],
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://booksnb.com/services" },
  ],
};

const services = [
  {
    Icon: BookOpen,
    title: "Bookkeeping Agent",
    desc: "Accurate books are the foundation of everything else. Our AI Agent handles daily reconciliations, transaction categorization, and monthly reporting — reviewed by a CPA — so your financials are always current and correct.",
    features: [
      "Daily transaction categorization and reconciliation",
      "Monthly P&L statement and balance sheet",
      "Bank and credit card reconciliation",
      "Chart of accounts setup and maintenance",
      "Year-end close and working papers",
    ],
    compliance: "US: GAAP  ·  CA: ASPE/IFRS  ·  AU: AASB standards",
  },
  {
    Icon: FileText,
    title: "Tax Agent",
    desc: "Our AI Agent tracks deadlines and prepares the full cycle of tax compliance — corporate returns, indirect taxes, and annual filings — filed by a CPA who knows the local rules.",
    features: [
      "US: Federal + state income tax, 1099 filing, sales tax nexus",
      "CA: GST/HST filing, T2 corporate returns, CRA compliance",
      "AU: BAS lodgement, GST, PAYG, EOFY returns, ATO compliance",
      "Tax planning and advisory",
      "On-time filing, every time",
    ],
    compliance: "IRS  ·  CRA  ·  ATO",
  },
  {
    Icon: Users,
    title: "Payroll Agent",
    desc: "End-to-end payroll processing with full compliance for each country's requirements — from payslips to year-end reporting, run by the agent and signed off by your accountant.",
    features: [
      "US: W-2s, quarterly filings, multi-state payroll",
      "CA: T4s, ROEs, payroll remittances",
      "AU: Single Touch Payroll (STP), super contributions, payslips",
      "Direct deposit and payslip generation",
      "Payroll tax compliance and remittances",
    ],
    compliance: "STP  ·  T4  ·  W-2",
  },
  {
    Icon: Search,
    title: "Audit Agent",
    desc: "Whether you're preparing for a statutory audit or responding to a tax authority, our AI Agent builds audit-ready workpapers and flags control gaps before your auditor finds them.",
    features: [
      "Audit-ready workpaper preparation",
      "Internal control documentation",
      "IRS / CRA / ATO audit response support",
      "Compliance gap analysis",
      "Supporting schedules and reconciliations",
    ],
    compliance: "IRS  ·  CRA  ·  ATO",
  },
  {
    Icon: BarChart2,
    title: "CFO Agent",
    desc: "For businesses that need more than compliance — the agent turns your live books into forecasts and board decks, reviewed by a CFO-grade accountant, at a fraction of the cost of a full-time hire.",
    features: [
      "Monthly management reporting packages",
      "Cash flow forecasting and modelling",
      "Budget vs. actuals analysis",
      "Board-ready financial presentations",
      "KPI dashboards and business metrics",
    ],
    compliance: "Available across all three jurisdictions",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={servicesSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Five AI Agents. One accountant who owns the outcome.</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Books & Beyond offers end-to-end accounting, tax, and advisory —
          run by AI Agents, reviewed by credentialed CPAs.
        </p>
      </section>

      {/* Services list */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        {services.map(({ Icon, title, desc, features, compliance }) => (
          <div key={title} className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <Icon className="h-6 w-6 text-brand-forest shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="text-xs font-mono text-muted-foreground border-t border-border pt-4 mt-2">
              {compliance}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-card border-y border-border text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
          <p className="text-white/80 mb-8">
            Book a call with the Books & Beyond team and we&apos;ll figure it out together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-block bg-brand-forest-light text-ink font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Call
            </a>
            <a
              href="/pricing"
              className="inline-block border border-white/30 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
