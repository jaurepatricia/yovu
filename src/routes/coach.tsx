import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "Coach — YOVU" },
      { name: "description", content: "Accelerate onboarding and team performance with YOVU Coach." },
      { property: "og:title", content: "Coach — YOVU" },
      { property: "og:description", content: "Accelerate onboarding and team performance with YOVU Coach." },
    ],
  }),
  component: CoachPage,
});

function CoachPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24" />
      <Footer />
    </div>
  );
}
