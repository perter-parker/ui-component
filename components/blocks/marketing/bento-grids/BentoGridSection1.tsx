import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BentoCard {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}

const defaultData = {
  label: "Bento Grid Section",
  headline: "Feature-rich layout that captures attention",
  description:
    "Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure.",
  cards: [
    {
      title: "Feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
      image: "https://github.com/shadcn.png",
      imageAlt: "Feature image",
      className: "md:row-span-2",
    },
    {
      title: "Feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
      image: "https://github.com/shadcn.png",
      imageAlt: "Feature image",
    },
    {
      title: "Feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
      image: "https://github.com/shadcn.png",
      imageAlt: "Feature image",
    },
    {
      title: "Feature title",
      description:
        "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
      image: "https://github.com/shadcn.png",
      imageAlt: "Feature image",
      className: "md:row-span-2",
    },
  ] as BentoCard[],
};

export function BentoGridSection1({ className }: { className?: string } = {}) {
  const { label, headline, description, cards } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">{label}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-4 p-6 rounded-lg bg-muted",
                card.className
              )}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
              {card.image && (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-background mt-auto">
                  <Image
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

