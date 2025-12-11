"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar1 } from "@/components/blocks/marketing/navbars/Navbar1";
import { HeroSection1 } from "@/components/blocks/marketing/hero/HeroSection1";
import { FeatureSection10 } from "@/components/blocks/marketing/feature/FeatureSection10";
import { TeamSection1 } from "@/components/blocks/marketing/teams/TeamSection1";
import { StatSection4 } from "@/components/blocks/marketing/stats/StatSection4";
import { FeatureSection9 } from "@/components/blocks/marketing/feature/FeatureSection9";
import { CTASection1 } from "@/components/blocks/marketing/cta/CTASection1";
import {
  Palette,
  Monitor,
  FileText,
  Shield,
  Heart,
  Leaf,
  Settings,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Services Section - FeatureSection10 기반이지만 컬러 카드 스타일이 필요하므로 커스텀
function ServicesSection() {
  const services = [
    {
      icon: <Palette className="size-6" />,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Read More",
      color: "bg-green-500",
    },
    {
      icon: <Monitor className="size-6" />,
      title: "Web Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Read More",
      color: "bg-blue-500",
    },
    {
      icon: <FileText className="size-6" />,
      title: "Content Writing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Read More",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-red-500">Our Services</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            We provide great services for our customers based on their needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-6 p-8 rounded-lg text-white",
                service.color
              )}
            >
              <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-white/90">{service.description}</p>
              <button className="mt-auto w-fit px-6 py-2 rounded-lg bg-white text-foreground font-medium hover:opacity-90 transition-opacity">
                {service.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Single Testimonial Section - TestimonialSection4 기반이지만 단일 추천이므로 커스텀
function SingleTestimonialSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto text-center">
        <blockquote className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          "I'm truly thankful for all the work. I'd recommend this product to
          beginners and advanced users."
        </blockquote>
        <div className="flex flex-col items-center gap-4">
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-1">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-muted-foreground">CEO, Company Name</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Portfolio Section - GallerySection9 기반이지만 그리드 레이아웃이 필요하므로 커스텀
function PortfolioSection() {
  const works = [
    {
      image: "https://github.com/shadcn.png",
      title: "Product Design",
      category: "Brand Identity",
    },
    {
      image: "https://github.com/shadcn.png",
      title: "Snack Box Design",
      category: "Packaging",
    },
    {
      image: "https://github.com/shadcn.png",
      title: "Website Design",
      category: "Digital Product",
    },
    {
      image: "https://github.com/shadcn.png",
      title: "Magazine Cover Design",
      category: "Print Design",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-red-500">Our Works</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our works describe why we are the best in the business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="text-sm text-muted-foreground">{work.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

// Full-width Testimonial Section - TestimonialSection4 기반이지만 다크 배경과 단일 추천이므로 커스텀
function FullWidthTestimonialSection() {
  return (
    <section className="w-full bg-blue-600 text-white py-24 md:py-32">
      <div className="container flex flex-col items-center gap-8 max-w-3xl mx-auto text-center">
        <blockquote className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          "I'm truly thankful for all the work. I'd recommend this product to
          beginners and advanced users."
        </blockquote>
        <div className="flex flex-col items-center gap-4">
          <Avatar className="size-16 border-2 border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-1">
            <p className="text-lg font-semibold">Anna Smith</p>
            <p className="text-sm text-white/80">CEO, Company Name</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Footer - FooterSection2 기반이지만 더 많은 컬럼과 다크 배경이 필요하므로 커스텀
function EnhancedFooter() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-2xl font-bold">Shade Pro</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="#"
                className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="#"
                className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Services</h4>
            <nav className="flex flex-col gap-2">
              {["Graphic Design", "Web Management", "Content Writing", "SEO Marketing"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Company</h4>
            <nav className="flex flex-col gap-2">
              {["About Us", "Contact Us", "Careers", "Blog"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Support</h4>
            <nav className="flex flex-col gap-2">
              {["Help Center", "Terms of Service", "Legal", "Privacy Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-sm text-gray-400">123 Main Street, Anytown, USA</p>
              <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">info@shadepro.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2023 Shade Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Custom Navbar - Navbar1 기반이지만 로고 텍스트와 링크가 다르므로 커스텀
function ShadeProNavbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Shade Pro
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Services", "Portfolio", "About", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href="#"
                className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="#">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
}

// Custom Hero Section - HeroSection1 기반이지만 원형 이미지와 보라색 버튼이 필요하므로 커스텀
function ShadeProHero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Shift your business fast with Shade Pro.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We provide great services for our customers based on their needs.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700"
            asChild
          >
            <Link href="#">Get Started</Link>
          </Button>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative w-full aspect-square overflow-hidden rounded-full bg-muted border-2 border-dashed border-muted-foreground/30 p-2">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="https://github.com/shadcn.png"
                alt="Shade Pro hero"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom About Section - TeamSection1 기반이지만 레이블, 제목, 레이아웃이 다르므로 커스텀
function AboutSection() {
  const members = [
    {
      name: "Team Member",
      role: "Role",
      avatar: "https://github.com/shadcn.png",
    },
    {
      name: "Team Member",
      role: "Role",
      avatar: "https://github.com/shadcn.png",
    },
    {
      name: "Team Member",
      role: "Role",
      avatar: "https://github.com/shadcn.png",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-red-500">About Us</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            We know how everything works and give your business a kick over and
            over again.
          </h2>
        </div>

        <div className="flex justify-center gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <div className="relative size-40 rounded-full overflow-hidden bg-muted">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}

// Custom Stats Section - StatSection4 기반이지만 헤더 없이 간단한 레이아웃 필요
function CustomStatsSection() {
  const stats = [
    {
      value: "1M+",
      description: "Customers are satisfied with our work and services.",
    },
    {
      value: "92%",
      description: "Customers are happy with our services.",
    },
    {
      value: "4.9/5.0",
      description: "Rating from our customers.",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-4 text-center">
            <p className="text-5xl font-bold">{stat.value}</p>
            <p className="text-muted-foreground">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Why Choose Us Section - FeatureSection9 기반이지만 레이블과 제목이 다르므로 커스텀
function WhyChooseUsSection() {
  const features = [
    {
      icon: <Shield className="size-6 text-purple-600" />,
      title: "Understand project brief",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <Heart className="size-6 text-red-500" />,
      title: "Dedicated team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <Leaf className="size-6 text-green-500" />,
      title: "Easy to use interface",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <Settings className="size-6 text-gray-600" />,
      title: "Powerful product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm text-red-500">Why Choose Us</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            People choose us because we serve the best for everyone
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border bg-card"
            >
              <div className="size-12 rounded-lg bg-muted flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom CTA Section - CTASection1 기반이지만 좌우 레이아웃이 필요하므로 커스텀
function CustomCTASection() {
  return (
    <section className="w-full bg-blue-600 text-white py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to launch your next project?
            </h2>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-white/90 w-full md:w-auto"
            asChild
          >
            <Link href="#">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ShadeProLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <ShadeProNavbar />

      {/* Hero Section */}
      <ShadeProHero />

      {/* Services Section */}
      <ServicesSection />

      {/* Single Testimonial */}
      <SingleTestimonialSection />

      {/* About Section */}
      <AboutSection />

      {/* Statistics Section */}
      <CustomStatsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Mid-page CTA */}
      <CustomCTASection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Full-width Testimonial */}
      <FullWidthTestimonialSection />

      {/* Bottom CTA */}
      <CustomCTASection />

      {/* Footer */}
      <EnhancedFooter />
    </div>
  );
}

