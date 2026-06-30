import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/yovu/HomePage";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "YOVU — Enterprise VoIP for Canadian P&C Brokerages (v2)" },
      {
        name: "description",
        content:
          "YOVU v2 — alternate homepage for A/B testing. Enterprise VoIP for Canadian P&C brokerages, embedded in Applied Epic.",
      },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "YOVU — v2" },
      {
        property: "og:description",
        content:
          "Alternate homepage variant for A/B testing.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});
