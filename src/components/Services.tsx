"use client";

import React from "react";
import { SERVICES } from "@/data/portfolioData";
import { ArrowUpRight, Check } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Services() {
  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <section id="services" className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-zinc-200 dark:border-zinc-700/80">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-300 font-semibold mb-1.5">
              Services
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              How We Can Work Together
            </h2>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 font-mono mt-2 sm:mt-0 font-medium">
            Clear deliverables, no hidden fees, and you talk directly with me.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50/90 dark:bg-zinc-900/90 p-6 md:p-7 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-700/80 font-mono text-[11px]">
                  <span className="font-bold text-zinc-950 dark:text-zinc-50">Plan {service.number}</span>
                  <span className="text-zinc-600 dark:text-zinc-300 font-semibold uppercase">{service.cadence}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 mb-1.5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4 font-medium">
                  {service.tagline}
                </p>

                <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-[11px] font-mono uppercase text-zinc-950 dark:text-zinc-100 font-bold mb-3">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-800 dark:text-zinc-200">
                        <Check className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-200 dark:border-zinc-700/80">
                <div className="text-[11px] font-mono text-zinc-600 dark:text-zinc-300 mb-4">
                  <span className="font-semibold text-zinc-950 dark:text-zinc-50">Best for: </span>
                  {service.bestFor}
                </div>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-zinc-950 dark:border-zinc-100 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-xs cursor-pointer group/btn"
                >
                  <span>Ask About This Plan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
