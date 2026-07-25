import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent bookkeeping, tax, and payroll plans for businesses in the US, Canada, Australia, Singapore, and UK. Contact us for current pricing.",
  alternates: { canonical: "https://booksnb.com/pricing" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I switch plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — you can upgrade or downgrade at any time. Changes take effect from the next billing cycle.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in onboarding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every new client gets a dedicated setup call and data migration support. We handle the transition.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle multiple entities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support multi-entity structures. Contact us about multi-entity pricing when you book a call.",
      },
    },
    {
      "@type": "Question",
      name: "What accounting software do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QuickBooks and Xero across all plans. Wave for Canadian clients, MYOB for Australian clients.",
      },
    },
    {
      "@type": "Question",
      name: "What currencies are your plans available in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plans are available in USD, CAD, AUD, SGD, and GBP. Contact us for current pricing in your currency.",
      },
    },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={faqSchema} />
      {children}
    </>
  );
}
