import * as React from "react";
import { cn } from "@/lib/utils";

interface Stat {
  title: string;
  value: string;
  description: string;
}

const defaultData = {
  label: "Stats section",
  headline: "Data-driven highlights that showcase impact",
  description:
    "Add a concise value statement that explains how your metrics demonstrate success and growth. Focus on transformation and measurable outcomes while keeping it under 2 lines. Align with your statistical data display.",
  stats: [
    {
      title: "Stat title",
      value: "2,400%",
      description:
        "Each stat should include a bold numerical figure followed by a brief, compelling description.",
    },
    {
      title: "Stat title",
      value: "$410K",
      description:
        "Each stat should include a bold numerical figure followed by a brief, compelling description.",
    },
    {
      title: "Stat title",
      value: "11,000",
      description:
        "Each stat should include a bold numerical figure followed by a brief, compelling description.",
    },
  ] as Stat[],
};

export function StatSection4({ className }: { className?: string } = {}) {
  const { label, headline, description, stats } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="text-sm text-muted-foreground">{label}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border bg-card shadow-sm"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

