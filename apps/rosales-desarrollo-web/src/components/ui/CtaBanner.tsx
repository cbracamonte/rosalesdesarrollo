import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title: string;
  description: string;
  actions: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function CtaBanner({
  title,
  description,
  actions,
  className,
  tone = "dark",
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:justify-between md:p-10",
        tone === "dark" &&
          "border-brand-silver/20 bg-brand-night-deep",
        tone === "light" &&
          "border-brand-gray/20 bg-brand-white shadow-[0_12px_40px_rgba(20,23,32,0.08)]",
        className,
      )}
    >
      <div className="max-w-3xl">
        <h2
          className={cn(
            "font-heading text-3xl font-bold",
            tone === "dark" ? "text-brand-white" : "text-brand-carbon",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "dark" ? "text-brand-gray" : "text-brand-carbon/75",
          )}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">{actions}</div>
    </div>
  );
}
