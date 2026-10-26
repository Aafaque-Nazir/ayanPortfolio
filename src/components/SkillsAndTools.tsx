"use client";

import React from "react";
import { Search, FileText, Share2, BarChart3 } from "lucide-react";

interface SkillPillar {
  number: string;
  category: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: string[];
}

interface ToolItem {
  name: string;
  role: string;
  icon: React.ReactNode;
}

export default function SkillsAndTools() {
  const skillPillars: SkillPillar[] = [
    {
      number: "01",
      category: "SEO & Search",
      subtitle: "Rankings & Google Maps",
      icon: <Search className="w-4 h-4 text-blue-600 dark:text-zinc-300" />,
      skills: [
        "Technical SEO & Site Audits",
        "On-Page & Off-Page SEO",
        "Google Maps (Google Business Profile)",
        "Keyword & Competitor Research",
        "Page Speed & Loading Fixes",
      ],
    },
    {
      number: "02",
      category: "Content Strategy",
      subtitle: "Content & Search Optimization",
      icon: <FileText className="w-4 h-4 text-blue-600 dark:text-zinc-300" />,
      skills: [
        "SEO Articles & Blog Posts",
        "Title & Meta Tag Optimization",
        "High-Intent Keyword Targeting",
        "Old Page Content Rewrites",
        "Google Rich Snippets & Schema",
      ],
    },
    {
      number: "03",
      category: "Social Media",
      subtitle: "Audience & Engagement",
      icon: <Share2 className="w-4 h-4 text-blue-600 dark:text-zinc-300" />,
      skills: [
        "Social Media Management",
        "Monthly Content Calendars",
        "Post Design & Copywriting",
        "Profile & Bio Optimization",
        "Comments & Community Replies",
      ],
    },
    {
      number: "04",
      category: "Web & Analytics",
      subtitle: "Analytics & Setup",
      icon: <BarChart3 className="w-4 h-4 text-blue-600 dark:text-zinc-300" />,
      skills: [
        "WordPress Website Setup",
        "Google Search Console",
        "Google Analytics 4",
        "Semrush Keyword Analysis",
        "Weekly Reports & Google Sheets",
      ],
    },
  ];

  const tools: ToolItem[] = [
    {
      name: "Google Search Console",
      role: "Indexing & Query Data",
      icon: (
        <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      name: "Google Analytics 4",
      role: "Traffic & Event Tracking",
      icon: (
        <svg className="w-4 h-4 text-[#E37400]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 3h-15C3.12 3 2 4.12 2 5.5v13C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 4.12 20.88 3 19.5 3zm-9.25 15h-2v-6h2v6zm4.25 0h-2v-9h2v9zm4.25 0h-2V7h2v11z" />
        </svg>
      ),
    },
    {
      name: "Semrush",
      role: "Keyword & Competitor Intel",
      icon: (
        <svg className="w-4 h-4 text-[#FF642D]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.5 8.5 2 10.5l5.5 5-1.5 7.5 6-3.5 6 3.5-1.5-7.5 5.5-5-7.5-2z" />
        </svg>
      ),
    },
    {
      name: "WordPress",
      role: "CMS & Technical SEO",
      icon: (
        <svg className="w-4 h-4 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 4.184 2.569 7.773 6.225 9.248L4.359 9.877c.489-.015.934-.075.934-.075.549-.06.495-.87-.06-.825 0 0-1.637.135-2.699.135-.12 0-.255-.008-.39-.015C3.86 10.36 5.163 12 7.025 12c.007 0 .015 0 .022 0 1.258 0 2.302-.757 2.302-1.642 0-.9-.592-1.537-1.229-2.227-.824-.877-1.604-1.709-1.604-3.149 0-1.725 1.305-3.328 3.329-3.328.09 0 .179.008.269.015L6.969 9.803l3.208 9.58c.607.173 1.244.269 1.905.269.75 0 1.469-.12 2.152-.33l-2.73-7.91 1.77-5.137c.39-.015.75-.075.75-.075.548-.06.495-.87-.06-.825 0 0-1.635.135-2.699.135-.15 0-.315-.008-.48-.015C13.25 2.19 12.633 2 12 2zm-8.1 10c0-.51.045-1.005.135-1.493l4.319 11.83C5.176 20.658 3.9 16.592 3.9 12zm14.378-.442c.315 1.05.524 2.295.524 3.735 0 1.2-.24 2.505-.72 3.825l2.67-7.725a8.04 8.04 0 0 0-.474-.33c-.45-.27-.9-.51-1.35-.69-.45-.18-.705-.285-.65-.815zm-3.693 7.842l2.31-6.69c.12-.345.195-.69.24-1.02.045-.345.06-.69.06-1.02 0-.6-.075-1.11-.21-1.56-.15-.435-.375-.78-.66-1.05-.285-.27-.645-.45-1.08-.54-.435-.09-.945-.135-1.53-.135h-.15l4.335 12.24c-1.005.495-2.13.78-3.315.78z" />
        </svg>
      ),
    },
    {
      name: "Rank Math SEO",
      role: "On-Page & Schema Markup",
      icon: (
        <svg className="w-4 h-4 text-[#ED5A24]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      name: "Google Sheets",
      role: "Data & Workflow Automation",
      icon: (
        <svg className="w-4 h-4 text-[#0F9D58]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-4h7v4zm0-6H5V7h7v4zm7 6h-5v-4h5v4zm0-6h-5V7h5v4z" />
        </svg>
      ),
    },
    {
      name: "Canva",
      role: "Visuals & Social Assets",
      icon: (
        <svg className="w-4 h-4 text-[#00C4CC]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M14.5 9.5c-.83-.83-2.17-.83-3 0l-3 3c-.83.83-.83 2.17 0 3s2.17.83 3 0l.5-.5" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Meta Business Suite",
      role: "Ads & Social Publishing",
      icon: (
        <svg className="w-4 h-4 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.96 4c-1.93 0-3.66.97-4.96 2.44C10.7 4.97 8.97 4 7.04 4 3.71 4 1 6.81 1 10.27c0 4.86 6.07 9.17 10.42 11.45.36.19.79.19 1.15 0 4.36-2.28 10.43-6.59 10.43-11.45C23 6.81 20.29 4 16.96 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 dark:border-zinc-800 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Skills &amp; Tools
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Core areas of work and everyday tools.
          </p>
        </div>

        {/* 4 Clean Minimalist Skill Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {skillPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white dark:bg-[#0c0c0e] rounded-2xl border border-slate-200/90 dark:border-zinc-800 p-5 flex flex-col justify-between hover:border-blue-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-none transition-all duration-200 shadow-2xs group"
            >
              <div className="space-y-3">
                {/* Pillar Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-zinc-800/80 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-zinc-800 border border-blue-200/60 dark:border-zinc-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="font-bold text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-zinc-100 transition-colors">
                      {pillar.category}
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-600/70 dark:text-zinc-400 font-mono font-semibold">{pillar.number}</span>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-tight font-mono">
                  {pillar.subtitle}
                </p>

                {/* Skills Bullet List */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                  {pillar.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-start gap-2 text-slate-700 dark:text-zinc-300 text-xs font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-zinc-600 mt-1 shrink-0" />
                      <span className="leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tools I Use Sub-Block */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-zinc-400 font-bold">
              Tools &amp; Platforms I Use
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Daily Workflow</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] hover:border-blue-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 hover:shadow-xs hover:shadow-blue-500/5 dark:hover:shadow-none transition-all duration-150 flex items-center gap-3 shadow-2xs group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-blue-200 dark:group-hover:border-zinc-700 transition-all">
                  {tool.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-zinc-100 transition-colors truncate">
                    {tool.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 truncate">
                    {tool.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
