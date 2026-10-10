"use client";

import React from "react";
import { ArrowUp, Globe, Mail } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Footer() {
  const scrollTo = (targetId: string) => {
    scrollToSection(targetId);
  };

  const scrollToTop = () => {
    scrollToSection("top");
  };

  return (
    <footer className="bg-white dark:bg-[#09090B] border-t border-zinc-200 dark:border-zinc-800 py-12 text-zinc-600 dark:text-zinc-400 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-200 dark:border-zinc-800">
          {/* Brand */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              AYAN AKLEKAR
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              SEO &amp; Social Media Manager
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Helping businesses get more website visitors from Google search and build an active social media following.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <div className="text-zinc-900 dark:text-zinc-100 font-semibold uppercase tracking-wider mb-3">
              Sections
            </div>
            <div>
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="hover:text-zinc-900 dark:hover:text-white hover:translate-x-0.5 transition-all duration-150 cursor-pointer"
              >
                • Case Studies
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => scrollTo("process")}
                className="hover:text-zinc-900 dark:hover:text-white hover:translate-x-0.5 transition-all duration-150 cursor-pointer"
              >
                • How I Work
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="hover:text-zinc-900 dark:hover:text-white hover:translate-x-0.5 transition-all duration-150 cursor-pointer"
              >
                • Services
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => scrollTo("calculator")}
                className="hover:text-zinc-900 dark:hover:text-white hover:translate-x-0.5 transition-all duration-150 cursor-pointer"
              >
                • Calculator
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="hover:text-zinc-900 dark:hover:text-white hover:translate-x-0.5 transition-all duration-150 cursor-pointer"
              >
                • Free Audit
              </button>
            </div>
          </div>

          {/* Channels */}
          <div className="md:col-span-4 space-y-2 font-mono text-xs">
            <div className="text-zinc-900 dark:text-zinc-100 font-semibold uppercase tracking-wider mb-3">
              Connect
            </div>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://linkedin.com/in/ayanaklekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/ayanaklekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X (Twitter)</span>
              </a>
              <a
                href="mailto:ayan.aklekar.growth@gmail.com"
                className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ayan.aklekar.growth@gmail.com</span>
              </a>
              <div className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 pt-0.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Mumbai (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <div>
            © 2026 Ayan Aklekar. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
