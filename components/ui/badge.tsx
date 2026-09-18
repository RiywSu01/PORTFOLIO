import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "apricot" | "cornflower" | "outline" | "subtle";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#2B2A2A]/5 text-[#2B2A2A] border-[#2B2A2A]/10 hover:bg-[#2B2A2A]/10",
    apricot:
      "bg-[#FEB05D]/15 text-[#9E570A] border-[#FEB05D]/40 hover:bg-[#FEB05D]/25",
    cornflower:
      "bg-[#5A7ACD]/15 text-[#334E8F] border-[#5A7ACD]/40 hover:bg-[#5A7ACD]/25",
    outline:
      "bg-transparent text-[#2B2A2A] border-[#2B2A2A]/20 hover:border-[#2B2A2A]/40",
    subtle:
      "bg-white/80 text-[#2B2A2A]/80 border-[#2B2A2A]/8 shadow-2xs backdrop-blur-xs",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium tracking-tight transition-colors duration-150",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
