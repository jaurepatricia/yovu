import { ArrowUpRight, ShieldCheck, FileLock2 } from "lucide-react";

export function Security() {
  return (
    <section id="security" className="bg-surface/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">
            Security &amp; Compliance
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
            Protect your brokerage and simplify your audits.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-3xl bg-ink p-8 text-canvas ring-1 ring-black/10 lg:p-12">
            <FileLock2 className="size-7 text-signal" />
            <h3 className="mt-8 font-display text-2xl font-bold md:text-3xl">
              E&amp;O Audit Logs
            </h3>
            <p className="mt-3 max-w-md text-pretty text-canvas/70">
              Eliminate undocumented conversations. Every call is instantly logged,
              recorded, and completely exportable for foolproof E&amp;O protection.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-canvas/10 pt-8">
              <div>
                <div className="font-display text-3xl font-bold text-signal">100%</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-canvas/45">
                  Exportable
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-signal">Auto</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-canvas/45">
                  Logging
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-signal">7yr</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-canvas/45">
                  Retention
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex-1 rounded-3xl bg-card p-8 ring-1 ring-border">
              <ShieldCheck className="size-7 text-signal" />
              <h3 className="mt-8 font-display text-2xl font-bold">SOC 2 Certified</h3>
              <p className="mt-3 text-pretty text-ink/70">
                Your data is safe with us. We undergo annual, independent third-party
                audits to verify our security, availability, and confidentiality controls.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-[1.02]"
            >
              Learn More
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
