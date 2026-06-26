import Link from "next/link";
import {
  BookOpen,
  FileText,
  Users,
  Search,
  BarChart2,
  Check,
  MapPin,
} from "lucide-react";
import CtaButton from "@/components/cta-button";

const services = [
  {
    Icon: BookOpen,
    title: "Bookkeeping",
    desc: "Daily reconciliations, transaction categorization, monthly P&L and balance sheet.",
  },
  {
    Icon: FileText,
    title: "Tax Filing",
    desc: "Corporate returns, sales tax, and annual filings for US, Canada, and Australia.",
  },
  {
    Icon: Users,
    title: "Payroll",
    desc: "End-to-end payroll processing and compliance filings for every jurisdiction.",
  },
  {
    Icon: Search,
    title: "Audit Support",
    desc: "Audit-ready workpapers, internal controls, and compliance prep.",
  },
  {
    Icon: BarChart2,
    title: "CFO Advisory",
    desc: "Management reporting, cash flow forecasting, and board-ready financials.",
  },
];

const accountantPoints = [
  "Credentialed professionals in your jurisdiction",
  "Deep knowledge of local tax law and compliance",
  "Relationship-driven — a dedicated point of contact",
  "Accountable for every number that leaves our desk",
];

const aiPoints = [
  "Automates transaction categorization and reconciliation",
  "Flags anomalies before they become problems",
  "Speeds up month-end close without cutting corners",
  "Humans review everything — no AI-only outputs",
];

const countries = [
  { name: "United States", href: "/us", code: "IRS" },
  { name: "Canada", href: "/ca", code: "CRA" },
  { name: "Australia", href: "/au", code: "ATO" },
];

const testimonials = [
  {
    quote: "{TESTIMONIAL_QUOTE}",
    name: "{TESTIMONIAL_NAME}",
    role: "{TESTIMONIAL_ROLE}",
  },
  {
    quote: "{TESTIMONIAL_QUOTE}",
    name: "{TESTIMONIAL_NAME}",
    role: "{TESTIMONIAL_ROLE}",
  },
  {
    quote: "{TESTIMONIAL_QUOTE}",
    name: "{TESTIMONIAL_NAME}",
    role: "{TESTIMONIAL_ROLE}",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground mb-8">
          Serving US · Canada · Australia
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
          Virtual Accounting.{" "}
          <span className="text-brand-forest">Humans + AI.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Expert accountants backed by AI-powered workflows — faster closes,
          cleaner books, audit-ready output. Serving businesses across the US,
          Canada, and Australia.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <CtaButton href="/contact" variant="primary">
            Book a Call
          </CtaButton>
          <CtaButton href="/services" variant="secondary">
            Get Started
          </CtaButton>
        </div>
        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {["IRS-Compliant", "CRA-Certified", "ATO-Registered"].map((b) => (
            <span
              key={b}
              className="text-xs font-mono border border-border rounded-lg px-4 py-2 text-muted-foreground bg-card"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">What we do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-lg p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-brand-forest mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CtaButton href="/services" variant="secondary">
              View all services
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Humans + AI */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Expert humans, powered by AI</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We didn&apos;t replace accountants with software. We gave experienced
            accountants better tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Our Accountants</h3>
            <ul className="space-y-3">
              {accountantPoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Our AI</h3>
            <ul className="space-y-3">
              {aiPoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Country selector */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Where are you based?</h2>
          <p className="text-muted-foreground mb-10">
            We tailor our work to your local tax authority and compliance requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {countries.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:border-brand-forest transition-colors text-center group"
              >
                <MapPin className="h-6 w-6 text-brand-forest mx-auto mb-2" />
                <div className="font-semibold text-sm group-hover:text-brand-forest transition-colors">
                  {c.name}
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{c.code}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">What our clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <p className="text-sm text-muted-foreground italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-brand-forest text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to clean up your books?</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Talk to an accountant today. No sales pitch — just a conversation about
            what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-forest font-medium px-8 py-3 rounded-lg hover:bg-muted transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
