"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Users,
  Search,
  BarChart2,
  UserCog,
  Scale,
  Calculator,
  Landmark,
} from "lucide-react";

const tabs = ["Agents", "Services", "Team"] as const;
type Tab = (typeof tabs)[number];

const agents = [
  { Icon: BookOpen, title: "Bookkeeping Agent", desc: "Categorizes every transaction and reconciles your accounts daily — no month-end surprise.", href: "/services#bookkeeping-agent" },
  { Icon: FileText, title: "Tax Agent", desc: "Tracks deadlines and prepares filings for the US, Canada, Australia, Singapore, and UK.", href: "/services#tax-agent" },
  { Icon: Users, title: "Payroll Agent", desc: "Runs payroll and compliance filings end-to-end, in every jurisdiction you operate.", href: "/services#payroll-agent" },
  { Icon: Search, title: "Audit Agent", desc: "Builds audit-ready workpapers and flags control gaps before your auditor finds them.", href: "/services#audit-agent" },
  { Icon: BarChart2, title: "CFO Agent", desc: "Turns your data into cash-flow forecasts and board decks — updated automatically.", href: "/services#cfo-agent" },
];

const services = [
  { Icon: BookOpen, title: "Bookkeeping", desc: "Daily reconciliations, transaction categorization, monthly P&L and balance sheet.", href: "/services#bookkeeping-agent" },
  { Icon: FileText, title: "Tax Filing", desc: "Corporate returns, sales tax, and annual filings for every jurisdiction we serve.", href: "/services#tax-agent" },
  { Icon: Users, title: "Payroll", desc: "End-to-end payroll processing and compliance filings, every pay cycle.", href: "/services#payroll-agent" },
  { Icon: Search, title: "Audit Support", desc: "Audit-ready workpapers, internal controls, and compliance prep.", href: "/services#audit-agent" },
  { Icon: BarChart2, title: "CFO Advisory", desc: "Management reporting, cash flow forecasting, and board-ready financials.", href: "/services#cfo-agent" },
];

const team: { Icon: typeof UserCog; title: string; desc: string; href?: string }[] = [
  { Icon: UserCog, title: "Lead CPA", desc: "Owns your engagement and signs off on every filing." },
  { Icon: Scale, title: "Tax Specialist", desc: "Knows the local rules in your jurisdiction cold." },
  { Icon: Calculator, title: "Payroll Specialist", desc: "Runs payroll and compliance filings, on schedule." },
  { Icon: Landmark, title: "CFO Advisor", desc: "Turns your numbers into decisions, not just reports." },
];

export default function TabbedShowcase() {
  const [active, setActive] = useState<Tab>("Agents");

  const items = active === "Agents" ? agents : active === "Services" ? services : team;

  return (
    <div>
      <div className="flex justify-center gap-8 border-b border-border mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
              active === t
                ? "border-brand-forest-light text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${active === "Team" ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
        {items.map(({ Icon, title, desc, href }) => {
          const card = (
            <>
              <Icon className="h-6 w-6 text-brand-forest mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </>
          );
          return href ? (
            <Link
              key={title}
              href={href}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:border-brand-forest-light transition-colors"
            >
              {card}
            </Link>
          ) : (
            <div key={title} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
