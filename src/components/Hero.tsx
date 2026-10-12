"use client";

import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Hero() {
  return (
    <section className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#09090B] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Direct, Simple Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-[1.15]">
              I help businesses rank on Google and grow on social media.
            </h1>

            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed max-w-xl">
              Get steady traffic from Google search and build an active, loyal following on your social media — without spending thousands on paid ads every month.
            </p>

            {/* Simple Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group"
              >
                <span>Get a Free Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer group shadow-2xs"
              >
                <span>See My Results</span>
                <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column: Simple Results Card */}
          <div className="lg:col-span-5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/90 dark:bg-zinc-900/90 p-6 md:p-7 space-y-5 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-600 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-700/80 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                PROVEN RESULTS
              </span>
              <span className="font-medium text-zinc-600 dark:text-zinc-400">REAL CLIENT DATA</span>
            </div>

            <div className="space-y-3.5 font-mono text-xs">
              <div className="flex items-baseline justify-between py-1.5 px-2 -mx-2 rounded border-b border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 transition-colors duration-150">
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">01 Local Google Map Actions</span>
                <span className="text-zinc-950 dark:text-zinc-50 font-bold text-sm">3,723+ Verified</span>
              </div>

              <div className="flex items-baseline justify-between py-1.5 px-2 -mx-2 rounded border-b border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 transition-colors duration-150">
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">02 24-Hour Search Spike</span>
                <span className="text-zinc-950 dark:text-zinc-50 font-bold text-sm">20,200 Clicks / 24h</span>
              </div>

              <div className="flex items-baseline justify-between py-1.5 px-2 -mx-2 rounded border-b border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 transition-colors duration-150">
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">03 Google Search Impressions</span>
                <span className="text-zinc-950 dark:text-zinc-50 font-bold text-sm">506,000+ Impressions</span>
              </div>

              <div className="flex items-baseline justify-between py-1.5 px-2 -mx-2 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 transition-colors duration-150">
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">04 How We Work</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">1-on-1 Direct</span>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-700/80 text-[11px] text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              No junior staff or agency middle-men. You talk directly with me from strategy to execution.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
