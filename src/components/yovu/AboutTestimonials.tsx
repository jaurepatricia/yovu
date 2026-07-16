import { Fragment } from "react";
import { motion } from "motion/react";

type Testimonial = { text: string; name: string };

const testimonials: Testimonial[] = [
  {
    name: "Jackie Morley",
    text: "The Team at YOVU is phenomenal. They are right there at your fingertips to assist with any matter whether it be an emergency, broken phone or technical question. Their quick to respond service is an added relief when help is needed. Keep up the great work YOVU!",
  },
  {
    name: "Danielle Vine",
    text: "We have been completely satisfied with the phone system and the service provided has been stellar! I would recommend this system and service 100%.",
  },
  {
    name: "Scott Perkin",
    text: "YOVU has been an incredibly useful tool for our business since we switched over from a Bell landline. I can't say enough good things about the quality of the service, the options available and the tech support. I recommend it to everyone I do business with!",
  },
  {
    name: "James Holland",
    text: "It's been more than a year now and our system with YOVU has been flawless. While we are a relatively small operation we are spread all over the country. YOVU has brought us together seamlessly. Customer support is awesome, particularly when dealing with the odd troglodyte (myself). Kudos again this year.",
  },
  {
    name: "Justin Barfett",
    text: "YOVU has been great for us. The tech support is top-notch, not that you will need it often. We love all the different options that are available and the online portal is very intuitive. Kris and Kerry have been great to work with.",
  },
  {
    name: "Elizabeth Goldenberg",
    text: "I'm extremely happy with the YOVU VOIP phone and fax platform, and the customer service has been excellent. It's the most reliable system and best service I've ever had.",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);

function TestimonialsColumn({
  testimonials,
  duration = 40,
  className,
}: {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {testimonials.map(({ text, name }, i) => (
              <div
                key={i}
                className="w-full rounded-3xl bg-card p-8 shadow-sm shadow-black/[0.03] ring-1 ring-border"
              >
                <p className="text-pretty text-base leading-relaxed text-ink/80">{text}</p>
                <p className="mt-5 font-medium tracking-tight text-ink">{name}</p>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function AboutTestimonials() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            What Customers Say About Us
          </h2>
          <p className="mx-auto mt-5 text-pretty text-base text-ink/70 md:text-lg">
            Backed by a 5-star Google rating, we consistently hear from clients who love how our
            technology and support transform their workday.
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] max-h-[42rem]">
          <TestimonialsColumn testimonials={firstColumn} className="flex-1" duration={44} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden flex-1 md:block"
            duration={52}
          />
        </div>
      </div>
    </section>
  );
}
