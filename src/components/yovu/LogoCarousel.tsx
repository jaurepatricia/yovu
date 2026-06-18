const logos = [
  "ALTAVIEW",
  "SHIELD P&C",
  "NORTHERLY",
  "MARITIME TRUST",
  "LAURENTIAN",
  "CEDARWOOD",
  "FRASER & CO",
];

export function LogoCarousel() {
  const doubled = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-surface/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-ink/45">
          Trusted by leading Canadian P&amp;C brokerages
        </p>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-16">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="flex h-10 shrink-0 items-center justify-center rounded-md bg-ink/5 px-8 text-sm font-bold tracking-tighter text-ink/40 font-display"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface/40 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
