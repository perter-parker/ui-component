import * as React from "react";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureSection10Props {
  headline: string;
  description: string;
  features: Array<{
    icon?: React.ReactNode;
    title: string;
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
  className?: string;
}

export function FeatureSection10({
  headline,
  description,
  features,
  className,
}: FeatureSection10Props) {
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

        {/* Three Feature Icons with Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4"
            >
              <div className="size-12 rounded-lg bg-muted flex items-center justify-center">
                {feature.icon || <Rocket className="size-6" />}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              {feature.link && (
                <Link
                  href={feature.link.href}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors mt-2"
                >
                  {feature.link.label}
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

