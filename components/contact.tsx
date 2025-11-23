"use client";

import { Button } from "./ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-foreground/70 mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 px-8 bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2 cursor-pointer"
          >
            <Mail size={20} />
            Send Email
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/amantoppo1739"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-toppo-b54a43305"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry"
            className="text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

