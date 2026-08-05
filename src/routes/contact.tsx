import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Check } from "lucide-react";
import { useState } from "react";
import heroContact from "@/assets/hero-contact.jpg";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact — LM Strategic Advisory, Southampton",
      description:
        "Start a conversation with Luke Marsh of LM Strategic Advisory — marine partnerships, digital strategy and brand positioning. Based in Southampton, England.",
      path: "/contact",
      keywords:
        "contact Luke Marsh, marine advisory Southampton, marine partnerships enquiry, marine marketing consultant contact, LM Strategic Advisory contact",
    }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Hero
        image={heroContact}
        imageAlt="Contact LM Strategic Advisory — marine industry consultancy"
        eyebrow="Contact"
        title="Start a conversation"
        subtitle="Tell us a little about your business and what you are trying to grow. Luke will come back to you personally."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading eyebrow="Enquiry" title="Send a message" />
            {sent ? (
              <div className="mt-10 flex items-start gap-4 rounded-sm border border-accent/40 bg-secondary p-8">
                <Check className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <h3 className="text-xl">Thank you — message noted</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This form is not yet connected to an inbox. In the meantime, the fastest route is
                    a direct message on LinkedIn.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="mt-10 space-y-6"
                aria-label="Contact enquiry form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-3 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="eyebrow text-muted-foreground">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="mt-3 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="eyebrow text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-3 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="eyebrow text-muted-foreground">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-3 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow text-muted-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full resize-y rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={140}>
            <SectionHeading eyebrow="Direct" title="Other ways to reach Luke" />
            <ul className="mt-10 space-y-px overflow-hidden rounded-sm bg-border">
              <li className="bg-background p-6">
                <a
                  href="https://www.linkedin.com/in/lukemarsh1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label="Luke Marsh on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block text-lg">LinkedIn</span>
                    <span className="text-sm text-muted-foreground">linkedin.com/in/lukemarsh1</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 bg-background p-6">
                <Mail className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <span className="block text-lg">Email</span>
                  <span className="text-sm text-muted-foreground">To be confirmed</span>
                </span>
              </li>
              <li className="flex items-start gap-4 bg-background p-6">
                <Phone className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <span className="block text-lg">Phone</span>
                  <span className="text-sm text-muted-foreground">To be confirmed</span>
                </span>
              </li>
              <li className="flex items-start gap-4 bg-background p-6">
                <MapPin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <span className="block text-lg">Based in</span>
                  <span className="text-sm text-muted-foreground">
                    Southampton, England, United Kingdom
                  </span>
                </span>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Google Business, Facebook and Instagram/X profiles will be linked here once provided.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
