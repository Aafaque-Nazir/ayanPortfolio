"use client";

import React from "react";
import { PLAYBOOK_STEPS } from "@/data/portfolioData";

export default function Playbook() {
  return (
    <section id="process" className="py-12 sm:py-16 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 dark:border-zinc-800 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              How I Work
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            4 simple steps from diagnosis to steady leads.
          </p>
        </div>

        {/* 4 Clean Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLAYBOOK_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white dark:bg-[#0c0c0e] rounded-2xl border border-slate-200/90 dark:border-zinc-800 p-5 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-none transition-all duration-200 shadow-2xs group"
            >
              <div className="space-y-3">
                <div className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 pb-2 border-b border-slate-100 dark:border-zinc-800/80">
                  {step.step}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {step.tagline}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-zinc-800/80 font-mono text-xs">
                  {step.tactics.map((tactic: string, tIdx: number) => (
                    <li key={tIdx} className="text-slate-600 dark:text-zinc-400 text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
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
