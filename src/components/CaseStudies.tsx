"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from "react";
import {
  CASE_STUDIES,
  VERIFIED_PROOFS,
  CaseStudy,
} from "@/data/portfolioData";
import {
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
  Lock,
  ZoomIn,
  ZoomOut,
  ChevronRight,
} from "lucide-react";

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"featured" | "proofs">("featured");
  const [featuredView, setFeaturedView] = useState<"proof" | "chart" | "table">("proof");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<{
    url: string;
    title: string;
    caption: string;
    metric?: string;
    metricLabel?: string;
    platform?: string;
    commercialOutcome?: string;
    whyItMatters?: string;
  } | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImage(null);
        setIsZoomed(false);
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

  // SVG dimensions for chart
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

  const openProofModal = (customProof?: {
    url: string;
    title: string;
    caption: string;
    metric?: string;
    metricLabel?: string;
    platform?: string;
    commercialOutcome?: string;
    whyItMatters?: string;
  }) => {
    setIsZoomed(false);
    if (customProof) {
      setModalImage(customProof);
      return;
    }
    if (!activeCase.screenshotUrl) return;
    setModalImage({
      url: activeCase.screenshotUrl,
      title: activeCase.clientName,
      caption: activeCase.screenshotCaption || activeCase.title,
      metric: activeCase.headlineMetric,
      metricLabel: activeCase.headlineMetricLabel,
      platform: activeCase.discipline,
      commercialOutcome: activeCase.proofExplainer?.plainEnglishMeaning,
      whyItMatters: activeCase.proofExplainer?.whyItMatters,
    });
  };

  return (
    <section
      id="work"
      className="py-14 sm:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header: Clean Editorial Typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Case Studies &amp; Performance Audits</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span>Google Verified</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              Real Client Growth &amp; Results
            </h2>
          </div>

          {/* Section View Switcher */}
          <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                activeTab === "featured"
                  ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Featured ({CASE_STUDIES.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("proofs")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                activeTab === "proofs"
                  ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>All Proofs ({VERIFIED_PROOFS.length})</span>
            </button>
          </div>
        </div>

        {/* -------------------- TAB 1: FEATURED CASE STUDIES -------------------- */}
        {activeTab === "featured" && (
          <div className="space-y-6 sm:space-y-8 animate-fade-slide-up">
            {/* Case Studies Selector Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
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
                    className={`text-left p-3.5 sm:p-4 rounded-xl border text-xs cursor-pointer transition-all duration-150 relative overflow-hidden ${
                      isSelected
                        ? "bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-950 dark:border-zinc-100 shadow-md"
                        : "bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] mb-1.5">
                      <span
                        className={
                          isSelected
                            ? "text-zinc-400 dark:text-zinc-600"
                            : "text-zinc-500 dark:text-zinc-400"
                        }
                      >
                        {"0" + (index + 1) + " / " + (study.discipline === "Google Business Profile" ? "Maps" : "SEO")}
                      </span>
                      <span className="font-bold font-mono text-emerald-400 dark:text-emerald-700">
                        {study.headlineMetric}
                      </span>
                    </div>
                    <div className="font-bold text-xs sm:text-sm truncate">{study.clientName}</div>
                    <div
                      className={`text-[10px] sm:text-[11px] truncate flex items-center gap-1 mt-1 ${
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

            {/* Active Case Detail Showcase */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-5 sm:p-7 md:p-8 transition-colors duration-200 shadow-xs space-y-6 sm:space-y-7">
              {/* Top Row: Case Overview & Headline Stat */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {activeCase.discipline}
                    </span>
                    <span>•</span>
                    <span>{activeCase.location}</span>
                    <span>•</span>
                    <span>{activeCase.timeline}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
                    {activeCase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                    {activeCase.summary}
                  </p>
                </div>

                <div className="lg:text-right shrink-0 bg-white dark:bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-mono">
                    {activeCase.headlineMetric}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider mt-1">
                    {activeCase.headlineMetricLabel}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                    Organic Performance • {activeCase.timeline}
                  </div>
                </div>
              </div>

              {/* The 4 Key Verified Deliverables Grid (Full Width, Zero Dead Space) */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
                  Verified Deliverables &amp; Outcomes
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activeCase.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                    >
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-1 truncate">
                        {res.label}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-50 font-mono">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Balanced Columns: Strategic Context (Left) vs Evidence Studio (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left 6 cols: Problem, Solution & Business Impact */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    {/* The Challenge */}
                    <div className="bg-white dark:bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs space-y-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                        The Challenge
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {activeCase.challenge}
                      </p>
                    </div>

                    {/* Strategy & Execution */}
                    <div className="bg-white dark:bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs space-y-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-950 dark:text-zinc-100 font-semibold">
                        Strategy &amp; Execution
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {activeCase.solution}
                      </p>
                    </div>

                    {/* Commercial Impact */}
                    <div className="bg-white dark:bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                        Commercial Impact
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                        {activeCase.proofExplainer?.plainEnglishMeaning ||
                          "Direct live screenshot proof capturing authentic customer inquiries without ad spend."}
                      </p>
                    </div>
                  </div>

                  {/* Key Takeaway Quote */}
                  <div className="p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-medium italic">
                    &ldquo;{activeCase.keyTakeaway}&rdquo;
                  </div>
                </div>

                {/* Right 6 cols: Visual Evidence Studio (Proof / Chart / Numbers) */}
                <div className="lg:col-span-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 sm:p-5 flex flex-col justify-between shadow-2xs space-y-4">
                  <div>
                    {/* View Switcher Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-200 dark:border-zinc-800 gap-2.5">
                      <div className="text-xs font-mono font-bold text-zinc-950 dark:text-zinc-50">
                        {featuredView === "proof" && "Verified Dashboard Capture"}
                        {featuredView === "chart" && "Monthly Performance Trajectory"}
                        {featuredView === "table" && "Monthly Breakdown Data"}
                      </div>

                      <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono self-start sm:self-auto">
                        {activeCase.screenshotUrl && (
                          <button
                            type="button"
                            onClick={() => setFeaturedView("proof")}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                              featuredView === "proof"
                                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
                            }`}
                          >
                            <span>Dashboard Proof</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setFeaturedView("chart")}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                            featuredView === "chart"
                              ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
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
                                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
                            }`}
                          >
                            <TableIcon className="w-3 h-3" />
                            <span>Numbers</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* VIEW 1: Live Proof Showcase */}
                    {featuredView === "proof" && activeCase.screenshotUrl && (
                      <div className="space-y-3.5 animate-fade-slide-up">
                        {/* Minimalist Dashboard Screen Frame */}
                        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-950 shadow-sm">
                          {/* Clean Header Bar */}
                          <div className="bg-zinc-900/90 border-b border-zinc-800 px-3 py-2 flex items-center justify-between text-[10px] font-mono">
                            <div className="flex items-center gap-1.5 text-zinc-400 truncate max-w-[220px]">
                              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate">
                                https://{activeCase.proofExplainer?.dashboardUrl || "google.com"}
                              </span>
                            </div>
                            <span className="text-zinc-400 shrink-0">Live Audit Capture</span>
                          </div>

                          {/* Image Display Area */}
                          <div
                            onClick={() => openProofModal()}
                            className="relative w-full h-56 sm:h-64 bg-zinc-950 cursor-pointer group overflow-hidden"
                            title="Click to view full resolution"
                          >
                            <img
                              src={activeCase.screenshotUrl}
                              alt={activeCase.clientName}
                              className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300 select-none"
                              loading="lazy"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950 text-white text-xs font-mono px-3.5 py-1.5 rounded-lg flex items-center gap-2 shadow-lg border border-zinc-700">
                                <Maximize2 className="w-3.5 h-3.5 text-white" />
                                <span>Inspect Full Resolution</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Highlight Metrics */}
                        {activeCase.proofExplainer?.highlights && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px]">
                            {activeCase.proofExplainer.highlights.map((hl, i) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center"
                              >
                                <span className="font-bold text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 block font-mono">
                                  {hl.value}
                                </span>
                                <span className="text-zinc-500 dark:text-zinc-400 text-[9px] block truncate mt-0.5">
                                  {hl.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action buttons */}
                        <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2.5 text-xs">
                          <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-mono">
                            Direct unedited screenshot
                          </span>

                          <div className="flex items-center gap-2">
                            <a
                              href={activeCase.screenshotUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 text-[11px] font-mono hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors inline-flex items-center gap-1"
                            >
                              <span>Original</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <button
                              type="button"
                              onClick={() => openProofModal()}
                              className="px-3 py-1 rounded-md bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-[11px] font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-all cursor-pointer shadow-xs flex items-center gap-1"
                            >
                              <Maximize2 className="w-3 h-3" />
                              <span>Inspect HD Proof</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VIEW 2: Growth Chart View */}
                    {featuredView === "chart" && (
                      <div className="space-y-3.5 animate-fade-slide-up">
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
                              className="fill-emerald-100/50 dark:fill-emerald-950/30"
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
                                      r="8"
                                      fill="none"
                                      className="stroke-emerald-500 dark:stroke-emerald-300 transition-all duration-150"
                                      strokeWidth="2"
                                    />
                                  )}
                                  <circle
                                    cx={pt.x}
                                    cy={pt.y}
                                    r={isHovered ? "5" : "3.5"}
                                    className={`transition-all duration-150 ${
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
                                    className="fill-zinc-600 dark:fill-zinc-400 select-none font-semibold"
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
                            <div className="text-zinc-500 dark:text-zinc-400 text-xs font-mono flex items-center justify-between">
                              <span>Hover or tap any data point on the line to view milestone.</span>
                              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                            </div>
                          )}
                        </div>

                        {/* Switcher Banner */}
                        {activeCase.screenshotUrl && (
                          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 text-xs">
                            <span className="text-zinc-600 dark:text-zinc-400 font-medium text-[11px]">
                              Want to inspect the raw unedited Google dashboard photo?
                            </span>
                            <button
                              type="button"
                              onClick={() => setFeaturedView("proof")}
                              className="inline-flex items-center gap-1 font-mono text-emerald-700 dark:text-emerald-400 font-semibold hover:underline cursor-pointer shrink-0"
                            >
                              <span>View Dashboard Proof</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* VIEW 3: Table View */}
                    {featuredView === "table" && activeCase.monthlyTable && (
                      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 animate-fade-slide-up">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-800">
                            <tr>
                              <th className="py-2.5 px-3 font-semibold">Month</th>
                              <th className="py-2.5 px-3 font-semibold">Interactions</th>
                              <th className="py-2.5 px-3 font-semibold">Calls</th>
                              <th className="py-2.5 px-3 font-semibold">Directions</th>
                              <th className="py-2.5 px-3 font-semibold">Clicks</th>
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
                                      ? "bg-zinc-100/80 dark:bg-zinc-900 font-bold text-zinc-950 dark:text-zinc-50"
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

                  {/* Right Column Bottom Footer */}
                  <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="truncate max-w-[200px]">{activeCase.clientName}</span>
                    <button
                      type="button"
                      onClick={() => openProofModal()}
                      className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 font-semibold hover:underline cursor-pointer shrink-0"
                    >
                      <span>Full Proof View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------- TAB 2: ALL 7 VERIFIED PROOFS & GSC AUDITS -------------------- */}
        {activeTab === "proofs" && (
          <div className="space-y-6 animate-fade-slide-up">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
              <span className="text-zinc-600 dark:text-zinc-300">
                Direct snapshots from Google Business Profile, Google Search Console, and Medium.
              </span>
              <span className="text-zinc-400 shrink-0">
                {VERIFIED_PROOFS.length} Verified Records
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {VERIFIED_PROOFS.map((proof) => (
                <div
                  key={proof.id}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-150 shadow-xs group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 font-mono text-[11px]">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {proof.platform}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {proof.timeframe}
                      </span>
                    </div>

                    {/* Screenshot Preview Image */}
                    <div
                      onClick={() =>
                        openProofModal({
                          url: proof.screenshotUrl,
                          title: proof.title,
                          caption: proof.summary,
                          metric: proof.headlineMetric,
                          metricLabel: proof.headlineMetricLabel,
                          platform: proof.platform,
                          commercialOutcome: proof.plainEnglishImpact,
                        })
                      }
                      className="relative w-full h-44 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 cursor-pointer shadow-2xs group/img"
                    >
                      <img
                        src={proof.screenshotUrl}
                        alt={proof.title}
                        className="w-full h-full object-cover object-top group-hover/img:scale-102 transition-transform duration-200 select-none"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover/img:bg-black/40 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-zinc-950 text-white text-[11px] font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md border border-zinc-700">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect Proof</span>
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

                    {/* Headline Metric Card */}
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between font-mono">
                      <div>
                        <div className="text-xl font-extrabold text-zinc-950 dark:text-zinc-50">
                          {proof.headlineMetric}
                        </div>
                        <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold uppercase">
                          {proof.headlineMetricLabel}
                        </div>
                      </div>
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    {/* Commercial Outcome */}
                    {proof.plainEnglishImpact && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                          Commercial Outcome:
                        </span>
                        <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          {proof.plainEnglishImpact}
                        </p>
                      </div>
                    )}

                    {/* Secondary Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                      {proof.secondaryMetrics.map((sec, i) => (
                        <div
                          key={i}
                          className="p-2 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800"
                        >
                          <span className="text-zinc-500 dark:text-zinc-400 text-[10px] block truncate">
                            {sec.label}
                          </span>
                          <span className="font-bold text-zinc-950 dark:text-zinc-50">
                            {sec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                      {proof.summary}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 mt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
                    <button
                      type="button"
                      onClick={() =>
                        openProofModal({
                          url: proof.screenshotUrl,
                          title: proof.title,
                          caption: proof.summary,
                          metric: proof.headlineMetric,
                          metricLabel: proof.headlineMetricLabel,
                          platform: proof.platform,
                          commercialOutcome: proof.plainEnglishImpact,
                        })
                      }
                      className="text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      <span>Inspect Proof</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>

                    {proof.externalLink && (
                      <a
                        href={proof.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
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

        {/* -------------------- LIGHTBOX INSPECTION STUDIO MODAL -------------------- */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={() => {
              setModalImage(null);
              setIsZoomed(false);
            }}
          >
            <div
              className="relative w-full max-w-5xl bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col shadow-2xl overflow-hidden max-h-[94vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="font-mono text-xs font-bold text-zinc-400 shrink-0">
                    {modalImage.platform || "Audit Proof"}
                  </span>
                  <span className="text-zinc-700">•</span>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-[180px] sm:max-w-md">
                    {modalImage.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {modalImage.metric && (
                    <span className="hidden sm:inline text-xs font-mono font-bold text-emerald-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                      {modalImage.metric} {modalImage.metricLabel}
                    </span>
                  )}

                  {/* Zoom Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs font-mono flex items-center gap-1"
                    title={isZoomed ? "Reset Zoom" : "Zoom In (150%)"}
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden sm:inline">Fit Screen</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden sm:inline">Zoom 150%</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setModalImage(null);
                      setIsZoomed(false);
                    }}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Area - Clean canvas, smooth zoom, click-to-toggle */}
              <div className="relative w-full flex-1 min-h-[280px] max-h-[60vh] sm:max-h-[68vh] bg-[#0c0c0e] flex items-center justify-center p-3 sm:p-5 overflow-auto">
                <img
                  src={modalImage.url}
                  alt={modalImage.title}
                  className={`max-w-full w-auto object-contain mx-auto transition-transform duration-200 select-none rounded-lg shadow-xl ${
                    isZoomed
                      ? "scale-125 sm:scale-150 cursor-zoom-out origin-center"
                      : "max-h-[54vh] sm:max-h-[64vh] cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  loading="eager"
                  title="Click image to toggle zoom"
                />
              </div>

              {/* Modal Bottom Bar: Professional Commercial Outcome */}
              <div className="p-4 bg-zinc-900 border-t border-zinc-800 shrink-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 max-w-2xl">
                    <div className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                      Commercial Outcome
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed font-sans">
                      {modalImage.commercialOutcome || modalImage.caption}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto font-mono text-xs">
                    <a
                      href={modalImage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white font-medium hover:bg-zinc-800 transition-colors"
                    >
                      <span>Original File</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setModalImage(null);
                        setIsZoomed(false);
                      }}
                      className="px-4 py-1.5 rounded-lg bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      Close (Esc)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
