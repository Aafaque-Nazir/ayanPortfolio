"use client";

import React from "react";
import { PLAYBOOK_STEPS } from "@/data/portfolioData";

export default function Playbook() {
  return (
    <section id="process" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800 gap-2">
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
              Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              How I Work
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            4 simple steps from diagnosis to steady leads.
          </p>
        </div>

        {/* 4 Clean Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLAYBOOK_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white dark:bg-[#0c0c0e] rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
                  {step.step}
                </div>

                <div>
                  <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {step.tagline}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 font-mono text-xs">
                  {step.tactics.map((tactic: string, tIdx: number) => (
                    <li key={tIdx} className="text-zinc-600 dark:text-zinc-400 text-[11px] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
