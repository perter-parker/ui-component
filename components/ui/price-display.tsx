import * as React from "react";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  discount?: number;
  className?: string;
  showOriginalPrice?: boolean;
}

const formatPrice = (price: number) =>
  price.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

export function PriceDisplay({
  price,
  discount = 0,
  className,
  showOriginalPrice = false,
}: PriceDisplayProps) {
  const finalPrice = Math.round(price * (1 - discount / 100));

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      {discount > 0 && (
        <span className="text-lg font-bold text-foreground">
          {discount}% {formatPrice(finalPrice)}원
        </span>
      )}
      {!discount && (
        <span className="text-lg font-bold text-foreground">
          {formatPrice(price)}원
        </span>
      )}
      {showOriginalPrice && discount > 0 && (
        <span className="text-sm text-muted-foreground line-through">
          {formatPrice(price)}원
        </span>
      )}
    </div>
  );
}

