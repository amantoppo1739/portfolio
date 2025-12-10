"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/amantoppo1739",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aman-toppo-b54a43305",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:amantoppo1739@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      href: "tel:+916002807871",
      icon: Phone,
    },
  ];

  return (
    <footer id="contact" className="relative border-t border-[var(--border)] bg-[var(--background)] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#7c3aed]/10 blur-[150px]" />
        <div className="absolute right-[10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#22d3ee]/10 blur-[150px]" />
      </div>

      <div className="section-container relative z-10 py-20 sm:py-28">
        {/* Main CTA */}
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
            Let&apos;s build something exceptional
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Available for freelance work, remote opportunities, and exciting collaborations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              href="mailto:amantoppo1739@gmail.com?subject=Let's Work Together"
              className="gradient-border bg-foreground text-background px-8 text-base"
            >
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="https://github.com/amantoppo1739"
              className="px-8 border-foreground/25 text-base"
            >
              <Github className="mr-2" size={20} />
              View GitHub
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pt-16 border-t border-[var(--border)]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-subtle mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Stack", href: "#stack" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-subtle mb-4">
              Projects
            </h3>
            <ul className="space-y-3">
              {["Leadlink CRM", "NEK Brand", "Adventura", "CaptionCraft"].map((project) => (
                <li key={project}>
                  <a
                    href="#projects"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-subtle mb-4">
              Tech Stack
            </h3>
            <ul className="space-y-3">
              {["MERN Stack", "Next.js", "TypeScript", "Flutter"].map((tech) => (
                <li key={tech}>
                  <span className="text-muted">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-subtle mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                    >
                      <Icon size={16} />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-soft">
            &copy; {year} Aman Toppo. All rights reserved.
          </p>
          <p className="text-sm text-muted-soft">
            Built with Next.js 16, TypeScript, TailwindCSS v4, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

