import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Navbar5Props {
  logo?: React.ReactNode;
  logoHref?: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  primaryButton: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function Navbar5({
  logo,
  logoHref = "/",
  links,
  primaryButton,
  secondaryButton,
  className,
}: Navbar5Props) {
  return (
    <nav className={cn("w-full border-b bg-background", className)}>
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          {logoHref ? (
            <Link href={logoHref} className="flex items-center">
              {logo || (
                <div className="size-8 rounded bg-foreground flex items-center justify-center">
                  <div className="size-4 border-l-2 border-background rotate-45" />
                </div>
              )}
            </Link>
          ) : (
            <div className="flex items-center">
              {logo || (
                <div className="size-8 rounded bg-foreground flex items-center justify-center">
                  <div className="size-4 border-l-2 border-background rotate-45" />
                </div>
              )}
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
            onClick={secondaryButton.onClick}
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
            onClick={primaryButton.onClick}
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

