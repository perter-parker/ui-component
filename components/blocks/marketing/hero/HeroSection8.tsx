import * as React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface HeroSection8Props {
  headline: string;
  description: string;
  rating?: number;
  avatars?: Array<{
    src?: string;
    alt?: string;
    fallback?: string;
  }>;
  socialProof?: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export function HeroSection8({
  headline,
  description,
  rating = 5,
  avatars,
  socialProof,
  primaryAction,
  className,
}: HeroSection8Props) {
  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          {description}
        </p>

        {primaryAction && (
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={primaryAction.onClick}
            asChild={!!primaryAction.href}
          >
            {primaryAction.href ? (
              <a href={primaryAction.href} className="flex items-center gap-2">
                {primaryAction.label}
                <ArrowRight className="size-4" />
              </a>
            ) : (
              <>
                {primaryAction.label}
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        )}

        {/* Social Proof: Avatars + Rating + Text */}
        {(avatars || rating || socialProof) && (
          <div className="flex items-center justify-center gap-3 mt-4">
            {avatars && avatars.length > 0 && (
              <div className="flex items-center -space-x-2">
                {avatars.map((avatar, index) => (
                  <Avatar key={index} className="border-2 border-background">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                    <AvatarFallback>{avatar.fallback || "U"}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-5",
                      i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    )}
                  />
                ))}
              </div>
            )}
            {socialProof && (
              <span className="text-sm text-muted-foreground">{socialProof}</span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

