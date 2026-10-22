"use client";

import React from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-5 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-1">
            About
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            About Me
          </h2>
        </div>

        {/* Short & Crisp Narrative */}
        <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            I&apos;m an SEO specialist and digital marketer based in Al Baraha, Deira, Dubai. I graduated with a Bachelor of Management Studies in Marketing from the University of Mumbai (2023) and work as a Digital Marketing Executive at ITxSential, while also taking on client projects across the UAE and globally.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            My work is straightforward: I help local businesses and websites get discovered on Google Maps and Search by real customers, without relying on paid advertising.
          </p>

          {/* Authentic Details */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
              <span>BMS (Marketing) — University of Mumbai</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
              <span>Digital Marketing Executive at ITxSential</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Al Baraha, Deira, Dubai</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
