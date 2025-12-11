import * as React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComparisonFeature {
  name: string;
  you: string | boolean;
  them: string | boolean;
}

const defaultData = {
  label: "Comparison Section",
  headline: "You vs. Them",
  description:
    "Explain in one or two concise sentences how your solution compares to a competitor. Keep it clear and compelling.",
  features: [
    {
      name: "Projects",
      you: "Unlimited",
      them: "10",
    },
    {
      name: "Custom components",
      you: true,
      them: true,
    },
    {
      name: "Design tokens",
      you: true,
      them: true,
    },
    {
      name: "Team permissions",
      you: true,
      them: false,
    },
    {
      name: "Audit logs",
      you: true,
      them: false,
    },
  ] as ComparisonFeature[],
  buttonLabel: "Get started",
  buttonHref: "#",
};

export function ComparisonSection1({ className }: { className?: string } = {}) {
  const { label, headline, description, features, buttonLabel, buttonHref } =
    defaultData;

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

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="rounded-lg border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-muted">
              <div></div>
              <div className="text-center font-semibold">You</div>
              <div className="text-center font-semibold">Them</div>
            </div>
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 border-t last:border-b"
              >
                <div className="font-medium">{feature.name}</div>
                <div className="text-center">
                  {typeof feature.you === "boolean" ? (
                    feature.you ? (
                      <Check className="size-5 mx-auto text-foreground" />
                    ) : (
                      <X className="size-5 mx-auto text-muted-foreground" />
                    )
                  ) : (
                    <span className="text-sm">{feature.you}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof feature.them === "boolean" ? (
                    feature.them ? (
                      <Check className="size-5 mx-auto text-foreground" />
                    ) : (
                      <X className="size-5 mx-auto text-muted-foreground" />
                    )
                  ) : (
                    <span className="text-sm">{feature.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button size="lg" asChild>
            <a href={buttonHref}>{buttonLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

