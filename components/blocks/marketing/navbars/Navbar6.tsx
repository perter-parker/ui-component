"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Component,
  Plug,
  Blocks,
  FileText,
  Palette,
} from "lucide-react";

const defaultData = {
  logoHref: "/",
  links: [
    {
      label: "Products",
      href: "/products",
      items: [
        {
          label: "Components",
          href: "/products/components",
          icon: <Component className="size-4" />,
          description: "Pixel-perfect shadcn/ui components for Figma",
        },
        {
          label: "Plugin",
          href: "/products/plugin",
          icon: <Plug className="size-4" />,
          description: "Go from Figma to shadcn/ui in seconds",
        },
        {
          label: "Blocks",
          href: "/products/blocks",
          icon: <Blocks className="size-4" />,
          description: "Top-quality blocks for Figma and React",
        },
        {
          label: "Templates",
          href: "/products/templates",
          icon: <FileText className="size-4" />,
          description: "Figma and React templates for shadcn/ui",
        },
        {
          label: "Themes",
          href: "/products/themes",
          icon: <Palette className="size-4" />,
          description: "Free shadcn/ui themes for your next project",
        },
      ],
    },
    { label: "Resources", href: "/resources" },
    { label: "Docs", href: "/docs" },
    { label: "Help", href: "/help" },
    { label: "Pricing", href: "/pricing" },
  ],
  primaryButton: {
    label: "Buy now",
    href: "/buy",
  },
  secondaryButton: {
    label: "Preview",
    href: "/preview",
  },
};

export function Navbar6({ className }: { className?: string } = {}) {
  const { logoHref, links, primaryButton, secondaryButton } = defaultData;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {links.map((link, index) => {
            if (link.items && link.items.length > 0) {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors outline-none">
                    {link.label}
                    <ChevronDown className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {link.items.map((item, itemIndex) => (
                      <DropdownMenuItem key={itemIndex} asChild>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 cursor-pointer"
                        >
                          {item.icon && (
                            <div className="mt-0.5">{item.icon}</div>
                          )}
                          <div className="flex flex-col">
                            <span className="font-medium">{item.label}</span>
                            {item.description && (
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
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

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {links.map((link, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.items && link.items.length > 0 && (
                    <div className="ml-4 flex flex-col gap-2">
                      {link.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  asChild={!!secondaryButton.href}
                  className="w-full"
                >
                  {secondaryButton.href ? (
                    <Link href={secondaryButton.href}>
                      {secondaryButton.label}
                    </Link>
                  ) : (
                    secondaryButton.label
                  )}
                </Button>
                <Button
                  asChild={!!primaryButton.href}
                  className="w-full"
                >
                  {primaryButton.href ? (
                    <Link href={primaryButton.href}>
                      {primaryButton.label}
                    </Link>
                  ) : (
                    primaryButton.label
                  )}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

