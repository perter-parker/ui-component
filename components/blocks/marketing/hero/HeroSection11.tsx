import * as React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSection11Props {
  headline: string;
  description: string;
  features: Array<{
    title: string;
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

export function HeroSection11({
  headline,
  description,
  features,
  primaryAction,
  secondaryAction,
  image,
  imageAlt,
  className,
}: HeroSection11Props) {
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {/* Left: Text Content + List */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
          
          {/* Features List */}
          <div className="flex flex-col gap-3 mt-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="size-5 shrink-0" />
                <span className="text-base font-medium">{feature.title}</span>
              </div>
            ))}
          </div>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row mt-2">
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
                  variant="outline"
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
                  <p className="text-sm text-muted-foreground/70">Hero section image</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
