import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const defaultData = {
  headline: "Social proof section title that focuses on trust and results",
  description:
    "Write a brief introduction that sets up your testimonials' credibility. Mention key outcomes, industry relevance, or the scale of your success.",
  testimonials: [
    {
      text: "Shadcn UI Kit for Figma has completely transformed our design process. It's incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.",
      author: {
        name: "Lando Norris",
        role: "Founder at Acme Inc.",
        avatar: "https://github.com/shadcn.png",
      },
    },
    {
      text: "The attention to detail in this UI kit is outstanding. We've seen a significant improvement in our development speed since implementing it. Highly recommended for any serious project.",
      author: {
        name: "Sarah Chen",
        role: "Lead Designer at TechCorp",
        avatar: "https://github.com/shadcn.png",
      },
    },
    {
      text: "What impressed me most was how seamlessly it integrated with our existing workflow. The documentation is clear, and the component quality is consistently high.",
      author: {
        name: "Marcus Rodriguez",
        role: "CTO at StartupX",
        avatar: "https://github.com/shadcn.png",
      },
    },
  ],
};

export function TestimonialSection4({ className }: { className?: string } = {}) {
  const { headline, description, testimonials } = defaultData;
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

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border bg-card shadow-sm"
            >
              <blockquote className="text-base text-foreground leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <Avatar>
                  <AvatarImage src={testimonial.author.avatar} />
                  <AvatarFallback>
                    {testimonial.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {testimonial.author.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

