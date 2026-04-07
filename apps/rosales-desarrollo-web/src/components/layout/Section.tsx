import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
}

export function Section({
  children,
  className,
  containerClassName,
  as = "section",
}: SectionProps) {
  const Component = as;

  return (
    <Component className={cn("py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
