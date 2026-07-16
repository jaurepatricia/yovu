import { useState } from "react";
import { Check, X } from "lucide-react";

const tiers = [
  { name: "Starter", monthly: "$18", annually: "$15", custom: false },
  { name: "Professional", monthly: "$39", annually: "$32", custom: false },
  { name: "Advanced", monthly: "Custom", annually: "Custom", custom: true },
  { name: "Ultra", monthly: "Custom", annually: "Custom", custom: true },
] as const;

type Cell = boolean | string;
type Row = { label: string; subhead?: never; values: Cell[] } | { subhead: string; label?: never };

type Category = {
  name: string;
  rows: Row[];
};

const categories: Category[] = [
  {
    name: "Telephony",
    rows: [
      {
        label: "Voice Features (AA, Hunt Groups, Directory, Paging)",
        values: [true, true, true, true],
      },
      { label: "Direct Inward Dial (DID) Number", values: [true, true, true, true] },
      { label: "Unlimited SMS", values: [true, true, true, true] },
      { label: "Unlimited North America Calling", values: [true, true, true, true] },
      { label: "Voicemail (incl. Transcription)", values: [true, true, true, true] },
      { label: "Web-Based Administration", values: [true, true, true, true] },
      { label: "Mobile Application", values: [true, true, true, true] },
      { label: "Soft Phone", values: [true, true, true, true] },
    ],
  },
  {
    name: "Call Queueing",
    rows: [
      { label: "Queue Logging / Monitoring", values: [false, true, true, true] },
      { label: "Agent Login / Logout", values: [false, true, true, true] },
      { label: "Reason Codes", values: [false, true, true, true] },
      { label: "Analytics", values: [false, false, true, true] },
    ],
  },
  {
    name: "Communicator",
    rows: [
      { label: "Call Control", values: [true, true, true, true] },
      { label: "Click-to-Call (on web pages)", values: [true, true, true, true] },
      { label: "Call History", values: [true, true, true, true] },
      { label: "Directory / Search", values: [true, true, true, true] },
      { label: "SSO (Microsoft)", values: [true, true, true, true] },
      { label: "SMS", values: [true, true, true, true] },
      { label: "Screen Pop URL", values: ["$5", true, true, true] },
      { label: "MS Teams Presence", values: [false, true, true, true] },
      { label: "Call Recording", values: ["3 months", "84 months", "84 months", "84 months"] },
      {
        label: "Transcription (per minute)",
        values: ["$1.50 / min", "$1.00 / min", "$0.50 / min", "Included"],
      },
      { label: "Transcription Summary", values: [false, true, true, true] },
      { label: "Sentiment Analysis & Topics", values: [false, true, true, true] },
      { label: "Voicemail Drop", values: [false, true, true, true] },
      { label: "Coach (Call Guide)", values: [false, false, true, true] },
      { label: "Audio Signature", values: [false, false, true, true] },
      { label: "Preferred Agent Routing", values: [false, false, true, true] },
    ],
  },
  {
    name: "Integrations",
    rows: [
      { label: "NetSuite", values: [true, true, "Select 1", true] },
      { label: "Web-Based CRM", values: [true, true, "Select 1", true] },
      { subhead: "BMS" },
      { label: "Epic", values: [false, false, "Select 1", true] },
      { label: "Acturis", values: [false, false, "Select 1", true] },
      { label: "Vertafore", values: [false, false, "Select 1", true] },
      { subhead: "CRM" },
      { label: "Salesforce", values: [false, false, "Select 1", true] },
      { label: "Zoho", values: [false, false, "Select 1", true] },
    ],
  },
];

function CellContent({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-signal text-white">
        <Check className="size-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-surface text-ink/30">
        <X className="size-4" strokeWidth={3} />
      </span>
    );
  }
  return <span className="text-sm font-medium text-ink/75">{value}</span>;
}

export function CompareFeatures() {
  const [active, setActive] = useState(0);
  const [annual, setAnnual] = useState(false);
  const category = categories[active];

  return (
    <section className="bg-canvas pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Compare Features by Category
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-1 border-b border-border">
          {categories.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setActive(i)}
              aria-selected={active === i}
              className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
                active === i
                  ? "border-signal text-signal"
                  : "border-transparent text-ink/60 hover:text-ink"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl ring-1 ring-border">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="bg-surface">
                <th className="w-[28%] px-6 py-6 text-left align-middle text-sm font-semibold text-ink">
                  <div className="mb-3">{category.name} Features</div>
                  <div className="inline-flex items-center rounded-full bg-canvas p-1 ring-1 ring-border">
                    {(["Monthly", "Annual"] as const).map((label) => {
                      const isAnnual = label === "Annual";
                      const isActive = isAnnual === annual;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setAnnual(isAnnual)}
                          aria-pressed={isActive}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                            isActive ? "bg-signal text-white" : "text-ink/70 hover:text-ink"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </th>
                {tiers.map((t) => (
                  <th
                    key={t.name}
                    className="px-4 py-6 text-center align-top text-sm font-semibold text-ink"
                  >
                    <div>{t.name}</div>
                    <div className="mt-1 font-display text-lg font-bold text-ink">
                      {annual ? t.annually : t.monthly}
                    </div>
                    {!t.custom && (
                      <div className="mt-0.5 text-xs font-normal text-ink/60">
                        per user{annual ? ", billed annually" : ""}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {category.rows.map((row, i) =>
                "subhead" in row ? (
                  <tr key={`sub-${i}`} className="bg-surface/60">
                    <td
                      colSpan={tiers.length + 1}
                      className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-ink/50"
                    >
                      {row.subhead}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.label} className="bg-card">
                    <td className="px-6 py-4 text-sm text-ink/80">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        <CellContent value={v} />
                      </td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
