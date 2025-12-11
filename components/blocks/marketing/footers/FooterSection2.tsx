"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const defaultData = {
  logoHref: "/",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  newsletter: {
    placeholder: "Your email",
    buttonLabel: "Subscribe",
  },
  copyright: "Copyright © 2025 shadcndesign.com. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
  ],
};

export function FooterSection2({ className }: { className?: string } = {}) {
  const { logoHref, links, newsletter, copyright, legalLinks } = defaultData;
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  return (
    <footer className={cn("w-full border-t bg-background", className)}>
      <div className="container py-12 md:py-16">
        {/* Top Section */}
        <div className="flex flex-col gap-8 lx:justify-space-between md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={logoHref} className="flex items-center">
              <div className="size-8 rounded bg-foreground flex items-center justify-center">
                <div className="size-4 border-l-2 border-background rotate-45" />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Newsletter Subscription */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <Input
              type="email"
              placeholder={newsletter.placeholder || "Your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto sm:min-w-[200px]"
              required
            />
            <Button
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap"
            >
              {newsletter.buttonLabel || "Subscribe"}
            </Button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {copyright}
          </p>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

