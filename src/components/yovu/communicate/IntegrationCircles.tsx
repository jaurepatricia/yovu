import { motion } from "motion/react";
import appliedLogomark from "@/assets/logos/Applied Logomark.svg";
import teamsLogo from "@/assets/logos/Microsoft Office Teams logo.svg";
import salesforceLogo from "@/assets/logos/Salesforce logo.svg";

const logos = [
  { name: "Applied Epic", src: appliedLogomark },
  { name: "Microsoft Teams", src: teamsLogo },
  { name: "Salesforce", src: salesforceLogo },
];

/**
 * Three glassy circles carrying the key integration logos, overlaid centered
 * on a z-layout image. Matches the homepage integration lockup styling.
 */
export function IntegrationCircles() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 sm:gap-4"
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex size-20 items-center justify-center rounded-full bg-white/25 shadow-2xl shadow-black/20 ring-1 ring-white/40 backdrop-blur-md sm:size-24"
          >
            <img src={logo.src} alt={logo.name} className="size-10 object-contain sm:size-12" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
