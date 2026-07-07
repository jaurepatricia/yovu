const items = [
  {
    title: "Mobile App",
    copy: "Turn your iOS or Android device into your business phone. Access your corporate directory, sync contacts, and keep your personal number private while working.",
  },
  {
    title: "Desktop & Web Phone",
    copy: "Access full phone functionality, make calls, and check voicemails right from your browser or desktop application with click-to-call functionality on any phone number.",
  },
  {
    title: "Call Flipping",
    copy: "Start a call on your desktop and seamlessly transition it to your mobile device or desk phone without dropping the connection.",
  },
  {
    title: "Multi-Ring",
    copy: "Ring your desk phone, web dialer, and mobile device simultaneously so you never miss a client.",
  },
];

export function CommunicateDevices() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: placeholder image */}
        <div className="aspect-[4/3] w-full rounded-3xl bg-surface ring-1 ring-border" />

        {/* Right: headline, copy, and points */}
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Work From Anywhere
          </h2>
          <p className="mt-5 text-pretty text-lg text-ink/70">
            Your phone system should follow you, not tie you to a desk. Our mobility solutions let
            your team work from anywhere without compromising professionalism.
          </p>

          <div className="mt-6 space-y-5">
            {items.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-pretty text-ink/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
