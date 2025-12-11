import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultData = {
  label: "CTA Section",
  headline: "Action-driving headline that creates urgency",
  description:
    "Add one or two compelling sentences that reinforce your main value proposition and overcome final objections. End with a clear reason to act now. Align this copy with your CTA button text.",
  buttonLabel: "Get started",
  buttonHref: "#",
};

export function CTASection1({ className }: { className?: string } = {}) {
  const { label, headline, description, buttonLabel, buttonHref } = defaultData;

  return (
    <section className={cn("w-full bg-foreground text-background py-24 md:py-32", className)}>
      <div className="container flex flex-col items-center justify-center gap-8 text-center max-w-3xl mx-auto">
        {/* Label */}
        <p className="text-sm text-background/70">{label}</p>

        {/* Headline */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {headline}
        </h2>

        {/* Description */}
        <p className="text-lg text-background/80 md:text-xl">
          {description}
        </p>

        {/* Button */}
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
          asChild
        >
          <Link href={buttonHref} className="flex items-center gap-2">
            {buttonLabel}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

