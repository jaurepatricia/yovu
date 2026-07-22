import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { AboutTestimonials } from "@/components/yovu/AboutTestimonials";

// Salesforce Web-to-Lead — values from the org's existing lead form.
const SF_ENDPOINT = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
const SF_HIDDEN = {
  oid: "00DU0000000LYVv",
  Campaign_ID: "701OF00000dXSNIYA4",
  member_status: "Responded",
  lead_source: "Web",
};

const labelCls = "block text-sm font-semibold text-ink";
const inputCls =
  "mt-1.5 w-full rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-signal focus:ring-2 focus:ring-signal/30";

function BookDemoForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const body = new URLSearchParams();
    new FormData(e.currentTarget).forEach((value, key) => body.append(key, String(value)));
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
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-signal">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="mobile" className={labelCls}>
            Phone Number <span className="text-signal">*</span>
          </label>
          <input id="mobile" name="mobile" type="tel" autoComplete="tel" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company <span className="text-signal">*</span>
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="title" className={labelCls}>
            Title
          </label>
          <input id="title" name="title" type="text" autoComplete="organization-title" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelCls}>
          How can we help?
        </label>
        <textarea
          id="description"
          name="Description_Rich_Text__c"
          rows={4}
          className={`${inputCls} resize-y`}
          placeholder="Tell us what you're looking for..."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/80">
        <input
          type="checkbox"
          required
          className="mt-0.5 size-4 shrink-0 rounded border-border text-signal focus:ring-2 focus:ring-signal/30"
        />
        <span>I agree to be contacted by a YOVU sales representative.</span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Book my demo"}
      </button>

      <p className="text-xs leading-relaxed text-ink/50">
        By submitting this form, I confirm that I have read and agree to YOVU&rsquo;s{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function BookDemoPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />

      <section className="bg-canvas pb-20 pt-40 lg:pt-52">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="lg:pt-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Transform the way your business communicates.
            </h1>
            <p className="mt-6 text-pretty text-lg text-ink/70">
              Stop letting manual data entry and dropped calls slow you down. Get a personalized
              tour of the all-in-one phone system built to adapt to your workflow. Tell us a little
              about your business, and we&rsquo;ll show you how our intelligent routing, automated
              call logging, and seamless integrations can save your team hours every week.
            </p>
            <p className="mt-8 text-base font-bold text-ink">
              Have questions? Call us at{" "}
              <a href="tel:+18446851001" className="text-signal hover:underline">
                +1 (844) 685-1001
              </a>
            </p>
          </div>

          {/* Right column — form */}
          <div className="rounded-3xl bg-surface p-6 ring-1 ring-border sm:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Book your demo now
            </h2>
            <div className="mt-6">
              <BookDemoForm />
            </div>
          </div>
        </div>
      </section>

      <AboutTestimonials />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — YOVU" },
      {
        name: "description",
        content:
          "Book a personalized demo of YOVU — the all-in-one business phone system with intelligent routing, automated call logging, and seamless integrations.",
      },
      { property: "og:title", content: "Book a Demo — YOVU" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BookDemoPage,
});
