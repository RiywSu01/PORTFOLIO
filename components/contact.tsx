"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "supawit.sik@student.mahidol.ac.th";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#FAF8F8] border-t border-[#2B2A2A]/10 relative overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#FEB05D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FEB05D]" />
          <span className="text-xs uppercase tracking-widest font-mono font-semibold text-[#2B2A2A]/60">
            GET IN TOUCH
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-[#2B2A2A] tracking-tight">
          LET&apos;S CONNECT
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#2B2A2A]/70 max-w-md mx-auto">
          Have a project, freelance inquiry, or full-time engineering opportunity? Let&apos;s build something exceptional together.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Magnetic strength={0.2}>
            <a href={`mailto:${emailAddress}`}>
              <Button variant="primary" size="lg" className="gap-2">
                <Mail className="w-4 h-4 text-[#FEB05D]" />
                <span>Email Me</span>
              </Button>
            </a>
          </Magnetic>

          <Magnetic strength={0.2}>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-xl font-medium h-12 px-6 text-sm bg-white text-[#2B2A2A] border border-[#2B2A2A]/15 hover:bg-[#ECE8E8] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#2B2A2A]/60" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <a
              href="https://github.com/RiywSu01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2 bg-white">
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2B2A2A]/50" />
              </Button>
            </a>
          </Magnetic>

          <Magnetic strength={0.2}>
            <a
              href="https://www.linkedin.com/in/supawit-sirikulpiboon-836ba8390/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2 bg-white">
                <LinkedinIcon className="w-4 h-4 text-[#5A7ACD]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2B2A2A]/50" />
              </Button>
            </a>
          </Magnetic>
        </div>

        {/* Email pill */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-[#2B2A2A]/60 bg-white/80 border border-[#2B2A2A]/8 px-3.5 py-1.5 rounded-full">
          <span>Direct:</span>
          <span className="text-[#2B2A2A] font-semibold">{emailAddress}</span>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2B2A2A]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2B2A2A]/60 gap-4">
          <div className="flex items-center gap-1.5 font-mono">
            <span>© Supawit. </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-[#2B2A2A] transition-colors">
              Back to Top ↑
            </a>
            <span>·</span>
            <a
              href="https://github.com/RiywSu01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2B2A2A] transition-colors"
            >
              github.com/RiywSu01
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
