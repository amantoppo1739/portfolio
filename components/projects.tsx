import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "NEK Brand - Luxury E-Commerce Platform",
    description:
      "A modern, luxury e-commerce platform built with Next.js 14, featuring server-side rendering, static site generation, user authentication, admin dashboard, shopping cart, product variants, and comprehensive order management system.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Resend",
    ],
    githubUrl: "https://github.com/amantoppo1739/E-commerce-NEK-Brand",
    liveUrl: "https://e-commerce-nek-brand.vercel.app",
  },
  {
    title: "Adventura - Indian Rider Community Platform",
    description:
      "A comprehensive full-stack platform for motorcycle enthusiasts in India to plan trips, connect with fellow riders, and share adventures. Features include live GPS tracking, SOS alerts, expense tracking, group chat, moments feed, and interactive trip planning with maps.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Mapbox",
      "Cloudinary",
      "Zustand",
    ],
    githubUrl: "https://github.com/amantoppo1739",
  },
  {
    title: "CaptionCraft - AI Image Caption Generator",
    description:
      "An AI-powered mobile application that generates engaging, contextually relevant captions for images using Google's Gemini AI. Features dual caption system with style tones and emotional intelligence, Material 3 UI, cloud storage, and caption history tracking.",
    technologies: [
      "Flutter",
      "Dart",
      "Google Gemini AI",
      "Supabase",
      "Material 3",
      "Image Processing",
    ],
    githubUrl: "https://github.com/amantoppo1739/CaptionCraft",
  },
  {
    title: "Leadlink - Lead Management System (CRM)",
    description:
      "A comprehensive, production-ready CRM system with full-stack architecture. Features lead management with Kanban board, automated lead scoring, team performance analytics with interactive charts, role-based access control, CSV/Excel import/export, and real-time activity tracking.",
    technologies: [
      "Laravel 12",
      "Next.js 16",
      "React 19",
      "MySQL",
      "TailwindCSS",
      "Recharts",
      "Zustand",
      "TanStack Query",
    ],
    githubUrl: "https://github.com/amantoppo1739",
    liveUrl: "https://sales-lead-management-system.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="section-container space-y-10">
        <div>
          <div className="section-heading">Featured Projects</div>
          <p className="section-subheading">
            Production-ready work spanning commerce, community platforms, and
            AI-powered experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="surface-card flex flex-col gap-4 h-full">
              <div>
                <h3 className="text-xl font-semibold text-balance">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-muted-strong"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row mt-auto">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.githubUrl}
                    className="flex items-center gap-2 w-full justify-center"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.liveUrl}
                    className="flex items-center gap-2 w-full justify-center"
                  >
                    <ExternalLink size={16} />
                    Live
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

