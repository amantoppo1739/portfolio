"use client";

import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aman Toppo
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/70 font-light">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mt-6">
            I build beautiful, functional, and user-centered digital experiences
            that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" href="#projects">
              View My Work
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/amantoppo1739"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-toppo-b54a43305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:amantoppo1739@gmail.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll to about">
              <ArrowDown
                size={32}
                className="mx-auto text-foreground/40 hover:text-foreground/60 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

