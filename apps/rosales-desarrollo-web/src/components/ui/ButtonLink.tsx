import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "text" | "solid-light" | "solid-dark";
}

export function ButtonLink({
  children,
  className,
  variant = "outline",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center font-heading text-sm leading-none tracking-wider transition-colors",
        variant === "solid-light" &&
          "min-h-12 rounded-md bg-brand-white px-6 py-3 text-center text-brand-night hover:bg-brand-silver",
        variant === "solid-dark" &&
          "min-h-12 rounded-md bg-brand-night px-6 py-3 text-center text-brand-white hover:bg-brand-carbon",
        variant === "outline" &&
          "min-h-12 rounded-md border border-brand-silver/30 px-6 py-3 text-center text-brand-silver hover:border-brand-white hover:text-brand-white",
        variant === "text" &&
          "min-h-12 px-1 underline underline-offset-4",
        className,
      )}
    >
      {children}
    </Link>
  );
}
