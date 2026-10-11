"use client";

import React, { useState } from "react";
import { Calculator, ArrowUpRight, TrendingUp } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function GrowthEstimator() {
  const [currentTraffic, setCurrentTraffic] = useState<number>(30000);
  const [domainType, setDomainType] = useState<"saas" | "d2c" | "services">("saas");
  const [strategyFocus, setStrategyFocus] = useState<"seo" | "social" | "hybrid">("hybrid");

  const multipliers = {
    saas: { lift: 3.4, avgCpc: 4.5, convRate: 0.02 },
    d2c: { lift: 4.0, avgCpc: 1.5, convRate: 0.03 },
    services: { lift: 2.8, avgCpc: 6.0, convRate: 0.02 },
  };

  const focusBonus = {
    seo: 1.0,
    social: 1.15,
    hybrid: 1.35,
  };

  const currentConfig = multipliers[domainType];
  const combinedLiftFactor = currentConfig.lift * focusBonus[strategyFocus];
  const projectedTraffic = Math.round(currentTraffic * combinedLiftFactor);
  const incrementalTraffic = projectedTraffic - currentTraffic;
  const estimatedAdEquivalence = Math.round(incrementalTraffic * currentConfig.avgCpc);
  const estimatedInquiries = Math.round(incrementalTraffic * currentConfig.convRate);

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <section id="calculator" className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-700/80 bg-zinc-50/80 dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-zinc-200 dark:border-zinc-700/80">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculator</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Traffic Growth Calculator
            </h2>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 font-mono mt-2 sm:mt-0 font-medium">
            See your estimated 6-month growth without paying for ads.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/90 p-6 md:p-7 space-y-6 transition-colors duration-200 shadow-xs">
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label
                  htmlFor="traffic-range"
                  className="text-xs font-mono uppercase text-zinc-950 dark:text-zinc-50 font-bold"
                >
                  Current Monthly Website Visitors:
                </label>
                <span className="font-mono text-xs font-bold text-zinc-950 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 shadow-2xs">
                  {formatNumber(currentTraffic)} / mo
                </span>
              </div>
              <input
                id="traffic-range"
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={currentTraffic}
                onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-zinc-950 dark:accent-zinc-100"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600 dark:text-zinc-300 font-semibold mt-1.5">
                <span>5,000 / mo</span>
                <span>250,000 / mo</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-950 dark:text-zinc-50 font-bold mb-2.5">
                Your Business Type:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "saas", label: "Software / SaaS" },
                  { key: "d2c", label: "Online Store" },
                  { key: "services", label: "Agency / Services" },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setDomainType(item.key as typeof domainType)}
                    className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg border text-center flex items-center justify-center min-h-[40px] cursor-pointer active:scale-[0.97] transition-all duration-150 ${
                      domainType === item.key
                        ? "bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-950 dark:border-zinc-100 shadow-xs"
                        : "bg-zinc-100/80 dark:bg-zinc-800/80 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-950 dark:text-zinc-50 font-bold mb-2.5">
                What Do You Want to Focus On:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "seo", label: "Google SEO" },
                  { key: "social", label: "Social Media" },
                  { key: "hybrid", label: "Both" },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setStrategyFocus(item.key as typeof strategyFocus)}
                    className={`py-2 px-2 text-[11px] sm:text-xs font-semibold rounded-lg border text-center flex items-center justify-center min-h-[40px] cursor-pointer active:scale-[0.97] transition-all duration-150 ${
                      strategyFocus === item.key
                        ? "bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-950 dark:border-zinc-100 shadow-xs"
                        : "bg-zinc-100/80 dark:bg-zinc-800/80 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/90 p-6 md:p-7 flex flex-col justify-between transition-colors duration-200 shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-zinc-200 dark:border-zinc-700/80 font-mono text-xs">
                <span className="text-zinc-600 dark:text-zinc-300 font-semibold">6-MONTH ESTIMATE</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  GROWTH POTENTIAL
                </span>
              </div>

              <div className="mb-6">
                <div className="text-[11px] font-mono text-zinc-600 dark:text-zinc-300 uppercase font-semibold mb-1">
                  Estimated Monthly Traffic:
                </div>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
                  ~{formatNumber(projectedTraffic)}
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 ml-2.5">
                    (+{Math.round((combinedLiftFactor - 1) * 100)}% Growth)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">
                  <div className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300 uppercase font-semibold">
                    New Monthly Visitors
                  </div>
                  <div className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
                    +{formatNumber(incrementalTraffic)}
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">
                  <div className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300 uppercase font-semibold">
                    Ad Money Saved
                  </div>
                  <div className="text-lg md:text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400 mt-1">
                    ${formatNumber(estimatedAdEquivalence)}
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-0.5 transition-all duration-200 col-span-2 shadow-2xs">
                  <div className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300 uppercase font-semibold">
                    Estimated New Inquiries or Buyers
                  </div>
                  <div className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
                    ~{formatNumber(estimatedInquiries)} Potential Customers
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-xs cursor-pointer group"
            >
              <span>Get a Custom Growth Plan</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
