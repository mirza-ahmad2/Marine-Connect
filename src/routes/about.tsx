import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Anchor, Network, Target } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Luke Marsh — Marine Marketing & Partnerships",
      description:
        "Luke Marsh, MCIM: 10+ years of marketing and partnerships across marine and insurance — Munich Re Specialty, GJW Direct, Ripe Thinking and CompareYachtInsurance.com.",
      path: "/about",
      keywords:
        "Luke Marsh MCIM, marine marketing career, Munich Re Specialty, GJW Direct, CompareYachtInsurance, marine insurance marketing, Southampton marketing consultant",
    }),
  component: About,
});

const career = [
  {
    role: "Head of Partnerships",
    org: "CompareYachtInsurance.com",
    period: "Current",
    body: "Building and running partnerships across the marine insurance and boating ecosystem — brokers, insurers, boat brands, clubs and events.",
  },
  {
    role: "Marketing Business Partner",
    org: "Munich Re Specialty",
    period: "Specialty insurance",
    body: "Partnering with commercial teams on brand, campaign and go-to-market marketing inside a global specialty insurer.",
  },
  {
    role: "Senior Marketing Manager",
    org: "Ripe Thinking",
    period: "Niche insurance",
    body: "Leading marketing across niche insurance brands — acquisition, e-commerce remodelling and customer journey strategy.",
  },
  {
    role: "Digital Marketer",
    org: "GJW Direct",
    period: "Marine insurance",
    body: "Hands-on SEO, PPC and digital performance work for one of the UK's best-known boat insurance brands.",
  },
];

const credentials = [
  { icon: Award, title: "MCIM", body: "Member of the Chartered Institute of Marketing." },
  { icon: Anchor, title: "Marine-native", body: "Embedded in the UK marine and yachting world." },
  { icon: Network, title: "Connected", body: "British Marine, insurers, brokers and boat shows." },
  { icon: Target, title: "Broad sector work", body: "FMCG and government services alongside marine." },
];

function About() {
  return (
    <>
      <Hero
        image={heroAbout}
        imageAlt="Luke Marsh — marine marketing and partnerships professional"
        eyebrow="About"
        title="Luke Marsh"
        subtitle="A decade of marketing and partnerships across the marine and insurance sectors — and a genuine feel for how this industry actually works."
        primaryCta={{ label: "Start a Conversation", to: "/contact" }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="The Path"
              title="Marine insurance, specialty insurance, and everything digital in between."
              intro="Luke's career runs from hands-on digital performance work to partnership leadership — always close to the marine industry, always commercially accountable."
            />
          </Reveal>
          <Reveal delay={120} className="space-y-px overflow-hidden rounded-sm bg-border">
            {career.map((c) => (
              <article key={c.org} className="card-interactive bg-background p-7 hover:bg-secondary">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl">{c.role}</h3>
                  <p className="eyebrow text-accent">{c.period}</p>
                </div>
                <p className="mt-1 text-sm font-semibold text-foreground/80">{c.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section dark>
        <Reveal>
          <SectionHeading
            dark
            align="center"
            eyebrow="Credentials"
            title="Credibility built in the industry, not adjacent to it"
          />
        </Reveal>
        <Reveal delay={150} className="mt-14 grid gap-px overflow-hidden rounded-sm bg-sand/12 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.title} className="card-interactive bg-navy p-8 hover:bg-navy-deep">
              <c.icon className="h-5 w-5 text-teak-soft" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-xl text-sand">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/65">{c.body}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Approach"
              title="Partnerships first, then the machinery behind them."
              intro="The best growth in the marine industry usually starts with the right relationship — then needs a brand, a website and a customer journey capable of carrying it. Luke works across both halves: opening the door, then making sure the business is ready when people walk through it."
            />
          </Reveal>
          <Reveal delay={120} className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
            {[
              ["Insider access", "Relationships across British Marine, insurers, brokers and the boat show circuit."],
              ["Commercial rigour", "Brand, SEO, PPC and e-commerce experience with measurable outcomes."],
              ["Plain speaking", "Confident, personable advice — no jargon, no theatre."],
              ["Cross-sector view", "Lessons from FMCG and government services applied to marine brands."],
            ].map(([t, b]) => (
              <div key={t} className="card-interactive bg-background p-8">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
            <div className="bg-secondary p-8 sm:col-span-2">
              <Link to="/services" className="link-arrow text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                See how that translates into services →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
