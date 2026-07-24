import { Button } from "@/components/yovu/ui/Button";

export function CommunicateHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas aspect-video max-h-screen min-h-[600px]">
      {/* TODO: replace with hero background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface to-canvas"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/25">
          Hero image placeholder
        </span>
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex max-w-xl flex-col text-left">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">Elevate your business phone system</h1>
            <p className="mt-6 text-pretty text-lg text-ink/70">
              YOVU combines enterprise-grade reliability, responsive Canadian support, and a business
              communications platform purpose-built for you.
            </p>
            <Button href="/book-demo" className="mt-8 w-fit">
              See it in action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
