"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";

const defaultData = {
  label: "Contact Section",
  headline: "Get in touch",
  description:
    "Write one or two welcoming sentences that encourage contact. Include your response time commitment and highlight your team's readiness to help.",
  privacyPolicyHref: "/privacy",
};

export function ContactSection1({ className }: { className?: string } = {}) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    agreeToPrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const { label, headline, description, privacyPolicyHref } = defaultData;

  return (
    <section className={cn("container py-24 md:py-32", className)}>
      <div className="flex flex-col gap-12 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-muted-foreground">{label}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={6}
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="privacy"
              checked={formData.agreeToPrivacy}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, agreeToPrivacy: checked === true })
              }
              required
            />
            <Label
              htmlFor="privacy"
              className="text-sm font-normal cursor-pointer"
            >
              By selecting this you agree to our{" "}
              <Link
                href={privacyPolicyHref}
                className="underline underline-offset-4 hover:text-foreground/80"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}

