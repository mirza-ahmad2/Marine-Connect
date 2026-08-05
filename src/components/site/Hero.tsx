import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  children?: ReactNode;
}) {
  return (
    <section
      className="snap-section relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy-deep"
      aria-label="Page hero"
    >
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="hero-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="container-87 relative z-10 py-32 text-center">
        {eyebrow ? (
          <p className="eyebrow mb-6 text-teak-soft opacity-0 [animation:reveal-up_0.8s_var(--ease-out-soft)_0.05s_forwards]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mx-auto max-w-5xl text-balance text-4xl leading-[1.05] text-sand opacity-0 [animation:reveal-up_0.9s_var(--ease-out-soft)_0.15s_forwards] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-sand/85 opacity-0 [animation:reveal-up_0.9s_var(--ease-out-soft)_0.3s_forwards] sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0 [animation:reveal-up_0.9s_var(--ease-out-soft)_0.45s_forwards]">
            {primaryCta ? (
              <Link to={primaryCta.to} className="btn-primary px-7 py-3.5 tracking-wide">
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                to={secondaryCta.to}
                className="rounded-sm border border-sand/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-sand transition-all duration-300 hover:-translate-y-0.5 hover:border-sand hover:bg-sand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-teak-soft"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
