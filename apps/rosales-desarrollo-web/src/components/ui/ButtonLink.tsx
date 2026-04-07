import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "text";
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
        variant === "outline" &&
          "inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center text-brand-silver hover:border-brand-white hover:text-brand-white",
        variant === "text" &&
          "inline-block text-brand-silver underline hover:text-brand-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}
