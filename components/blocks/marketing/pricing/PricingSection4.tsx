"use client";

import * as React from "react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggleGroup";
import { cn } from "@/lib/utils";

const defaultData = {
  headline: "Benefit-focused headline that highlights choice",
  description:
    "Add a concise value statement that addresses price sensitivity and showcases plan flexibility. Focus on transformation and results while keeping it under 2 lines. Align with your pricing table options.",
  plans: [
    {
      name: "Basic",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 29,
      annuallyPrice: 24,
      featuresHeading: "What's included:",
      features: [
        { text: "Up to 5 team members" },
        { text: "10GB storage space" },
        { text: "Basic analytics" },
      ],
      buttonLabel: "Purchase plan",
      buttonHref: "#",
    },
    {
      name: "Standard",
      description: "Ideal for growing teams and businesses",
      monthlyPrice: 49,
      annuallyPrice: 39,
      featuresHeading: "Everything in Basic, plus:",
      features: [
        { text: "Up to 20 team members" },
        { text: "50GB storage space" },
        { text: "Advanced analytics" },
        { text: "Priority support" },
      ],
      buttonLabel: "Purchase plan",
      buttonHref: "#",
    },
    {
      name: "Enterprise",
      description: "For large enterprises and advanced needs",
      monthlyPrice: 99,
      annuallyPrice: 79,
      featured: true,
      featuresHeading: "Everything in Standard, plus:",
      features: [
        { text: "Unlimited team members" },
        { text: "250GB storage space" },
        { text: "Custom analytics" },
        { text: "24/7 premium support" },
        { text: "White-labeling" },
      ],
      buttonLabel: "Purchase plan",
      buttonHref: "#",
    },
  ],
};

export function PricingSection4({ className }: { className?: string } = {}) {
  const { headline, description, plans } = defaultData;
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annually">("monthly");

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Centered Heading */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center">
          <ToggleGroup
            type="single"
            value={billingPeriod}
            onValueChange={(value) => {
              if (value === "monthly" || value === "annually") {
                setBillingPeriod(value);
              }
            }}
            variant="outline"
            className="rounded-md"
          >
            <ToggleGroupItem value="monthly" aria-label="Monthly billing">
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem value="annually" aria-label="Annually billing">
              Annually
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const price =
              billingPeriod === "annually" && plan.annuallyPrice
                ? plan.annuallyPrice
                : plan.monthlyPrice;
            const isFeatured = plan.featured;

            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-6 p-6 rounded-lg border",
                  isFeatured
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-foreground"
                )}
              >
                {/* Plan Header */}
                <div className="flex flex-col gap-2">
                  <h3
                    className={cn(
                      "text-xl font-bold",
                      isFeatured ? "text-background" : "text-foreground"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      isFeatured ? "text-background/80" : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-bold",
                      isFeatured ? "text-background" : "text-foreground"
                    )}
                  >
                    ${price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      isFeatured ? "text-background/80" : "text-muted-foreground"
                    )}
                  >
                    /month
                  </span>
                </div>

                {/* Button */}
                <Button
                  asChild={!!plan.buttonHref}
                  className={cn(
                    "w-full",
                    isFeatured
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  )}
                >
                  {plan.buttonHref ? (
                    <a href={plan.buttonHref}>{plan.buttonLabel}</a>
                  ) : (
                    plan.buttonLabel
                  )}
                </Button>

                {/* Features */}
                <div className="flex flex-col gap-4 mt-2">
                  <h4
                    className={cn(
                      "text-sm font-semibold",
                      isFeatured ? "text-background" : "text-foreground"
                    )}
                  >
                    {plan.featuresHeading || "What's included:"}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check
                          className={cn(
                            "size-5 shrink-0 mt-0.5",
                            isFeatured ? "text-background" : "text-foreground"
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm flex-1",
                            isFeatured ? "text-background/90" : "text-foreground"
                          )}
                        >
                          {feature.text}
                        </span>
                        {feature.tooltip && (
                          <button
                            type="button"
                            className="shrink-0"
                            aria-label={feature.tooltip}
                          >
                            <Info
                              className={cn(
                                "size-4",
                                isFeatured
                                  ? "text-background/70"
                                  : "text-muted-foreground"
                              )}
                            />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
