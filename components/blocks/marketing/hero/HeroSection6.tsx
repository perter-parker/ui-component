import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultData = {
  headline: "Headline that solves user's main problem",
  description:
    "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
  primaryAction: {
    label: "Get started",
    href: "#",
  },
  backgroundImage: undefined,
  backgroundImageAlt: "Hero background",
  variant: "light" as const,
};

export function HeroSection6({ className }: { className?: string } = {}) {
  const {
    headline,
    description,
    primaryAction,
    backgroundImage,
    backgroundImageAlt,
    variant,
  } = defaultData;
  const isDark = variant === "dark";
  
  return (
    <section className={cn(
      "relative py-24 md:py-32 overflow-hidden",
      isDark && "bg-[#282828]",
      className
    )}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt || headline}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className={cn(
            "absolute inset-0 backdrop-blur-sm",
            isDark ? "bg-[#282828]/90" : "bg-background/80"
          )} />
        </div>
      )}
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <h1 className={cn(
            "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
            isDark && "text-white"
          )}>
            {headline}
          </h1>
          <p className={cn(
            "text-lg md:text-xl",
            isDark ? "text-gray-300" : "text-muted-foreground"
          )}>
            {description}
          </p>
          {primaryAction && (
            <Button
              size="lg"
              className="w-full sm:w-auto"
              asChild={!!primaryAction.href}
            >
              {primaryAction.href ? (
                <a href={primaryAction.href} className="flex items-center gap-2">
                  {primaryAction.label}
                  <ArrowRight className="size-4" />
                </a>
              ) : (
                <>
                  {primaryAction.label}
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

