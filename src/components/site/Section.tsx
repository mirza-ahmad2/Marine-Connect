import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "snap-section flex min-h-[100svh] items-center py-24",
        dark ? "bg-navy text-sand" : "bg-background text-foreground",
        className,
      )}
    >
      <div className="container-section w-full">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow text-accent">{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-4 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl",
          dark ? "text-sand" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            dark ? "text-sand/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
