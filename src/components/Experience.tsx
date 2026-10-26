"use client";

import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Digital Marketing Executive",
      company: "ITxSential",
      location: "Mumbai, India",
      period: "Aug 2024 — Present",
      type: "Full-Time",
      metrics: [
        { label: "Organic Search Growth", value: "+45%" },
        { label: "Social Follower Lift", value: "+70%" },
        { label: "Client Accounts Managed", value: "10+" },
      ],
      highlights: [
        "SEO Strategy & Search Optimization: Led technical, on-page, and local SEO campaigns that drove a verified 45% increase in organic search traffic.",
        "Social Media Management: Managed Instagram, Facebook, and LinkedIn channels for 10+ client brands, developing monthly content calendars and high-engagement posts resulting in 70% follower growth.",
        "WordPress Development: Built fast-loading, mobile-friendly WordPress websites with clean technical SEO setup and easy navigation.",
        "Content Strategy & Copywriting: Researched and wrote blog articles and website copy that rank on Google and attract ready-to-buy customers.",
        "Reporting Automation: Automated client reporting in Google Sheets using Apps Script, saving hours every week on manual data updates.",
      ],
    },
    {
      role: "Freelance SEO & Social Media Specialist",
      company: "Client Projects",
      location: "Remote (Global Clients)",
      period: "2023 — Present",
      type: "Contract & Retainer",
      metrics: [
        { label: "Local Map Leads", value: "970+" },
        { label: "Google Maps Rank", value: "Top 3" },
        { label: "Paid Ad Spend", value: "$0" },
      ],
      highlights: [
        "Google Business Profile Management: Ranked local service and repair businesses in Google Maps Top 3 (such as Phone Buzz Gold Coast Australia).",
        "E-Commerce & Search Console Growth: Improved category structure and indexed viral search pages, generating up to 20.2K clicks in 24 hours.",
        "Direct Client Support: Worked directly with business owners to audit technical search issues and increase customer calls and visits without ad spend.",
      ],
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Management Studies (BMS – Marketing)",
      institution: "University of Mumbai",
      location: "Mumbai, India",
      year: "2023",
      details: "Specialized in Digital Marketing Strategy, Consumer Behavior, and Brand Management.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      location: "Mumbai, India",
      year: "2021",
      details: "Higher secondary education with a focus on commerce and business studies.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] scroll-mt-14 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-200 dark:border-zinc-800 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Work Experience
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Full-time agency work &amp; independent client projects.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 mb-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0c0c0e] rounded-2xl border border-slate-200/90 dark:border-zinc-800 p-6 sm:p-7 hover:border-blue-400 dark:hover:border-zinc-600 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200 shadow-2xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Role, Company, Period */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-zinc-800 border border-blue-200/60 dark:border-zinc-700 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-blue-600 dark:text-zinc-300" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600/80 dark:text-zinc-400 uppercase tracking-wider block">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-50 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-700 dark:text-zinc-300 mt-0.5">
                      {exp.company}
                    </div>
                    <div className="text-xs font-mono text-slate-500 dark:text-zinc-500 mt-1">
                      {exp.location} • {exp.type}
                    </div>
                  </div>

                  {/* Highlight Metrics */}
                  {exp.metrics && (
                    <div className="pt-2 grid grid-cols-3 gap-2 border-t border-slate-100 dark:border-zinc-800/80">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-base sm:text-lg font-black text-blue-600 dark:text-zinc-50 tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Execution Highlights */}
                <div className="lg:col-span-8 lg:border-l lg:border-slate-100 lg:dark:border-zinc-800/80 lg:pl-6 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-zinc-400 font-bold block mb-2">
                    Key Responsibilities &amp; Outcomes
                  </span>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, hIdx) => {
                      const [title, ...descParts] = h.split(":");
                      const desc = descParts.join(":");
                      return (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-zinc-600 shrink-0 mt-1.5" />
                          <div>
                            {desc ? (
                              <>
                                <strong className="font-semibold text-slate-900 dark:text-zinc-100">
                                  {title}:
                                </strong>
                                <span>{desc}</span>
                              </>
                            ) : (
                              <span>{h}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Qualifications */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-zinc-300" />
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-zinc-400 font-bold">
                Education &amp; Qualifications
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">Academic Background</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-[#0c0c0e] rounded-xl border border-slate-200 dark:border-zinc-800 p-4 sm:p-5 flex flex-col justify-between hover:border-blue-300 dark:hover:border-zinc-700 hover:shadow-2xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mb-1.5">
                    <span className="font-bold text-blue-600 dark:text-zinc-100">
                      {edu.year}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-50 tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mt-0.5">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
