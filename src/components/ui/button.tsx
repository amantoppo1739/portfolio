"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>, 
  'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDrag' | 'onDragEnd'
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  default: "bg-foreground text-background hover:bg-foreground/90",
  outline:
    "border border-foreground/20 bg-transparent hover:border-foreground/40 hover:bg-foreground/5",
  ghost: "hover:bg-foreground/10",
};

const sizes: Record<ButtonSize, string> = {
  default: "h-11 px-5",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-7 text-base",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ className, variant = "default", size = "default", href, children, ...props }, ref) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/60 disabled:opacity-60 disabled:pointer-events-none hover:scale-105 active:scale-95",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <motion.a
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      className={classes} 
      ref={ref as React.Ref<HTMLButtonElement>}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

