import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultData = {
  logoHref: "/",
  links: [
    { label: "Products", href: "/products" },
    { label: "Use cases", href: "/use-cases" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
  button: {
    label: "Get started",
    href: "/get-started",
  },
  maxWidth: "6xl" as const,
};

export function Navbar4({ className }: { className?: string } = {}) {
  const { logoHref, links, button, maxWidth } = defaultData;
  const maxWidthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  }[maxWidth];

  return (
    <nav className={cn("w-full bg-background", className)}>
      <div className="container flex h-16 items-center justify-center px-4">
        <div
          className={cn(
            "w-full rounded-lg border bg-background shadow-sm flex h-14 items-center justify-between px-6",
            maxWidthClass
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            {logoHref ? (
              <Link href={logoHref} className="flex items-center">
                <div className="size-8 rounded bg-foreground flex items-center justify-center">
                  <div className="size-4 border-l-2 border-background rotate-45" />
                </div>
              </Link>
            ) : (
              <div className="flex items-center">
                <div className="size-8 rounded bg-foreground flex items-center justify-center">
                  <div className="size-4 border-l-2 border-background rotate-45" />
                </div>
              </div>
            )}
          </div>

          {/* Centered Links */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="flex items-center ml-auto">
            <Button
              asChild={!!button.href}
              className="w-full sm:w-auto"
            >
              {button.href ? (
                <Link href={button.href}>{button.label}</Link>
              ) : (
                button.label
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

