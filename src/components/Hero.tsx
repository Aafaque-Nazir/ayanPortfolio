"use client";

import React from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Hero() {
  const channels = [
    {
      name: "WhatsApp",
      url: "https://wa.me/971566182617?text=Hi%20Ayan,%20I%20would%20like%20to%20discuss%20SEO%20and%20digital%20growth",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.18 8.18 0 0 1-5.82 2.42c-1.46 0-2.89-.39-4.15-1.13l-.3-.18-3.12.82.83-3.04-.2-.31c-.81-1.3-1.24-2.8-1.24-4.4 0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ayanaklekar",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:ayanaklekar1@gmail.com",
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 border-b border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#09090B] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Greeting, Value Prop, Subtext, CTA Button & Domain Pill */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-zinc-950 dark:text-zinc-50 tracking-tight leading-[1.08]">
              Hi, I&apos;m Ayan.
              <span className="block mt-2 sm:mt-2.5 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight">
                I help businesses rank on Google Maps &amp; Search.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              SEO &amp; Digital Marketing Specialist based in Dubai, UAE. I help local businesses and websites get discovered by real customers without paying for ads.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white text-sm font-semibold active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
              >
                <span>Get a Free Audit</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("case-studies")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-sm font-semibold active:scale-[0.98] transition-all cursor-pointer shadow-2xs"
              >
                <span>Case Studies</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>
            </div>

            {/* Domain & Direct Channels - Clean Minimalist Text */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                ayanaklekar.com
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <div className="flex items-center gap-2.5">
                {channels.map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target={channel.name === "Email" ? undefined : "_blank"}
                    rel={channel.name === "Email" ? undefined : "noopener noreferrer"}
                    className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                    title={channel.name}
                    aria-label={channel.name}
                  >
                    {channel.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Photo Box */}
              <div className="relative w-60 sm:w-72 md:w-80 lg:w-[320px] xl:w-[350px] aspect-[4/5] rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-lg flex items-center justify-center group">
                <img
                  src="/ayan.jpg"
                  alt="Ayan Aklekar - SEO Specialist & Digital Marketer"
                  loading="eager"
                  className="w-full h-full object-cover object-[center_16%] transition-transform duration-300 group-hover:scale-[1.02] select-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Bottom Scroll Indicator (Matching reference circular down button) */}
        <div className="pt-10 sm:pt-14 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center shadow-2xs cursor-pointer"
            aria-label="Scroll to about"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}



