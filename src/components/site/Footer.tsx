import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Anchor } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Luke" },
  { to: "/services", label: "Services" },
  { to: "/industry-presence", label: "Industry Presence" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="snap-section bg-navy-deep text-sand" role="contentinfo">
      <div className="container-90 grid gap-12 py-20 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Anchor className="h-5 w-5 text-teak-soft" aria-hidden="true" />
            <span className="font-display text-xl">LM Strategic Advisory</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
            Strategic marketing and partnerships advisory for the marine industry. Connecting
            people, brands, and opportunities in the marine world.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-sand/70">
            <MapPin className="h-4 w-4 shrink-0 text-teak-soft" aria-hidden="true" />
            Southampton, England, United Kingdom
          </p>
        </div>

        <div>
          <p className="eyebrow text-teak-soft">Navigate</p>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-sand/75 transition-colors duration-300 hover:text-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teak-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-teak-soft">Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-sand/75">
            <li>
              <a
                href="https://www.linkedin.com/in/lukemarsh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teak-soft"
                aria-label="Luke Marsh on LinkedIn (opens in new tab)"
              >
                <Linkedin className="h-4 w-4 text-teak-soft" aria-hidden="true" />
                LinkedIn — Luke Marsh
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-teak-soft" aria-hidden="true" />
              Email — available on request
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-sand/45">
            Google Business, Facebook and Instagram/X profiles to be added.
          </p>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="container-90 flex flex-col items-start justify-between gap-3 py-6 text-xs text-sand/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} LM Strategic Advisory. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teak-soft underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teak-soft"
            >
              The Innovations (https://theinnovations.tech/)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
