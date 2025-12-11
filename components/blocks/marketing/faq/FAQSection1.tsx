"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

export interface FAQSection1Props {
  headline?: string;
  description?: string;
  descriptionLink?: {
    text: string;
    href: string;
  };
  questions?: Array<{
    question: string;
    answer: string;
  }>;
  cta?: {
    headline: string;
    description: string;
    buttonLabel: string;
    buttonOnClick?: () => void;
    buttonHref?: string;
  };
  className?: string;
}

const defaultData = {
  headline: "Frequently asked questions",
  description:
    "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for?",
  descriptionLink: {
    text: "Contact us",
    href: "/contact",
  },
  questions: [
    {
      question: "What is shadcn/ui?",
      answer:
        "Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.",
    },
    {
      question: "What is shadcn/ui kit for Figma?",
      answer:
        "The shadcn/ui kit for Figma is a design system that brings the shadcn/ui components into Figma, allowing designers to work with the same components that developers use in production.",
    },
    {
      question: "I'm not familiar with shadcn/ui. Can I still use this kit?",
      answer:
        "Yes! The kit is designed to be intuitive and includes documentation to help you get started, even if you are new to shadcn/ui.",
    },
    {
      question: "Can I create multi-brand design systems with this UI kit?",
      answer:
        "Yes, the kit is highly customizable and supports theming, making it suitable for creating multi-brand design systems.",
    },
    {
      question: "How will this kit save me time?",
      answer:
        "By providing pre-built, production-ready components, the kit eliminates the need to design and build components from scratch, significantly reducing development time.",
    },
    {
      question: "How does this improve my collaboration with developers?",
      answer:
        "Since the kit mirrors the actual components used in code, designers and developers can work with the same design system, reducing miscommunication and ensuring design consistency.",
    },
  ],
  cta: {
    headline: "Still have questions?",
    description: "Have questions or need assistance? Our team is here to help!",
    buttonLabel: "Contact us",
    buttonHref: "/contact",
  } as FAQSection1Props["cta"],
};

export function FAQSection1({
  headline,
  description,
  descriptionLink,
  questions,
  cta,
  className,
}: FAQSection1Props = {}) {
  const finalHeadline = headline ?? defaultData.headline;
  const finalDescription = description ?? defaultData.description;
  const finalDescriptionLink = descriptionLink ?? defaultData.descriptionLink;
  const finalQuestions = questions ?? defaultData.questions;
  const finalCta = cta ?? defaultData.cta;
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Centered Heading */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {finalHeadline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {finalDescription}
            {finalDescriptionLink && (
              <>
                {" "}
                <Link
                  href={finalDescriptionLink.href}
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                >
                  {finalDescriptionLink.text}
                </Link>
                .
              </>
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto w-full">
          <Accordion type="single" collapsible className="w-full">
            {finalQuestions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        {finalCta && (
          <div className="flex flex-col gap-6 p-8 rounded-lg bg-muted text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {finalCta.headline}
            </h3>
            <p className="text-muted-foreground">
              {finalCta.description}
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={finalCta.buttonOnClick}
                asChild={!!finalCta.buttonHref}
                className="w-full sm:w-auto"
              >
                {finalCta.buttonHref ? (
                  <Link href={finalCta.buttonHref}>{finalCta.buttonLabel}</Link>
                ) : (
                  finalCta.buttonLabel
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

