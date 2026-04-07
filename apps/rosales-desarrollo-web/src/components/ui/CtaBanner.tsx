import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title: string;
  description: string;
  actions: ReactNode;
  className?: string;
}

export function CtaBanner({
  title,
  description,
  actions,
  className,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-brand-silver/20 bg-brand-night-deep p-8 md:flex-row md:items-center md:justify-between md:p-10",
        className,
      )}
    >
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-brand-white">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-brand-gray">{description}</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">{actions}</div>
    </div>
  );
}
