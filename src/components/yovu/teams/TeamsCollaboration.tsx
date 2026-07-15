import { Layers, Users, Zap } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Simplify Your IT",
    copy: "Reduce the number of applications your team needs to juggle, lowering support costs while increasing efficiency.",
  },
  {
    icon: Users,
    title: "Increase Connection",
    copy: "Voice-enabled collaboration is a growing asset for company inclusion, keeping remote and distributed teams connected.",
  },
  {
    icon: Zap,
    title: "Boost Productivity",
    copy: "When employees can easily collaborate and connect from any device, business goals are achieved faster.",
  },
];

export function TeamsCollaboration() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* 2-column intro */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div className="lg:px-4 xl:px-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Why use an integration?
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base text-ink/70">
              Bring your team together while simplifying your tech stack. Boost productivity and
              inclusion by simplifying how your workforce collaborates.
            </p>
          </div>
          <div className="aspect-[4/3] w-full rounded-2xl bg-surface ring-1 ring-border" />
        </div>

        {/* 3-column icon grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, copy }) => (
            <div key={title}>
              <Icon className="size-8 text-signal" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-3 text-pretty text-base text-ink/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
