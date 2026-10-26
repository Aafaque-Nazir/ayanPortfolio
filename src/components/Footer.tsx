"use client";

import React from "react";
import { ArrowUp, Globe, Mail, Phone, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Footer() {
  const scrollTo = (targetId: string) => {
    scrollToSection(targetId);
  };

  const scrollToTop = () => {
    scrollToSection("top");
  };

  return (
    <footer className="bg-white dark:bg-[#09090B] border-t border-slate-200 dark:border-zinc-800 py-14 text-slate-700 dark:text-zinc-300 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200 dark:border-zinc-800">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="space-y-1">
              <div className="text-base font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
                AYAN AKLEKAR
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                SEO Specialist &amp; Digital Marketer • Dubai, UAE
              </p>
            </div>

            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Helping businesses in Dubai and globally rank on Google Page 1, capture local map customers, and grow engaged social audiences without ad spend.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 dark:shadow-md dark:shadow-blue-900/30 transition-all cursor-pointer"
              >
                <span>Get a Free Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Sections (2 cols) */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Skills & Tools", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Process", id: "process" },
                { label: "Case Studies", id: "case-studies" },
                { label: "Free Audit", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-0.5 transition-all cursor-pointer font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Disciplines & Services (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-slate-600 dark:text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("case-studies")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-0.5 transition-all text-left cursor-pointer group"
                >
                  <span className="font-semibold text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">SEO &amp; Local Maps</span>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Google 3-Pack &amp; Search Console</div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("case-studies")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-0.5 transition-all text-left cursor-pointer group"
                >
                  <span className="font-semibold text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Social Media</span>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Instagram &amp; LinkedIn Branding</div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("case-studies")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-0.5 transition-all text-left cursor-pointer group"
                >
                  <span className="font-semibold text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">WordPress Websites</span>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Core Web Vitals &amp; WooCommerce</div>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Direct Contact
            </div>
            <div className="space-y-2">
              <a
                href="https://wa.me/971566182617?text=Hi%20Ayan,%20I%20would%20like%20to%20discuss%20SEO%20and%20digital%20growth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="font-medium">+971 56 618 2617</span>
              </a>

              <a
                href="mailto:ayanaklekar1@gmail.com"
                className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group truncate"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400 shrink-0" />
                <span className="font-medium truncate">ayanaklekar1@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-slate-500 dark:text-zinc-400 pt-1">
                <Globe className="w-3.5 h-3.5 text-blue-600/80 dark:text-blue-400/80 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">Al Baraha, Deira, Dubai, UAE (GST)</span>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2.5">
                <a
                  href="https://linkedin.com/in/ayanaklekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/30 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/ayanaklekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/30 transition-colors"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@AyanFreelancer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/30 transition-colors"
                  aria-label="Medium"
                  title="Medium"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 dark:text-zinc-400">
          <div>
            © 2026 Ayan Aklekar. All rights reserved.
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <span>Al Baraha, Deira, Dubai (UAE)</span>
            <span className="text-slate-300 dark:text-zinc-600">•</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-slate-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
