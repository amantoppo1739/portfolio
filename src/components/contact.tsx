"use client";

import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const contactMethods = [
  {
    label: "Email",
    value: "amantoppo1739@gmail.com",
    href: "mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 60028 07871",
    href: "tel:+916002807871",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/916002807871",
    icon: MessageCircle,
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

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-container space-y-10">
        <div className="space-y-3 text-center">
          <div className="eyebrow mx-auto">Let&apos;s build</div>
          <h2 className="section-heading">Have a project in mind?</h2>
          <p className="section-subheading">
            Web, mobile, or the connective tissue between them—tell me what you&apos;re shipping.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 space-y-6"
          >
            <p className="text-lg text-muted-strong leading-relaxed">
              Share context about your product, timeline, or the challenge you&apos;re solving. I
              typically respond within a day with next steps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href="mailto:amantoppo1739@gmail.com?subject=Project%20Inquiry"
                className="gradient-border bg-foreground text-background"
              >
                Email Me
              </Button>
              <Button variant="outline" href="https://wa.me/916002807871" className="border-foreground/25">
                WhatsApp
              </Button>
              <Button variant="outline" href="https://github.com/amantoppo1739" className="border-foreground/25">
                GitHub
              </Button>
            </div>
            <p className="text-sm text-muted">
              Prefer a quick call? Dial +91 60028 07871. I’m open to remote-friendly collaborations.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="surface flex items-center gap-3 transition hover:-translate-y-1"
                aria-label={label}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground/10 text-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-subtle">
                    {label}
                  </p>
                  <p className="text-base font-semibold text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

