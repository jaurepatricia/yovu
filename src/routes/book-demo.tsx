import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

function BookDemoPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-56">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
          Book a Demo
        </h1>
      </section>
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — YOVU" },
      { name: "description", content: "Book a personalized demo of YOVU." },
      { property: "og:title", content: "Book a Demo — YOVU" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BookDemoPage,
});
