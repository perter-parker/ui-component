import * as React from "react";
import { cn } from "@/lib/utils";

const defaultData = {
  label: "Logo section",
  headline: "Showcase that builds trust",
  description:
    "Add logos of notable companies using your product. Include 4-6 recognizable brands in grayscale to maintain visual consistency. Ensure logos are properly scaled and aligned with equal spacing.",
  logos: [
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
    "NEXT.js",
  ],
};

export function LogoSection1({ className }: { className?: string } = {}) {
  const { label, headline, description, logos } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">{label}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-2xl font-bold text-foreground/60 grayscale hover:grayscale-0 hover:text-foreground transition-all"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

