import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, LineChart, Compass, Store, Users, ArrowRight } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "LM Strategic Advisory — Marine Marketing & Partnerships",
      description:
        "Strategic marketing and partnerships advisory for the marine industry, led by Luke Marsh in Southampton. Connecting people, brands and opportunities in the marine world.",
      path: "/",
      keywords:
        "marine marketing, marine partnerships, yacht insurance marketing, Southampton marine advisory, Luke Marsh MCIM, boat show marketing, marine digital strategy",
    }),
  component: Home,
});

const pillars = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    body: "Sourcing, structuring and running partnerships that put marine brands in front of the right audiences.",
  },
  {
    icon: LineChart,
    title: "Digital Growth",
    body: "SEO, PPC and performance strategy built around how boat owners and marine buyers actually behave.",
  },
  {
    icon: Compass,
    title: "Brand Positioning",
    body: "Sharpening what a marine business stands for, and making that clear across every touchpoint.",
  },
  {
    icon: Store,
    title: "Web & E-commerce",
    body: "Remodelling websites and purchase journeys so they convert rather than merely exist.",
  },
  {
    icon: Users,
    title: "Customer Insight",
    body: "Journey mapping and insight analysis that turn customer behaviour into commercial decisions.",
  },
];

const credibility = [
  { label: "Munich Re Specialty", note: "Marketing Business Partner" },
  { label: "CompareYachtInsurance.com", note: "Head of Partnerships" },
  { label: "GJW Direct", note: "Digital Marketer" },
  { label: "Ripe Thinking", note: "Senior Marketing Manager" },
  { label: "Hildon Natural Mineral Water", note: "FMCG brand work" },
  { label: "Gas Safe Register", note: "Government services" },
];

function Home() {
  return (
    <>
      <Hero
        image={heroHome}
        imageAlt="Luxury yacht at sea — marine industry strategic advisory"
        eyebrow="Southampton · United Kingdom"
        title="Connecting people, brands, and opportunities in the marine world"
        subtitle="LM Strategic Advisory is a specialist advisory helping marine businesses grow through partnerships, digital strategy and brand modernisation."
        primaryCta={{ label: "Start a Conversation", to: "/contact" }}
        secondaryCta={{ label: "Explore Services", to: "/services" }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="The Advisory"
              title="Marine industry insider access, paired with proven commercial marketing."
              intro="Ten years across marine and insurance marketing — and a network built at the pontoons, not from a pitch deck. LM Strategic Advisory works with insurers, brokers, boat brands, marinas, marine tech and clubs."
            />
          </Reveal>
          <Reveal delay={120} className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
            {pillars.slice(0, 4).map((p) => (
              <div key={p.title} className="card-interactive bg-background p-8 hover:bg-secondary">
                <p.icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section dark>
        <Reveal>
          <SectionHeading
            dark
            align="center"
            eyebrow="Track Record"
            title="Brands and sectors behind the advice"
            intro="Marine insurance, FMCG and government services — commercial marketing experience that travels well into the marine world."
          />
        </Reveal>
        <Reveal delay={150} className="mt-14 grid gap-px overflow-hidden rounded-sm bg-sand/12 sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((c) => (
            <div key={c.label} className="card-interactive group bg-navy p-8 hover:bg-navy-deep">
              <p className="font-display text-2xl text-sand">{c.label}</p>
              <p className="mt-2 text-sm text-sand/60">{c.note}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={250} className="mt-12 text-center">
          <Link
            to="/about"
            className="link-arrow text-teak-soft"
          >
            Read Luke&apos;s background
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why It Works"
              title="Relationships you can't cold-email your way into."
              intro="British Marine connections, the major boat show circuit, insurers and brokers — combined with hands-on B2B and B2C digital marketing from outside the industry. That combination is rare, and it is the whole point."
            />
            <Link
              to="/industry-presence"
              className="link-arrow mt-8 text-accent"
            >
              See where Luke shows up
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="space-y-px overflow-hidden rounded-sm bg-border">
            {pillars.map((p) => (
              <div key={p.title} className="card-interactive flex items-start gap-5 bg-background p-6">
                <p.icon className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section dark className="text-center">
        <Reveal>
          <p className="eyebrow text-teak-soft">Next Step</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl leading-[1.08] text-sand sm:text-5xl lg:text-6xl">
            Let&apos;s talk about where your marine business could go next.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sand/75">
            A short conversation is usually enough to see whether there is something worth building
            together.
          </p>
          <Link
            to="/contact"
            className="btn-primary mt-10"
          >
            Start a Conversation
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
