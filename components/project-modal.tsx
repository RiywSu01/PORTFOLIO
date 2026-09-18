"use client";

import React from "react";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Cpu, Layers, Sparkles, ZoomIn } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectImageCarousel } from "@/components/project-image-carousel";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[96vw] sm:w-[94vw] lg:w-[90vw] max-w-5xl xl:max-w-6xl p-0 overflow-hidden border border-[#2B2A2A]/15 bg-[#F5F2F2] shadow-2xl rounded-2xl sm:rounded-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col">
        {/* Browser Mockup Top Bar in Modal */}
        <div className="bg-[#FAF8F8] px-4 sm:px-6 py-3 sm:py-3.5 border-b border-[#2B2A2A]/10 flex items-center justify-between shrink-0 pr-12 sm:pr-14">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F] inline-block" />
            <div className="ml-1 sm:ml-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#ECE8E8] text-[10px] sm:text-[11px] font-mono text-[#2B2A2A]/70 border border-[#2B2A2A]/5 flex items-center gap-1.5 max-w-[170px] sm:max-w-xs md:max-w-md truncate">
              <span className="truncate">{(project.liveUrl || project.githubUrl).replace("https://", "")}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#141418] bg-[#FEB05D] hover:bg-[#fca03d] flex items-center gap-1.5 transition-all px-2.5 py-1 rounded-lg shadow-2xs active:scale-95 border border-[#FEB05D]/70"
                title="Visit deployed web application"
              >
                <span>Demo App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#2B2A2A]/70 hover:text-[#2B2A2A] flex items-center gap-1 transition-colors px-2 py-1 rounded-md hover:bg-[#2B2A2A]/5"
              title="Open GitHub repository in a new tab"
            >
              <span className="hidden sm:inline">GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-7 md:p-9 space-y-6 sm:space-y-8 overflow-y-auto flex-1">
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-2.5">
              <div className="flex items-center gap-2">
                <Badge variant="apricot" className="font-semibold text-xs px-2.5 py-0.5">
                  Project
                </Badge>
                <span className="text-xs text-[#2B2A2A]/50">·</span>
              </div>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2A2A] tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-[#2B2A2A]/75 mt-2 leading-relaxed max-w-3xl">
              {project.tagline}
            </DialogDescription>
          </div>

          {/* Interactive Visual Showcase Container with Cinema-Scale Aspect Ratio */}
          <div className="space-y-2">
            <div className="rounded-2xl border border-[#2B2A2A]/12 overflow-hidden shadow-md bg-white p-1.5 sm:p-2.5 transition-all">
              <ProjectImageCarousel
                images={project.images}
                title={project.title}
                accentColor={project.accentColor}
                className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[220px] sm:min-h-[360px] md:min-h-[440px] lg:min-h-[500px] rounded-xl"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-mono text-[#2B2A2A]/65">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FEB05D]" />
                <span>Interactive Slideshow · Drag, swipe, or click dots</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#141418] font-bold bg-[#FEB05D]/20 px-2.5 py-1 rounded-full border border-[#FEB05D]/40 shadow-2xs">
                <ZoomIn className="w-3.5 h-3.5 text-[#FEB05D]" />
                <span>Click "Zoom" on top-right for uncropped view</span>
              </span>
            </div>
          </div>

          {/* Section: Overview */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-base font-bold text-[#2B2A2A] border-b border-[#2B2A2A]/10 pb-2">
              <Sparkles className="w-4 h-4 text-[#FEB05D]" />
              <span>Overview</span>
            </div>
            <p className="text-sm sm:text-base text-[#2B2A2A]/80 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Section: What I Built */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-base font-bold text-[#2B2A2A] border-b border-[#2B2A2A]/10 pb-2">
              <Layers className="w-4 h-4 text-[#5A7ACD]" />
              <span>What I Built</span>
            </div>
            <ul className="space-y-2.5">
              {project.whatIBuilt.map((item, index) => (
                <li key={index} className="text-xs sm:text-sm text-[#2B2A2A]/80 flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-[#5A7ACD] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Key Features */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-base font-bold text-[#2B2A2A] border-b border-[#2B2A2A]/10 pb-2">
              <Cpu className="w-4 h-4 text-[#FEB05D]" />
              <span>Key Features</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-xs sm:text-sm text-[#2B2A2A]/80 bg-[#FAF8F8] border border-[#2B2A2A]/8 rounded-xl p-3 sm:p-3.5 flex items-start gap-2.5 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FEB05D] mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Technologies */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-base font-bold text-[#2B2A2A] border-b border-[#2B2A2A]/10 pb-2">
              <span>Technologies</span>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tech) => (
                  <Badge key={tech} variant="subtle" className="text-xs px-2.5 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Architecture */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-base font-bold text-[#2B2A2A] border-b border-[#2B2A2A]/10 pb-2">
              <span>Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2B2A2A]/80 bg-[#FAF8F8] border border-[#2B2A2A]/8 rounded-xl p-4 sm:p-5 font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#2B2A2A]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-[#2B2A2A]/60 text-center sm:text-left">
              {project.liveUrl
                ? "Try out the live deployment or view the full source code on GitHub"
                : "Complete source code and documentation available on GitHub"}
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="apricot"
                    size="md"
                    className="gap-2 w-full sm:w-auto justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Demo App ↗</span>
                  </Button>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="md" className="gap-2 w-full sm:w-auto justify-center">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository ↗</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

