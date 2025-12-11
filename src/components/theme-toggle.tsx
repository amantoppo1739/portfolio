"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  // Default to "dark" so the server and first client render match; read real preference after mount.
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-11 w-11 rounded-full border border-[var(--border)] bg-white/60 dark:bg-white/10 shadow-sm flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {mounted && theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="text-foreground"
          >
            <Sun size={18} />
          </motion.span>
        ) : mounted ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="text-foreground"
          >
            <Moon size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="placeholder"
            className="text-foreground"
            initial={false}
            animate={{ opacity: 0.4 }}
          >
            <Sun size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

