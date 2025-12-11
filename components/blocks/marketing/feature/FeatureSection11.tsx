import * as React from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultData = {
  headline: "Headline that shows solution's impact on user success",
  description:
    "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
  image: "https://github.com/shadcn.png",
  imageAlt: "Feature section image",
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
  ],
};

export function FeatureSection11({ className }: { className?: string } = {}) {
  const { headline, description, image, imageAlt, features } = defaultData;
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

        {/* Full-width Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || headline}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
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
          )}
        </div>

        {/* Three Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 text-center"
            >
              <div className="size-12 rounded-lg bg-muted flex items-center justify-center mx-auto">
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

