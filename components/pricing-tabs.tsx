"use client";

import { useState } from "react";
import { FileCheck2, Send, Plane, Rocket, Check } from "lucide-react";
import CtaButton from "@/components/cta-button";

const products = [
  {
    key: "bookkeeping",
    label: "Bookkeeping Agent",
    title: "Bookkeeping Agent",
    desc: "Update your books daily, access real-time insights, and get a dedicated accountant — all on one AI platform.",
    hasToggle: true,
    tiers: [
      {
        Icon: FileCheck2,
        name: "Formation",
        listMonthly: 0,
        desc: "For newly incorporated businesses with minimal activity, getting their books set up right.",
        features: ["Up to 50 transactions/month", "Basic AI categorization", "Email support"],
      },
      {
        Icon: Send,
        name: "Starter",
        listMonthly: 494,
        annualMonthly: 445,
        desc: "Basic AI bookkeeping for pre-revenue companies + a dedicated accountant.",
      },
      {
        Icon: Plane,
        name: "Growth",
        listMonthly: 719,
        annualMonthly: 647,
        desc: "Advanced AI bookkeeping for revenue-generating companies + a dedicated accountant.",
      },
      {
        Icon: Rocket,
        name: "Enterprise",
        custom: true,
        desc: "Custom AI bookkeeping for complex companies + a dedicated accountant.",
      },
    ],
  },
  {
    key: "cfo",
    label: "Fractional CFO",
    title: "CFO Agent",
    desc: "Financial modeling and budgeting, fundraising support, board meeting prep, and day-to-day advisory.",
    hasToggle: false,
    tiers: [
      {
        Icon: Send,
        name: "CFO Lite",
        listMonthly: 1439,
        setupFee: 1800,
        features: ["Basic budgeting & forecasting", "Budget vs. actuals analysis", "12-month cash flow forecast"],
      },
      {
        Icon: Plane,
        name: "CFO Premium",
        listMonthly: 2691,
        setupFee: 5400,
        features: ["Everything in CFO Lite, plus:", "Advanced revenue & COGS modeling", "Departmental budgeting"],
      },
      {
        Icon: Rocket,
        name: "Enterprise",
        listMonthly: 4491,
        listMonthlyPlus: true,
        setupFee: 5400,
        features: ["Everything in CFO Premium, plus:", "On-demand advisory & support", "Board meeting participation"],
      },
    ],
  },
  {
    key: "taxes",
    label: "Taxes",
    title: "Tax Agent",
    desc: "A dedicated team of tax specialists handles everything from regular filings to snagging your business every credit it's owed.",
    hasToggle: false,
    tiers: [
      {
        Icon: Send,
        name: "Tax Starter",
        listAnnual: 2249,
        desc: "Taxes for pre-revenue companies.",
      },
      {
        Icon: Plane,
        name: "Tax Growth",
        listAnnual: 3509,
        desc: "Taxes for companies generating revenue up to $500K.",
      },
      {
        Icon: Rocket,
        name: "Tax Enterprise",
        custom: true,
        desc: "Taxes for companies generating revenue over $500K.",
      },
    ],
    includes: ["Tax concierge", "Federal income tax filing", "State corporate income tax filing"],
  },
  {
    key: "payroll",
    label: "Payroll",
    title: "Payroll Agent",
    desc: "Payroll run and reviewed every cycle — onboarding, terminations, and compliance handled end-to-end.",
    hasToggle: false,
    tiers: [
      {
        Icon: Send,
        name: "Payroll Manager",
        listMonthly: 179,
        annualContract: true,
        features: ["Employee onboarding, termination & ongoing support", "Payroll system management", "Compliance across all states and jurisdictions"],
      },
    ],
  },
] as const;

const COUNTRIES = [
  { code: "US", currency: "USD", symbol: "$", rate: 1 },
  { code: "CA", currency: "CAD", symbol: "$", rate: 1.35 },
  { code: "AU", currency: "AUD", symbol: "$", rate: 1.53 },
  { code: "SG", currency: "SGD", symbol: "$", rate: 1.29 },
  { code: "UK", currency: "GBP", symbol: "£", rate: 0.77 },
] as const;

type Country = (typeof COUNTRIES)[number];

function fmt(n: number, country: Country) {
  const converted = Math.round(n * country.rate);
  const amount = `${country.symbol}${converted.toLocaleString()}`;
  return country.code === "US" ? amount : `${amount} ${country.currency}`;
}

export default function PricingTabs() {
  const [active, setActive] = useState<string>(products[0].key);
  const [annual, setAnnual] = useState(true);
  const [country, setCountry] = useState<Country>(COUNTRIES[0]);

  const product = products.find((p) => p.key === active) ?? products[0];
  const single = product.tiers.length === 1;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-1 mb-6 border border-border rounded-lg p-1 w-fit mx-auto">
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            onClick={() => setCountry(c)}
            className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${
              country.code === c.code
                ? "bg-brand-forest text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.code}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {products.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
              active === p.key
                ? "border-brand-forest-light text-brand-forest-light bg-brand-forest/10"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">{product.desc}</p>
      </div>

      {product.hasToggle && (
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 border border-border rounded-full p-1">
            <span className="text-xs font-mono text-brand-forest-light bg-brand-forest/10 rounded-full px-2 py-1 mr-1">
              Save 10%
            </span>
            <button
              onClick={() => setAnnual(true)}
              className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                annual ? "bg-brand-forest text-white" : "text-muted-foreground"
              }`}
            >
              Annually
            </button>
            <button
              onClick={() => setAnnual(false)}
              className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                !annual ? "bg-brand-forest text-white" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
          single
            ? "max-w-md mx-auto sm:grid-cols-1"
            : product.tiers.length === 4
              ? "lg:grid-cols-4"
              : "lg:grid-cols-3"
        }`}
      >
        {product.tiers.map((tier) => {
          const t = tier as (typeof product.tiers)[number] & {
            listMonthly?: number;
            annualMonthly?: number;
            listAnnual?: number;
            setupFee?: number;
            listMonthlyPlus?: boolean;
            annualContract?: boolean;
            custom?: boolean;
            desc?: string;
            features?: string[];
          };
          const monthlyPrice =
            product.hasToggle && annual && t.annualMonthly ? t.annualMonthly : t.listMonthly;

          return (
            <div key={t.name} className="bg-card border border-border rounded-lg p-8 shadow-sm flex flex-col">
              <div className="h-10 w-10 rounded-lg bg-brand-forest/15 flex items-center justify-center mb-6">
                <t.Icon className="h-5 w-5 text-brand-forest-light" />
              </div>
              <h4 className="font-bold text-lg mb-3">{t.name}</h4>

              {t.custom ? (
                <div className="mb-1">
                  <span className="text-3xl font-bold">Custom Pricing</span>
                </div>
              ) : t.listAnnual ? (
                <div className="mb-1 flex items-baseline gap-1 flex-wrap">
                  <span className="text-3xl font-bold">{fmt(t.listAnnual, country)}</span>
                  <span className="text-sm text-muted-foreground">/Annually</span>
                </div>
              ) : (
                <div className="mb-1 flex items-baseline gap-1 flex-wrap">
                  {t.listMonthlyPlus && <span className="text-3xl font-bold">{fmt(monthlyPrice!, country)}+</span>}
                  {!t.listMonthlyPlus && <span className="text-3xl font-bold">{fmt(monthlyPrice!, country)}</span>}
                  <span className="text-sm text-muted-foreground">/Monthly</span>
                </div>
              )}
              {t.setupFee && (
                <p className="text-xs text-muted-foreground mb-4">+{fmt(t.setupFee, country)} setup fee</p>
              )}
              {t.annualContract && (
                <p className="text-xs text-muted-foreground mb-4">Annual contract</p>
              )}
              {!t.setupFee && !t.annualContract && <div className="mb-4" />}

              {t.desc && <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>}

              <CtaButton href="/contact" variant="primary" className="text-center mb-6">
                Schedule Demo
              </CtaButton>

              {t.features && (
                <ul className="space-y-2 mt-auto">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {"includes" in product && product.includes && (
        <div className="bg-card border border-border rounded-lg p-8 mt-6">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
            All plans include
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {product.includes.map((i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="h-3.5 w-3.5 text-brand-forest mt-0.5 shrink-0" />
                {i}
              </div>
            ))}
          </div>
        </div>
      )}

      {country.code !== "US" && (
        <p className="text-xs text-muted-foreground text-center mt-6 font-mono">
          Prices shown in {country.currency}, converted for reference at approximate exchange rates — invoices are billed in USD.
        </p>
      )}
    </div>
  );
}
