import * as React from "react";
import Image from "next/image";
import { Rocket, Zap, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultData = {
  headline: "Headline that shows solution's impact on user success",
  description:
    "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
  features: [
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
      icon: <Rocket className="size-5" />,
    },
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
      icon: <Sparkles className="size-5" />,
    },
  ] as FeatureItem[],
  image: "https://github.com/shadcn.png",
  imageAlt: "Feature section image",
};

export function FeatureSection5({ className }: { className?: string } = {}) {
  const { headline, description, features, image, imageAlt } = defaultData;
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {/* Left: Text + Features */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {headline}
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>

          {/* Features Grid - 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                {feature.icon ? (
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                    {feature.icon}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                    <Rocket className="size-5" />
                  </div>
                )}
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative flex flex-1 items-center justify-center">
          {image ? (
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={image}
                alt={imageAlt || headline}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          ) : (
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <div className="size-16 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                    <svg
                      className="size-8 text-muted-foreground/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground/70">Feature section image</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
