import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogPost {
  image?: string;
  imageAlt?: string;
  date: string;
  category: string;
  title: string;
  description: string;
  href?: string;
}

const defaultData = {
  label: "Blog Section",
  headline: "Short and clear engaging headline for a blog",
  description:
    "Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.",
  posts: [
    {
      image: "https://github.com/shadcn.png",
      imageAlt: "Blog post image",
      date: "Mar 15, 2024",
      category: "Tutorial",
      title: "Getting Started with shadcn/ui: A Complete Guide",
      description:
        "Learn how to set up and maximize your development workflow with shadcn/ui's powerful component library.",
      href: "#",
    },
    {
      image: "https://github.com/shadcn.png",
      imageAlt: "Blog post image",
      date: "Mar 12, 2024",
      category: "Development",
      title: "Building Dark Mode with Next.js and Tailwind CSS",
      description:
        "Implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and shadcn/ui.",
      href: "#",
    },
    {
      image: "https://github.com/shadcn.png",
      imageAlt: "Blog post image",
      date: "Mar 8, 2024",
      category: "Advanced",
      title: "Mastering React Server Components",
      description:
        "Deep dive into React Server Components and learn how they can improve your application's performance.",
      href: "#",
    },
    {
      image: "https://github.com/shadcn.png",
      imageAlt: "Blog post image",
      date: "Mar 5, 2024",
      category: "Insights",
      title: "The Future of Web Development in 2024",
      description:
        "Explore the latest trends and technologies shaping the future of web development this year.",
      href: "#",
    },
  ] as BlogPost[],
};

export function BlogSection1({ className }: { className?: string } = {}) {
  const { label, headline, description, posts } = defaultData;

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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.href || "#"}
              className="flex flex-col gap-4 group"
            >
              {post.image && (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  {post.date} · {post.category}
                </p>
                <h3 className="text-lg font-bold group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

