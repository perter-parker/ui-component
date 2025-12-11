"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultData = {
  text: "New update · Pro blocks are now available in shadcn/ui kit for Figma!",
  linkText: ">>>",
  linkHref: "#",
};

export function BannerSection1({ className }: { className?: string } = {}) {
  const [isVisible, setIsVisible] = React.useState(true);
  const { text, linkText, linkHref } = defaultData;

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn("w-full bg-foreground text-background", className)}>
      <div className="container flex items-center justify-center gap-4 px-4 py-3">
        <p className="text-sm text-center">
          {text}{" "}
          {linkHref && (
            <Link
              href={linkHref}
              className="inline-flex items-center gap-1 underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {linkText}
            </Link>
          )}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto shrink-0 p-1 hover:opacity-80 transition-opacity"
          aria-label="Close banner"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}

