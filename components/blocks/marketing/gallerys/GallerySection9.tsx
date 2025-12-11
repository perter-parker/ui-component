"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultData = {
  label: "Gallery section",
  headline: "Showcase your product with a gallery of images",
  description:
    "This section is a great way to showcase your product with a gallery of images. You can use this section to showcase your product in a more engaging way.",
  images: [
    {
      src: "https://github.com/shadcn.png",
      alt: "Gallery image 1",
    },
    {
      src: "https://github.com/shadcn.png",
      alt: "Gallery image 2",
    },
    {
      src: "https://github.com/shadcn.png",
      alt: "Gallery image 3",
    },
  ],
};

export function GallerySection9({ className }: { className?: string } = {}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { label, headline, description, images } = defaultData;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">{label}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === currentIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 80vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="size-4" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "size-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-foreground"
                    : "bg-muted-foreground/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

