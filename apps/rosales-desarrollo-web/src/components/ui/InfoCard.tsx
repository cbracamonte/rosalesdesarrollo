import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description: ReactNode;
  className?: string;
}

export function InfoCard({ title, description, className }: InfoCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-brand-slate/50 bg-brand-slate p-6",
        className,
      )}
    >
      <h3 className="font-heading text-xl font-bold text-brand-white">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-brand-gray">{description}</div>
    </article>
  );
}
