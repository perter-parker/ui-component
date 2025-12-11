import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TableOfContentsItem {
  label: string;
  href: string;
}

const defaultData = {
  date: "Nov 11, 2024",
  category: "Articles",
  headline: "Short and clear engaging headline for an article",
  description:
    "Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.",
  author: {
    name: "Lando Norris",
    role: "Product Designer",
    avatar: "https://github.com/shadcn.png",
  },
  image: "https://github.com/shadcn.png",
  imageAlt: "Article image",
  tableOfContents: [
    { label: "The King's Plan", href: "#kings-plan" },
    { label: "The Joke Tax", href: "#joke-tax" },
    { label: "Jokester's Revolt", href: "#jokester-revolt" },
    { label: "The People's Rebellion", href: "#peoples-rebellion" },
  ] as TableOfContentsItem[],
  content: [
    {
      type: "paragraph",
      text: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
    },
    {
      type: "heading",
      text: "The King's Plan",
    },
    {
      type: "paragraph",
      text: "The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the kingdom.",
    },
    {
      type: "quote",
      text: "After all, he said, everyone enjoys a good joke, so it's only fair that they should pay for the privilege.",
    },
    {
      type: "heading",
      text: "The Joke Tax",
    },
    {
      type: "paragraph",
      text: "The king's subjects were not amused. They grumbled and complained, but the king was firm:",
    },
    {
      type: "list",
      items: [
        "1st level of puns: 5 gold coins",
        "2nd level of jokes: 10 gold coins",
        "3rd level of one-liners: 20 gold coins",
      ],
    },
    {
      type: "paragraph",
      text: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.",
    },
    {
      type: "heading",
      text: "Jokester's Revolt",
    },
    {
      type: "paragraph",
      text: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.",
    },
    {
      type: "paragraph",
      text: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.",
    },
    {
      type: "heading",
      text: "The People's Rebellion",
    },
    {
      type: "paragraph",
      text: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.",
    },
    {
      type: "paragraph",
      text: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.",
    },
    {
      type: "paragraph",
      text: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.",
    },
  ],
};

export function RichSection3({ className }: { className?: string } = {}) {
  const {
    date,
    category,
    headline,
    description,
    author,
    image,
    imageAlt,
    tableOfContents,
    content,
  } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col gap-8">
          {/* Meta */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{date}</span>
            <span>·</span>
            <span>{category}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {headline}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-full overflow-hidden bg-muted">
              {author.avatar && (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{author.name}</span>
              <span className="text-sm text-muted-foreground">
                {author.role}
              </span>
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
              <Image
                src={image}
                alt={imageAlt || headline}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-6 prose prose-lg max-w-none">
            {content.map((item, index) => {
              if (item.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold tracking-tight mt-8 mb-4"
                  >
                    {item.text}
                  </h2>
                );
              }
              if (item.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-foreground pl-4 italic text-muted-foreground"
                  >
                    {item.text}
                  </blockquote>
                );
              }
              if (item.type === "list") {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2">
                    {item.items?.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-lg font-bold mb-4">On this page</h3>
            <nav className="flex flex-col gap-2">
              {tableOfContents.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}

