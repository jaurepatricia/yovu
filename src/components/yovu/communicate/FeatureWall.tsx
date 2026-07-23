import { motion } from "motion/react";

const features = [
  "Call Recording",
  "Live Chat",
  "Web Phone",
  "Text to Business Line",
  "iOS and Android App",
  "Robocall Blockers",
  "Text-to-Speech",
  "Auto Attendant",
  "Toll-Free Numbers",
  "Conferencing",
  "Business Hours",
  "Call Routing",
  "Extensions",
  "No Long Distance Fees",
  "Call Blacklisting",
  "Voicemail Transcription",
  "Music On Hold",
  "Call Reporting",
  "Caller ID Control",
  "Shared Contacts",
  "Company Directory",
  "Dial-by-Name Directory",
  "Schedule Call Detail Reports",
  "Direct Numbers & Extensions",
];

function Pill({ label }: { label: string }) {
  return (
    <span className="block whitespace-nowrap rounded-full bg-canvas px-4 py-2 text-sm font-medium text-ink/75 ring-1 ring-border">
      {label}
    </span>
  );
}

function MarqueeColumn({
  items,
  reverse,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="w-max overflow-hidden">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((f, i) => (
          <Pill key={i} label={f} />
        ))}
      </motion.div>
    </div>
  );
}

/** A wall of feature pills scrolling, blurring in/out at the edges.
 *  `fade` sets the colour the pills fade into at the top/bottom edges. */
export function FeatureWall({ fade = "card" }: { fade?: "card" | "surface" }) {
  const third = Math.ceil(features.length / 3);
  const cols = [
    features.slice(0, third),
    features.slice(third, third * 2),
    features.slice(third * 2),
  ];
  const from = fade === "surface" ? "from-surface" : "from-card";
  return (
    <div className="relative h-64 w-full overflow-hidden">
      <div className="flex justify-center gap-3">
        {cols.map((items, i) => (
          <MarqueeColumn key={i} items={items} reverse={i % 2 === 1} duration={26 + i * 5} />
        ))}
      </div>
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${from} to-transparent`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${from} to-transparent`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </div>
  );
}
