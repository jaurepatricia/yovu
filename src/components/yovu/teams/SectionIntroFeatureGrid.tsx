import { Layers, Users, Zap, type LucideIcon } from "lucide-react";

export type SectionIntroFeatureItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const defaultItems: SectionIntroFeatureItem[] = [
  {
    icon: Layers,
    title: "Simplify your IT",
    copy: "Reduce the number of applications your team needs to juggle, lowering support costs while increasing efficiency.",
  },
  {
    icon: Users,
    title: "Increase connection",
    copy: "Voice-enabled collaboration is a growing asset for company inclusion, keeping remote and distributed teams connected.",
  },
  {
    icon: Zap,
    title: "Boost productivity",
    copy: "When employees can easily collaborate and connect from any device, business goals are achieved faster.",
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string | React.ReactNode;
  items?: SectionIntroFeatureItem[];
  /** Optional visual for the right column; falls back to a placeholder. */
  media?: React.ReactNode;
};

export function SectionIntroFeatureGrid({
  eyebrow,
  heading = "Why use an integration?",
  intro = "Bring your team together while simplifying your tech stack. Boost productivity and inclusion by simplifying how your workforce collaborates.",
  items = defaultItems,
  media,
}: Props) {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* 2-column intro */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div>
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
            <p className="mt-6 max-w-xl whitespace-pre-line text-pretty text-base text-ink/70">
              {intro}
            </p>
          </div>
          {media ?? <div className="aspect-[4/3] w-full rounded-2xl bg-surface ring-1 ring-border" />}
        </div>

        {/* 3-column icon grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-32 lg:grid-cols-3">
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
