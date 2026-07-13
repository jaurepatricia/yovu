const cards = [
  {
    title: "Unified Communications",
    copy: "Voice and SMS from the same workspace across multiple devices, so a quick text confirmation and a callback live in the same place as the rest of the conversation. Easily assign direct numbers and extensions to all employees within your organization.",
  },
  {
    title: "Empower Your Employees",
    copy: "Equip your team with our powerful VoIP capabilities in one easy-to-use platform. You can instantly check a colleague's real-time availability, seamlessly transfer calls with context, and merge team members into ongoing conversations.",
  },
  {
    title: "Tailored Workflows",
    copy: "Boost your team's daily productivity by configuring our platform to match your exact business needs. You can easily set up advanced call routing, trigger automated replies, and connect your favorite software integrations for easier task completion.",
  },
];

export function FeatureCardCollaborate() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading and the spacing above it stay pinned as the cards stack beneath. */}
        <div className="sticky top-20 z-20 bg-canvas pb-8 pt-4 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Collaborate with Your Team
          </h2>
        </div>

        {/* Cards slide up and stack together as the viewer scrolls. */}
        <div className="flex flex-col gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="sticky top-44 overflow-hidden rounded-3xl bg-card p-8 shadow-lg shadow-black/5 ring-1 ring-border md:p-12"
            >
              <div className="grid items-center gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-pretty text-base text-ink/70">
                    {card.copy}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <div className="aspect-square w-full rounded-2xl bg-surface ring-1 ring-border" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
