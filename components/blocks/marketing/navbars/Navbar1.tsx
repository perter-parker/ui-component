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
};

export function Navbar1({ className }: { className?: string } = {}) {
  const { logoHref, links, button } = defaultData;
  return (
    <nav className={cn("w-full border-b bg-background", className)}>
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={logoHref} className="flex items-center">
            <div className="size-8 rounded bg-foreground flex items-center justify-center">
              <div className="size-4 border-l-2 border-background rotate-45" />
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
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
        <div className="flex items-center">
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
    </nav>
  );
}

