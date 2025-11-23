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
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-foreground/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" href={project.githubUrl} className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" size="sm" href={project.liveUrl} className="flex items-center gap-2">
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

