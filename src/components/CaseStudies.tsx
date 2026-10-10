"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolioData";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);

  const activeCase: CaseStudy =
    CASE_STUDIES.find((cs) => cs.id === selectedCaseId) || CASE_STUDIES[0];

  // SVG dimensions for compact fit
  const maxTraffic = Math.max(...activeCase.graphData.map((d) => d.traffic));
  const minTraffic = Math.min(...activeCase.graphData.map((d) => d.traffic)) * 0.8;
  const graphWidth = 520;
  const graphHeight = 180;
  const paddingX = 35;
  const paddingY = 25;

  const points = activeCase.graphData.map((d, index) => {
    const x =
      paddingX +
      (index / (activeCase.graphData.length - 1)) * (graphWidth - paddingX * 2);
    const normalizedY = (d.traffic - minTraffic) / (maxTraffic - minTraffic || 1);
    const y = graphHeight - paddingY - normalizedY * (graphHeight - paddingY * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1].x} ${
    graphHeight - paddingY
  } L ${points[0].x} ${graphHeight - paddingY} Z`;

  return (
    <section id="work" className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1.5">
              Case Studies
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Real Client Results
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-2 sm:mt-0">
            Real data from real projects. Measured in visits, views, and leads.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {CASE_STUDIES.map((study, index) => {
            const isSelected = study.id === selectedCaseId;
            return (
              <button
                key={study.id}
                type="button"
                onClick={() => {
                  setSelectedCaseId(study.id);
                  setHoveredPointIndex(null);
                }}
                className={`text-left p-4 rounded-xl border text-xs cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs"
                    : "bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 active:scale-[0.99] text-zinc-600 dark:text-zinc-400"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                  <span className={isSelected ? "text-zinc-300 dark:text-zinc-600 font-medium" : "text-zinc-500 dark:text-zinc-400"}>
                    {"0" + (index + 1) + ". " + study.discipline}
                  </span>
                  <span className="font-semibold">{study.headlineMetric}</span>
                </div>
                <div className="font-semibold truncate text-sm">
                  {study.clientCategory}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 md:p-8 transition-colors duration-200">
          {/* Card Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {activeCase.clientCategory} • {activeCase.timeline}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1">
                {activeCase.title}
              </h3>
            </div>

            <div className="sm:text-right">
              <div className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                {activeCase.headlineMetric}
              </div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {activeCase.headlineMetricLabel}
              </div>
            </div>
          </div>

          {/* Grid: Context & Interactive Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 6 cols: Problem, Solution, Results */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                  What Was Wrong:
                </div>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 border-l-2 border-l-zinc-900 dark:border-l-zinc-100">
                  {activeCase.challenge}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-semibold mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>What I Did:</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>

              {/* 4 Metric Boxes */}
              <div className="pt-1">
                <div className="grid grid-cols-2 gap-2.5">
                  {activeCase.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                        {res.label}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 cols: SVG Graph & Milestone Box */}
            <div className="lg:col-span-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-mono">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Month-by-Month Growth
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">Click points for details</span>
                </div>

                {/* SVG Line Graph */}
                <div className="bg-zinc-50/50 dark:bg-zinc-950/60 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 p-2">
                  <svg
                    viewBox={`0 0 ${graphWidth} ${graphHeight}`}
                    className="w-full h-auto overflow-visible"
                  >
                    {[0.33, 0.66].map((fraction, i) => {
                      const yVal =
                        paddingY + fraction * (graphHeight - paddingY * 2);
                      return (
                        <line
                          key={i}
                          x1={paddingX}
                          y1={yVal}
                          x2={graphWidth - paddingX}
                          y2={yVal}
                          className="stroke-zinc-200 dark:stroke-zinc-800"
                          strokeDasharray="3 3"
                          strokeWidth="1"
                        />
                      );
                    })}

                    <path
                      d={areaD}
                      className="fill-zinc-200/50 dark:fill-zinc-800/40"
                    />
                    <path
                      d={pathD}
                      fill="none"
                      className="stroke-zinc-900 dark:stroke-zinc-100"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {points.map((pt, idx) => {
                      const isHovered = hoveredPointIndex === idx;
                      return (
                        <g
                          key={idx}
                          className="cursor-pointer group"
                          onClick={() => setHoveredPointIndex(idx)}
                          onMouseEnter={() => setHoveredPointIndex(idx)}
                        >
                          {isHovered && (
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="8"
                              fill="none"
                              className="stroke-zinc-900 dark:stroke-zinc-100 transition-all duration-200"
                              strokeWidth="1.5"
                            />
                          )}
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isHovered ? "4" : "3"}
                            className={`transition-all duration-200 ${
                              isHovered
                                ? "fill-zinc-900 dark:fill-zinc-100"
                                : "fill-zinc-600 dark:fill-zinc-400 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-200"
                            }`}
                          />
                          <text
                            x={pt.x}
                            y={graphHeight - 6}
                            textAnchor="middle"
                            fontSize="9"
                            fontFamily="monospace"
                            className="fill-zinc-500 dark:fill-zinc-400 select-none"
                          >
                            {pt.month}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Milestone Detail Box */}
                <div className="mt-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-xs min-h-[52px] flex flex-col justify-center overflow-hidden">
                  {hoveredPointIndex !== null ? (
                    <div key={hoveredPointIndex} className="animate-fade-slide-up">
                      <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold block">
                        {points[hoveredPointIndex].month}:
                      </span>
                      <span className="text-zinc-900 dark:text-zinc-100 font-medium text-[11px]">
                        {points[hoveredPointIndex].milestone ||
                          "Traffic and rankings increased steadily."}
                      </span>
                    </div>
                  ) : (
                    <div className="text-zinc-500 dark:text-zinc-400 text-[11px] font-mono flex items-center justify-between">
                      <span>Click any point on the chart to see what happened that month.</span>
                      <ArrowRight className="w-3 h-3 text-zinc-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Takeaway line */}
              <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 italic">
                &ldquo;{activeCase.keyTakeaway}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
