"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      const hasDark =
        document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark" ||
        localStorage.getItem("theme") === "dark";
      setIsDark(hasDark);
    });

    const handleThemeEvent = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    };

    window.addEventListener("theme-change", handleThemeEvent);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("theme-change", handleThemeEvent);
    };
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const nextDark = !isDark;
    setIsDark(nextDark);

    const root = document.documentElement;
    const body = document.body;

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

    // Notify all other toggle instances
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer select-none inline-flex items-center justify-center shrink-0"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      {mounted ? (
        isDark ? (
          <Sun className="w-4 h-4 text-zinc-200" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-700" />
        )
      ) : (
        <span className="w-4 h-4 inline-block" />
      )}
    </button>
  );
}
