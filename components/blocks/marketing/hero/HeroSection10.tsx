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
  image: "https://github.com/shadcn.png",
  imageAlt: "Hero section image",
  socialProof: "Loved by 20K+ creators, including teams at:",
  logos: [
    { name: "NEXT.js" },
    { name: "NEXT.js" },
    { name: "NEXT.js" },
    { name: "NEXT.js" },
    { name: "NEXT.js" },
  ],
};

export function HeroSection10({ className }: { className?: string } = {}) {
  const {
    headline,
    description,
    primaryAction,
    image,
    imageAlt,
    logos,
    socialProof,
  } = defaultData;
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      {/* Centered Text */}
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
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

      {/* Full Width Image */}
      {image !== undefined && (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted my-8">
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
                <p className="text-sm text-muted-foreground/70">Hero section image</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Logos */}
      {(logos || socialProof) && (
        <div className="flex flex-col items-center gap-4 mt-8">
          {socialProof && (
            <p className="text-sm text-muted-foreground">{socialProof}</p>
          )}
          {logos && logos.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-base font-semibold whitespace-nowrap text-foreground">{logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

