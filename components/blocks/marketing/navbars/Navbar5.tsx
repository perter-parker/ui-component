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
  primaryButton: {
    label: "Get started",
    href: "/get-started",
  },
  secondaryButton: {
    label: "Login",
    href: "/login",
  },
};

export function Navbar5({ className }: { className?: string } = {}) {
  const { logoHref, links, primaryButton, secondaryButton } = defaultData;
  return (
    <nav className={cn("w-full border-b bg-background", className)}>
      <div className="container flex h-16 items-center justify-between px-4">
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

        {/* Two Buttons */}
        <div className="flex items-center gap-3 ml-auto">
          <Button
            variant="outline"
            asChild={!!secondaryButton.href}
            className="w-full sm:w-auto"
          >
            {secondaryButton.href ? (
              <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
            ) : (
              secondaryButton.label
            )}
          </Button>
          <Button
            asChild={!!primaryButton.href}
            className="w-full sm:w-auto"
          >
            {primaryButton.href ? (
              <Link href={primaryButton.href}>{primaryButton.label}</Link>
            ) : (
              primaryButton.label
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}

