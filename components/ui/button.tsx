import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "apricot";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEB05D] disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-[#2B2A2A] text-[#F5F2F2] hover:bg-[#1f1e1e] hover:shadow-md hover:shadow-[#2B2A2A]/10 border border-[#2B2A2A]",
      secondary:
        "bg-[#FAF8F8] text-[#2B2A2A] border border-[#2B2A2A]/15 hover:bg-[#ECE8E8] hover:border-[#2B2A2A]/30 shadow-xs",
      outline:
        "border border-[#2B2A2A]/20 bg-transparent text-[#2B2A2A] hover:bg-[#2B2A2A]/5 hover:border-[#2B2A2A]/40",
      ghost:
        "bg-transparent text-[#2B2A2A] hover:bg-[#2B2A2A]/8",
      link:
        "text-[#2B2A2A] underline-offset-4 hover:underline p-0 h-auto font-normal",
      apricot:
        "bg-[#FEB05D] text-[#141418] hover:bg-[#fca03d] border border-[#FEB05D]/80 font-semibold shadow-xs hover:shadow-md",
    };

    const sizeStyles = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-5 text-sm",
      lg: "h-12 px-7 text-base font-semibold",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
