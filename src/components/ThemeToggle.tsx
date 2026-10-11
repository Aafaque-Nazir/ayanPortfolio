"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const root = document.documentElement;
    const body = document.body;
    const isCurrentlyDark =
      root.classList.contains("dark") ||
      root.getAttribute("data-theme") === "dark" ||
      (typeof window !== "undefined" && localStorage.getItem("theme") === "dark");

    const nextDark = !isCurrentlyDark;

    if (nextDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      if (body) {
        body.classList.add("dark");
        body.setAttribute("data-theme", "dark");
      }
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      if (body) {
        body.classList.remove("dark");
        body.setAttribute("data-theme", "light");
      }
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("theme-change"));
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative w-8 h-8 rounded-md border border-zinc-300 dark:border-zinc-700/80 bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 transition-all duration-200 cursor-pointer select-none inline-flex items-center justify-center shrink-0 shadow-2xs"
      aria-label="Toggle theme"
      title="Toggle Dark / Light Mode"
    >
      {/* Sun icon is shown in dark mode */}
      <Sun className="w-4 h-4 text-zinc-100 hidden dark:block transition-transform duration-200 hover:rotate-45" />
      {/* Moon icon is shown in light mode */}
      <Moon className="w-4 h-4 text-zinc-800 block dark:hidden transition-transform duration-200 hover:-rotate-12" />
    </button>
  );
}
