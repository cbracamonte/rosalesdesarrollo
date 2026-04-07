 "use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:justify-between md:p-10",
        tone === "dark" &&
          "border-brand-silver/20 bg-brand-night-deep",
        tone === "light" &&
          "border-brand-gray/20 bg-brand-white shadow-[0_12px_40px_rgba(20,23,32,0.08)]",
        className,
      )}
    >
      <motion.div
        className="max-w-3xl"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.08, duration: 0.55 }}
      >
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
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: 0.55 }}
      >
        {actions}
      </motion.div>
    </motion.div>
  );
}
