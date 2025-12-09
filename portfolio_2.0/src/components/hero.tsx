"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const stackTags = ["React.js", "Node.js", "MongoDB", "Next.js", "TypeScript", "Flutter"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[var(--background)] to-[var(--background)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-15%] top-[-10%] h-96 w-96 rounded-full bg-[#7c3aed]/25 blur-[140px]" />
        <div className="absolute right-[-10%] top-16 h-[500px] w-[500px] rounded-full bg-[#22d3ee]/20 blur-[140px]" />
        <div className="absolute right-1/3 bottom-[-5%] h-80 w-80 rounded-full bg-[#14b8a6]/18 blur-[130px]" />
      </div>

      <div className="section-container relative grid gap-12 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow w-fit"
          >
            Building Digital Experiences
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4 text-balance"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-subtle">
              Aman Toppo · Full Stack Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              I build commerce engines and community platforms.
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Full Stack Engineer focused on speed and scalability. Specialized in MERN stack with 50% faster API performance and real-time systems for web and mobile.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:items-center"
          >
            <Button
              size="lg"
              href="#projects"
              className="gradient-border bg-foreground text-background px-8"
            >
              View Work
              <ArrowDownRight size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#contact"
              className="px-8 border-foreground/20 hover:border-foreground/40"
            >
              Contact Me
            </Button>
            <div className="flex items-center gap-4 text-muted">
              <a
                href="https://github.com/amantoppo1739"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-toppo-b54a43305"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry"
                className="hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {stackTags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative group"
        >
          {/* Glowing Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00758f] via-[#f29111] to-[#00758f] rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity blur-sm" />
          
          {/* MySQL Terminal Window - Always Dark Theme */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#00758f]/30 bg-[#0a0a0a] backdrop-blur-xl">
            {/* Terminal Header - Simple MySQL style */}
            <div className="px-4 py-2 border-b border-[#00758f]/20 bg-[#000000]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#00758f] animate-pulse" />
                  <span className="text-xs text-[#00758f] font-mono font-semibold">MySQL Monitor</span>
                </div>
                <span className="text-xs text-[#888888] font-mono ml-auto">v8.0.33</span>
              </div>
            </div>

            {/* MySQL Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-2">
              {/* Welcome Banner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-[#888888] text-xs mb-4"
              >
                Welcome to the MySQL monitor. Commands end with ; or \g.
              </motion.div>

              {/* Connection */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="space-y-1"
              >
                <div className="text-[#888888] text-xs">Connecting to database...</div>
                <div className="text-[#00d900] text-xs">Connection id: 42</div>
              </motion.div>

              {/* Query 1 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.3 }}
                className="pt-3"
              >
                <div className="flex items-start gap-2">
                  <span className="text-[#00758f] font-bold">mysql&gt;</span>
                  <span className="text-white">
                    SELECT * FROM developers WHERE name = &apos;Aman Toppo&apos;;
                  </span>
                </div>
              </motion.div>

              {/* Result Table */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.3 }}
                className="text-xs pl-10 pt-2 space-y-1"
              >
                <div className="text-[#888888]">+-------------------+-------------------+</div>
                <div className="text-[#888888]">
                  | <span className="text-[#f29111]">role</span>              | <span className="text-[#f29111]">Full Stack Engineer</span> |
                </div>
                <div className="text-[#888888]">
                  | <span className="text-[#f29111]">location</span>          | <span className="text-white">Nagaon, Assam</span>     |
                </div>
                <div className="text-[#888888]">
                  | <span className="text-[#f29111]">experience</span>        | <span className="text-white">1.5 years</span>         |
                </div>
                <div className="text-[#888888]">
                  | <span className="text-[#f29111]">stack</span>             | <span className="text-white">[Next.js, Flutter, Laravel]</span> |
                </div>
                <div className="text-[#888888]">+-------------------+-------------------+</div>
                <div className="text-[#00d900] mt-1">1 row in set (0.00 sec)</div>
              </motion.div>

              {/* Query 2 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0, duration: 0.3 }}
                className="pt-3"
              >
                <div className="flex items-start gap-2">
                  <span className="text-[#00758f] font-bold">mysql&gt;</span>
                  <span className="text-white">
                    SELECT status FROM availability;
                  </span>
                </div>
              </motion.div>

              {/* Status Result */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.3 }}
                className="text-xs pl-10 pt-2"
              >
                <div className="text-[#888888]">+------------------+</div>
                <div className="text-[#888888]">
                  | <span className="text-[#00d900] font-bold">OPEN FOR WORK</span>    |
                </div>
                <div className="text-[#888888]">+------------------+</div>
                <div className="text-[#00d900] mt-1">1 row in set (0.00 sec)</div>
              </motion.div>

              {/* Blinking Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2, duration: 0.3 }}
                className="flex items-center gap-2 pt-3"
              >
                <span className="text-[#00758f] font-bold">mysql&gt;</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-2 h-4 bg-white"
                />
              </motion.div>
            </div>

            {/* MySQL Dolphin Glow */}
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[#00758f]/20 blur-[60px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

