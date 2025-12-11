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
  signInLink: {
    label: "Sign in",
    href: "/sign-in",
  },
  signUpButton: {
    label: "Sign up",
    href: "/sign-up",
  },
};

export function Navbar3({ className }: { className?: string } = {}) {
  const { logoHref, links, signInLink, signUpButton } = defaultData;
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

        {/* Links on the left */}
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

        {/* Sign In Link and Sign Up Button */}
        <div className="flex items-center gap-4">
          {signInLink && (
            <Link
              href={signInLink.href}
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              {signInLink.label}
            </Link>
          )}
          <Button
            asChild={!!signUpButton.href}
            className="w-full sm:w-auto"
          >
            {signUpButton.href ? (
              <Link href={signUpButton.href}>{signUpButton.label}</Link>
            ) : (
              signUpButton.label
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}

