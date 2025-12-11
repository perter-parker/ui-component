import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface HeroSection5Props {
  headline: string;
  description: string;
  inputPlaceholder?: string;
  inputLabel?: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  videoSrc?: string;
  videoPoster?: string;
  className?: string;
}

export function HeroSection5({
  headline,
  description,
  inputPlaceholder = "Your email",
  inputLabel,
  primaryAction,
  videoSrc,
  videoPoster,
  className,
}: HeroSection5Props) {
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {/* Left: Text Content + Input */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
          
          {/* Input Form */}
          <div className="flex flex-col gap-4 sm:flex-row mt-2">
            <Input
              type="email"
              placeholder={inputPlaceholder}
              className="flex-1"
              aria-label={inputLabel || inputPlaceholder}
            />
            {primaryAction && (
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={primaryAction.onClick}
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

        {/* Right: Video */}
        <div className="relative flex flex-1 items-center justify-center">
          {videoSrc ? (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
              <video
                src={videoSrc}
                poster={videoPoster}
                className="w-full h-full object-cover"
                controls
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground/70">Hero section video</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

