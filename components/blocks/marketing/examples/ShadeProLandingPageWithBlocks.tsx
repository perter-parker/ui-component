"use client";

import * as React from "react";
import { Navbar1 } from "@/components/blocks/marketing/navbars/Navbar1";
import { HeroSection1 } from "@/components/blocks/marketing/hero/HeroSection1";
import { FeatureSection10 } from "@/components/blocks/marketing/feature/FeatureSection10";
import { TestimonialSection4 } from "@/components/blocks/marketing/testimonials/TestimonialSection4";
import { TeamSection1 } from "@/components/blocks/marketing/teams/TeamSection1";
import { StatSection4 } from "@/components/blocks/marketing/stats/StatSection4";
import { FeatureSection9 } from "@/components/blocks/marketing/feature/FeatureSection9";
import { CTASection1 } from "@/components/blocks/marketing/cta/CTASection1";
import { GallerySection9 } from "@/components/blocks/marketing/gallerys/GallerySection9";
import { FooterSection2 } from "@/components/blocks/marketing/footers/FooterSection2";
import { cn } from "@/lib/utils";

/**
 * Shade Pro Landing Page using only existing block components
 * 
 * This is a comparison example showing how to build a landing page
 * using only the existing block components from @/components/blocks/marketing
 * without creating custom components.
 * 
 * Compare this with ShadeProLandingPage.tsx which uses custom components
 * for sections that don't match existing blocks exactly.
 */
export function ShadeProLandingPageWithBlocks() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Using Navbar1 as-is */}
      <Navbar1 />

      {/* Hero Section - Using HeroSection1 as-is */}
      <HeroSection1 />

      {/* Services Section - Using FeatureSection10 as-is */}
      <FeatureSection10 />

      {/* Testimonial Section - Using TestimonialSection4 as-is */}
      <TestimonialSection4 />

      {/* About Section - Using TeamSection1 as-is */}
      <TeamSection1 />

      {/* Statistics Section - Using StatSection4 as-is */}
      <StatSection4 />

      {/* Why Choose Us Section - Using FeatureSection9 as-is */}
      <FeatureSection9 />

      {/* Mid-page CTA - Using CTASection1 with custom background */}
      <CTASection1 className="bg-blue-600" />

      {/* Portfolio Section - Using GallerySection9 as-is */}
      <GallerySection9 />

      {/* Full-width Testimonial - Using TestimonialSection4 with dark background */}
      <div className="bg-blue-600">
        <TestimonialSection4 className="text-white [&_*]:text-white [&_blockquote]:text-white [&_p]:text-white/80" />
      </div>

      {/* Bottom CTA - Using CTASection1 with custom background */}
      <CTASection1 className="bg-blue-600" />

      {/* Footer - Using FooterSection2 with dark background */}
      <FooterSection2 className="bg-slate-900 text-white border-t-0 [&_*]:text-white [&_a]:text-gray-400 [&_a:hover]:text-white [&_input]:bg-white/10 [&_input]:border-white/20 [&_input]:text-white [&_input::placeholder]:text-white/50" />
    </div>
  );
}

