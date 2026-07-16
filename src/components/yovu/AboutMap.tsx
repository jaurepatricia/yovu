export function AboutMap() {
  return (
    <section className="bg-canvas pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: map */}
        <div className="overflow-hidden rounded-3xl ring-1 ring-border">
          <iframe
            title="YOVU Office Phone location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4595188312587!2d-81.2116401!3d42.9896577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef374cd31687f%3A0x345f634eb588e1b2!2sYOVU%20Office%20Phone!5e0!3m2!1sen!2sca!4v1784208101979!5m2!1sen!2sca"
            className="h-[320px] w-full lg:h-[420px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Right: copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
            Proudly Canadian
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Born in London. Kept in Canada.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base text-ink/70 md:text-lg">
            We were founded in London, Ontario, and we still proudly operate our business out of our
            hometown today. Every call you make routes through secure data centres on Canadian soil,
            keeping your private conversations fully protected under national laws. When you need
            help, you will always speak to our in-house support team right here in Canada instead of
            getting bounced to an offshore call center.
          </p>
        </div>
      </div>
    </section>
  );
}
