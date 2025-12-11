import * as React from "react";
import { LandingPageTemplate } from "@/components/blocks/marketing/examples/LandingPageTemplate";
import { Rocket, Zap, Shield, Sparkles, Check, Users, BarChart, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <LandingPageTemplate
      navbar={{
        logoHref: "/",
        links: [
          { label: "Home", href: "#" },
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
        ],
        button: {
          label: "Get Started",
          href: "#pricing",
        },
      }}
      hero={{
        headline: "Build amazing products faster with our modern UI components",
        description:
          "Create beautiful, accessible, and responsive user interfaces with our comprehensive component library. Save time and focus on what matters most.",
        primaryAction: {
          label: "Get Started",
          href: "#pricing",
        },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        imageAlt: "Modern UI components dashboard",
      }}
      feature9={{
        headline: "Everything you need to build modern applications",
        description:
          "Our component library provides all the building blocks you need to create stunning user interfaces.",
        features: [
          {
            icon: <Rocket className="size-6" />,
            title: "Fast Development",
            description:
              "Ship features faster with pre-built, production-ready components that follow best practices.",
          },
          {
            icon: <Zap className="size-6" />,
            title: "Highly Customizable",
            description:
              "Every component is fully customizable to match your brand and design requirements.",
          },
          {
            icon: <Shield className="size-6" />,
            title: "Accessible by Default",
            description:
              "Built with accessibility in mind, ensuring your apps work for everyone.",
          },
          {
            icon: <Sparkles className="size-6" />,
            title: "Beautiful Design",
            description:
              "Carefully crafted components that look great out of the box and are easy to customize.",
          },
        ],
      }}
      feature3={{
        headline: "Why choose our component library?",
        description:
          "We've built a comprehensive set of components that help you build better products faster.",
        features: [
          {
            icon: <Check className="size-5" />,
            title: "Production Ready",
            description:
              "All components are tested and used in production by thousands of developers worldwide.",
          },
          {
            icon: <Users className="size-5" />,
            title: "Active Community",
            description:
              "Join a thriving community of developers sharing components, tips, and best practices.",
          },
          {
            icon: <BarChart className="size-5" />,
            title: "Regular Updates",
            description:
              "We continuously improve and add new components based on community feedback.",
          },
          {
            icon: <Globe className="size-5" />,
            title: "TypeScript Support",
            description:
              "Full TypeScript support with comprehensive type definitions for better developer experience.",
          },
        ],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=800&fit=crop",
        imageAlt: "Developer working on modern UI",
      }}
      testimonial={{
        headline: "Trusted by developers worldwide",
        description:
          "See what developers are saying about our component library and how it's helping them build better products.",
        testimonials: [
          {
            text: "This component library has completely transformed our development workflow. We've cut our development time in half while improving the quality of our UI.",
            author: {
              name: "Sarah Johnson",
              role: "Lead Developer at TechCorp",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            },
          },
          {
            text: "The components are beautifully designed and incredibly easy to customize. Our design team loves working with them, and our users love the results.",
            author: {
              name: "Michael Chen",
              role: "Product Designer at StartupX",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            },
          },
          {
            text: "Best investment we've made for our frontend. The documentation is excellent, and the community support is outstanding.",
            author: {
              name: "Emily Rodriguez",
              role: "CTO at InnovateLab",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            },
          },
        ],
      }}
      pricing={{
        headline: "Simple, transparent pricing",
        description:
          "Choose the plan that's right for you. All plans include access to our component library and community support.",
        plans: [
          {
            name: "Starter",
            description: "Perfect for personal projects and small teams",
            monthlyPrice: 29,
            annuallyPrice: 24,
            featuresHeading: "What's included:",
            features: [
              { text: "Access to all components" },
              { text: "Community support" },
              { text: "Regular updates" },
              { text: "Basic documentation" },
            ],
            buttonLabel: "Get Started",
            buttonOnClick: () => console.log("Starter plan selected"),
          },
          {
            name: "Professional",
            description: "Ideal for growing teams and businesses",
            monthlyPrice: 79,
            annuallyPrice: 65,
            featured: true,
            featuresHeading: "Everything in Starter, plus:",
            features: [
              { text: "Priority support" },
              { text: "Advanced components" },
              { text: "Custom themes" },
              { text: "Design system templates" },
              { text: "Team collaboration tools" },
            ],
            buttonLabel: "Get Started",
            buttonOnClick: () => console.log("Professional plan selected"),
          },
          {
            name: "Enterprise",
            description: "For large organizations with advanced needs",
            monthlyPrice: 199,
            annuallyPrice: 159,
            featuresHeading: "Everything in Professional, plus:",
            features: [
              { text: "Dedicated support" },
              { text: "Custom component development" },
              { text: "On-premise deployment" },
              { text: "SLA guarantee" },
              { text: "Training and onboarding" },
            ],
            buttonLabel: "Contact Sales",
            buttonOnClick: () => console.log("Enterprise plan selected"),
          },
        ],
      }}
      faq={{
        headline: "Frequently asked questions",
        description:
          "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for?",
        descriptionLink: {
          text: "Contact us",
          href: "/contact",
        },
        questions: [
          {
            question: "What is included in the component library?",
            answer:
              "Our component library includes over 100 production-ready components, including buttons, forms, navigation, modals, data tables, and more. All components are fully customizable and come with comprehensive documentation.",
          },
          {
            question: "Do I need to know React to use these components?",
            answer:
              "Yes, our components are built with React and TypeScript. Basic knowledge of React is recommended, but our documentation includes examples and guides to help you get started quickly.",
          },
          {
            question: "Can I customize the components to match my brand?",
            answer:
              "Absolutely! All components are fully customizable. You can modify colors, spacing, typography, and more using CSS variables or by directly editing the component code.",
          },
          {
            question: "Is there a free trial available?",
            answer:
              "Yes, we offer a 14-day free trial for all plans. No credit card required. You can explore all features and components during the trial period.",
          },
          {
            question: "What kind of support do you provide?",
            answer:
              "All plans include community support through our Discord server. Professional and Enterprise plans include priority email support, and Enterprise includes dedicated support with SLA guarantees.",
          },
          {
            question: "Can I use these components in commercial projects?",
            answer:
              "Yes, all plans allow commercial use. The components are licensed for use in your projects, whether personal or commercial. See our Terms of Service for full details.",
          },
        ],
        cta: {
          headline: "Still have questions?",
          description: "Have questions or need assistance? Our team is here to help!",
          buttonLabel: "Contact us",
          buttonHref: "/contact",
        },
      }}
      footer={{
        logoHref: "/",
        links: [
          { label: "Home", href: "/" },
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
        newsletter: {
          placeholder: "Your email",
          buttonLabel: "Subscribe",
          onSubmit: (email) => {
            console.log("Newsletter subscription:", email);
            alert(`Thank you for subscribing with ${email}!`);
          },
        },
        copyright: "Copyright © 2025 shadcndesign.com. All rights reserved.",
        legalLinks: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookies Settings", href: "/cookies" },
        ],
      }}
    />
  );
}

