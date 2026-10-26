"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, useMemo } from "react";
import { VERIFIED_PROOFS, VerifiedProof } from "@/data/portfolioData";
import { scrollToSection, pauseLenis, resumeLenis } from "@/components/SmoothScroll";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Maximize2,
  ShieldCheck,
  X,
  ZoomIn,
  ZoomOut,
  MapPin,
  Calendar,
  Folder,
  Share2,
  Laptop,
} from "lucide-react";

type MainFolder = "seo" | "social" | "wordpress";
type CategoryFilter = "all" | "maps" | "seo" | "content";

export default function CaseStudies() {
  const [openedFolder, setOpenedFolder] = useState<MainFolder | null>(null);
  const [selectedProof, setSelectedProof] = useState<VerifiedProof | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Manage body scroll and pause Lenis while modal is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProof) {
          setSelectedProof(null);
          setIsZoomed(false);
        }
      }
    };

    if (selectedProof) {
      pauseLenis();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      resumeLenis();
      document.body.style.overflow = "unset";
    }

    return () => {
      resumeLenis();
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProof]);

  const handleAuditClick = () => {
    setSelectedProof(null);
    setIsZoomed(false);
    resumeLenis();
    scrollToSection("contact");
  };

  const handleCloseModal = () => {
    setSelectedProof(null);
    setIsZoomed(false);
    resumeLenis();
  };

  const handleOpenFolder = (folder: MainFolder) => {
    setOpenedFolder(folder);
    scrollToSection("case-studies");
  };

  const handleBackToFolders = () => {
    setOpenedFolder(null);
    scrollToSection("case-studies");
  };

  // Filtered proofs according to selected sub-category inside SEO folder
  const filteredProofs = useMemo(() => {
    if (selectedCategory === "all") return VERIFIED_PROOFS;
    if (selectedCategory === "maps") {
      return VERIFIED_PROOFS.filter((p) => p.platform === "Google Business Profile");
    }
    if (selectedCategory === "seo") {
      return VERIFIED_PROOFS.filter((p) => p.platform === "Google Search Console");
    }
    if (selectedCategory === "content") {
      return VERIFIED_PROOFS.filter((p) => p.platform === "Medium Platform");
    }
    return VERIFIED_PROOFS;
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    return {
      all: VERIFIED_PROOFS.length,
      maps: VERIFIED_PROOFS.filter((p) => p.platform === "Google Business Profile").length,
      seo: VERIFIED_PROOFS.filter((p) => p.platform === "Google Search Console").length,
      content: VERIFIED_PROOFS.filter((p) => p.platform === "Medium Platform").length,
    };
  }, []);

  return (
    <section
      id="case-studies"
      className="py-14 sm:py-20 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      {/* Anchor for backward compatibility with #work */}
      <span id="work" className="sr-only" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-200 dark:border-zinc-800 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Client Folders &amp; Case Studies
            </h2>
          </div>

          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Verified analytics across SEO, Social Media, and Web Development.
          </p>
        </div>

        {/* =========================================================================
            STATE 1: MAIN FOLDER CARDS GRID
            ========================================================================= */}
        {openedFolder === null && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* -------------------- FOLDER CARD 1: SEO & GOOGLE SEARCH -------------------- */}
            <div
              onClick={() => handleOpenFolder("seo")}
              className="group rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 sm:p-7 hover:border-blue-500/60 dark:hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-3">
                {/* Folder Meta Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors shadow-2xs">
                    <Folder className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                    {categoryCounts.all} projects
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    SEO &amp; Google Search
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Google Maps rankings, Search Console indexing fixes, and steady organic traffic from real buyers.
                  </p>
                </div>
              </div>

              {/* Card Footer: Explore Folder Action */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-semibold transition-colors">
                  Explore Folder
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1.5 transition-all" />
              </div>
            </div>

            {/* -------------------- FOLDER CARD 2: SOCIAL MEDIA -------------------- */}
            <div
              onClick={() => handleOpenFolder("social")}
              className="group rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 sm:p-7 hover:border-blue-500/60 dark:hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-3">
                {/* Folder Meta Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors shadow-2xs">
                    <Folder className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 font-semibold">
                    Coming Soon
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Social Media
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Organic Instagram follower growth, LinkedIn personal branding, and 16–20 monthly scheduled posts and carousels.
                  </p>
                </div>
              </div>

              {/* Card Footer: Explore Folder Action */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-semibold transition-colors">
                  Explore Folder
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1.5 transition-all" />
              </div>
            </div>

            {/* -------------------- FOLDER CARD 3: WORDPRESS WEBSITES -------------------- */}
            <div
              onClick={() => handleOpenFolder("wordpress")}
              className="group rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 sm:p-7 hover:border-blue-500/60 dark:hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-3">
                {/* Folder Meta Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors shadow-2xs">
                    <Folder className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 font-semibold">
                    Coming Soon
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    WordPress Websites
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Fast custom WordPress builds, mobile-friendly layouts, clean SEO foundations, and WooCommerce setup.
                  </p>
                </div>
              </div>

              {/* Card Footer: Explore Folder Action */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-semibold transition-colors">
                  Explore Folder
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1.5 transition-all" />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 2: OPENED FOLDER VIEW (Inside Folder with Sub-Filters)
            ========================================================================= */}
        {openedFolder !== null && (
          <div className="space-y-6">
            {/* Top Navigation Bar Inside Opened Folder */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-zinc-800">
              {/* Back to All Folders Button */}
              <button
                type="button"
                onClick={handleBackToFolders}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-600 border border-slate-200 dark:bg-zinc-900 dark:hover:bg-blue-950/30 dark:text-zinc-200 dark:hover:text-blue-400 dark:border-zinc-800 dark:hover:border-blue-900/50 text-xs font-mono font-semibold transition-all cursor-pointer shadow-2xs group self-start"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:-translate-x-0.5 transition-transform" />
                <span>All Folders</span>
              </button>

              {/* Folder Switcher Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  onClick={() => setOpenedFolder("seo")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    openedFolder === "seo"
                      ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/20 dark:shadow-blue-900/40"
                      : "bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50"
                  }`}
                >
                  <Folder className="w-3 h-3" />
                  <span>SEO ({categoryCounts.all})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOpenedFolder("social")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    openedFolder === "social"
                      ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/20 dark:shadow-blue-900/40"
                      : "bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50"
                  }`}
                >
                  <Share2 className="w-3 h-3" />
                  <span>Social Media</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOpenedFolder("wordpress")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    openedFolder === "wordpress"
                      ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/20 dark:shadow-blue-900/40"
                      : "bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50"
                  }`}
                >
                  <Laptop className="w-3 h-3" />
                  <span>WordPress</span>
                </button>
              </div>
            </div>

            {/* -------------------- 1. INSIDE SEO FOLDER -------------------- */}
            {openedFolder === "seo" && (
              <div className="space-y-6">
                {/* Sub-Filters inside SEO Folder */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {[
                    { id: "all", label: "All SEO", count: categoryCounts.all },
                    { id: "maps", label: "Google Maps & Local", count: categoryCounts.maps },
                    { id: "seo", label: "Google Search SEO", count: categoryCounts.seo },
                    { id: "content", label: "Content & Audience", count: categoryCounts.content },
                  ].map((subTab) => {
                    const isActive = selectedCategory === subTab.id;
                    return (
                      <button
                        key={subTab.id}
                        type="button"
                        onClick={() => setSelectedCategory(subTab.id as CategoryFilter)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                          isActive
                            ? "bg-blue-600 text-white font-semibold shadow-xs shadow-blue-500/20 dark:shadow-blue-900/40"
                            : "bg-slate-50 dark:bg-zinc-900/60 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50"
                        }`}
                      >
                        <span>{subTab.label}</span>
                        <span
                          className={`text-[11px] font-mono ${
                            isActive
                              ? "text-blue-100 font-normal"
                              : "text-slate-400 dark:text-zinc-500"
                          }`}
                        >
                          ({subTab.count})
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Direct Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProofs.map((proof) => (
                    <div
                      key={proof.id}
                      onClick={() => {
                        setSelectedProof(proof);
                        setIsZoomed(false);
                      }}
                      className="group rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] hover:border-blue-500/60 dark:hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xs"
                    >
                      <div>
                        {/* Clean Screenshot Window */}
                        <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-zinc-950 overflow-hidden border-b border-slate-200 dark:border-zinc-800">
                          <img
                            src={proof.screenshotUrl}
                            alt={proof.title}
                            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300 select-none"
                            loading="lazy"
                          />

                          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-600/95 text-white border border-blue-400/50 shadow-md backdrop-blur-xs">
                              <Maximize2 className="w-3 h-3 text-blue-100" />
                              <span>View Screenshot</span>
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 sm:p-5 space-y-3">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              {proof.platform === "Google Business Profile"
                                ? "Google Maps"
                                : proof.platform === "Google Search Console"
                                ? "Search Console"
                                : "Medium"}
                            </span>
                            <span>{proof.location || proof.clientCategory}</span>
                          </div>

                          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                            {proof.title}
                          </h3>

                          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                            {proof.summary}
                          </p>
                        </div>
                      </div>

                      {/* Result Box */}
                      <div className="p-4 sm:p-5 pt-0">
                        <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex items-center justify-between">
                          <div>
                            <div className="text-base sm:text-lg font-mono font-black text-blue-600 dark:text-blue-400 leading-tight">
                              {proof.headlineMetric}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                              {proof.headlineMetricLabel}
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all">
                            <span>Details</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* -------------------- 2. INSIDE SOCIAL MEDIA FOLDER -------------------- */}
            {openedFolder === "social" && (
              <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 sm:p-10 space-y-6 shadow-2xs">
                <div className="max-w-xl space-y-2">
                  <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
                    Upcoming Case Studies
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-50 tracking-tight">
                    Social Media Management
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    Client analytics for Instagram organic reach, LinkedIn founder branding, and carousel engagement are currently being prepared.
                  </p>
                </div>

                {/* 3 Clean Summary Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1">
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-zinc-100">
                      Instagram Reach
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                      Profile visits, engagement rates, and follower growth for local retail and consumer brands.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1">
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-zinc-100">
                      LinkedIn Branding
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                      Founder thought leadership, educational carousels, and inbound DM lead generation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1">
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-zinc-100">
                      Content Calendars
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                      16–20 monthly high-converting posts, carousels, and active community engagement.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20 dark:shadow-md dark:shadow-blue-900/30"
                  >
                    <span>Request Social Media Samples</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpenedFolder("seo")}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
                  >
                    View SEO Case Studies ({categoryCounts.all})
                  </button>
                </div>
              </div>
            )}

            {/* -------------------- 3. INSIDE WORDPRESS FOLDER -------------------- */}
            {openedFolder === "wordpress" && (
              <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 sm:p-10 space-y-6 shadow-2xs">
                <div className="max-w-xl space-y-2">
                  <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
                    Upcoming Case Studies
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-50 tracking-tight">
                    WordPress &amp; Web Development
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    Site speed benchmarks, responsive custom WordPress themes, and WooCommerce stores are being prepared.
                  </p>
                </div>

                {/* 3 Clean Summary Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1">
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-zinc-100">
                      Speed &amp; Core Web Vitals
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                      Sub-second loading times, clean architecture, and technical SEO hygiene.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1">
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-zinc-100">
                      Custom Mobile Themes
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                      Responsive mobile-first layouts designed for conversions and readability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1">
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-zinc-100">
                      WooCommerce Stores
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                      Product category hierarchies, clean search snippets, and checkout setup.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20 dark:shadow-md dark:shadow-blue-900/30"
                  >
                    <span>Request Web Build Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpenedFolder("seo")}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
                  >
                    View SEO Case Studies ({categoryCounts.all})
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* -------------------- DETAIL MODAL (DECLUTTERED & SMART) -------------------- */}
        {selectedProof && (
          <div
            data-lenis-prevent="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={handleCloseModal}
          >
            <div
              data-lenis-prevent="true"
              className="relative w-full max-w-4xl bg-white dark:bg-[#0c0c0e] rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col shadow-2xl overflow-hidden max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-5 sm:px-6 py-3 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-2.5 min-w-0 font-mono text-xs">
                  <span className="font-semibold text-zinc-950 dark:text-zinc-100 truncate">
                    {selectedProof.title}
                  </span>
                  <span className="text-zinc-400 hidden sm:inline">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline truncate">
                    {selectedProof.platform}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer text-xs font-mono flex items-center gap-1.5"
                    title={isZoomed ? "Reset Zoom" : "Zoom In"}
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Fit Screen</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Zoom</span>
                      </>
                    )}
                  </button>

                  {selectedProof.externalLink && (
                    <a
                      href={selectedProof.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors text-xs font-mono flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Live Link</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div
                data-lenis-prevent="true"
                className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6"
              >
                {/* 1. Overview */}
                <div className="space-y-1.5 pb-4 border-b border-slate-200 dark:border-zinc-800">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-500 dark:text-zinc-400">
                    {selectedProof.clientCategory && (
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        {selectedProof.clientCategory}
                      </span>
                    )}
                    {selectedProof.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          <span>{selectedProof.location}</span>
                        </span>
                      </>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span>{selectedProof.timeframe}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {selectedProof.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed max-w-2xl pt-0.5">
                    {selectedProof.summary}
                  </p>
                </div>

                {/* 2. Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono">
                  <div className="p-3 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/50">
                    <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                      {selectedProof.headlineMetric}
                    </div>
                    <div className="text-[10px] text-blue-700/80 dark:text-blue-300 font-semibold uppercase tracking-wider mt-0.5 truncate">
                      {selectedProof.headlineMetricLabel}
                    </div>
                  </div>

                  {selectedProof.secondaryMetrics.slice(0, 3).map((metric, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50 dark:bg-zinc-900/70 rounded-xl border border-slate-200 dark:border-zinc-800"
                    >
                      <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-50 truncate">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Unedited Analytics Screenshot */}
                <div className="space-y-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-[#09090b] shadow-xs">
                    <div className="px-3.5 py-2 border-b border-slate-200 dark:border-zinc-800 bg-slate-100/90 dark:bg-zinc-900/90 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-700 dark:text-zinc-300 font-medium truncate">
                        {selectedProof.clientOrDomain} • Verified Dashboard
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1.5 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Verified Analytics</span>
                      </span>
                    </div>

                    <div className="relative w-full min-h-[220px] max-h-[48vh] flex items-center justify-center p-3 sm:p-4 overflow-auto bg-[#070708]">
                      <img
                        src={selectedProof.screenshotUrl}
                        alt={selectedProof.title}
                        className={`max-w-full w-auto object-contain mx-auto transition-transform duration-200 select-none rounded ${
                          isZoomed
                            ? "scale-125 sm:scale-150 cursor-zoom-out origin-center"
                            : "cursor-zoom-in"
                        }`}
                        onClick={() => setIsZoomed(!isZoomed)}
                        loading="eager"
                        title="Click image to toggle zoom"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400 px-1">
                    <span>Unedited dashboard screenshot</span>
                    <a
                      href={selectedProof.screenshotUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-semibold"
                    >
                      <span>Open Full Image</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* 4. Structured Breakdown: Problem, What I Did, The Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold mb-1">
                        The Problem
                      </div>
                      <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                        {selectedProof.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-900 dark:text-zinc-100 font-bold mb-1.5">
                        What I Did
                      </div>
                      <ul className="space-y-2">
                        {selectedProof.strategy?.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-slate-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* The Outcome */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold mb-1">
                        The Result
                      </div>
                      <p className="text-xs text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
                        {selectedProof.commercialTakeaway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Action Footer */}
                <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    Want similar organic results for your business?
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleAuditClick}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-blue-500/20 dark:shadow-md dark:shadow-blue-900/30"
                    >
                      <span>Get a Free Audit</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
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
