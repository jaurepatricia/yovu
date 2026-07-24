import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import light1 from "@/assets/phone app screens/phone-app-light-1.webp";
import light2 from "@/assets/phone app screens/phone-app-light-2.webp";
import light3 from "@/assets/phone app screens/phone-app-light-3.webp";
import dark1 from "@/assets/phone app screens/phone-app-dark-1.webp";
import dark2 from "@/assets/phone app screens/phone-app-dark-2.webp";
import dark3 from "@/assets/phone app screens/phone-app-dark-3.webp";

const phones = [
  { light: light1, dark: dark1 },
  { light: light2, dark: dark2 },
  { light: light3, dark: dark3 },
];

/** One phone image, theme-aware. */
function Phone({ i, className, style }: { i: number; className?: string; style?: React.CSSProperties }) {
  const p = phones[i];
  return (
    <div
      className={`absolute overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/30 ring-1 ring-black/10 dark:ring-white/10 ${className ?? ""}`}
      style={style}
    >
      <img src={p.light} alt="" aria-hidden="true" className="block h-full w-full object-cover dark:hidden" />
      <img src={p.dark} alt="" aria-hidden="true" className="hidden h-full w-full object-cover dark:block" />
    </div>
  );
}

/**
 * Three phone-app mockups stacked with depth — screen 2 sits front and centre,
 * 1 and 3 fan out behind it. The whole group tilts subtly toward the cursor for
 * a light 3D effect. Decorative.
 */
export function PhoneMockupStack({ className }: { className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 18, stiffness: 140 };
  const sx = useSpring(mouseX, spring);
  const sy = useSpring(mouseY, spring);
  const rotateX = useTransform(sy, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-7deg", "7deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={className} style={{ perspective: "1200px" }}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative mx-auto h-[26rem] w-full max-w-[26rem]"
      >
        {/* Left phone (screen 1) — behind */}
        <Phone
          i={0}
          className="left-1/2 top-1/2 h-[19rem] w-[9rem]"
          style={{
            transform: "translate(-115%, -52%) translateZ(-40px) rotateY(20deg) rotate(-6deg)",
          }}
        />
        {/* Right phone (screen 3) — behind */}
        <Phone
          i={2}
          className="left-1/2 top-1/2 h-[19rem] w-[9rem]"
          style={{
            transform: "translate(15%, -52%) translateZ(-40px) rotateY(-20deg) rotate(6deg)",
          }}
        />
        {/* Center phone (screen 2) — front and centre */}
        <Phone
          i={1}
          className="left-1/2 top-1/2 h-[23rem] w-[11rem]"
          style={{ transform: "translate(-50%, -50%) translateZ(60px)" }}
        />
      </motion.div>
    </div>
  );
}
