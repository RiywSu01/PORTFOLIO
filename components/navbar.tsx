"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection check for active nav state
      const sections = ["contact", "projects", "skills", "about"];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F2F2]/85 backdrop-blur-md border-b border-[#2B2A2A]/10 shadow-2xs"
          : "bg-[#F5F2F2]/60 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer text-[#2B2A2A]"
        >
          <div className="w-9 h-9 rounded-xl bg-[#2B2A2A] text-[#F5F2F2] flex items-center justify-center font-black text-base shadow-xs group-hover:bg-[#1b1a1a] transition-all">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight leading-none group-hover:text-[#FEB05D] transition-colors">
              SUPAWIT
            </span>
            <span className="text-[10px] text-[#2B2A2A]/50 font-mono tracking-wider">
              FULL-STACK DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#FAF8F8]/80 border border-[#2B2A2A]/8 px-3 py-1.5 rounded-full shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#2B2A2A] font-semibold bg-white shadow-2xs"
                    : "text-[#2B2A2A]/70 hover:text-[#2B2A2A] hover:bg-white/50"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FEB05D]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: GitHub button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/RiywSu01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="gap-1.5 text-xs font-semibold">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#2B2A2A]/50" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#2B2A2A] hover:bg-[#2B2A2A]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FEB05D]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2B2A2A]/10 bg-[#F5F2F2]/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-[#2B2A2A] text-[#F5F2F2]"
                    : "text-[#2B2A2A]/80 hover:bg-[#FAF8F8]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#2B2A2A]/8">
            <a
              href="https://github.com/RiywSu01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button variant="primary" size="md" className="w-full gap-2">
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
