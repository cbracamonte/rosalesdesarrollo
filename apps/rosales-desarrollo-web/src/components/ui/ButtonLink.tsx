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
        "font-heading text-sm tracking-wider transition-colors",
        variant === "solid-light" &&
          "inline-block rounded-md bg-brand-white px-6 py-3 text-center text-brand-night hover:bg-brand-silver",
        variant === "solid-dark" &&
          "inline-block rounded-md bg-brand-night px-6 py-3 text-center text-brand-white hover:bg-brand-carbon",
        variant === "outline" &&
          "inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center text-brand-silver hover:border-brand-white hover:text-brand-white",
        variant === "text" &&
          "inline-block underline underline-offset-4",
        className,
      )}
    >
      {children}
    </Link>
  );
}
