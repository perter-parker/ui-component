import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultData = {
  label: "404 Section",
  headline: "Page not found",
  description:
    "Sorry, we couldn't find the page you're looking for. Please check the URL or navigate back home.",
  buttonLabel: "Go to homepage",
  buttonHref: "/",
};

export function ErrorSection1({ className }: { className?: string } = {}) {
  const { label, headline, description, buttonLabel, buttonHref } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
        {/* Label */}
        <p className="text-sm text-muted-foreground">{label}</p>

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {headline}
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground md:text-xl">
          {description}
        </p>

        {/* Button */}
        <Button size="lg" asChild>
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}

