"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ValleDoradoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { scale, y }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/valle-dorado-pimentel/intro-home.png"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/valle-dorado-pimentel/valle-dorado-pimentel.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-night via-brand-night/40 to-transparent" />
      <div className="absolute inset-0 bg-brand-night/25" />

      <motion.div
        className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-16 md:px-12 lg:px-20"
        style={shouldReduceMotion ? undefined : { opacity }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.span
            className="inline-block rounded-full border border-brand-silver/30 bg-brand-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            En construcción
          </motion.span>

          <motion.h1
            className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.1] text-brand-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Casa en Valle Dorado
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-lg leading-relaxed text-brand-white/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Pimentel, Chiclayo. A minutos de la playa, en una de las zonas residenciales con mayor crecimiento.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <ButtonLink href="/#contacto" variant="solid-light">
              Agenda tu visita
            </ButtonLink>
            <ButtonLink href="#galeria" variant="outline">
              Ver el proyecto
            </ButtonLink>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
