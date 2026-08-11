import Link from "next/link";
import { Check, MapPin, Sparkles, ArrowRight } from "lucide-react";
import Hero from "@/components/hero";
import { PnlMockCard, FilingMockCard, CashflowMockCard } from "@/components/mock-cards";
import TabbedShowcase from "@/components/tabbed-showcase";
import StageTabs from "@/components/stage-tabs";

const agentPoints = [
  "Reconciles transactions and flags anomalies in real time",
  "Never misses a filing deadline, in any jurisdiction",
  "Drafts your reports before your accountant's coffee is cold",
  "Works 24/7 — books stay current, not just at month-end",
];

const humanPoints = [
  "A credentialed CPA reviews every number that leaves our desk",
  "Deep knowledge of local tax law in your jurisdiction",
  "One dedicated point of contact — not a support queue",
  "Accountable for the outcome, not just the automation",
];

const countries = [
  { name: "United States", href: "/us", code: "IRS" },
  { name: "Canada", href: "/ca", code: "CRA" },
  { name: "Australia", href: "/au", code: "ATO" },
  { name: "Singapore", href: "/sg", code: "IRAS" },
  { name: "United Kingdom", href: "/uk", code: "HMRC" },
];

const testimonials = [
  {
    quote:
      "Their AI Agent caught a duplicate vendor charge our old firm missed for two months. Their accountant called us about it the same day. That's the combination that actually works.",
    name: "Sarah K.",
    role: "Co-Founder, Brightpath Media — Austin, TX",
  },
  {
    quote:
      "CRA filings and payroll now run themselves. No back-and-forth, no chasing — it just gets done, on time, every time.",
    name: "James T.",
    role: "CEO, NorthGrid Software — Toronto, ON",
  },
  {
    quote:
      "Finally a firm that understands GST and BAS instead of guessing. The AI Agent keeps our books current; our accountant keeps us out of trouble.",
    name: "Priya M.",
    role: "CFO, Helix Commerce — Sydney, NSW",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* AI Agents / Services / Team tabs */}
      <section className="border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-forest bg-card border border-border rounded-full px-3 py-1 mb-4">
              <Sparkles className="h-3 w-3" />
              One platform, three ways to see it
            </span>
            <h2 className="text-3xl font-bold">One team. Five AI Agents. Zero excuses.</h2>
            <p className="text-muted-foreground mt-2">
              Every agent works under a credentialed accountant — always reviewed, never a black box.
            </p>
          </div>
          <TabbedShowcase />
        </div>
      </section>

      {/* Alternating: Bookkeeping Agent */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-bnb-coral">
            Bookkeeping Agent
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4">Never wonder where you stand.</h2>
          <p className="text-muted-foreground mb-6">
            Your books close themselves — every transaction categorized, every
            account reconciled, every day. Your accountant signs off before
            anything reaches you.
          </p>
          <ul className="space-y-3 mb-6">
            {["Real-time categorization and reconciliation", "Anomalies flagged before they become problems", "Books closed 5x faster than a traditional firm"].map(
              (i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                  {i}
                </li>
              )
            )}
          </ul>
          <Link
            href="/services#bookkeeping-agent"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-forest-light hover:text-brand-forest transition-colors"
          >
            See more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <PnlMockCard />
      </section>

      {/* Alternating: Tax Agent */}
      <section className="border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FilingMockCard />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-mono uppercase tracking-wider text-bnb-coral">
              Tax Agent
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-4">Filing, without the scramble.</h2>
            <p className="text-muted-foreground mb-6">
              Deadlines tracked automatically across every jurisdiction you
              operate in. Filings prepared by the agent, filed by a CPA who
              knows the local rules cold.
            </p>
            <ul className="space-y-3 mb-6">
              {["Corporate, sales tax, and annual filings", "US, Canada, Australia, Singapore, and UK coverage", "99.8% filing accuracy, every cycle"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
            <Link
              href="/services#tax-agent"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-forest-light hover:text-brand-forest transition-colors"
            >
              See more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Alternating: CFO Agent */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-bnb-coral">
            CFO Agent
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4">
            Know your runway before it&apos;s a crisis.
          </h2>
          <p className="text-muted-foreground mb-6">
            Cash-flow forecasts and board decks, generated from your live
            books and reviewed by a CFO-grade accountant — not a static
            spreadsheet from last quarter.
          </p>
          <ul className="space-y-3 mb-6">
            {["Forecasts that update as your books do", "Board-ready reporting, no formatting required", "A dedicated advisor who knows your business"].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                {i}
              </li>
            ))}
          </ul>
          <Link
            href="/services#cfo-agent"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-forest-light hover:text-brand-forest transition-colors"
          >
            See more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <CashflowMockCard />
      </section>

      {/* Built for every stage */}
      <section className="border-y border-border py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Built for every stage.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Same AI Agents from day one. What changes is how much human
              advisory you need on top.
            </p>
          </div>
          <StageTabs />
        </div>
      </section>

      {/* Agents + Humans */}
      <section className="border-y border-border py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              AI Agents do the work. Humans own the outcome.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We didn&apos;t replace accountants with AI. We gave them AI Agents
              so nothing slips through.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Our AI Agents</h3>
              <ul className="space-y-3">
                {agentPoints.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Your Accountant</h3>
              <ul className="space-y-3">
                {humanPoints.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Country selector */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Wherever you operate, we file it.</h2>
          <p className="text-muted-foreground mb-10">
            Same AI Agents. Local accountants who know your tax authority cold.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
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
      <section className="border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-10">What our clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <p className="text-sm text-muted-foreground italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-card border-y border-border text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Put an AI Agent on your books today.
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            See it live, reviewed by a real accountant, in a 20-minute demo.
            No sales pitch — just your books, closed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-[1.02] text-ink bg-brand-forest-light"
            >
              Get a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/20 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
