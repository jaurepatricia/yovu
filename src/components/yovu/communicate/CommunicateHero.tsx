import { Button } from "@/components/yovu/ui/Button";
import { PhoneMockupStack } from "@/components/yovu/communicate/PhoneMockupStack";
import heroBg from "@/assets/hero/blurry-green-mountain-scenery.webp";

export function CommunicateHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas lg:aspect-video lg:max-h-screen lg:min-h-[640px]">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Left legibility scrim — theme-aware */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-canvas/40 to-transparent"
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-32 pb-16 lg:grid-cols-2 lg:gap-8 lg:py-0">
          <div className="flex max-w-xl flex-col text-left">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
              Elevate your business phone system
            </h1>
            <p className="mt-6 text-pretty text-lg text-ink/70">
              YOVU combines enterprise-grade reliability, responsive Canadian support, and a business
              communications platform purpose-built for you.
            </p>
            <Button href="/book-demo" className="mt-8 w-fit">
              See it in action
            </Button>
          </div>

          <PhoneMockupStack className="w-full" />
        </div>
      </div>
    </section>
  );
}
