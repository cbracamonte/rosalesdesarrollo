import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function InfoCard({
  title,
  description,
  className,
  tone = "dark",
}: InfoCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border p-6",
        tone === "dark" && "border-brand-slate/50 bg-brand-slate",
        tone === "light" && "border-brand-gray/20 bg-brand-white shadow-[0_8px_30px_rgba(20,23,32,0.06)]",
        className,
      )}
    >
      <h3
        className={cn(
          "font-heading text-xl font-bold",
          tone === "dark" ? "text-brand-white" : "text-brand-carbon",
        )}
      >
        {title}
      </h3>
      <div
        className={cn(
          "mt-3 text-sm leading-relaxed",
          tone === "dark" ? "text-brand-gray" : "text-brand-carbon/80",
        )}
      >
        {description}
      </div>
    </article>
  );
}
