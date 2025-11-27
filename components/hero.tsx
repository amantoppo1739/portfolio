"use client";

import { Button } from "./ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Star,
} from "lucide-react";

const highlightStats = [
  { value: "3+", label: "Production-ready products" },
  { value: "Web & Mobile", label: "End-to-end focus" },
  { value: "UX-first", label: "Approach to problem solving" },
];

const focusAreas = [
  "Full-stack builds with delightful UX",
  "Real-time & collaborative product experiences",
  "AI-assisted creativity for mobile and web",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 -left-1/3 w-2/3 bg-blue-200/40 blur-[80px] dark:bg-blue-500/10" />
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-purple-200/40 blur-[90px] dark:bg-indigo-500/10" />
      </div>
      <div className="section-container">
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] items-center py-16 sm:py-24">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-1 text-sm font-medium text-muted shadow-sm ring-1 ring-black/5 dark:bg-slate-900/60">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Building thoughtful digital experiences
            </div>
            <div className="space-y-4 text-balance">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-subtle">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-black dark:text-white">
                  Aman Toppo
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted">
                Full Stack Developer crafting performant, user-centered products
                across web and mobile.
              </p>
              <p className="text-base sm:text-lg text-muted-soft max-w-2xl mx-auto lg:mx-0">
                I merge polished design systems with reliable engineering to
                ship responsive, accessible experiences that scale from mobile
                screens to desktops.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" href="#projects" className="w-full sm:w-auto">
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {highlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/30 bg-white/70 px-4 py-3 text-center shadow-sm ring-1 ring-black/5 dark:bg-slate-900/70"
                >
                  <div className="text-xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-soft">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-4 text-muted-soft">
              <a
                href="https://github.com/amantoppo1739"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-toppo-b54a43305"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry"
                className="hover:text-foreground transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="surface-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-muted-subtle">
                <Star className="h-4 w-4 text-blue-500" />
                Featured Focus
              </div>
              <h2 className="text-2xl font-semibold leading-tight text-balance">
                Building delightful experiences across modern web and mobile
                stacks.
              </h2>
              <ul className="space-y-4 text-sm text-muted-strong">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl border border-white/40 bg-white/60 py-4 text-sm font-medium shadow-sm dark:bg-slate-900/60">
                  Responsive-first UI
                </div>
                <div className="rounded-2xl border border-white/40 bg-white/60 py-4 text-sm font-medium shadow-sm dark:bg-slate-900/60">
                  Production-ready code
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-5 py-2 text-sm font-medium text-muted shadow-sm ring-1 ring-black/5 hover:text-foreground transition dark:bg-slate-900/70"
          >
            <ArrowDown className="h-4 w-4" />
            Scroll for more
          </a>
        </div>
      </div>
    </section>
  );
}

