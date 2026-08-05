import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Ship, Users } from "lucide-react";
import heroPresence from "@/assets/hero-presence.jpg";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industry-presence")({
  head: () =>
    pageMeta({
      title: "Industry Presence — Boat Shows & Marine Events",
      description:
        "Where LM Strategic Advisory shows up: Southampton International Boat Show, Palma International Boat Show, BIBA and Metstrade — visibly embedded in the marine calendar.",
      path: "/industry-presence",
      keywords:
        "Southampton Boat Show, Palma Boat Show, BIBA conference, Metstrade, marine industry events, British Marine network, Luke Marsh industry presence",
    }),
  component: Presence,
});

const events = [
  {
    name: "Southampton International Boat Show",
    place: "Southampton, UK",
    body: "The home show. A concentration of UK boat brands, marinas, insurers and brokers on Luke's doorstep — and where a large share of new relationships begin.",
  },
  {
    name: "Palma International Boat Show",
    place: "Mallorca, Spain",
    body: "The superyacht and Mediterranean brokerage world, and a valuable read on where premium marine buyers and service brands are heading.",
  },
  {
    name: "BIBA",
    place: "Manchester, UK",
    body: "The British Insurance Brokers' Association conference — broker relationships, distribution conversations and insurance-side partnership building.",
  },
  {
    name: "Metstrade",
    place: "Amsterdam, Netherlands",
    body: "The global marine equipment and technology show — supplier, marine tech and manufacturer connections across the industry supply chain.",
  },
];

const markers = [
  { icon: Ship, title: "Marine calendar", body: "Present across the shows that matter, year after year." },
  { icon: Users, title: "British Marine network", body: "Relationships across the UK marine trade body community." },
  { icon: MapPin, title: "Solent-based", body: "Southampton — the centre of UK marine business." },
  { icon: CalendarDays, title: "Year-round contact", body: "Partnerships maintained between shows, not just at them." },
];

function Presence() {
  return (
    <>
      <Hero
        image={heroPresence}
        imageAlt="Marine industry boat show and networking events"
        eyebrow="Industry Presence"
        title="Visible where the marine industry meets"
        subtitle="Partnerships in this industry are still made in person — on the pontoons, in the halls, and over a coffee between meetings."
        primaryCta={{ label: "Meet at the Next Show", to: "/contact" }}
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The Circuit"
            title="Four fixtures in the calendar"
            intro="Each show serves a different part of the network — UK boating, Mediterranean brokerage, insurance distribution and global marine technology."
          />
        </Reveal>
        <Reveal delay={150} className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
          {events.map((e) => (
            <article key={e.name} className="card-interactive bg-background p-9 hover:bg-secondary">
              <p className="eyebrow text-accent">{e.place}</p>
              <h3 className="mt-4 text-2xl leading-tight">{e.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </article>
          ))}
        </Reveal>
      </Section>

      <Section dark>
        <Reveal>
          <SectionHeading
            dark
            align="center"
            eyebrow="Why It Matters"
            title="Access is the shortest route to opportunity"
            intro="Being known in the room changes the speed of everything that follows — introductions, negotiations, and the partnerships that actually get signed."
          />
        </Reveal>
        <Reveal delay={150} className="mt-14 grid gap-px overflow-hidden rounded-sm bg-sand/12 sm:grid-cols-2 lg:grid-cols-4">
          {markers.map((m) => (
            <div key={m.title} className="card-interactive bg-navy p-8 hover:bg-navy-deep">
              <m.icon className="h-5 w-5 text-teak-soft" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-xl text-sand">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/65">{m.body}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={250} className="mt-12 text-center">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Arrange a Meeting
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
