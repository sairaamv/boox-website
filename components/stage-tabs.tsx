"use client";

import { useState } from "react";
import Link from "next/link";
import { PnlMockCard, FilingMockCard, CashflowMockCard } from "@/components/mock-cards";

const stages = [
  {
    key: "starter",
    label: "Just Starting",
    headline: "Get your books in order, without hiring a team.",
    desc: "For small businesses that need clean books and a filing calendar they can trust — nothing more, nothing less.",
    team: ["Bookkeeping Agent", "Tax Agent"],
    Card: PnlMockCard,
  },
  {
    key: "growth",
    label: "Growing Fast",
    headline: "Add payroll and a dedicated accountant as you scale.",
    desc: "More transactions, more employees, more jurisdictions — the same AI Agents, plus a named accountant who knows your business.",
    team: ["Bookkeeping Agent", "Tax Agent", "Payroll Agent", "Dedicated Accountant"],
    Card: FilingMockCard,
  },
  {
    key: "enterprise",
    label: "Multi-Entity",
    headline: "CFO-grade advisory across every entity you run.",
    desc: "Unlimited transactions, multi-entity support, audit prep, and forecasting that boards actually read.",
    team: ["All 5 AI Agents", "Dedicated Accountant", "CFO Advisor", "Audit Support"],
    Card: CashflowMockCard,
  },
];

export default function StageTabs() {
  const [active, setActive] = useState(stages[0].key);
  const stage = stages.find((s) => s.key === active) ?? stages[0];
  const Card = stage.Card;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {stages.map((s) => (
          <button
            key={s.key}
            onClick={() => setActive(s.key)}
            className={`text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
              active === s.key
                ? "border-brand-forest-light text-brand-forest-light bg-brand-forest/10"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">{stage.headline}</h3>
          <p className="text-muted-foreground mb-6">{stage.desc}</p>

          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3">
              What&apos;s included
            </span>
            <div className="flex flex-wrap gap-2">
              {stage.team.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-foreground border border-border rounded-lg px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-block bg-brand-forest text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-brand-forest-light transition-colors"
          >
            See pricing for this stage
          </Link>
        </div>
        <Card />
      </div>
    </div>
  );
}
