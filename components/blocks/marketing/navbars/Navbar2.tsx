import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Navbar2Props {
  logo?: React.ReactNode;
  logoHref?: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  button: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function Navbar2({
  logo,
  logoHref = "/",
  links,
  button,
  className,
}: Navbar2Props) {
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

        {/* Button */}
        <div className="flex items-center ml-auto">
          <Button
            onClick={button.onClick}
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

