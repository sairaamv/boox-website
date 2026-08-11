"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const email = searchParams.get("email");
    if (email) setForm((prev) => ({ ...prev, email }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://booksnb-contact.scbx.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Get in touch</h1>
          <p className="text-muted-foreground max-w-xl">
            The Books & Beyond team responds within 1 business day. No sales
            scripts — just a straightforward conversation about your books.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Email
              </p>
              <a
                href="mailto:hello@booksnb.com"
                className="text-brand-forest hover:underline font-medium"
              >
                hello@booksnb.com
              </a>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Response time
              </p>
              <p className="text-sm text-muted-foreground">
                We respond within 1 business day.
              </p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Time zones
              </p>
              <p className="text-sm text-muted-foreground">
                Operating across US, Canada, Australia, Singapore, and UK time zones.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Serving clients in:</h3>
              <div className="space-y-1">
                {["United States", "Canada", "Australia", "Singapore", "United Kingdom"].map((label) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            {status === "sent" ? (
              <div className="text-center py-8">
                <CheckCircle className="h-10 w-10 text-brand-forest mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Message sent</h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    placeholder="Tell us about your business and what you need help with..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please email us directly at hello@booksnb.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-brand-forest text-white py-3 rounded-lg text-sm font-medium hover:bg-brand-forest-light transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
