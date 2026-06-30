export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-xs font-mono text-muted-foreground mb-10">Last updated: January 2025</p>

      <div className="space-y-10 text-sm text-muted-foreground">
        {[
          {
            title: "Information We Collect",
            content:
              "We collect information you provide directly to us, such as when you fill out a contact form or enter into a service agreement. {PRIVACY_CONTENT}",
          },
          {
            title: "How We Use It",
            content:
              "We use the information we collect to provide, maintain, and improve our services. {PRIVACY_CONTENT}",
          },
          {
            title: "Third Parties",
            content:
              "We do not sell your personal information. We may share it with service providers who assist us in operating our business. {PRIVACY_CONTENT}",
          },
          {
            title: "Your Rights",
            content:
              "Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete it. {PRIVACY_CONTENT}",
          },
          {
            title: "Contact",
            content:
              "If you have questions about this policy, contact us at hello@booksnb.com. {PRIVACY_CONTENT}",
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
