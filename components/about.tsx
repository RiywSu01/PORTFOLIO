"use client";

import React from "react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 relative bg-[#FAF8F8]/60 border-t border-[#2B2A2A]/8 overflow-hidden"
    >
      {/* Soft ambient gradient aura in background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-tr from-[#FEB05D]/10 via-transparent to-[#5A7ACD]/10 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5A7ACD]" />
            <span className="text-xs uppercase tracking-widest font-mono font-semibold text-[#2B2A2A]/60">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2A2A] tracking-tight">
            About Me
          </h2>
        </div>

        {/* Statement Card */}
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-[#2B2A2A]/10 p-7 sm:p-10 lg:p-12 shadow-xs hover:shadow-md hover:border-[#2B2A2A]/20 transition-all duration-300 overflow-hidden">
          {/* Subtle ambient accent glow inside card */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#FEB05D]/12 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#5A7ACD]/12 blur-2xl" />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-[19px] text-[#2B2A2A]/90 font-medium leading-relaxed">
              An ICT undergraduate at Mahidol University with hands-on experience developing full-stack web applications and backend systems using TypeScript, JavaScript, React, Next.js, NestJS, PostgreSQL, MySQL, Prisma, and Docker. Experienced in building RESTful APIs, relational databases, authentication and role-based authorization, API security, caching, rate limiting, automated testing, and third-party API integrations.
            </p>

            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#FEB05D] to-[#5A7ACD]" />

            <p className="text-sm sm:text-base lg:text-[17px] text-[#2B2A2A]/75 leading-relaxed">
              Developed AI-powered and data-driven applications integrating services such as Google Gemini and FatSecret, with a strong interest in building secure, maintainable, and user-focused software solutions, who collaborates effectively in team environments and is eager to learn and grow in a professional setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
