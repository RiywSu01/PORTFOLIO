"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { animate } from "animejs";

interface SectionItem {
  id: string;
  label: string;
  offset?: number; // Custom offset in pixels (e.g. -64 to leave room for navbar, +50 to scroll deeper)
}

const SECTIONS: SectionItem[] = [
  { id: "hero-section", label: "Home", offset: 0 },
  { id: "about", label: "About", offset: -30 },
  { id: "skills", label: "Skills", offset: -20 },
  { id: "projects", label: "Projects", offset: -40 },
  { id: "contact", label: "Contact", offset: 0 },
];

export const SectionScrollController: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimatingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  // Smoothly scroll to a section by index using anime.js easing
  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= SECTIONS.length) return;
    const targetConfig = SECTIONS[index];
    const targetSection = document.getElementById(targetConfig.id);
    if (!targetSection) return;

    isAnimatingRef.current = true;
    lastScrollTimeRef.current = Date.now();
    setActiveIndex(index);

    // Calculate landing position: Home (index 0) always scrolls to top (0)
    const customOffset = targetConfig.offset ?? 0;
    const targetTop =
      index === 0
        ? 0
        : Math.max(
            0,
            targetSection.getBoundingClientRect().top + window.scrollY + customOffset
          );

    // Use Anime.js to smoothly animate scroll position with outExpo easing
    const scrollObj = { y: window.scrollY };
    animate(scrollObj, {
      y: targetTop,
      duration: 800,
      ease: "outExpo",
      onUpdate: () => {
        window.scrollTo(0, scrollObj.y);
      },
      onComplete: () => {
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 120);
      },
    });
  }, []);

  // Track active section on natural scroll / update
  useEffect(() => {
    const handleScroll = () => {
      if (isAnimatingRef.current) return;
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intercept wheel events to stop at each section
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If a modal/dialog is open, do not intercept scroll
      if (
        document.body.classList.contains("overflow-hidden") ||
        document.querySelector('[role="dialog"]')
      ) {
        return;
      }

      // Ignore subtle trackpad noise
      if (Math.abs(e.deltaY) < 24) return;

      const now = Date.now();
      if (isAnimatingRef.current || now - lastScrollTimeRef.current < 850) {
        e.preventDefault();
        return;
      }

      const currentSectionEl = document.getElementById(SECTIONS[activeIndex]?.id);
      if (!currentSectionEl) return;

      const rect = currentSectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If current section is taller than viewport and user hasn't reached its bottom/top, allow normal scrolling inside it
      if (e.deltaY > 0) {
        // Scrolling down
        const isNearBottom = rect.bottom <= viewportHeight + 40;
        if (!isNearBottom && rect.height > viewportHeight + 80) {
          // Allow internal scrolling down within long section
          return;
        }

        if (activeIndex < SECTIONS.length - 1) {
          e.preventDefault();
          lastScrollTimeRef.current = now;
          scrollToSection(activeIndex + 1);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        const isNearTop = rect.top >= -40;
        if (!isNearTop && rect.height > viewportHeight + 80) {
          // Allow internal scrolling up within long section
          return;
        }

        if (activeIndex > 0) {
          e.preventDefault();
          lastScrollTimeRef.current = now;
          scrollToSection(activeIndex - 1);
        }
      }
    };

    // Intercept keyboard arrow keys for section navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.querySelector('[role="dialog"]') ||
        document.activeElement?.tagName === "INPUT"
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (activeIndex < SECTIONS.length - 1 && !isAnimatingRef.current) {
          e.preventDefault();
          scrollToSection(activeIndex + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (activeIndex > 0 && !isAnimatingRef.current) {
          e.preventDefault();
          scrollToSection(activeIndex - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, scrollToSection]);

  return (
    <aside
      aria-label="Section Navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3 p-2 rounded-full bg-white/70 backdrop-blur-md border border-[#2B2A2A]/10 shadow-sm"
    >
      {SECTIONS.map((section, idx) => {
        const isActive = activeIndex === idx;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(idx)}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none cursor-pointer"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-8 px-2.5 py-1 rounded-md text-[11px] font-medium text-[#2B2A2A] bg-white border border-[#2B2A2A]/10 shadow-xs opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>

            {/* Dot indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-6 bg-[#2B2A2A] shadow-xs"
                  : "w-2.5 h-2.5 bg-[#2B2A2A]/25 hover:bg-[#2B2A2A]/60"
              }`}
              style={{
                backgroundColor: isActive ? (idx % 2 === 0 ? "#2B2A2A" : "#FEB05D") : undefined,
              }}
            />
          </button>
        );
      })}
    </aside>
  );
};
