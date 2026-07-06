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
        {/* Placeholder image gallery (3 images) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 aspect-[16/9] rounded-2xl bg-surface ring-1 ring-border" />
          <div className="aspect-square rounded-2xl bg-surface ring-1 ring-border" />
          <div className="aspect-square rounded-2xl bg-surface ring-1 ring-border" />
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Work From Anywhere
          </h2>
          <p className="mt-5 text-pretty text-ink/70">
            Your phone system should follow you, not tie you to a desk. Our
            mobility solutions let your team work from anywhere without
            compromising professionalism.
          </p>

          <div className="mt-8 space-y-6">
            {items.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-pretty text-ink/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
