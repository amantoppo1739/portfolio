"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, GraduationCap } from "lucide-react";

export function BentoGrid() {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[30%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="space-y-3 text-center mb-12">
          <div className="eyebrow mx-auto">About Me</div>
          <h2 className="section-heading">Product Engineer</h2>
          <p className="section-subheading">
            Building complete solutions, not just features.
          </p>
        </div>

        {/* Two Card Layout: 60% / 40% */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Card: The Narrative (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl p-8 sm:p-10 hover:border-[var(--border)]/60 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-subtle">
                  The Approach
                </span>
              </div>

              <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
                I&apos;m a product-focused engineer who bridges the gap between complex backends and buttery-smooth UIs.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-muted-strong">
                I don&apos;t just write code—I ship complete products. From architecting databases to polishing animations, I handle the full stack to deliver systems that scale and interfaces that feel effortless.
              </p>

              <p className="text-sm sm:text-base text-muted">
                Whether it&apos;s building a CRM for 10k+ leads, a real-time rider platform, or an AI-powered mobile app, I focus on solving real problems with production-grade solutions.
              </p>
            </div>

            {/* Subtle Glow */}
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 blur-[100px]" />
          </motion.div>

          {/* Right Card: Hard Numbers (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl p-8 sm:p-10 hover:border-[var(--border)]/60 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-pink-500/5" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-subtle">
                  By The Numbers
                </span>
              </div>

              <div className="space-y-8">
                {/* Experience */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                      1.5
                    </span>
                  </div>
                  <p className="text-sm text-muted-strong font-medium">
                    Years at Catla IT
                  </p>
                  <p className="text-xs text-muted-soft">
                    Currently a freelancer
                  </p>
                </div>

                <div className="h-px bg-[var(--border)]" />

                {/* Products Shipped */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-cyan-500" />
                    <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                      3
                    </span>
                  </div>
                  <p className="text-sm text-muted-strong font-medium">
                    Major Products Shipped
                  </p>
                  <p className="text-xs text-muted-soft">
                    Live in production, serving users
                  </p>
                </div>

                <div className="h-px bg-[var(--border)]" />

                {/* Education */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-orange-500" />
                    <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                      BCA
                    </span>
                  </div>
                  <p className="text-sm text-muted-strong font-medium">
                    Graduate
                  </p>
                  <p className="text-xs text-muted-soft">
                    Computer Applications
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Glow */}
            <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-br from-orange-500/15 to-pink-500/15 blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
