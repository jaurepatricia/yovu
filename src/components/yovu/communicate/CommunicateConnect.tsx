const items = [
  {
    title: "Personalized Calls",
    copy: "Deliver highly personalized service, a screen pop surfaces the caller's identity and account before anyone picks up, informing your team instantly on the exact needs of the caller.",
  },
  {
    title: "Warm Transfer",
    copy: "Ensure a seamless hand-off by sharing context with your team before connecting the call. Your clients get to the right person faster, without the frustration of repeating themselves.",
  },
  {
    title: "Frictionless Support",
    copy: "Put clients in control of their time. By offering clear wait-time updates and convenient callback requests, you can eliminate hold-time fatigue and elevate the customer experience.",
  },
];

export function CommunicateConnect() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Connect with your clients</h2>
          <div className="mt-8 space-y-8">
            {items.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-base text-ink/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: placeholder image, matched to the copy height */}
        <div className="h-full min-h-[24rem] w-full self-stretch rounded-3xl bg-surface ring-1 ring-border" />
      </div>
    </section>
  );
}
