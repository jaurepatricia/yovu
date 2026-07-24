import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

function OopsPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />
      <section className="mx-auto max-w-2xl px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-56">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <AlertTriangle className="size-8" strokeWidth={2} />
        </span>
        <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Oops, something went wrong</h1>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-ink/70">
          We couldn&rsquo;t submit your request. Please try again, or reach us directly at{" "}
          <a href="tel:+18446851001" className="font-semibold text-signal hover:underline">
            +1 (844) 685-1001
          </a>
          .
        </p>
        <a
          href="/book-demo"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
        >
          Try again
        </a>
      </section>
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/oops")({
  head: () => ({
    meta: [
      { title: "Something Went Wrong — YOVU" },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Something Went Wrong — YOVU" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: OopsPage,
});
