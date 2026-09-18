"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroBackground } from "@/components/hero-background";

// ==========================================
// 3D Decorative Floating Elements Components
// (Replacing micro-badges with 3D objects)
// ==========================================

/**
 * 1. 3D Faceted Pyramid / Tetrahedron
 * Inspired directly by the cyan geometric prism in the reference image.
 */
const Pyramid3D: React.FC = () => (
  <motion.div
    animate={{
      y: [0, -14, 0],
      rotateZ: [0, 6, -3, 0],
      rotateY: [0, 15, 0],
    }}
    transition={{
      duration: 6.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_15px_20px_rgba(90,122,205,0.35)] select-none pointer-events-none"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <defs>
        {/* Front-right highlight face */}
        <linearGradient id="pyramidFront" x1="50%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#98B7FC" />
          <stop offset="50%" stopColor="#5A7ACD" />
          <stop offset="100%" stopColor="#4363B8" />
        </linearGradient>
        {/* Left shade face */}
        <linearGradient id="pyramidLeft" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#2A4280" />
          <stop offset="60%" stopColor="#3E5CA8" />
          <stop offset="100%" stopColor="#5A7ACD" />
        </linearGradient>
        {/* Bottom base reflection face */}
        <linearGradient id="pyramidBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38549C" />
          <stop offset="100%" stopColor="#1E2F5E" />
        </linearGradient>
      </defs>

      {/* Left shaded face */}
      <polygon points="50,10 15,75 50,88" fill="url(#pyramidLeft)" />

      {/* Right highlight face */}
      <polygon points="50,10 50,88 88,68" fill="url(#pyramidFront)" />

      {/* Base face */}
      <polygon points="15,75 50,88 88,68" fill="url(#pyramidBase)" opacity="0.9" />

      {/* Center ridge specular highlight */}
      <line
        x1="50"
        y1="10"
        x2="50"
        y2="88"
        stroke="#D4DFF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  </motion.div>
);

/**
 * 2. 3D Floating Coiled Spring / Helix
 * Inspired directly by the spiraling 3D helix coil in the reference image.
 */
const Spiral3D: React.FC = () => (
  <motion.div
    animate={{
      y: [0, 12, 0],
      rotateZ: [0, -10, 4, 0],
      rotateX: [0, 8, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.4,
    }}
    className="relative w-14 h-16 sm:w-18 sm:h-20 drop-shadow-[0_15px_22px_rgba(90,122,205,0.3)] select-none pointer-events-none"
  >
    <svg viewBox="0 0 90 100" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEB05D" />
          <stop offset="40%" stopColor="#7194E8" />
          <stop offset="70%" stopColor="#5A7ACD" />
          <stop offset="100%" stopColor="#3E5CA8" />
        </linearGradient>
      </defs>

      {/* Smooth 3D spring coil loops */}
      <g fill="none" stroke="url(#helixGrad)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
        {/* Loop 1: Top loop */}
        <path d="M22,22 C48,6 74,18 70,36 C66,50 34,44 26,52" />
        {/* Loop 2: Middle loop */}
        <path d="M26,52 C18,60 44,74 66,66 C76,62 72,80 50,86" />
        {/* Loop 3: Bottom tail */}
        <path d="M50,86 C32,92 20,84 22,76" />
      </g>
      {/* Specular light shimmer */}
      <ellipse cx="64" cy="24" rx="3.5" ry="2" fill="#FFFFFF" opacity="0.8" transform="rotate(-20 64 24)" />
      <ellipse cx="58" cy="62" rx="3" ry="1.8" fill="#FFDFB8" opacity="0.8" transform="rotate(-15 58 62)" />
    </svg>
  </motion.div>
);

/**
 * 3. 3D Floating Isometric Computer / Laptop
 * Isometric tech element highlighting modern web development.
 */
const Computer3D: React.FC = () => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotateZ: [-6, 0, -6],
      rotateY: [-10, 10, -10],
    }}
    transition={{
      duration: 5.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.8,
    }}
    className="relative w-16 h-14 sm:w-20 sm:h-18 drop-shadow-[0_12px_18px_rgba(43,42,42,0.18)] select-none pointer-events-none"
  >
    <svg viewBox="0 0 100 90" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E283D" />
          <stop offset="100%" stopColor="#111624" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F8" />
          <stop offset="100%" stopColor="#D4DFF8" />
        </linearGradient>
      </defs>

      {/* Screen lid backing */}
      <polygon points="20,12 80,6 84,48 24,56" fill="#2B2A2A" rx="3" />
      {/* Screen display glowing */}
      <polygon points="23,15 77,10 80,45 27,51" fill="url(#screenGrad)" />

      {/* Terminal prompt / code snippet lines on screen */}
      <line x1="30" y1="23" x2="45" y2="21" stroke="#FEB05D" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="20" x2="68" y2="18" stroke="#5A7ACD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="31" y1="31" x2="58" y2="28" stroke="#7194E8" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="39" x2="44" y2="37" stroke="#00CF00" strokeWidth="2" strokeLinecap="round" />

      {/* Base / Keyboard deck */}
      <polygon points="24,56 84,48 94,68 14,76" fill="url(#bodyGrad)" stroke="#2B2A2A" strokeWidth="1.2" />
      {/* Keyboard trackpad */}
      <polygon points="45,67 63,65 65,72 47,74" fill="#5A7ACD" opacity="0.35" />
    </svg>
  </motion.div>
);

/**
 * 4. 3D Floating Geometry Toroid / Ring
 * Translucent warm apricot accent ring.
 */
const Torus3D: React.FC = () => (
  <motion.div
    animate={{
      y: [0, 8, 0],
      rotateZ: [0, 18, 0],
      rotateX: [0, -15, 0],
    }}
    transition={{
      duration: 6.2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.2,
    }}
    className="relative w-11 h-11 sm:w-14 sm:h-14 drop-shadow-[0_10px_16px_rgba(254,176,93,0.3)] select-none pointer-events-none"
  >
    <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEB05D" />
          <stop offset="60%" stopColor="#FFDFB8" />
          <stop offset="100%" stopColor="#E2933C" />
        </linearGradient>
      </defs>
      <circle
        cx="40"
        cy="40"
        r="24"
        fill="none"
        stroke="url(#torusGrad)"
        strokeWidth="10"
        strokeDasharray="140 10"
      />
      <circle cx="28" cy="24" r="3" fill="#FFFFFF" opacity="0.85" />
    </svg>
  </motion.div>
);

// ==========================================
// Main Hero Section Component
// ==========================================

export const Hero: React.FC = () => {
  // Scroll-driven translucent fade and subtle upward slide (Rule 133)
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.22]);
  const heroTranslateY = useTransform(scrollY, [0, 500], [0, -70]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.98]);

  // Entrance animation variants (slide in from top to natural position)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Smooth scroll down to Engineering Philosophy section (#about)
  const handleScrollDown = useCallback(() => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 pb-14 sm:pb-16 overflow-hidden"
    >
      {/* High-End Architectural Blueprint Background with Topographic Contours */}
      <HeroBackground />

      {/* Scroll-reactive animated wrapper (Rule 133) */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroTranslateY,
          scale: heroScale,
        }}
        className="w-full max-w-6xl min-[1400px]:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* =========================================================================
            White Hero Card Container
            Structured directly like the reference image:
            - Crisp white card with subtle borders and deep soft ambient lighting
            - Left: Subtitle badge, "Hello, my name's Supawit.", bio, pill CTAs, mouse scroll
            - Right: Capsule / Stadium portal with profile picture and 3D floating accents
            - Far Right: Vertical "FOLLOW ME ON ——>" rail with circular social buttons
           ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative rounded-3xl sm:rounded-[2.5rem] bg-white/85 sm:bg-white/90 backdrop-blur-xl border border-[#2B2A2A]/10 shadow-2xl shadow-[#2B2A2A]/7 p-6 sm:p-10 lg:p-12 min-[1400px]:p-14 overflow-hidden"
        >
          {/* Internal subtle topographic contour accents etched onto the white card */}
          <svg
            className="absolute inset-0 w-full h-full opacity-45 pointer-events-none -z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M-50,160 C250,70 450,290 850,180 C1050,110 1150,220 1300,160"
              stroke="rgba(43, 42, 42, 0.05)"
              strokeWidth="1.2"
            />
            <path
              d="M-30,300 C270,210 490,430 890,320 C1100,240 1200,380 1320,300"
              stroke="rgba(90, 122, 205, 0.12)"
              strokeWidth="1.2"
            />
            <path
              d="M0,450 C300,380 540,560 950,470 C1150,400 1230,510 1340,440"
              stroke="rgba(254, 176, 93, 0.12)"
              strokeWidth="1.2"
            />
          </svg>

          {/* Internal Ambient Radial Halos (Cornflower & Apricot) */}
          <div className="absolute top-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-[#5A7ACD]/12 blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#FEB05D]/14 blur-[90px] pointer-events-none -z-10" />

          {/* Card Layout: Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* =========================================================================
                Left Column: Typography, Bio, Dual Pill CTAs & Mouse Scroll Down
               ========================================================================= */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* 1. Welcome Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A7ACD]/10 border border-[#5A7ACD]/20 text-[#5A7ACD] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs mb-5 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A7ACD] animate-pulse" />
                <span>Welcome to my portfolio!</span>
              </div>

              {/* 2. Bold Headline: "Hello, my name's Supawit." */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl min-[1400px]:text-7xl font-black text-[#2B2A2A] tracking-tight leading-[1.08]">
                <span>Hello, my</span>
                <br />
                <span>name&apos;s </span>
                <span className="text-[#5A7ACD] relative inline-block">
                  Supawit.
                  {/* Subtle underline wave */}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#5A7ACD] via-[#FEB05D] to-[#5A7ACD] rounded-full opacity-80" />
                </span>
              </h1>

              {/* 3. Subtitle Role & Bio Paragraph */}
              <div className="mt-4 sm:mt-5 max-w-xl">
                <p className="text-lg sm:text-xl font-bold text-[#2B2A2A]/90 tracking-tight">
                  Full-Stack Developer
                </p>
                <p className="mt-2 text-sm sm:text-base text-[#2B2A2A]/70 leading-relaxed">
                  An ICT undergraduate at Mahidol University building practical web applications and distributed backend systems with TypeScript, React, Next.js, NestJS, PostgreSQL, and Docker.
                </p>
              </div>

              {/* 4. Dual Pill Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* Primary Pill Button: Solid with Soft Glow */}
                <Magnetic strength={0.25}>
                  <a href="#projects">
                    <button className="group relative inline-flex items-center gap-2 px-7 py-3 sm:py-3.5 rounded-full bg-[#5A7ACD] hover:bg-[#4969BD] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#5A7ACD]/35 hover:shadow-[#5A7ACD]/55 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer">
                      <span>View Projects</span>
                      <ArrowDown className="w-4 h-4 text-[#FFDFB8] group-hover:translate-y-0.5 transition-transform" />
                    </button>
                  </a>
                </Magnetic>

                {/* Secondary Pill Button: Outline with Subtle Arrow */}
                <Magnetic strength={0.25}>
                  <a
                    href="https://github.com/RiywSu01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group inline-flex items-center gap-2 px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#FAF8F8] border border-[#2B2A2A]/20 hover:border-[#FEB05D] text-[#2B2A2A] font-medium text-sm sm:text-base shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer">
                      <span>See my work</span>
                      <ArrowUpRight className="w-4 h-4 text-[#5A7ACD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </a>
                </Magnetic>
              </div>

              {/* 5. Bottom-Left: Animated Mouse "Scroll down" Indicator */}
              <div className="mt-10 sm:mt-12 pt-4 border-t border-[#2B2A2A]/8 flex items-center justify-center lg:justify-start w-full">
                <button
                  onClick={handleScrollDown}
                  className="group inline-flex items-center gap-3 text-xs font-mono tracking-wider uppercase text-[#2B2A2A]/60 hover:text-[#2B2A2A] transition-colors cursor-pointer"
                  title="Scroll down to Engineering Philosophy"
                >
                  {/* Animated Mouse Capsule Outline */}
                  <span className="relative flex h-7 w-4 rounded-full border-2 border-[#2B2A2A]/40 group-hover:border-[#5A7ACD] items-start justify-center p-1 transition-colors">
                    <motion.span
                      animate={{ y: [0, 8, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-1.5 w-1 rounded-full bg-[#5A7ACD]"
                    />
                  </span>
                  <span className="font-semibold">Scroll down</span>
                </button>
              </div>
            </motion.div>

            {/* =========================================================================
                Right Column: Stadium/Capsule Portal + 3D Floating Accents + Vertical Rail
               ========================================================================= */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex items-center justify-center lg:justify-end relative"
            >
              {/* Main Stadium / Capsule Portal Container */}
              <div className="relative flex items-center justify-center">

                {/* 1. Portal Ambient Halo Glow (Aceternity UI Pattern) */}
                <div className="absolute -inset-6 sm:-inset-8 rounded-[150px] bg-gradient-to-tr from-[#5A7ACD]/30 via-[#FAF8F8]/40 to-[#FEB05D]/28 blur-2xl -z-10 pointer-events-none" />

                {/* 2. Double-Layer Glowing Neon Rim Stadium Frame */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative p-2.5 sm:p-3 rounded-[130px] sm:rounded-[150px] bg-gradient-to-b from-[#5A7ACD]/40 via-white to-[#FEB05D]/35 border border-[#5A7ACD]/30 shadow-xl shadow-[#5A7ACD]/15"
                >
                  {/* Inside Capsule Window clipping developer profile picture */}
                  <div className="relative w-[210px] h-[290px] sm:w-[260px] sm:h-[360px] md:w-[290px] md:h-[400px] min-[1400px]:w-[320px] min-[1400px]:h-[440px] rounded-[120px] sm:rounded-[140px] overflow-hidden ring-1 ring-[#2B2A2A]/10 bg-gradient-to-b from-[#FAF8F8] to-[#ECE8E8]">
                    <Image
                      src="/profile.png"
                      alt="Supawit - Full-Stack Developer"
                      fill
                      priority
                      sizes="(max-width: 640px) 210px, (max-width: 1024px) 290px, 320px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>

                {/* =========================================================================
                    Floating 3D Decorative Tech Elements
                    (3D Pyramid, 3D Helix Spiral, 3D Computer & 3D Toroid)
                   ========================================================================= */}

                {/* Element 1: 3D Faceted Cyan/Cornflower Pyramid (Top-Left of Portal) */}
                <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-10 z-20">
                  <Pyramid3D />
                </div>

                {/* Element 2: 3D Spiral Coil / Helix (Bottom-Right of Portal) */}
                <div className="absolute -bottom-6 -right-5 sm:-bottom-8 sm:-right-8 z-20">
                  <Spiral3D />
                </div>

                {/* Element 3: 3D Isometric Mini Computer / Laptop (Bottom-Left of Portal) */}
                <div className="absolute bottom-2 -left-8 sm:bottom-4 sm:-left-12 z-20">
                  <Computer3D />
                </div>

                {/* Element 4: 3D Geometric Toroid Ring (Top-Right of Portal) */}
                <div className="absolute top-2 -right-4 sm:top-4 sm:-right-6 z-20">
                  <Torus3D />
                </div>
              </div>

              {/* =========================================================================
                  Far-Right Column: Vertical "FOLLOW ME ON ——>" Rail with Circular Socials
                 ========================================================================= */}
              <div className="hidden min-[1300px]:flex flex-col items-center gap-5 ml-8 pl-6 border-l border-[#2B2A2A]/10 py-4">

                {/* Social Circle 1: GitHub */}
                <a
                  href="https://github.com/RiywSu01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#2B2A2A]/12 text-[#2B2A2A] hover:text-white hover:bg-[#5A7ACD] hover:border-[#5A7ACD] shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* Social Circle 2: LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/supawit-sirikulpiboon-836ba8390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#2B2A2A]/12 text-[#2B2A2A] hover:text-white hover:bg-[#5A7ACD] hover:border-[#5A7ACD] shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {/* Social Circle 3: Student Email */}
                <a
                  href="mailto:supawit.sik@student.mahidol.ac.th"
                  className="w-9 h-9 rounded-full bg-white border border-[#2B2A2A]/12 text-[#2B2A2A] hover:text-white hover:bg-[#FEB05D] hover:border-[#FEB05D] shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer"
                  title="Email Supawit"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <span className="text-[10px] font-mono font-semibold tracking-widest text-[#2B2A2A]/45 uppercase [writing-mode:vertical-rl] rotate-180 select-none">
                  CONTACT ME
                </span>
              </div>

            </motion.div>

          </div>

          {/* Mobile Social Bar (Shown on screens < 1300px) */}
          <div className="mt-8 pt-6 border-t border-[#2B2A2A]/8 flex min-[1300px]:hidden items-center justify-between flex-wrap gap-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#2B2A2A]/50 uppercase">
              FOLLOW ME ON &mdash;&gt;
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/RiywSu01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#2B2A2A]/12 text-[#2B2A2A] hover:text-white hover:bg-[#5A7ACD] hover:border-[#5A7ACD] shadow-2xs transition-all flex items-center justify-center"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/supawit-sirikulpiboon-836ba8390/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#2B2A2A]/12 text-[#2B2A2A] hover:text-white hover:bg-[#5A7ACD] hover:border-[#5A7ACD] shadow-2xs transition-all flex items-center justify-center"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:supawit.sik@student.mahidol.ac.th"
                className="w-9 h-9 rounded-full bg-white border border-[#2B2A2A]/12 text-[#2B2A2A] hover:text-white hover:bg-[#FEB05D] hover:border-[#FEB05D] shadow-2xs transition-all flex items-center justify-center"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};
