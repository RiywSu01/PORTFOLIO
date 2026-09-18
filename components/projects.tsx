"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { LayoutGrid, Rows3 } from "lucide-react";

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 border-b border-[#2B2A2A]/10 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FEB05D]" />
              <span className="text-xs uppercase tracking-widest font-mono font-semibold text-[#2B2A2A]/60">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B2A2A]">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-[#2B2A2A]/70 mt-2 max-w-2xl leading-relaxed">
              Production systems, distributed architectures, and interactive web experiences built with modern engineering standards.
            </p>
          </div>

          {/* View Mode Switcher (Showcase vs Grid) */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-[#FAF8F8] border border-[#2B2A2A]/12 shadow-2xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("showcase")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                viewMode === "showcase"
                  ? "bg-[#2B2A2A] text-white shadow-xs"
                  : "text-[#2B2A2A]/60 hover:text-[#2B2A2A] hover:bg-[#2B2A2A]/5"
              }`}
              title="Wide showcase layout with expansive screenshots"
            >
              <Rows3 className="w-3.5 h-3.5" />
              <span>Showcase</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#2B2A2A] text-white shadow-xs"
                  : "text-[#2B2A2A]/60 hover:text-[#2B2A2A] hover:bg-[#2B2A2A]/5"
              }`}
              title="Two-column grid layout"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Projects List: Showcase or Grid */}
        {viewMode === "showcase" ? (
          <div className="space-y-10 sm:space-y-14">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode="showcase"
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode="grid"
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

