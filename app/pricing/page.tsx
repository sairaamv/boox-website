import { Check } from "lucide-react";
import CtaButton from "@/components/cta-button";

const tiers = [
  {
    name: "Starter",
    desc: "For small businesses getting their books in order.",
    features: [
      "Bookkeeping Agent — up to 200 transactions/month",
      "Monthly bookkeeping",
      "Tax Agent (1 return/yr)",
      "Email support",
      "QuickBooks or Xero integration",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
    highlight: false,
  },
  {
    name: "Growth",
    desc: "For growing businesses that need more support.",
    features: [
      "Everything in Starter",
      "Bookkeeping Agent — up to 500 transactions/month",
      "Payroll Agent (up to 10 employees)",
      "Quarterly reporting",
      "Dedicated accountant",
      "Priority support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    desc: "Custom accounting and advisory for larger businesses.",
    features: [
      "Everything in Growth",
      "Unlimited transactions",
      "CFO Agent + advisory",
      "Audit Agent + support",
      "SLA guarantee",
      "Custom reporting",
      "Multi-entity support",
    ],
    cta: "Get a Custom Quote",
    ctaHref: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans?",
    a: "Yes — you can upgrade or downgrade at any time. Changes take effect from the next billing cycle.",
  },
  {
    q: "What's included in onboarding?",
    a: "Every new client gets a dedicated setup call and data migration support. We handle the transition.",
  },
  {
    q: "Do you handle multiple entities?",
    a: "Yes. We support multi-entity structures. Ask us about our multi-entity pricing when you book a call.",
  },
  {
    q: "What software do you support?",
    a: "QuickBooks and Xero across all plans. Wave for Canadian clients, MYOB for Australian clients.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Every plan runs on AI Agents and a dedicated accountant. Get a quote in one call.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-card border rounded-lg p-8 shadow-sm flex flex-col relative ${
                tier.highlight ? "border-brand-forest" : "border-border"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono bg-brand-forest text-white px-3 py-1 rounded-lg">
                  {tier.badge}
                </span>
              )}
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-1">{tier.name}</h2>
                <p className="text-sm text-muted-foreground mt-3">{tier.desc}</p>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <CtaButton
                href={tier.ctaHref}
                variant={tier.highlight ? "primary" : "secondary"}
                className="text-center w-full"
              >
                {tier.cta}
              </CtaButton>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6 font-mono">
          Pricing is scoped to your transaction volume and complexity. Annual
          billing available — ask us.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">Need something custom?</h2>
        <p className="text-muted-foreground mb-6">
          Large teams, complex structures, or multi-entity businesses — let&apos;s talk.
        </p>
        <CtaButton href="/contact" variant="primary">
          Get a Custom Quote
        </CtaButton>
      </section>
    </>
  );
}
