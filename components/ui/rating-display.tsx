import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingDisplayProps {
  rating: number;
  reviews: number;
  className?: string;
}

export function RatingDisplay({
  rating,
  reviews,
  className,
}: RatingDisplayProps) {
  return (
    <div className={cn("flex items-center gap-1 text-sm", className)}>
      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
      <span className="font-semibold">{rating}</span>
      <span className="text-muted-foreground">({reviews})</span>
    </div>
  );
}

