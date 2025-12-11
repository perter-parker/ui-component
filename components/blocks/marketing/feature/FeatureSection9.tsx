import * as React from "react";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultData = {
  headline: "Headline that shows solution's impact on user success",
  description:
    "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
  features: [
    {
      icon: <Rocket className="size-6" />,
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
    },
    {
      icon: <Rocket className="size-6" />,
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
    },
    {
      icon: <Rocket className="size-6" />,
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
    },
    {
      icon: <Rocket className="size-6" />,
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
    },
  ],
};

export function FeatureSection9({ className }: { className?: string } = {}) {
  const { headline, description, features } = defaultData;
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Centered Text */}
        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Four Horizontal Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border bg-card"
            >
              <div className="size-12 rounded-lg bg-muted flex items-center justify-center">
                {feature.icon || <Rocket className="size-6" />}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

