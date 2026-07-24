import { useState } from "react";
import { Button } from "@/components/yovu/ui/Button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { PageTopClouds } from "@/components/yovu/PageTopClouds";
import { AboutTestimonials } from "@/components/yovu/AboutTestimonials";

// Salesforce Web-to-Lead — reuses the org id; routing/record-type config to be
// refined with the real contact-form values later.
const SF_ENDPOINT = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
const SF_HIDDEN = {
  oid: "00DU0000000LYVv",
  lead_source: "Web",
};

const labelCls = "block text-sm font-semibold text-ink";
const inputCls =
  "mt-1.5 w-full rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-signal focus:ring-2 focus:ring-signal/30";

function ContactForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const reason = String(fd.get("reason") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    // Fold reason + message into the standard Lead description field.
    fd.delete("reason");
    fd.delete("message");
    fd.set("description", reason ? `Reason: ${reason}\n\n${message}` : message);
    // Web-to-Lead requires a company; fall back so a personal enquiry still posts.
    if (!String(fd.get("company") ?? "").trim()) fd.set("company", "Not provided");

    const body = new URLSearchParams();
    fd.forEach((value, key) => body.append(key, String(value)));

    try {
      // Web-to-Lead accepts the POST but returns an opaque (no-cors) response,
      // so genuine field errors can't be read back — only network failures
      // surface here and route to the oops page.
      await fetch(SF_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      navigate({ to: "/thank-you" });
    } catch {
      navigate({ to: "/oops" });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {Object.entries(SF_HIDDEN).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className={labelCls}>
            First Name <span className="text-signal">*</span>
          </label>
          <input id="first_name" name="first_name" type="text" autoComplete="given-name" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="last_name" className={labelCls}>
            Last Name <span className="text-signal">*</span>
          </label>
          <input id="last_name" name="last_name" type="text" autoComplete="family-name" required className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          Email <span className="text-signal">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputCls} />
      </div>
      <div>
        <label htmlFor="mobile" className={labelCls}>
          Phone Number
        </label>
        <input id="mobile" name="mobile" type="tel" autoComplete="tel" className={inputCls} />
      </div>
      <div>
        <label htmlFor="company" className={labelCls}>
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputCls} />
      </div>
      <div>
        <label htmlFor="reason" className={labelCls}>
          How can we help? <span className="text-signal">*</span>
        </label>
        <select id="reason" name="reason" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Select a reason…
          </option>
          <option value="General inquiry">General inquiry</option>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Billing">Billing</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelCls}>
          Message <span className="text-signal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us a little about your question or concern…"
          className={`${inputCls} resize-y`}
        />
      </div>

      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? "Sending…" : "Send message"}
      </Button>

      <p className="text-xs leading-relaxed text-ink/50">
        *Required fields.
        <br />
        By submitting this form, I confirm that I have read and agree to YOVU&rsquo;s{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
          privacy policy
        </a>{" "}
        and consent to being contacted by a YOVU representative.
      </p>
    </form>
  );
}

function ContactInfoMap() {
  return (
    <section className="bg-canvas pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Contact info */}
        <div className="space-y-10">
          <div className="flex gap-4">
            <MapPin className="size-6 shrink-0 text-signal" strokeWidth={1.75} />
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">Head office</h3>
              <p className="mt-2 text-pretty text-ink/70">
                1105 Frances Street London,
                <br />
                Ontario N5W 2L9
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="size-6 shrink-0 text-signal" strokeWidth={1.75} />
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">Call us</h3>
              <p className="mt-2 text-ink/70">
                Sales:{" "}
                <a href="tel:+15194881001" className="text-signal hover:underline">
                  +1 (519) 488-1001
                </a>
              </p>
              <p className="text-ink/70">
                Support:{" "}
                <a href="tel:+18446851001" className="text-signal hover:underline">
                  +1 (844) 685-1001
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="size-6 shrink-0 text-signal" strokeWidth={1.75} />
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">Business hours</h3>
              <p className="mt-2 text-ink/70">Mon - Fri: 8:30am - 5:00pm (EST)</p>
              <p className="mt-2 text-pretty text-sm text-ink/60">
                If you are a customer who needs support after hours, please contact our support
                number to reach our technical specialists at{" "}
                <a href="tel:+18446851001" className="text-signal hover:underline">
                  +1 (844) 685-1001
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="min-h-[340px] overflow-hidden rounded-2xl ring-1 ring-border">
          <iframe
            title="YOVU head office location"
            src="https://www.google.com/maps?q=1105%20Frances%20Street%2C%20London%2C%20Ontario%20N5W%202L9&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[340px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function ContactUsPage() {
  return (
    <main className="relative min-h-screen bg-canvas text-ink">
      <Nav />
      <PageTopClouds />

      <section className="relative z-10 pb-20 pt-40 lg:pt-52">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Get in touch</h1>
            <p className="mt-6 text-pretty text-lg text-ink/70">
              Have a question about YOVU, your service, or which plan fits your team? Send us a
              message and the right person will get back to you. Prefer to talk it through? Our team
              is a phone call away.
            </p>
            <p className="mt-8 text-base font-bold text-ink">
              Prefer to call? Reach us at{" "}
              <a href="tel:+15194881001" className="text-signal hover:underline">
                +1 (519) 488-1001
              </a>
            </p>
          </div>

          {/* Right column — form */}
          <div className="rounded-3xl bg-surface p-6 ring-1 ring-border sm:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Send us a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <AboutTestimonials />
      <ContactInfoMap />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us — YOVU" },
      {
        name: "description",
        content:
          "Get in touch with the YOVU team — sales, support, or general questions. Send us a message or reach our London, Ontario head office by phone.",
      },
      { property: "og:title", content: "Contact Us — YOVU" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactUsPage,
});
