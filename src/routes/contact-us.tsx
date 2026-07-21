import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

function ContactUsPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-56">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
          Contact Us
        </h1>
      </section>
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us — YOVU" },
      { name: "description", content: "Get in touch with the YOVU team." },
      { property: "og:title", content: "Contact Us — YOVU" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactUsPage,
});
