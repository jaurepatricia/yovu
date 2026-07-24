import { ArrowRight } from "lucide-react";

export function NonProfitBanner() {
  return (
    <section className="bg-canvas py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-surface p-8 ring-1 ring-border sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink">Discounts for non-profits &amp; charities</h3>
            <p className="mt-2 text-base text-ink/70">
              Verify the status of your non-profit or charity and get access to up to 50% off YOVU.
            </p>
          </div>
          <a
            href="#demo"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink ring-1 ring-border transition-colors hover:bg-ink/5"
          >
            Learn more
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
