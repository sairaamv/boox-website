import type { Metadata } from "next";
import { BookOpen, FileText, Users, Search, BarChart2, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping, tax filing, payroll, audit support, and CFO advisory — all jurisdictions covered by Books & Beyond.",
};

const services = [
  {
    Icon: BookOpen,
    title: "Bookkeeping",
    desc: "Accurate books are the foundation of everything else. We handle daily reconciliations, transaction categorization, and monthly reporting so your financials are always current and correct.",
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
    title: "Tax Filing",
    desc: "We handle the full cycle of tax compliance — corporate returns, indirect taxes, and annual filings — across all three jurisdictions we serve.",
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
    title: "Payroll",
    desc: "End-to-end payroll processing with full compliance for each country's requirements — from payslips to year-end reporting.",
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
    title: "Audit Support",
    desc: "Whether you're preparing for a statutory audit or responding to a tax authority, we produce audit-ready workpapers and documentation that stand up to scrutiny.",
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
    title: "CFO Advisory",
    desc: "For businesses that need more than compliance — strategic financial insight, management reporting, and planning support at a fraction of the cost of a full-time CFO.",
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
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Books & Beyond offers end-to-end accounting, tax, and advisory —
          powered by expert humans and AI workflows.
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
      <section className="bg-brand-forest text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
          <p className="text-white/80 mb-8">
            Book a call with the Books & Beyond team and we&apos;ll figure it out together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-brand-forest font-medium px-8 py-3 rounded-lg hover:bg-muted transition-colors"
            >
              Book a Call
            </a>
            <a
              href="/pricing"
              className="inline-block border border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-brand-forest-light transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
