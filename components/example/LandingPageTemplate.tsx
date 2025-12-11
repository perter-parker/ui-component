import * as React from "react";
import { Navbar1 } from "@/components/blocks/marketing/navbars/Navbar1";
import { HeroSection7 } from "@/components/blocks/marketing/hero/HeroSection7";
import { FeatureSection9 } from "@/components/blocks/marketing/feature/FeatureSection9";
import { FeatureSection3 } from "@/components/blocks/marketing/feature/FeatureSection3";
import { TestimonialSection4 } from "@/components/blocks/marketing/testimonials/TestimonialSection4";
import { PricingSection4 } from "@/components/blocks/marketing/pricing/PricingSection4";
import { FAQSection1 } from "@/components/blocks/marketing/faq/FAQSection1";
import { FooterSection2 } from "@/components/blocks/marketing/footers/FooterSection2";

export interface LandingPageTemplateProps {
  navbar: {
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
  };
  hero: {
    headline: string;
    description: string;
    primaryAction?: {
      label: string;
      onClick?: () => void;
      href?: string;
    };
    image?: string;
    imageAlt?: string;
  };
  feature9: {
    headline: string;
    description: string;
    features: Array<{
      icon?: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  feature3: {
    headline: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon?: React.ReactNode;
    }>;
    image?: string;
    imageAlt?: string;
  };
  testimonial: {
    headline: string;
    description: string;
    testimonials: Array<{
      text: string;
      author: {
        name: string;
        role: string;
        avatar?: string;
      };
    }>;
  };
  pricing: {
    headline: string;
    description: string;
    plans: Array<{
      name: string;
      description: string;
      monthlyPrice: number;
      annuallyPrice?: number;
      features: Array<{
        text: string;
        tooltip?: string;
      }>;
      featuresHeading?: string;
      buttonLabel: string;
      buttonOnClick?: () => void;
      buttonHref?: string;
      featured?: boolean;
    }>;
  };
  faq: {
    headline: string;
    description: string;
    descriptionLink?: {
      text: string;
      href: string;
    };
    questions: Array<{
      question: string;
      answer: string;
    }>;
    cta?: {
      headline: string;
      description: string;
      buttonLabel: string;
      buttonOnClick?: () => void;
      buttonHref?: string;
    };
  };
  footer: {
    logo?: React.ReactNode;
    logoHref?: string;
    links: Array<{
      label: string;
      href: string;
    }>;
    newsletter?: {
      placeholder?: string;
      buttonLabel?: string;
      onSubmit?: (email: string) => void;
    };
    copyright?: string;
    legalLinks?: Array<{
      label: string;
      href: string;
    }>;
  };
}

export function LandingPageTemplate({
  navbar,
  hero,
  feature9,
  feature3,
  testimonial,
  pricing,
  faq,
  footer,
}: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 />
      <main className="flex-1">
        <HeroSection7 />
        <FeatureSection9 {...feature9} />
        <FeatureSection3  />
        <TestimonialSection4  />
        <PricingSection4  />
        <FAQSection1 {...faq} />
      </main>
      <FooterSection2 />
    </div>
  );
}

