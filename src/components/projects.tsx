"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  accentColor: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Synta",
    subtitle: "Personal AI Programming Tutor",
    description:
      "AI tutor delivering curated videos, streaming chat, and on-spot quizzes. Built with Next.js 15 App Router, Vercel AI SDK on Groq Llama 3.3, Drizzle ORM on Neon, and NextAuth v5 for secure sessions. Linear-style UI with dark mode and shadcn components.",
    technologies: ["Next.js 15", "TypeScript", "Drizzle ORM", "PostgreSQL", "Vercel AI SDK", "NextAuth"],
    githubUrl: "https://github.com/amantoppo1739/learning-platform",
    liveUrl: "https://synta.vercel.app",
    gradient: "from-[#0f172a] via-[#0ea5e9] to-[#22c55e]",
    accentColor: "#22d3ee",
    image: "/projects/synta.png",
  },
  {
    title: "ByteTube",
    subtitle: "Video Hosting Backend API",
    description:
      "Comprehensive RESTful backend API for a YouTube-like video platform with 52 endpoints. Features JWT authentication, video upload to Cloudinary, likes, comments, subscriptions, playlists, and analytics. Built with Express.js, MongoDB, and Mongoose. Includes rate limiting, security headers, and comprehensive error handling.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary"],
    githubUrl: "https://github.com/amantoppo1739/ByteTube-backend",
    gradient: "from-[#dc2626] via-[#b91c1c] to-[#991b1b]",
    accentColor: "#ef4444",
  },
  {
    title: "Leadlink",
    subtitle: "Enterprise CRM Platform",
    description:
      "Custom CRM handling 10k+ leads monthly with real-time syncing. Laravel backend + React dashboard featuring automated scoring, Kanban pipeline, and bulk CSV imports. Streamlined workflows reducing data entry time for sales teams.",
    technologies: ["React.js", "Laravel", "MySQL", "RESTful APIs"],
    githubUrl: "https://github.com/amantoppo1739/Sales-Lead-Management-System",
    liveUrl: "https://sales-lead-management-system.vercel.app/",
    gradient: "from-[#1e3a8a] via-[#1e40af] to-[#3730a3]",
    accentColor: "#60a5fa",
    image: "/projects/leadlink.png",
  },
  {
    title: "NEK Brand",
    subtitle: "Luxury E-Commerce",
    description:
      "Premium storefront handling real transactions with zero downtime since launch. Deployed with Next.js 14 (edge-cached via Vercel) for instant page loads, Prisma ORM for type-safe queries, and an admin dashboard for inventory management. Architected for luxury fashion retail.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/amantoppo1739/E-commerce-NEK-Brand",
    liveUrl: "https://e-commerce-nek-brand.vercel.app",
    gradient: "from-[#581c87] via-[#6b21a8] to-[#7c3aed]",
    accentColor: "#c084fc",
    image: "/projects/nek-brand.png",
  },
  // {
  //   title: "Adventura",
  //   subtitle: "Real-time Rider Platform",
  //   description:
  //     "Live GPS tracking for 50+ active riders with zero downtime. Real-time trip planning powered by Socket.io for group chat, expense splits, and SOS alerts. Mapbox navigation with offline-first architecture for reliability on the road.",
  //   technologies: ["Next.js", "Socket.io", "MongoDB", "Mapbox"],
  //   githubUrl: "https://github.com/amantoppo1739",
  //   gradient: "from-[#134e4a] via-[#0f766e] to-[#14b8a6]",
  //   accentColor: "#5eead4",
  // },
  {
    title: "Metro Hospital",
    subtitle: "Healthcare Management Platform",
    description:
      "Comprehensive hospital website serving 50,000+ patients with 24/7 emergency services. Features department listings, doctor profiles, online appointments, patient portal, and health news. Built with modern web technologies for optimal performance and user experience.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/amantoppo1739/Hospital-website",
    liveUrl: "https://hospital-website-red.vercel.app/",
    gradient: "from-[#dc2626] via-[#991b1b] to-[#7f1d1d]",
    accentColor: "#f87171",
    image: "/projects/metro.png",
  },
  {
    title: "CaptionCraft",
    subtitle: "AI Caption Generator",
    description:
      "AI-powered Flutter mobile app generating contextual social media captions via Google Gemini API. Dual-tone style system with emotional intelligence and Supabase backend for caption history and user preferences. Built for content creators.",
    technologies: ["Flutter", "Gemini AI", "Supabase", "Dart"],
    githubUrl: "https://github.com/amantoppo1739/CaptionCraft",
    gradient: "from-[#713f12] via-[#92400e] to-[#ea580c]",
    accentColor: "#fb923c",
    image: "/projects/captioncraft.png",
  },
];

function StickyProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.9", "start 0.1"],
  });

  // Simplified transforms for mobile - less intensive calculations
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || isMobile ? [1, 1] : [0.95, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || isMobile ? [1, 1] : [0.7, 1]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        top: index > 0 ? `${index * 20}px` : 0,
        willChange: isMobile ? "auto" : "transform, opacity",
      }}
      className="sticky h-[85vh] md:h-[80vh]"
    >
      <div
        className={`relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} p-6 pb-8 md:p-12 lg:p-16 shadow-2xl`}
        style={{ 
          transform: "translate3d(0, 0, 0)", 
          willChange: isMobile ? "auto" : "transform",
          contain: "layout style paint"
        }}
      >
        {/* Ambient Noise Texture - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] hidden md:block" />

        <div className="relative h-full flex flex-col lg:flex-row items-start md:items-center justify-between gap-4 md:gap-8 lg:gap-16">
          {/* Left: Content */}
          <div className="flex-1 space-y-3 md:space-y-6 text-white text-center lg:text-left w-full">
            <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 0.1, duration: isMobile ? 0.2 : 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider opacity-70">
                {project.subtitle}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 0.15, duration: isMobile ? 0.2 : 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              {project.title}
            </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 0.2, duration: isMobile ? 0.2 : 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 0.25, duration: isMobile ? 0.2 : 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm md:backdrop-blur-sm border border-white/20"
                  style={{ willChange: "auto" }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0 : 0.3, duration: isMobile ? 0.2 : 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start"
            >
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  className="bg-white text-black hover:bg-white/90 font-semibold"
                  size="lg"
                >
                  View Live
                  <ArrowUpRight size={18} className="ml-2" />
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  size="lg"
                >
                  <Github size={18} className="mr-2" />
                  Source Code
                </Button>
              )}
            </motion.div>
          </div>

          {/* Right: Floating Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: isMobile ? 0 : 0.2, duration: isMobile ? 0.3 : 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "transform" }}
            className={`flex-1 relative hidden md:block ${
              project.title === "CaptionCraft" ? "max-w-xs" : "max-w-lg lg:max-w-xl"
            }`}
          >
            <div
              className={`relative overflow-hidden shadow-2xl border-4 border-white/30 ${
                project.title === "CaptionCraft" ? "rounded-[2.5rem]" : "rounded-2xl"
              }`}
              style={{
                transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
              }}
            >
              {project.image ? (
                /* Real Screenshot */
                <div
                  className={`relative bg-black ${
                    project.title === "CaptionCraft" ? "aspect-[9/19.5]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className={project.title === "CaptionCraft" ? "object-cover" : "object-contain"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                  />
                </div>
              ) : (
                /* Placeholder for projects without screenshots */
                <div className="aspect-[16/9] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <ExternalLink size={48} className="mx-auto opacity-40" />
                    <p className="text-sm opacity-60">Coming Soon</p>
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              <div
                className="absolute -inset-4 rounded-2xl blur-2xl opacity-30 -z-10"
                style={{ backgroundColor: project.accentColor }}
              />
            </div>
          </motion.div>
        </div>

        {/* Card Number */}
        <div className="absolute top-6 right-6 text-8xl sm:text-9xl font-bold text-white/5 select-none">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[var(--background)]">
      <div className="section-container mb-16">
        <div className="space-y-3 text-center">
          <div className="eyebrow mx-auto">Featured Work</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center text-balance">
            Case Studies
          </h2>
          <p className="section-subheading">
            Production systems serving real users with measurable impact.
          </p>
        </div>
      </div>

      {/* Sticky Cards Container */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-12">
          {projects.map((project, index) => (
            <StickyProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </section>
  );
}
