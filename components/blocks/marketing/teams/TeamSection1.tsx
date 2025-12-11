import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

const defaultData = {
  label: "Team section",
  headline: "Meet our team",
  description:
    "Add a concise value statement that introduces your team and highlights their expertise. Focus on creating trust and connection while keeping it under 2 lines. Align with your team member profiles.",
  members: [
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
    {
      name: "Team Member",
      role: "Role",
      avatar: "https://github.com/shadcn.png",
    },
  ] as TeamMember[],
};

export function TeamSection1({ className }: { className?: string } = {}) {
  const { label, headline, description, members } = defaultData;

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

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center text-center"
            >
              <div className="relative size-24 rounded-full overflow-hidden bg-muted">
                {member.avatar && (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

