"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-700/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("top");
          }}
          className="text-sm md:text-base font-bold tracking-tight text-slate-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:opacity-80 transition-colors"
        >
          AYAN AKLEKAR
        </a>

        {/* Desktop Navigation Links + Dark Mode Toggle */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-600 dark:text-zinc-200">
          {[
            { href: "#about", label: "About", id: "about" },
            { href: "#skills", label: "Skills & Tools", id: "skills" },
            { href: "#experience", label: "Experience", id: "experience" },
            { href: "#process", label: "Process", id: "process" },
            { href: "#case-studies", label: "Case Studies", id: "case-studies" },
          ].map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className="relative py-1 text-slate-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group font-medium"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-600 dark:bg-blue-500 transition-all duration-200 ease-out group-hover:w-full" />
            </a>
          ))}

          <div className="h-4 w-px bg-slate-200 dark:bg-zinc-700" />

          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm shadow-blue-500/25 dark:shadow-md dark:shadow-blue-900/30 cursor-pointer"
          >
            <span>Free Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </nav>

        {/* Mobile Header Actions (ThemeToggle + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-white active:scale-95 transition-all duration-150 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-zinc-700 bg-white/98 dark:bg-[#09090B]/98 backdrop-blur-md px-6 py-5 space-y-3 transition-colors duration-200 animate-fade-slide-up">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-700 dark:text-zinc-200">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
            >
              Skills &amp; Tools
            </a>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "experience")}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
            >
              Experience
            </a>
            <a
              href="#process"
              onClick={(e) => handleSmoothScroll(e, "process")}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
            >
              Process
            </a>
            <a
              href="#case-studies"
              onClick={(e) => handleSmoothScroll(e, "case-studies")}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="group inline-flex items-center justify-center gap-2 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold active:scale-[0.98] transition-all duration-150 shadow-sm shadow-blue-500/25 dark:shadow-md dark:shadow-blue-900/30"
            >
              <span>Free Audit</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
