"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Eye, Check, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import { ProjectModal } from "@/components/project-modal";

interface ProjectCardProps {
  project: Project;
  viewMode?: "showcase" | "grid";
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  viewMode = "showcase",
  index = 0,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAlternate = index % 2 === 1;

  // Grid Mode: Compact 2-column card with responsive aspect ratio
  if (viewMode === "grid") {
    return (
      <>
        <div
          onClick={() => setIsModalOpen(true)}
          className="group relative flex flex-col justify-between rounded-2xl border border-[#2B2A2A]/12 bg-[#FAF8F8] p-5 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-[#2B2A2A]/25 hover:-translate-y-1 cursor-pointer overflow-hidden"
        >
          {/* Subtle corner highlight glow */}
          <div
            className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
            style={{ backgroundColor: project.accentColor }}
          />

          <div>
            {/* Browser Mockup Container */}
            <div className="rounded-xl border border-[#2B2A2A]/10 bg-white overflow-hidden shadow-2xs transition-all duration-300 group-hover:border-[#2B2A2A]/20">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#FAF8F8] border-b border-[#2B2A2A]/8">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex-1 mx-2 max-w-[200px] text-center bg-[#ECE8E8]/70 border border-[#2B2A2A]/5 rounded-md px-2 py-0.5 text-[10px] font-mono text-[#2B2A2A]/70 truncate">
                  {(project.liveUrl || project.githubUrl).replace("https://", "")}
                </div>

                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#2B2A2A]/50 hover:text-[#2B2A2A] transition-colors p-1 rounded hover:bg-[#2B2A2A]/5"
                  title={project.liveUrl ? "Visit Live Website" : "View on GitHub"}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Project Image Carousel: Responsive aspect-[16/10] */}
              <div className="p-2 bg-white">
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                  accentColor={project.accentColor}
                  className="w-full aspect-[16/10] min-h-[200px] rounded-lg"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-[#2B2A2A] group-hover:text-[#2B2A2A] transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-[#2B2A2A]/40 group-hover:text-[#FEB05D] transition-colors font-medium flex items-center gap-1">
                  Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#2B2A2A]/70 line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="subtle" className="text-[11px] font-normal">
                    {tech}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline" className="text-[11px] font-normal text-[#2B2A2A]/60">
                    +{project.tags.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-5 pt-4 border-t border-[#2B2A2A]/8 flex items-center justify-between gap-2">
            <button
              type="button"
              className="text-xs font-semibold text-[#2B2A2A] hover:text-[#5A7ACD] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View More Details</span>
            </button>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-bold text-[#141418] bg-[#FEB05D] hover:bg-[#fca03d] border border-[#FEB05D]/70 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all active:scale-95 shadow-2xs"
                  title="Visit deployed web application"
                >
                  <ExternalLink className="w-3 h-3 text-[#141418]" />
                  <span>Demo App</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-[#2B2A2A]/70 hover:text-[#2B2A2A] flex items-center gap-1 font-medium hover:underline transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository ↗</span>
              </a>
            </div>
          </div>
        </div>

        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  // Showcase Mode: Expansive, high-impact card with large images and technical highlights
  return (
    <>
      <div
        className="group relative rounded-3xl border border-[#2B2A2A]/12 bg-[#FAF8F8] p-5 sm:p-7 lg:p-9 shadow-xs transition-all duration-300 hover:shadow-2xl hover:border-[#2B2A2A]/25 overflow-hidden"
      >
        {/* Subtle corner highlight glow */}
        <div
          className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          {/* Column 1: Expansive Browser Mockup Window (7 cols on lg) */}
          <div
            className={`w-full lg:col-span-7 ${isAlternate ? "lg:order-2" : "lg:order-1"
              }`}
          >
            <div className="rounded-2xl border border-[#2B2A2A]/12 bg-white overflow-hidden shadow-xs transition-all duration-300 group-hover:border-[#2B2A2A]/25 group-hover:shadow-md">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 sm:py-3 bg-[#FAF8F8] border-b border-[#2B2A2A]/8">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex-1 mx-2 sm:mx-4 max-w-[280px] text-center bg-[#ECE8E8]/70 border border-[#2B2A2A]/6 rounded-md px-2.5 sm:px-3 py-1 text-[11px] font-mono text-[#2B2A2A]/70 truncate">
                  {(project.liveUrl || project.githubUrl).replace("https://", "")}
                </div>

                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#2B2A2A]/50 hover:text-[#2B2A2A] transition-colors p-1 sm:p-1.5 rounded-md hover:bg-[#2B2A2A]/5"
                  title={project.liveUrl ? "Visit deployed web application" : "View repository on GitHub"}
                >
                  <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </a>
              </div>

              {/* Large Image Showcase Container: aspect-[16/10] */}
              <div className="p-2 sm:p-3 bg-white">
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                  accentColor={project.accentColor}
                  className="w-full aspect-[16/10] min-h-[220px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[390px] rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Story, Architecture & Technical Highlights (5 cols on lg) */}
          <div
            className={`flex flex-col justify-between space-y-4 sm:space-y-5 lg:col-span-5 ${isAlternate ? "lg:order-1" : "lg:order-2"
              }`}
          >
            <div>
              {/* Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <Badge
                  variant="subtle"
                  className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5"
                  style={{
                    borderColor: `${project.accentColor}40`,
                    color: "#2B2A2A",
                    backgroundColor: `${project.accentColor}18`,
                  }}
                >
                  {project.tags[0]} Showcase
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2A2A] tracking-tight group-hover:text-[#2B2A2A] transition-colors">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-medium text-[#5A7ACD] mt-1.5 leading-snug">
                {project.tagline}
              </p>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#2B2A2A]/75 mt-3 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Engineered Capabilities Highlights */}
              <div className="mt-4 pt-3.5 border-t border-[#2B2A2A]/8 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-[#2B2A2A]/60 block mb-1">
                  Engineered Capabilities
                </span>
                {project.keyFeatures.slice(0, 3).map((feature, i) => {
                  const [heading, ...rest] = feature.split(":");
                  return (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2B2A2A]/80 leading-snug">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#5A7ACD]/12 text-[#5A7ACD] mt-0.5 shrink-0 font-bold">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>
                        <strong className="text-[#2B2A2A] font-semibold">{heading}:</strong>
                        {rest.join(":")}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4">
                {project.tags.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="subtle" className="text-[11px] font-normal">
                    {tech}
                  </Badge>
                ))}
                {project.tags.length > 6 && (
                  <Badge variant="outline" className="text-[11px] font-normal text-[#2B2A2A]/60">
                    +{project.tags.length - 6}
                  </Badge>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#2B2A2A]/8 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2B2A2A] hover:bg-[#141418] text-white text-xs font-semibold shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View more Details</span>
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F8] border border-[#2B2A2A]/15 text-[#2B2A2A] text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository ↗</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FEB05D] hover:bg-[#fca03d] text-[#141418] text-xs font-bold shadow-xs transition-all duration-200 cursor-pointer active:scale-95 border border-[#FEB05D]/80 hover:shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo App</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

