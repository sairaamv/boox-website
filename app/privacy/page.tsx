export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-xs font-mono text-muted-foreground mb-10">Last updated: June 2025</p>

      <div className="space-y-10 text-sm text-muted-foreground">
        {[
          {
            title: "Information We Collect",
            content:
              "We collect information you provide directly — such as when you fill out a contact form, enter into a service agreement, or communicate with our team. This includes your name, email address, phone number, business details, and financial documents necessary to perform our services. We also collect limited technical data (IP address, browser type, pages visited) through standard web analytics to improve our website.",
          },
          {
            title: "How We Use It",
            content:
              "We use the information we collect to deliver, maintain, and improve our accounting and advisory services; to communicate with you about your account and filings; to meet our legal and regulatory obligations (including tax authority requirements); and to send occasional service updates. We do not use your data for advertising or marketing to third parties.",
          },
          {
            title: "Third Parties",
            content:
              "We do not sell your personal or financial information. We may share it with carefully selected service providers who assist us in operating our business — such as cloud accounting platforms (QuickBooks, Xero), secure document storage providers, and payment processors — all of whom are bound by confidentiality obligations. We may also disclose information if required by law, court order, or a regulatory authority in your jurisdiction.",
          },
          {
            title: "Data Security",
            content:
              "We use industry-standard encryption in transit and at rest for all client data. Access to your financial information is restricted to the accountants assigned to your account. We conduct regular security reviews and require all team members to complete data handling training. In the event of a data breach that affects you, we will notify you as required by applicable law.",
          },
          {
            title: "Data Retention",
            content:
              "We retain client records for the period required by applicable tax and accounting regulations in your jurisdiction — typically 7 years for US and Canadian clients and 5 years for Australian clients from the date of the relevant transaction. After the retention period, data is securely deleted or anonymised. You may request early deletion of non-regulated data at any time.",
          },
          {
            title: "Your Rights",
            content:
              "Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or port it. US clients in applicable states, Canadian clients under PIPEDA/provincial law, and Australian clients under the Privacy Act 1988 each have specific rights. To exercise any of these rights, contact us at hello@booksnb.com. We will respond within 30 days.",
          },
          {
            title: "Cookies",
            content:
              "Our website uses essential cookies required for basic functionality and analytics cookies to understand how visitors use the site. We do not use advertising cookies. You can control cookie settings through your browser preferences. Disabling cookies may affect some site features.",
          },
          {
            title: "Contact",
            content:
              "If you have questions about this policy or want to exercise your data rights, contact us at hello@booksnb.com or via the contact form at booksnb.com/contact.",
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
