import { Check, ArrowLeftRight } from "lucide-react";

const accountantPoints = [
  "Credentialed and country-certified professionals",
  "Deep expertise in local tax law",
  "Dedicated point of contact for every client",
  "Relationship-driven — they know your business",
  "Accountable for every number that leaves our desk",
];

const aiPoints = [
  "Automates transaction categorization",
  "Flags anomalies before they become problems",
  "Speeds up reconciliation and close",
  "Consistent application of rules at scale",
  "Humans review everything — no AI-only outputs",
];

const values = [
  {
    title: "Accuracy first",
    desc: "Every number is reviewed by a human before it leaves our desk. We don't ship books we haven't checked.",
  },
  {
    title: "Transparent",
    desc: "You always know what we've done, what we've filed, and why. No black boxes.",
  },
  {
    title: "Country-specific",
    desc: "We don't apply US rules to Australian books. Each jurisdiction has different requirements, and we know all of them.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">
          Built by accountants. Powered by AI.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          BooX started with a simple belief: small businesses deserve the same
          quality of accounting that large enterprises have access to — without
          the enterprise price tag.
        </p>
      </section>

      {/* Story */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6">Our story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              BooX started with a simple belief: small businesses deserve the same
              quality of accounting that large enterprises have access to — without
              the enterprise price tag.
            </p>
            <p>
              We combine experienced accountants with AI-powered workflows to
              deliver faster month-end closes, cleaner books, and audit-ready
              output. The AI handles the repetitive work. The accountants handle
              the judgment calls.
            </p>
            <p>
              We serve businesses in the United States, Canada, and Australia —
              each with their own tax authorities, compliance frameworks, and
              accounting standards. We don&apos;t use a one-size-fits-all approach.
            </p>
          </div>
        </div>
      </section>

      {/* Humans + AI */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-12">
          What &ldquo;Humans + AI&rdquo; actually means
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div className="bg-brand-forest text-white rounded-lg p-8 shadow-sm flex flex-col justify-center text-center">
            <ArrowLeftRight className="h-8 w-8 mx-auto mb-4 opacity-80" />
            <h3 className="font-semibold text-lg mb-3">Together</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Faster month-end closes</li>
              <li>Fewer errors, more consistency</li>
              <li>Transparent reporting</li>
              <li>Human judgment on everything</li>
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

      {/* Values */}
      <section className="bg-muted border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold mb-4 text-center">The team</h2>
        <p className="text-muted-foreground text-center mb-10">
          Our team of {"{COUNT}"} accountants serves businesses across three continents.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-muted border border-border rounded-lg aspect-square flex items-center justify-center text-xs text-muted-foreground font-mono">
              {"{TEAM_PHOTO}"}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-forest text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to meet the team?</h2>
          <p className="text-white/80 mb-8">
            Book a call — no obligation, just a conversation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-forest font-medium px-8 py-3 rounded-lg hover:bg-muted transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
