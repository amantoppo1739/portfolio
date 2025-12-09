"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Database } from "lucide-react";

const projectImpact = [
  {
    stat: "Query Time ↓ 50%",
    description: "Slashed API response times by optimizing database schemas and query patterns at Catla IT",
    icon: TrendingUp,
    project: "Enterprise CRM",
  },
  {
    stat: "10k+ Leads/Month",
    description: "Engineered a CRM handling enterprise-scale lead management with real-time data validation",
    icon: Database,
    project: "Leadlink",
  },
  {
    stat: "50+ Active Riders",
    description: "Scaled to 50+ active riders with zero downtime during peak usage. Live GPS + offline-first architecture",
    icon: Zap,
    project: "Adventura",
  },
  {
    stat: "Zero Downtime",
    description: "Deployed luxury e-commerce platform handling real transactions since launch. Edge-cached via Vercel for instant page loads.",
    icon: Database,
    project: "NEK Brand",
  },
  {
    stat: "AI-Powered",
    description: "Architected Flutter mobile app with Google Gemini AI integration for contextual caption generation",
    icon: Users,
    project: "CaptionCraft",
  },
];

export function Testimonials() {
  const loop = [...projectImpact, ...projectImpact];

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="section-container space-y-8">
        <div className="space-y-3 text-center">
          <div className="eyebrow mx-auto">Project Highlights</div>
          <h2 className="section-heading">Real metrics from shipped products</h2>
          <p className="section-subheading">
            Measurable outcomes from production applications serving real users.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-2">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {loop.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.project}-${index}`}
                  className="surface min-w-[280px] sm:min-w-[360px] max-w-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{item.stat}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted-strong leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-subtle">
                    {item.project}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

