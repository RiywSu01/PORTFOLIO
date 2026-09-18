"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export const HeroBackground: React.FC = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.35);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const xPercent = useTransform(springX, (val) => `${val * 100}%`);
  const yPercent = useTransform(springY, (val) => `${val * 100}%`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      if (innerHeight > 0 && innerWidth > 0) {
        mouseX.set(e.clientX / innerWidth);
        mouseY.set(e.clientY / innerHeight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10">
      {/* 1. Base Subtle Canvas Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2F2] via-[#FAF8F8] to-[#F5F2F2]" />

      {/* 2. Topographic Elevation Contour Lines (Vector curves matching reference image) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="contourGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5A7ACD" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#5A7ACD" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="contourGradApricot" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEB05D" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#FEB05D" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Outer subtle topographic curves */}
        <path
          d="M-100,180 C200,90 420,320 800,210 C1100,120 1280,260 1600,180"
          stroke="rgba(43, 42, 42, 0.05)"
          strokeWidth="1.2"
        />
        <path
          d="M-80,290 C220,200 460,420 850,310 C1150,220 1340,360 1620,280"
          stroke="url(#contourGradBlue)"
          strokeWidth="1.3"
        />
        <path
          d="M-50,420 C260,330 520,530 920,430 C1220,340 1400,480 1640,400"
          stroke="rgba(43, 42, 42, 0.04)"
          strokeWidth="1.2"
        />
        <path
          d="M-30,550 C290,470 580,640 990,560 C1290,480 1450,590 1660,520"
          stroke="url(#contourGradApricot)"
          strokeWidth="1.4"
        />
        <path
          d="M0,690 C330,620 640,760 1060,690 C1340,630 1480,720 1680,660"
          stroke="rgba(43, 42, 42, 0.05)"
          strokeWidth="1.2"
        />

        {/* Portal-focused concentric topography elevation rings (Right side) */}
        <path
          d="M950,200 C1100,140 1300,170 1380,310 C1450,430 1390,580 1260,640 C1130,700 970,640 920,510 C880,410 900,260 950,200 Z"
          stroke="url(#contourGradBlue)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M990,240 C1110,190 1270,220 1330,330 C1390,420 1350,540 1240,590 C1140,640 1010,590 970,490 C930,410 950,290 990,240 Z"
          stroke="rgba(43, 42, 42, 0.06)"
          strokeWidth="1.2"
        />
        <path
          d="M1030,280 C1120,240 1230,260 1280,350 C1330,420 1300,510 1210,550 C1130,590 1030,550 1000,470 C980,410 990,320 1030,280 Z"
          stroke="url(#contourGradApricot)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 3. Precision Radial Masked Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(43, 42, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(43, 42, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 30%, transparent 90%)",
        }}
      />

      {/* 4. Ambient Floating Aurora Orbs (Apricot & Cornflower) */}
      {/* Orb 1: Warm Apricot Aura (Right / Portal side) */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -25, 18, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] right-[10%] w-[380px] sm:w-[560px] h-[380px] sm:h-[560px] rounded-full bg-gradient-to-br from-[#FEB05D]/22 via-[#FEB05D]/10 to-transparent blur-[110px]"
      />

      {/* Orb 2: Cornflower Aura (Center / Left side) */}
      <motion.div
        animate={{
          x: [0, -28, 22, 0],
          y: [0, 30, -18, 0],
          scale: [1, 0.95, 1.06, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[12%] left-[6%] w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#5A7ACD]/20 via-[#5A7ACD]/8 to-transparent blur-[110px]"
      />

      {/* 5. Interactive Mouse-Tracking Spotlight */}
      <motion.div
        style={{
          left: xPercent,
          top: yPercent,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-gradient-to-r from-[#FEB05D]/14 via-[#5A7ACD]/12 to-transparent blur-[85px]"
      />

      {/* 6. Technical Engineering Telemetry Coordinates */}
      <div className="hidden min-[1300px]:block absolute inset-x-8 top-20 bottom-12 pointer-events-none">
        <div className="absolute top-2 left-4 flex items-center gap-1.5 text-[#2B2A2A]/30 font-mono text-[10px] tracking-wider">
          <span className="text-xs font-bold text-[#5A7ACD]">+</span>
          <span className="uppercase">13°47&apos;N · 100°19&apos;E (SALAYA)</span>
        </div>
        <div className="absolute top-2 right-4 flex items-center gap-1.5 text-[#2B2A2A]/30 font-mono text-[10px] tracking-wider">
          <span className="uppercase">PORTFOLIO // 2026</span>
          <span className="text-xs font-bold text-[#FEB05D]">+</span>
        </div>
      </div>
    </div>
  );
};
