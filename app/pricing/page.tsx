import type { Metadata } from "next";
import CtaButton from "@/components/cta-button";
import PricingTabs from "@/components/pricing-tabs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent per-service pricing for bookkeeping, CFO advisory, tax filing, and payroll — no bundled markups.",
  alternates: { canonical: "https://booksnb.com/pricing" },
};

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
          One plan per AI Agent — bookkeeping, CFO advisory, taxes, and payroll each priced on their own.
        </p>
      </section>

      {/* Pricing tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <PricingTabs />
        <p className="text-xs text-muted-foreground text-center mt-10 font-mono">
          Pricing is scoped to your transaction volume and complexity. Multi-entity pricing available — ask us.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-y border-border py-16">
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
