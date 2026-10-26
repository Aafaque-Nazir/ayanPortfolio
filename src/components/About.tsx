"use client";

import React from "react";
import { GraduationCap, Briefcase, MapPin, Search, TrendingUp, Globe, Share2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "SEO & Google Maps",
      desc: "Ranking your business in the Google Maps Top 3 and search results so local customers call you first.",
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Meta Ads",
      desc: "Targeted Facebook and Instagram campaigns built to generate customer inquiries, calls, and direct sales.",
    },
    {
      icon: <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Social Media",
      desc: "Planning monthly content, designing posts, and growing an engaged brand following across Instagram & LinkedIn.",
    },
    {
      icon: <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "WordPress Websites",
      desc: "Fast, clean websites built to rank on search engines and turn site visitors into paying customers.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Clean Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
            About Me
          </h2>
        </div>

        {/* Narrative without Jargon */}
        <div className="space-y-4 text-slate-700 dark:text-zinc-300">
          <p className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-zinc-200">
            I&apos;m <span className="font-bold text-slate-900 dark:text-zinc-100">Ayan Aklekar</span>, a digital marketer with 2+ years of experience helping businesses get found on Google, run profitable Meta ads, and grow their presence online.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-400">
            I graduated with a Marketing degree (BMS) from the University of Mumbai in 2023. Currently, I work as a Digital Marketing Executive at ITxSential, while also working directly with client businesses across Dubai, India, and internationally.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-400">
            My work focuses on what actually brings in business: Google Maps Top 3 rankings, SEO, targeted Facebook &amp; Instagram ads, and fast WordPress websites. No fluff or complex buzzwords—just clear work that brings real phone calls and inquiries to your business.
          </p>

          {/* 4 Clean Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 pb-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/90 dark:border-zinc-800/80 bg-slate-50/60 dark:bg-[#121215] hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-150 flex items-start gap-3 shadow-2xs group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Authentic Details */}
          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>BMS (Marketing) — University of Mumbai (2023)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Digital Marketing Executive at ITxSential</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Dubai, UAE &amp; Mumbai, India</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
