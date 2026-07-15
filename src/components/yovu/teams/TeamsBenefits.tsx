import { motion } from "motion/react";

const items = [
  {
    kicker: "COMMUNICATION",
    title: "Communicate effectively without leaving Teams",
    copy: "Make and receive all your business calls directly within the Microsoft Teams interface. Unify your communication channels into a single platform so your team can collaborate without switching contexts.",
  },
  {
    title: "Work from Anywhere",
    copy: "Install Teams on any PC, Mac, or mobile device to keep your team connected on the go.",
  },
  {
    title: "Built-in Security",
    copy: "Enjoy enterprise-grade, end-to-end encryption for all signaling and media. You maintain full control with the ability to revoke Microsoft 365 tenant access at any time.",
  },
];

export function TeamsBenefits() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered intro */}
        <div className="mx-auto mb-20 max-w-3xl text-center lg:mb-28">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Core Benefits of YOVU + Microsoft Teams
          </h2>
        </div>

        {/* Z-style alternating rows */}
        <div className="space-y-20 lg:space-y-32">
          {items.map((item, i) => {
            const imageRight = i % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24"
              >
                {/* Copy */}
                <div className={`${imageRight ? "lg:order-1" : "lg:order-2"} lg:px-4 xl:px-8`}>
                  {item.kicker && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                      {item.kicker}
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-pretty text-base text-ink/70">{item.copy}</p>
                </div>
                {/* Placeholder image */}
                <div
                  className={`aspect-[4/3] w-full rounded-2xl bg-surface ring-1 ring-border ${
                    imageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
