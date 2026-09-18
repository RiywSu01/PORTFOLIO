"use client";

import React from "react";
import { animate } from "animejs";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiNginx,
  SiClerk,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

interface TechItem {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Database & DevOps" | "Testing & Tools";
  color: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const TECHNOLOGIES: TechItem[] = [
  { name: "TypeScript", category: "Languages", color: "#3178C6", icon: SiTypescript },
  { name: "JavaScript", category: "Languages", color: "#F7DF1E", icon: SiJavascript },
  { name: "HTML/CSS", category: "Languages", color: "#E34F26", icon: SiHtml5 },
  { name: "SQL", category: "Languages", color: "#336791", icon: TbSql },
  { name: "Python", category: "Languages", color: "#3776AB", icon: SiPython },
  { name: "React", category: "Frontend", color: "#087ea4", icon: SiReact },
  { name: "Next.js", category: "Frontend", color: "#000000", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", icon: SiTailwindcss },
  { name: "Node.js", category: "Backend", color: "#5FA04E", icon: SiNodedotjs },
  { name: "ExpressJS", category: "Backend", color: "#333333", icon: SiExpress },
  { name: "NestJS", category: "Backend", color: "#E0234E", icon: SiNestjs },
  { name: "PostgreSQL", category: "Database & DevOps", color: "#4169E1", icon: SiPostgresql },
  { name: "MySQL", category: "Database & DevOps", color: "#4479A1", icon: SiMysql },
  { name: "Prisma ORM", category: "Database & DevOps", color: "#2D3748", icon: SiPrisma },
  { name: "Redis", category: "Database & DevOps", color: "#DC382D", icon: SiRedis },
  { name: "Docker", category: "Database & DevOps", color: "#2496ED", icon: SiDocker },
  { name: "Nginx", category: "Database & DevOps", color: "#009639", icon: SiNginx },
  { name: "Clerk", category: "Backend", color: "#6C47FF", icon: SiClerk },
  { name: "Jest", category: "Testing & Tools", color: "#C21325", icon: SiJest },
  { name: "Supertest", category: "Testing & Tools", color: "#E33332", icon: SiTestinglibrary },
  { name: "Git", category: "Testing & Tools", color: "#F05032", icon: SiGit },
  { name: "GitHub", category: "Testing & Tools", color: "#181717", icon: SiGithub },
  { name: "Figma", category: "Frontend", color: "#F24E1E", icon: SiFigma },
];

export const TechStack: React.FC = () => {
  // anime.js smooth entrance and hover dynamics
  const handleBadgeHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    animate(target, {
      scale: 1.08,
      translateY: -4,
      duration: 300,
      ease: "outElastic(1, .6)",
    });

    // Subtly soften sibling badges
    const parent = target.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter((el) => el !== target);
      animate(siblings, {
        opacity: 0.55,
        duration: 250,
        ease: "outQuad",
      });
    }
  };

  const handleBadgeLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    animate(target, {
      scale: 1,
      translateY: 0,
      duration: 300,
      ease: "outQuad",
    });

    const parent = target.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter((el) => el !== target);
      animate(siblings, {
        opacity: 1,
        duration: 250,
        ease: "outQuad",
      });
    }
  };

  // Split into 2 rows for balanced infinite marquee
  const row1 = TECHNOLOGIES.slice(0, 12);
  const row2 = TECHNOLOGIES.slice(12);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#F5F2F2] border-y border-[#2B2A2A]/8 relative overflow-hidden">
      {/* Decorative gradient edges for marquee */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#F5F2F2] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#F5F2F2] to-transparent z-10" />

      <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7ACD]" />
          <span className="text-xs uppercase tracking-widest font-mono font-semibold text-[#2B2A2A]/60">
            TECHNICAL ARSENAL
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B2A2A]">
          Technologies &amp; Core Stack
        </h2>
        <p className="text-xs sm:text-sm text-[#2B2A2A]/60 mt-1 max-w-lg mx-auto">
          Production frameworks, relational databases, cloud microservices, and testing tooling.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="animate-marquee flex gap-3.5 items-center">
          {[...row1, ...row1, ...row1].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-row1-${index}`}
                onMouseEnter={handleBadgeHover}
                onMouseLeave={handleBadgeLeave}
                className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#2B2A2A]/10 text-[#2B2A2A] shadow-2xs text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors hover:border-[#2B2A2A]/30 hover:shadow-md"
              >
                <span
                  className="w-5 h-5 flex items-center justify-center text-base transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-medium text-[#2B2A2A]">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-reverse flex gap-3.5 items-center">
          {[...row2, ...row2, ...row2].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-row2-${index}`}
                onMouseEnter={handleBadgeHover}
                onMouseLeave={handleBadgeLeave}
                className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#2B2A2A]/10 text-[#2B2A2A] shadow-2xs text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors hover:border-[#2B2A2A]/30 hover:shadow-md"
              >
                <span
                  className="w-5 h-5 flex items-center justify-center text-base transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-medium text-[#2B2A2A]">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
