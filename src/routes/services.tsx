import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, LineChart, Compass, Store, Users } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta({
      title: "Services — Marine Partnerships & Digital Strategy",
      description:
        "Strategic partnerships development, digital marketing strategy, brand positioning, web and e-commerce optimisation, and customer journey work for marine businesses.",
      path: "/services",
      keywords:
        "marine partnerships, digital marketing strategy, brand positioning marine, e-commerce optimisation, customer journey marine, SEO PPC marine industry",
    }),
  component: Services,
});

const services = [
  {
    icon: Handshake,
    n: "01",
    title: "Strategic Partnerships Development",
    body: "Identifying, opening and structuring partnerships across insurers, brokers, boat brands, marinas, clubs and events — then managing them so they deliver beyond the launch announcement.",
    points: ["Partner sourcing and introductions", "Commercial structuring", "Joint go-to-market plans"],
  },
  {
    icon: LineChart,
    n: "02",
    title: "Digital Marketing Strategy",
    body: "Performance strategy grounded in how marine audiences search, compare and buy — from organic visibility to paid acquisition and lifecycle marketing.",
    points: ["SEO and content strategy", "PPC and paid acquisition", "Measurement and reporting"],
  },
  {
    icon: Compass,
    n: "03",
    title: "Brand Positioning",
    body: "Defining what a marine brand stands for and where it sits against the field, then making that position consistent everywhere a customer meets it.",
    points: ["Positioning and messaging", "Competitive review", "Brand rollout support"],
  },
  {
    icon: Store,
    n: "04",
    title: "Web & E-commerce Optimisation",
    body: "Remodelling websites and quote-to-purchase journeys so they perform — informed by hands-on e-commerce rebuilds in insurance and beyond.",
    points: ["Site and funnel review", "E-commerce remodelling", "Conversion improvement"],
  },
  {
    icon: Users,
    n: "05",
    title: "Customer Journey & Insight",
    body: "Mapping the real journey your customers take and turning insight into practical commercial decisions rather than another dormant slide deck.",
    points: ["Journey mapping", "Customer insight analysis", "Retention and lifecycle"],
  },
];

const sectors = [
  "Marine insurers",
  "Brokers & MGAs",
  "Boat & yacht brands",
  "Marinas",
  "Marine tech",
  "Yacht clubs & events",
];

function Services() {
  return (
    <>
      <Hero
        image={heroServices}
        imageAlt="Marine services — yacht and harbour at sunset"
        eyebrow="Services"
        title="Growth built for marine businesses"
        subtitle="Five connected areas of work — used individually as advisory input, or together as a full commercial modernisation."
        primaryCta={{ label: "Discuss a Project", to: "/contact" }}
      />

      {services.map((s, i) => (
        <Section key={s.n} dark={i % 2 === 1}>
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:items-center">
            <Reveal>
              <p className="font-display text-6xl text-accent sm:text-8xl">{s.n}</p>
              <s.icon
                className={`mt-8 h-8 w-8 ${i % 2 === 1 ? "text-teak-soft" : "text-accent"}`}
                strokeWidth={1.25}
                aria-hidden="true"
              />
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading dark={i % 2 === 1} title={s.title} intro={s.body} />
              <ul className="mt-8 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className={`card-interactive p-6 text-sm ${
                      i % 2 === 1 ? "bg-navy text-sand/80" : "bg-background text-muted-foreground"
                    }`}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Who It's For"
            title="Marine brands with something worth growing"
          />
        </Reveal>
        <Reveal delay={150} className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div
              key={s}
              className="card-interactive bg-background p-10 text-center font-display text-2xl hover:bg-secondary"
            >
              {s}
            </div>
          ))}
        </Reveal>
        <Reveal delay={250} className="mt-14 text-center">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Start a Conversation
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
