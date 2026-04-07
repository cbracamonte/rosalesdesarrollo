import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
  tone?: "dark" | "light" | "transparent";
}

export function Section({
  children,
  className,
  containerClassName,
  as = "section",
  tone = "transparent",
}: SectionProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "py-20",
        tone === "dark" && "bg-brand-night text-brand-white",
        tone === "light" && "bg-brand-bg text-brand-carbon",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
