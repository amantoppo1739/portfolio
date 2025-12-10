"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = useMemo(
    () =>
      cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled 
          ? "backdrop-blur-2xl bg-[var(--background)]/85 shadow-lg border-b border-[var(--border)]" 
          : "bg-transparent"
      ),
    [scrolled]
  );

  return (
    <nav className={navClass}>
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-[var(--border)]">
            <Image
              src="/avatar.jpg"
              alt="Aman Toppo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-subtle">Aman Toppo</p>
            <p className="text-sm font-semibold text-foreground">Digital Experiences</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6 text-sm font-medium text-muted">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              size="sm" 
              href="#contact" 
              variant="ghost"
              className="border border-[var(--border)] hover:border-foreground/30"
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="h-11 w-11"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="glass rounded-2xl p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-muted-strong hover:bg-foreground/5"
                >
                  {item.name}
                </a>
              ))}
              <Button href="#contact" className="w-full">
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

