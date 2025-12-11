import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FeatureSection8Props {
  headline: string;
  description: string;
  metrics: Array<{
    value: string;
    description: string;
  }>;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function FeatureSection8({
  headline,
  description,
  metrics,
  primaryAction,
  secondaryAction,
  image,
  imageAlt,
  className,
}: FeatureSection8Props) {
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {/* Left: Text Content with Metrics */}
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-5xl font-bold tracking-tight">
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row mt-4">
              {primaryAction && (
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={primaryAction.onClick}
                  asChild={!!primaryAction.href}
                >
                  {primaryAction.href ? (
                    <a href={primaryAction.href}>{primaryAction.label}</a>
                  ) : (
                    primaryAction.label
                  )}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={secondaryAction.onClick}
                  asChild={!!secondaryAction.href}
                >
                  {secondaryAction.href ? (
                    <a href={secondaryAction.href} className="flex items-center gap-2">
                      {secondaryAction.label}
                      <ArrowRight className="size-4" />
                    </a>
                  ) : (
                    <>
                      {secondaryAction.label}
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
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

