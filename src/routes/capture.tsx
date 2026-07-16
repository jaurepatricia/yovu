import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

export const Route = createFileRoute("/capture")({
  head: () => ({
    meta: [
      { title: "Capture — YOVU" },
      { name: "description", content: "Automatically log conversations with transcriptions and AI summaries." },
      { property: "og:title", content: "Capture — YOVU" },
      { property: "og:description", content: "Automatically log conversations with transcriptions and AI summaries." },
    ],
  }),
  component: CapturePage,
});

function CapturePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24" />
      <Footer />
    </div>
  );
}
