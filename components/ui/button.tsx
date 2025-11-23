import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
  asChild?: boolean;
}

const buttonVariants = {
  default: "bg-foreground text-background hover:bg-foreground/90",
  outline: "border border-foreground/20 bg-transparent hover:bg-foreground/10",
  ghost: "hover:bg-foreground/10",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
};

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant = "default", size = "default", href, asChild, children, ...props }, ref) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (href) {
    // Use regular anchor for hash links, mailto, or external links
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={baseClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    // Use Next.js Link for internal routes
    return (
      <Link
        href={href}
        className={baseClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };

