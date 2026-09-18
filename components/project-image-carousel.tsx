"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants, type PanInfo } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ImageIcon,
  Sparkles,
  RotateCcw,
  Maximize2,
  ZoomIn,
  X,
} from "lucide-react";

interface ProjectImageCarouselProps {
  images?: string[];
  title: string;
  accentColor?: string;
  className?: string;
  autoPlayInterval?: number; // duration in ms per slide (default 3500)
  initialAutoPlay?: boolean;
  enableLightbox?: boolean;
}

// Built-in preview slides for instant demonstration
const SAMPLE_DEMO_SLIDES = [
  "/projects/calpal-image/dashboardpage.png",
  "/projects/calpal-image/homepage.png",
  "/projects/calpal-image/addfoodAiAnalyze.png",
];

export const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({
  images = [],
  title,
  accentColor = "#FEB05D",
  className = "w-full aspect-[16/10]",
  autoPlayInterval = 3500,
  initialAutoPlay = true,
  enableLightbox = true,
}) => {
  const [demoMode, setDemoMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(initialAutoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Determine active slide collection
  const activeImages = images && images.length > 0 ? images : demoMode ? SAMPLE_DEMO_SLIDES : [];
  const hasImages = activeImages.length > 0;
  const isMultiSlide = activeImages.length > 1;

  // Track progress animation restart
  const [progressTick, setProgressTick] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      if (!isMultiSlide) return;
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        if (newDirection > 0) {
          return (prev + 1) % activeImages.length;
        }
        return (prev - 1 + activeImages.length) % activeImages.length;
      });
      setProgressTick((prev) => prev + 1);
    },
    [isMultiSlide, activeImages.length]
  );

  const goToSlide = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (index === currentIndex || !isMultiSlide) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgressTick((prev) => prev + 1);
  };

  // Automated Slideshow Timer
  useEffect(() => {
    if (!isMultiSlide || !isPlaying || isHovered || isDragging || isLightboxOpen) {
      return;
    }

    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isMultiSlide, isPlaying, isHovered, isDragging, isLightboxOpen, paginate, autoPlayInterval, currentIndex]);

  // Keyboard controls for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, paginate]);

  // Touch / Drag slider gesture end handler
  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setTimeout(() => setIsDragging(false), 60);

    const swipeThreshold = 35;
    const velocityThreshold = 200;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      paginate(-1);
    }
  };

  // Toggle Slideshow Play/Pause
  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  // Spring slide transition variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.22 },
        scale: { duration: 0.22 },
      },
    }),
  };

  // Fallback: When no images are provided yet
  if (!hasImages) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#2B2A2A]/10 bg-gradient-to-b from-[#FAF8F8] to-[#ECE8E8]/70 p-6 text-center ${className}`}
      >
        <div
          className="absolute -top-12 -right-12 h-36 w-36 rounded-full blur-2xl opacity-20 pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />
        <div className="w-12 h-12 rounded-2xl bg-white border border-[#2B2A2A]/10 shadow-xs flex items-center justify-center mb-3 text-[#2B2A2A]/60">
          <ImageIcon className="w-6 h-6" style={{ color: accentColor }} />
        </div>
        <div className="text-xs font-semibold text-[#2B2A2A]/85 tracking-tight mb-1">
          {title}
        </div>
        <div className="text-[11px] font-mono text-[#2B2A2A]/55 bg-white/80 border border-[#2B2A2A]/8 px-2.5 py-1 rounded-full mb-3">
          Drop images into <span className="text-[#5A7ACD] font-medium">/public/projects/</span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDemoMode(true);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#2B2A2A] text-[#2B2A2A] hover:text-white border border-[#2B2A2A]/15 shadow-xs text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FEB05D]" />
          Preview Slideshow &amp; Slider
        </button>
      </div>
    );
  }

  const currentSrc = activeImages[currentIndex];
  const isSvg = typeof currentSrc === "string" && currentSrc.endsWith(".svg");

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group/carousel overflow-hidden rounded-xl bg-[#0F1117] select-none ${className}`}
      >
        {/* Draggable Slide Image with AnimatePresence */}
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag={isMultiSlide ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className={`absolute inset-0 w-full h-full ${isMultiSlide ? "cursor-grab active:cursor-grabbing" : ""
                }`}
            >
              <Image
                src={currentSrc}
                alt={`${title} - slide ${currentIndex + 1}`}
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 850px"
                unoptimized={isSvg}
                className="object-cover object-top pointer-events-none"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Multi-Slide Overlay Controls */}
        {isMultiSlide && (
          <>
            {/* Top Bar: Slide Counter, Play/Pause & Fullscreen Zoom */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-20 pointer-events-none">
              {/* Left: Play/Pause Slideshow Button */}
              {isMultiSlide ? (
                <button
                  type="button"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  title={isPlaying ? "Pause automated slideshow" : "Start automated slideshow"}
                  className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md shadow-sm transition-all duration-200 cursor-pointer text-[11px] font-mono hover:scale-105 active:scale-95"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-2.5 h-2.5 fill-white" />
                      <span className="opacity-90 text-[10px]">Auto</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-2.5 h-2.5 fill-white" />
                      <span className="opacity-90 text-[10px]">Paused</span>
                    </>
                  )}
                </button>
              ) : (
                <div />
              )}

              {/* Right: Highly Prominent Zoom Button & Slide Counter */}
              <div className="pointer-events-auto flex items-center gap-2">
                {enableLightbox && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    aria-label="View screenshot fullscreen in high resolution"
                    title="Enlarge screenshot (Full 1080p Lightbox)"
                    className="group/zoom flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FEB05D] hover:bg-[#FFA03F] text-[#141418] border border-black/20 shadow-[0_4px_16px_rgba(254,176,93,0.5)] hover:shadow-[0_4px_22px_rgba(254,176,93,0.7)] backdrop-blur-md font-sans text-xs font-bold transition-all duration-200 hover:scale-108 active:scale-95 cursor-pointer ring-2 ring-white/40"
                  >
                    <ZoomIn className="w-3.5 h-3.5 stroke-[2.5] text-[#141418] transition-transform duration-200 group-hover/zoom:scale-115" />
                    <span className="text-[11px] font-extrabold tracking-tight">
                      <span className="inline sm:hidden">Zoom</span>
                      <span className="hidden sm:inline">Zoom</span>
                    </span>
                  </button>
                )}

                {isMultiSlide && (
                  <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/75 border border-white/20 text-white backdrop-blur-md font-mono text-[10px] font-medium shadow-sm">
                    <span className="text-[#FEB05D] font-bold">{currentIndex + 1}</span>
                    <span className="opacity-40">/</span>
                    <span className="opacity-80">{activeImages.length}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Left / Right Slider Chevron Buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Previous slide"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-[#141418] border border-black/10 shadow-lg backdrop-blur-md flex items-center justify-center opacity-90 sm:opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Next slide"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-[#141418] border border-black/10 shadow-lg backdrop-blur-md flex items-center justify-center opacity-90 sm:opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Bottom Interactive Slider Track & Slideshow Progress Bars */}
            <div className="absolute bottom-2.5 left-3 right-3 z-20">
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                {activeImages.map((_, idx) => {
                  const isActive = idx === currentIndex;
                  const isPast = idx < currentIndex;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => goToSlide(idx, e)}
                      aria-label={`Jump to slide ${idx + 1}`}
                      title={`Slide ${idx + 1}`}
                      className="relative flex-1 h-1.5 sm:h-2 rounded-full overflow-hidden bg-white/25 hover:bg-white/45 transition-colors duration-150 cursor-pointer"
                    >
                      {/* Progress Fill */}
                      {isPast && (
                        <div className="absolute inset-0 w-full h-full bg-white/90 rounded-full" />
                      )}

                      {isActive && (
                        <motion.div
                          key={`prog-${currentIndex}-${progressTick}`}
                          initial={{ width: "0%" }}
                          animate={{
                            width: isPlaying && !isHovered && !isDragging ? "100%" : "100%",
                          }}
                          transition={{
                            duration:
                              isPlaying && !isHovered && !isDragging
                                ? autoPlayInterval / 1000
                                : 0.2,
                            ease: "linear",
                          }}
                          className="h-full bg-gradient-to-r from-[#FEB05D] to-[#5A7ACD] rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* If currently in demo mode, show exit button */}
            {demoMode && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDemoMode(false);
                  setCurrentIndex(0);
                }}
                title="Close sample demo preview"
                className="absolute bottom-11 right-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 hover:bg-black text-[10px] text-white/80 hover:text-white border border-white/10 backdrop-blur-md cursor-pointer transition-all active:scale-95"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Exit Demo</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Fullscreen Lightbox / Zoom Overlay */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot lightbox`}
          className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-xl select-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(false);
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/95 truncate max-w-[200px] sm:max-w-md">
                {title} <span className="text-white/40">·</span> Slide {currentIndex + 1} of {activeImages.length}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline text-xs font-mono text-white/50">
                Press ESC or click backdrop to close
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Full Resolution Contained Image Area */}
          <div
            className="relative flex-1 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[82vh]">
              <Image
                src={currentSrc}
                alt={`${title} - slide ${currentIndex + 1}`}
                fill
                quality={100}
                unoptimized={isSvg}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Left / Right Nav in Lightbox */}
            {isMultiSlide && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 z-30"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 z-30"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Dot Navigator in Lightbox */}
          {isMultiSlide && (
            <div
              className="px-4 py-3 border-t border-white/10 bg-black/40 flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {activeImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${idx === currentIndex
                    ? "w-7 bg-[#FEB05D]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

