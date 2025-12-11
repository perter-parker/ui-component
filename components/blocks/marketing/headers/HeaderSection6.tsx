import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const defaultData = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Header Sections", href: "#" },
    { label: "Header Section Six" },
  ] as BreadcrumbItem[],
  label: "Header section",
  headline: "Short engaging headline",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
};

export function HeaderSection6({ className }: { className?: string } = {}) {
  const { breadcrumbs, label, headline, description } = defaultData;

  return (
    <section className={cn("w-full bg-foreground text-background py-24 md:py-32", className)}>
      <div className="container flex flex-col gap-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-background/70">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="size-4" />
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-sm text-background/70">{label}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="text-lg text-background/80 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

