"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CASE_STUDIES,
  VERIFIED_PROOFS,
  CaseStudy,
} from "@/data/portfolioData";
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  ExternalLink,
  ShieldCheck,
  Table as TableIcon,
  LineChart as LineChartIcon,
  MapPin,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"featured" | "proofs">("featured");
  const [featuredView, setFeaturedView] = useState<"chart" | "table">("chart");
  const [modalImage, setModalImage] = useState<{
    url: string;
    title: string;
    caption: string;
    metric?: string;
    metricLabel?: string;
    platform?: string;
  } | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };
    if (modalImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalImage]);

  const activeCase: CaseStudy =
    CASE_STUDIES.find((cs) => cs.id === selectedCaseId) || CASE_STUDIES[0];

  // SVG dimensions for compact fit
  const maxTraffic = Math.max(...activeCase.graphData.map((d) => d.traffic));
  const minTraffic = Math.min(...activeCase.graphData.map((d) => d.traffic)) * 0.7;
  const graphWidth = 540;
  const graphHeight = 180;
  const paddingX = 40;
  const paddingY = 25;

  const points = activeCase.graphData.map((d, index) => {
    const x =
      paddingX +
      (index / (activeCase.graphData.length - 1 || 1)) * (graphWidth - paddingX * 2);
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
    <section
      id="work"
      className="py-14 md:py-20 border-b border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-zinc-200 dark:border-zinc-700/80 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Client Performance
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                Live Google Data
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              Real Client Growth &amp; Results
            </h2>
          </div>

          {/* Section View Switcher */}
          <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "featured"
                  ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-2xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>In-Depth Cases</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("proofs")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "proofs"
                  ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-2xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>All 7 Verified Proofs ({VERIFIED_PROOFS.length})</span>
            </button>
          </div>
        </div>

        {/* -------------------- TAB 1: FEATURED IN-DEPTH CASE STUDIES -------------------- */}
        {activeTab === "featured" && (
          <div className="space-y-8 animate-fade-slide-up">
            {/* Case Study Switcher Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                    className={`text-left p-4 rounded-xl border text-xs cursor-pointer transition-all duration-200 relative overflow-hidden ${
                      isSelected
                        ? "bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-950 dark:border-zinc-100 shadow-md -translate-y-0.5"
                        : "bg-zinc-100/80 dark:bg-zinc-900/90 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-0.5 text-zinc-700 dark:text-zinc-300 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                      <span
                        className={
                          isSelected
                            ? "text-zinc-300 dark:text-zinc-700 font-semibold"
                            : "text-zinc-600 dark:text-zinc-400 font-medium"
                        }
                      >
                        {"0" + (index + 1) + ". " + study.discipline}
                      </span>
                      <span className="font-bold text-emerald-400 dark:text-emerald-700">
                        {study.headlineMetric}
                      </span>
                    </div>
                    <div className="font-bold text-sm truncate">{study.clientName}</div>
                    <div
                      className={`text-[11px] truncate flex items-center gap-1 mt-0.5 ${
                        isSelected
                          ? "text-zinc-400 dark:text-zinc-600"
                          : "text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{study.location}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Case Study Detail Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/90 dark:bg-zinc-900/90 p-6 md:p-8 transition-colors duration-200 shadow-xs">
              {/* Card Top Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-700/80">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Google Live Data
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {activeCase.location} • {activeCase.timeline}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {activeCase.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {activeCase.summary}
                  </p>
                </div>

                <div className="lg:text-right shrink-0 bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs">
                  <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-mono">
                    {activeCase.headlineMetric}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider mt-0.5">
                    {activeCase.headlineMetricLabel}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    Verified Timeline: {activeCase.timeline}
                  </div>
                </div>
              </div>

              {/* Grid: Context & Visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 6 cols: Problem, Solution, Results */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-bold mb-1.5">
                      The Challenge:
                    </div>
                    <p className="text-xs md:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 border-l-3 border-l-zinc-950 dark:border-l-zinc-100 shadow-2xs">
                      {activeCase.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-950 dark:text-zinc-100 font-bold mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                      <span>Strategy &amp; Execution:</span>
                    </div>
                    <p className="text-xs md:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-2xs">
                      {activeCase.solution}
                    </p>
                  </div>

                  {/* 4 Metric Boxes */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-bold mb-2">
                      Key Verified Deliverables:
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {activeCase.results.map((res, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 shadow-2xs"
                        >
                          <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono font-medium">
                            {res.label}
                          </div>
                          <div className="text-xs md:text-sm font-bold text-zinc-950 dark:text-zinc-50 mt-1 font-mono">
                            {res.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot Thumbnail Callout */}
                  {activeCase.screenshotUrl && (
                    <div className="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() =>
                            setModalImage({
                              url: activeCase.screenshotUrl!,
                              title: activeCase.clientName,
                              caption: activeCase.screenshotCaption || activeCase.title,
                              metric: activeCase.headlineMetric,
                              metricLabel: activeCase.headlineMetricLabel,
                              platform: activeCase.discipline,
                            })
                          }
                          className="relative w-16 h-11 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700 cursor-pointer shrink-0 group shadow-2xs"
                        >
                          <Image
                            src={activeCase.screenshotUrl}
                            alt={activeCase.clientName}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                            sizes="64px"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-950 dark:text-zinc-50 flex items-center gap-1.5">
                            <span>Google Dashboard Screenshot</span>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="text-[11px] text-zinc-600 dark:text-zinc-400">
                            Inspect actual live performance proof photo.
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setModalImage({
                            url: activeCase.screenshotUrl!,
                            title: activeCase.clientName,
                            caption: activeCase.screenshotCaption || activeCase.title,
                            metric: activeCase.headlineMetric,
                            metricLabel: activeCase.headlineMetricLabel,
                            platform: activeCase.discipline,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-all cursor-pointer shadow-xs shrink-0"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Right 6 cols: Growth Chart OR Monthly Breakdown Table */}
                <div className="lg:col-span-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 p-5 md:p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    {/* Switcher: Chart vs Data Table */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-200 dark:border-zinc-700/80">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-950 dark:text-zinc-50">
                        {featuredView === "chart" ? (
                          <>
                            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Month-by-Month Trajectory</span>
                          </>
                        ) : (
                          <>
                            <TableIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Monthly Performance Breakdown Table</span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono">
                        <button
                          type="button"
                          onClick={() => setFeaturedView("chart")}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                            featuredView === "chart"
                              ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-bold shadow-2xs"
                              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950"
                          }`}
                        >
                          <LineChartIcon className="w-3 h-3" />
                          <span>Chart</span>
                        </button>
                        {activeCase.monthlyTable && (
                          <button
                            type="button"
                            onClick={() => setFeaturedView("table")}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                              featuredView === "table"
                                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-bold shadow-2xs"
                                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950"
                            }`}
                          >
                            <TableIcon className="w-3 h-3" />
                            <span>Data Table</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Chart View */}
                    {featuredView === "chart" && (
                      <div className="space-y-4">
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-3">
                          <svg
                            viewBox={`0 0 ${graphWidth} ${graphHeight}`}
                            className="w-full h-auto overflow-visible"
                          >
                            {[0.25, 0.5, 0.75].map((fraction, i) => {
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
                              className="fill-emerald-100/60 dark:fill-emerald-950/40"
                            />
                            <path
                              d={pathD}
                              fill="none"
                              className="stroke-emerald-600 dark:stroke-emerald-400"
                              strokeWidth="2.5"
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
                                      r="9"
                                      fill="none"
                                      className="stroke-emerald-500 dark:stroke-emerald-300 transition-all duration-200"
                                      strokeWidth="2"
                                    />
                                  )}
                                  <circle
                                    cx={pt.x}
                                    cy={pt.y}
                                    r={isHovered ? "5" : "3.5"}
                                    className={`transition-all duration-200 ${
                                      isHovered
                                        ? "fill-emerald-700 dark:fill-emerald-300"
                                        : "fill-zinc-800 dark:fill-zinc-200 group-hover:fill-emerald-600"
                                    }`}
                                  />
                                  <text
                                    x={pt.x}
                                    y={graphHeight - 6}
                                    textAnchor="middle"
                                    fontSize="10"
                                    fontFamily="monospace"
                                    className="fill-zinc-700 dark:fill-zinc-300 select-none font-semibold"
                                  >
                                    {pt.month}
                                  </text>
                                </g>
                              );
                            })}
                          </svg>
                        </div>

                        {/* Interactive Milestone Callout */}
                        <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs min-h-[58px] flex flex-col justify-center">
                          {hoveredPointIndex !== null ? (
                            <div className="animate-fade-slide-up">
                              <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block">
                                {points[hoveredPointIndex].month} Milestone:
                              </span>
                              <span className="text-zinc-950 dark:text-zinc-50 font-medium text-xs mt-0.5 block">
                                {points[hoveredPointIndex].milestone ||
                                  "Steady growth recorded in search visibility and client interactions."}
                              </span>
                            </div>
                          ) : (
                            <div className="text-zinc-600 dark:text-zinc-400 text-xs font-mono flex items-center justify-between">
                              <span>Hover or tap any data point on the line to see milestone details.</span>
                              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Table View */}
                    {featuredView === "table" && activeCase.monthlyTable && (
                      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-800">
                            <tr>
                              <th className="py-2.5 px-3 font-bold">Month</th>
                              <th className="py-2.5 px-3 font-bold">Interactions</th>
                              <th className="py-2.5 px-3 font-bold">Calls</th>
                              <th className="py-2.5 px-3 font-bold">Directions</th>
                              <th className="py-2.5 px-3 font-bold">Clicks</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
                            {activeCase.monthlyTable.map((row, idx) => {
                              const isTotalRow = idx === activeCase.monthlyTable!.length - 1;
                              return (
                                <tr
                                  key={idx}
                                  className={
                                    isTotalRow
                                      ? "bg-emerald-50/70 dark:bg-emerald-950/40 font-bold text-zinc-950 dark:text-zinc-50"
                                      : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                                  }
                                >
                                  <td className="py-2 px-3 whitespace-nowrap">{row.month}</td>
                                  <td className="py-2 px-3 font-semibold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                                    {row.interactions || row.highIntentTotal}
                                  </td>
                                  <td className="py-2 px-3 whitespace-nowrap">{row.phoneCalls || "—"}</td>
                                  <td className="py-2 px-3 whitespace-nowrap">{row.directions || "—"}</td>
                                  <td className="py-2 px-3 whitespace-nowrap">{row.websiteClicks || "—"}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Key Takeaway Quote */}
                  <div className="mt-5 pt-3.5 border-t border-zinc-200 dark:border-zinc-700/80 text-xs text-zinc-700 dark:text-zinc-300 font-medium italic flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>&ldquo;{activeCase.keyTakeaway}&rdquo;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------- TAB 2: ALL 7 VERIFIED PROOFS & GSC AUDITS -------------------- */}
        {activeTab === "proofs" && (
          <div className="space-y-6 animate-fade-slide-up">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-medium">
                  Direct screenshots from <strong>Google Business Profile</strong>, <strong>Google Search Console</strong>, and <strong>Medium Analytics</strong>. Click any card to inspect full dashboard proof.
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                7 Active Case Studies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {VERIFIED_PROOFS.map((proof) => (
                <div
                  key={proof.id}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-700/80 bg-zinc-50/70 dark:bg-zinc-900/80 p-5 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200 shadow-xs group"
                >
                  <div className="space-y-3.5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700">
                        {proof.platform}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        {proof.timeframe}
                      </span>
                    </div>

                    {/* Screenshot Preview Image */}
                    <div
                      onClick={() =>
                        setModalImage({
                          url: proof.screenshotUrl,
                          title: proof.title,
                          caption: proof.summary,
                          metric: proof.headlineMetric,
                          metricLabel: proof.headlineMetricLabel,
                          platform: proof.platform,
                        })
                      }
                      className="relative w-full h-40 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700/80 bg-black/5 dark:bg-black/30 cursor-pointer shadow-2xs group/img"
                    >
                      <Image
                        src={proof.screenshotUrl}
                        alt={proof.title}
                        fill
                        className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/40 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-zinc-950/90 text-white text-[11px] font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect Screenshot</span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Domain */}
                    <div>
                      <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 leading-snug">
                        {proof.title}
                      </h3>
                      <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {proof.clientOrDomain} {proof.location ? `• ${proof.location}` : ""}
                      </div>
                    </div>

                    {/* Headline Metric */}
                    <div className="p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xl font-extrabold font-mono text-zinc-950 dark:text-zinc-50">
                          {proof.headlineMetric}
                        </div>
                        <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase">
                          {proof.headlineMetricLabel}
                        </div>
                      </div>
                      <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400/80" />
                    </div>

                    {/* Secondary Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      {proof.secondaryMetrics.map((sec, i) => (
                        <div
                          key={i}
                          className="p-2 bg-white/70 dark:bg-zinc-950/60 rounded-lg border border-zinc-200 dark:border-zinc-800"
                        >
                          <span className="text-zinc-500 dark:text-zinc-400 text-[10px] block">
                            {sec.label}
                          </span>
                          <span className="font-bold text-zinc-950 dark:text-zinc-50">
                            {sec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                      {proof.summary}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 mt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() =>
                        setModalImage({
                          url: proof.screenshotUrl,
                          title: proof.title,
                          caption: proof.summary,
                          metric: proof.headlineMetric,
                          metricLabel: proof.headlineMetricLabel,
                          platform: proof.platform,
                        })
                      }
                      className="font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      <span>View Proof</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>

                    {proof.externalLink && (
                      <a
                        href={proof.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
                      >
                        <span>Live Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------------------- LIGHTBOX IMAGE MODAL -------------------- */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setModalImage(null)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[92vh] bg-zinc-950 rounded-2xl border border-zinc-800 p-4 sm:p-6 flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-800 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {modalImage.platform || "Verified Screenshot"}
                    </span>
                    {modalImage.metric && (
                      <span className="text-[11px] font-mono text-zinc-400">
                        {modalImage.metric} {modalImage.metricLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {modalImage.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setModalImage(null)}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative flex-grow my-4 min-h-[300px] max-h-[65vh] w-full rounded-xl overflow-hidden bg-black/50 border border-zinc-800/80">
                <Image
                  src={modalImage.url}
                  alt={modalImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>

              {/* Modal Footer Caption */}
              <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0 text-xs font-mono text-zinc-400">
                <p className="line-clamp-2">{modalImage.caption}</p>
                <button
                  type="button"
                  onClick={() => setModalImage(null)}
                  className="self-end sm:self-auto px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-xs font-medium cursor-pointer transition-colors"
                >
                  Close Proof
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
