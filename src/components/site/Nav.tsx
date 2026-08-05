import { Link } from "@tanstack/react-router";
import { Menu, X, Anchor } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Luke" },
  { to: "/services", label: "Services" },
  { to: "/industry-presence", label: "Industry Presence" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-navy-deep/92 py-3 shadow-lg shadow-navy-deep/20 backdrop-blur-md" : "py-6",
      )}
      role="banner"
    >
      <div className="container-90 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teak-soft"
          onClick={() => setOpen(false)}
          aria-label="LM Strategic Advisory — Home"
        >
          <Anchor
            className="h-5 w-5 text-teak-soft transition-transform duration-500 group-hover:-rotate-12"
            aria-hidden="true"
          />
          <span className="font-display text-lg leading-none tracking-tight text-sand sm:text-xl">
            LM <span className="text-sand/70">Strategic Advisory</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="nav-link text-sm text-sand/75 hover:text-sand data-[status=active]:text-sand"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary px-5 py-2.5">
            Start a Conversation
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="rounded-sm p-2 text-sand transition-colors hover:bg-sand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teak-soft lg:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="container-90 mt-4 flex flex-col gap-1 rounded-sm bg-navy-deep/97 p-4 shadow-xl backdrop-blur-md lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-3 text-sand/85 transition-colors hover:bg-sand/10 hover:text-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teak-soft"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 px-5 py-3 text-center"
          >
            Start a Conversation
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
