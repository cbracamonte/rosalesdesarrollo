"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  rotate?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  yOffset = 12,
  rotate = 0,
  duration = 5.5,
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      animate={{
        y: [0, -yOffset, 0],
        rotate: [rotate, rotate - 1.25, rotate],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
