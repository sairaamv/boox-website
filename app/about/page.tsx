import type { Metadata } from "next";
import { Check, ArrowLeftRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Books & Beyond — CPA-led bookkeeping, driven by process. 20+ credentialed professionals across the US, Canada, Australia, Singapore, and UK.",
  alternates: { canonical: "https://booksnb.com/about" },
};

const accountantPoints = [
  "Credentialed and country-certified professionals",
  "Deep expertise in local tax law",
  "Dedicated point of contact for every client",
  "Relationship-driven — they know your business",
  "Accountable for every number that leaves our desk",
];

const agentPoints = [
  "Categorizes transactions and reconciles accounts daily",
  "Flags anomalies before they become problems",
  "Tracks filing deadlines across every jurisdiction",
  "Works around the clock — books stay current, not just at month-end",
  "Every output reviewed by a human — no black-box results",
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
          AI Agents that work. A CPA who&apos;s accountable.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Books & Beyond is led by a licensed CPA, built on the belief that small
          businesses deserve the same quality of accounting — and the same AI
          leverage — that large enterprises have access to, without the enterprise price tag.
        </p>
      </section>

      {/* Story */}
      <section className="border-y border-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6">Our story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Books & Beyond is led by a licensed CPA, built on a simple belief: small
              businesses deserve the same quality of accounting that large enterprises
              have access to — without the enterprise price tag.
            </p>
            <p>
              Every engagement runs under CPA oversight, with AI Agents doing the
              repetitive work — categorizing, reconciling, tracking deadlines —
              so accountants spend their time on judgment calls, not data entry.
              Faster closes, cleaner books, audit-ready output.
            </p>
            <p>
              We serve businesses in the United States, Canada, Australia,
              Singapore, and the UK — each with their own tax authorities,
              compliance frameworks, and accounting standards. We don&apos;t use
              a one-size-fits-all approach.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-12">
          How we work
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

          <div className="text-white rounded-lg p-8 shadow-sm flex flex-col justify-center text-center" style={{ background: "var(--brand-gradient)" }}>
            <ArrowLeftRight className="h-8 w-8 mx-auto mb-4 opacity-80" />
            <h3 className="font-semibold text-lg mb-3">Together</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Faster month-end closes</li>
              <li>Fewer errors, more consistency</li>
              <li>Transparent reporting</li>
              <li>A human accountable for every number</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Our AI Agents</h3>
            <ul className="space-y-3">
              {agentPoints.map((item) => (
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
      <section className="border-y border-border py-16">
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

      {/* Team stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold mb-4 text-center">The team</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Led by a licensed CPA and backed by a distributed team of credentialed accountants — CPAs, CAs, CPAs (AU), and chartered accountants (SG/UK) — embedded across the US, Canada, Australia, Singapore, and UK. Every client has a named accountant who knows their books.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { stat: "20+", label: "Credentialed accountants" },
            { stat: "3", label: "Countries covered" },
            { stat: "500+", label: "Businesses served" },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-forest mb-1">{stat}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to meet the team?</h2>
          <p className="text-white/80 mb-8">
            Book a call — no obligation, just a conversation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-forest-light text-ink font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
