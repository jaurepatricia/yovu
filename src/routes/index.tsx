import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/yovu/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YOVU — Enterprise VoIP for Canadian P&C Brokerages" },
      {
        name: "description",
        content:
          "YOVU is enterprise-scale VoIP for Canadian P&C insurance brokerages — embedded in Applied Epic, with AI call summaries, auto-logging, and SOC 2 security.",
      },
      { property: "og:title", content: "YOVU — Built for Canadian P&C Brokerages" },
      {
        property: "og:description",
        content:
          "Breathe new life into your brokerage communications. Enterprise VoIP deeply integrated with Applied Epic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
