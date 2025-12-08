"use client";

import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MessageCircle,
} from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "amantoppo1739@gmail.com",
    href: "mailto:amantoppo1739@gmail.com?subject=Portfolio%20Inquiry",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+916002807871",
    href: "tel:+916002807871",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+916002807871",
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

const formspreeAction =
  process.env.NEXT_PUBLIC_FORMSPREE_ACTION ||
  "https://formspree.io/f/yourFormId";

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

        <div className="surface-card space-y-6">
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-semibold">Tell me about your idea</h3>
            <p className="text-sm text-muted">
              Share some context about your product, timeline, or the challenge
              you&apos;re solving. I usually respond within a day.
            </p>
          </div>

          <form
            action={formspreeAction}
            method="POST"
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-muted-soft">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-md border border-foreground/10 bg-background px-4 py-3 text-sm focus:border-foreground/30 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-muted-soft">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-md border border-foreground/10 bg-background px-4 py-3 text-sm focus:border-foreground/30 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-muted-soft">
                Contact number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 00000 00000"
                className="mt-2 w-full rounded-md border border-foreground/10 bg-background px-4 py-3 text-sm focus:border-foreground/30 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-muted-soft">
                Project details
              </label>
              <textarea
                required
                name="message"
                placeholder="What are you building? Desired timeline? Budget range?"
                className="mt-2 w-full rounded-md border border-foreground/10 bg-background px-4 py-3 text-sm focus:border-foreground/30 focus:outline-none"
                rows={4}
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-muted-soft">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company or organization (optional)"
                className="mt-2 w-full rounded-md border border-foreground/10 bg-background px-4 py-3 text-sm focus:border-foreground/30 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-muted-soft">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="City, country"
                className="mt-2 w-full rounded-md border border-foreground/10 bg-background px-4 py-3 text-sm focus:border-foreground/30 focus:outline-none"
              />
            </div>
            <input type="hidden" name="_subject" value="Portfolio Inquiry" />
            <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 px-8 bg-foreground text-background hover:bg-foreground/90"
              >
                Send message
              </button>
              <p className="text-xs text-muted">
                I&apos;ll reply within a day. You can also call/WhatsApp at
                {" +916002807871."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

