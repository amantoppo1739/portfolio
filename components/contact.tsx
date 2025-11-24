"use client";

import { Mail, Github, Linkedin } from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "amantoppo1739@gmail.com",
    href: "mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@amantoppo1739",
    href: "https://github.com/amantoppo1739",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Aman Toppo",
    href: "https://www.linkedin.com/in/aman-toppo-b54a43305",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-container space-y-10">
        <div>
          <div className="section-heading">Let&apos;s build something</div>
          <p className="section-subheading">
            Whether you need a fast MVP or a polished production experience, I&apos;m
            ready to collaborate.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactMethods.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="surface-card flex flex-col items-start gap-3 transition hover:-translate-y-1"
              aria-label={label}
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-subtle">
                <Icon className="h-4 w-4 text-blue-500" />
                {label}
              </div>
              <p className="text-lg font-semibold text-foreground">{value}</p>
              <span className="text-xs text-muted-soft">
                Tap to open {label.toLowerCase()}
              </span>
            </a>
          ))}
        </div>

        <div className="surface-card text-center space-y-4">
          <h3 className="text-2xl font-semibold">Tell me about your idea</h3>
          <p className="text-sm text-muted">
            Share some context about your product, timeline, or the challenge
            you&apos;re solving. I usually respond within a day.
          </p>
          <a
            href="mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 px-8 bg-foreground text-background hover:bg-foreground/90"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

