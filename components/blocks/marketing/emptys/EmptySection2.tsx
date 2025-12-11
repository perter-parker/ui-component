import * as React from "react";
import { cn } from "@/lib/utils";

const defaultData = {
  label: "Empty section",
  headline: "Empty landing page section",
  description:
    "Feel free to utilize this section as a foundational starting point, where you can add your content below.",
};

export function EmptySection2({ className }: { className?: string } = {}) {
  const { label, headline, description } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
        {/* Label */}
        <p className="text-sm text-muted-foreground">{label}</p>

        {/* Headline */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {headline}
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground md:text-xl">
          {description}
        </p>

        {/* Placeholder */}
        <div className="w-full p-12 rounded-lg border-2 border-dashed bg-muted">
          <p className="text-sm text-muted-foreground">
            Replace this div with your content
          </p>
        </div>
      </div>
    </section>
  );
}

