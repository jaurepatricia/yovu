import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/yovu/ui/Button";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

function ThankYouPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />
      <section className="mx-auto max-w-2xl px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-56">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-signal-soft text-signal">
          <CheckCircle2 className="size-8" strokeWidth={2} />
        </span>
        <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Thank you, we’ll be in touch</h1>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-ink/70">
          Your request has been received. A YOVU specialist will reach out shortly to book your
          personalized demo.
        </p>
        <Button href="/" className="mt-10">
          Back to home
        </Button>
      </section>
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — YOVU" },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Thank You — YOVU" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ThankYouPage,
});
