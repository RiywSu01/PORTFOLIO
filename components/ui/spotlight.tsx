"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill = "rgba(254, 176, 93, 0.15)",
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-40 left-0 right-0 h-[600px] w-full overflow-hidden opacity-70",
        className
      )}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full blur-[110px]"
        style={{
          background: `radial-gradient(ellipse at center, ${fill} 0%, rgba(90, 122, 205, 0.12) 50%, transparent 80%)`,
        }}
      />
    </div>
  );
};
