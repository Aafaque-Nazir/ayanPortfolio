"use client";

import React from "react";
import { PLAYBOOK_STEPS } from "@/data/portfolioData";
import { Check } from "lucide-react";

export default function Playbook() {
  return (
    <section id="process" className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#09090B]/50 scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1.5">
              How I Work
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Simple 4-Step Process
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-2 sm:mt-0">
            A clear plan to fix errors, publish content, and get more customers.
          </p>
        </div>

        {/* 4 Clean Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLAYBOOK_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 hover:shadow-md transition-all duration-200 shadow-2xs group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80 font-mono text-[11px]">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                    STEP {step.step}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500 uppercase">PHASE</span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                  {step.tagline}
                </p>

                <ul className="space-y-2.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-3.5">
                  {step.tactics.map((tactic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
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
