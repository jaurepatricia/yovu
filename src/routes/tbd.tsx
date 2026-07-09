import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/yovu/HomePage";

// /tbd is a holding area for components we may reuse or delete later.
export const Route = createFileRoute("/tbd")({
  head: () => ({
    meta: [{ title: "YOVU — TBD" }, { name: "robots", content: "noindex,nofollow" }],
  }),
  component: HomePage,
});
