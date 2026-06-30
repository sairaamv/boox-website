export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-xs font-mono text-muted-foreground mb-10">Last updated: January 2025</p>

      <div className="space-y-10 text-sm text-muted-foreground">
        {[
          {
            title: "Acceptance of Terms",
            content:
              "By using Books & Beyond services, you agree to these terms. {TERMS_CONTENT}",
          },
          {
            title: "Services",
            content:
              "Books & Beyond provides virtual accounting, tax, and advisory services. The scope of services is defined in your service agreement. {TERMS_CONTENT}",
          },
          {
            title: "Client Responsibilities",
            content:
              "You are responsible for providing accurate and complete information required to perform our services. {TERMS_CONTENT}",
          },
          {
            title: "Confidentiality",
            content:
              "Both parties agree to keep confidential all non-public information exchanged in connection with the services. {TERMS_CONTENT}",
          },
          {
            title: "Limitation of Liability",
            content:
              "Our liability is limited to the fees paid for the specific services giving rise to the claim. {TERMS_CONTENT}",
          },
          {
            title: "Contact",
            content:
              "For questions about these terms, contact us at hello@booksnb.com. {TERMS_CONTENT}",
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
