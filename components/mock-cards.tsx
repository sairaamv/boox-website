export function PnlMockCard() {
  const rows = [
    { label: "Revenue", value: "$482,190", delta: "+12%", up: true },
    { label: "Cost of Goods", value: "$164,020", delta: "-4%", up: false },
    { label: "Net Burn", value: "-$38,410", delta: "-9%", up: false },
  ];
  return (
    <div className="bg-card border border-border rounded-2xl shadow-lg p-6 w-full">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          P&amp;L — closed
        </span>
        <span className="text-xs font-mono text-brand-forest-light bg-brand-forest/15 rounded-full px-2 py-0.5">
          on time
        </span>
      </div>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{r.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground font-mono">{r.value}</span>
              <span
                className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                  r.up ? "text-brand-forest-light bg-brand-forest/15" : "text-bnb-coral-soft bg-bnb-coral/15"
                }`}
              >
                {r.delta}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-forest opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-forest" />
        </span>
        Reviewed by your accountant — day 3
      </div>
    </div>
  );
}

export function FilingMockCard() {
  const rows = [
    { label: "Corporate return", tag: "IRS", done: true },
    { label: "Sales tax filing", tag: "CRA", done: true },
    { label: "GST / BAS", tag: "ATO", done: false },
  ];
  return (
    <div className="bg-card border border-border rounded-2xl shadow-lg p-6 w-full">
      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-5">
        Filing checklist
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between border border-border rounded-lg px-3 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-4 w-4 rounded-full items-center justify-center text-[10px] text-white ${
                  r.done ? "bg-brand-forest" : "bg-border"
                }`}
              >
                {r.done ? "✓" : ""}
              </span>
              <span className="text-sm text-foreground">{r.label}</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5">
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CashflowMockCard() {
  const bars = [40, 65, 50, 80, 62, 90];
  return (
    <div className="bg-card border border-border rounded-2xl shadow-lg p-6 w-full">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Cash runway
        </span>
        <span className="text-sm font-semibold text-foreground font-mono">14.2 mo</span>
      </div>
      <div className="flex items-end gap-2 h-24">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? "var(--brand-gradient)" : "var(--border)",
            }}
          />
        ))}
      </div>
      <div className="mt-4 text-xs text-muted-foreground">
        Board-ready forecast, updated every month
      </div>
    </div>
  );
}
