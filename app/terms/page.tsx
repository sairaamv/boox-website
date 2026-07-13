import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of booksnb.com and Books & Beyond services.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-xs font-mono text-muted-foreground mb-10">Last updated: June 2025</p>

      <div className="space-y-10 text-sm text-muted-foreground">
        {[
          {
            title: "Acceptance of Terms",
            content:
              "By engaging Books & Beyond (booksnb.com) for any service, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have authority to bind that entity. These terms apply to all clients across all jurisdictions we serve.",
          },
          {
            title: "Services",
            content:
              "Books & Beyond provides virtual accounting, bookkeeping, tax filing, payroll, audit support, and CFO advisory services. The specific scope of services, deliverables, and timelines for your engagement are defined in your individual service agreement or engagement letter. We reserve the right to decline or discontinue services that fall outside our competency or that conflict with applicable laws.",
          },
          {
            title: "Client Responsibilities",
            content:
              "You are responsible for providing accurate, complete, and timely information required for us to perform our services. This includes source documents, bank statements, payroll records, and any other materials we request. Errors or omissions in information you provide may affect the accuracy of our work. We are not liable for outcomes resulting from incomplete or inaccurate information supplied by you.",
          },
          {
            title: "Confidentiality",
            content:
              "Both parties agree to keep confidential all non-public information exchanged in connection with the services. We will not disclose your financial information to third parties except as required by law, to our service providers operating under confidentiality obligations, or with your explicit written consent. We maintain appropriate technical and organizational measures to protect your data.",
          },
          {
            title: "Fees and Payment",
            content:
              "Fees are as set out in your service agreement or our published pricing. Monthly plans are billed at the start of each billing cycle. Invoices are due within 14 days of issuance unless otherwise agreed. We reserve the right to suspend services for accounts with outstanding balances past 30 days. All fees are non-refundable except as required by law.",
          },
          {
            title: "Limitation of Liability",
            content:
              "Our aggregate liability to you for any claim arising from or related to our services is limited to the total fees paid by you in the three months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages. Nothing in these terms limits liability for fraud, gross negligence, or wilful misconduct.",
          },
          {
            title: "Termination",
            content:
              "Either party may terminate the engagement with 30 days written notice. We reserve the right to terminate immediately for non-payment, breach of these terms, or if we determine continuation would create a legal or ethical conflict. Upon termination, we will provide you with all work product completed to date and return your documents.",
          },
          {
            title: "Governing Law",
            content:
              "These terms are governed by the laws of the jurisdiction in which your service agreement is established — Delaware (US clients), Ontario (Canadian clients), or New South Wales (Australian clients) — unless otherwise specified in your engagement letter.",
          },
          {
            title: "Contact",
            content:
              "For questions about these terms, contact us at hello@booksnb.com or via the contact form at booksnb.com/contact.",
          },
        ].map((s) => (
          <div key={s.title}>
            <h2 className="text-base font-semibold text-foreground mb-2">{s.title}</h2>
            <p>{s.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
