"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function ScrollRevealHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the background image so text doesn't look pixelated
  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/hero-bg.webp";
    img.onload = () => setImageLoaded(true);
    // If already cached, defer setState to avoid synchronous update in effect
    if (img.complete) queueMicrotask(() => setImageLoaded(true));
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollableHeight =
      containerRef.current.offsetHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;
    const scrolled = -rect.top;
    const p = Math.max(0, Math.min(1, scrolled / scrollableHeight));
    setProgress(p);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ─── PHASE 1 (0 → 0.4): Text visible, starts zooming ───
  // ─── PHASE 2 (0.4 → 0.7): Text fades out while zooming, image fades in ───
  // ─── PHASE 3 (0.7 → 1.0): Full image + logo ───

  // Text zoom: dynamic fontSize (not transform) to avoid pixelation
  // Goes from 10vw → 300vw
  const fontSize = 10 + Math.pow(progress, 2) * 290;

  // Text opacity: full at 0, starts fading at 0.3, gone by 0.6
  const textOpacity =
    progress < 0.3 ? 1 : Math.max(0, 1 - (progress - 0.3) / 0.3);

  // Image opacity: starts showing at 0.35, full by 0.7
  const imageOpacity =
    progress < 0.35 ? 0 : Math.min(1, (progress - 0.35) / 0.35);

  // Logo: fades in 0.55 → 0.8
  const logoOpacity =
    progress < 0.55 ? 0 : Math.min(1, (progress - 0.55) / 0.25);
  const logoScale = 0.8 + logoOpacity * 0.2;

  return (
    <div ref={containerRef} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-night-deep">
        {/* Hero image — fades in as text fades out */}
        <div
          className="absolute inset-0 z-0"
          style={{ opacity: imageOpacity }}
        >
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            className="object-cover object-[center_25%]"
            style={{ filter: "grayscale(0.7) contrast(1.05)" }}
            priority
          />
          <div className="absolute inset-0 bg-brand-night-deep/40" />
        </div>

        {/* Logo — appears after image reveals */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            willChange: "opacity, transform",
          }}
        >
          {/* Mobile: icon + name only (no tagline) */}
          <Image
            src="icons/isotipo-mobile.svg"
            alt="Rosales Desarrollo — Desarrollo inmobiliario en Perú"
            width={350}
            height={240}
            className="block md:hidden w-72 sm:w-80 drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          />
          {/* Desktop: full logo with tagline */}
          <Image
            src="icons/isotipo.svg"
            alt="Rosales Desarrollo — Desarrollo inmobiliario en Perú"
            width={550}
            height={410}
            className="hidden md:block md:w-120 lg:w-152 xl:w-176 drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Text — zooms in and fades out on scroll */}
        {textOpacity > 0 && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{
              opacity: imageLoaded ? textOpacity : 0,
              transition: imageLoaded ? "none" : "opacity 0.5s ease-in",
            }}
          >
            <h1
              className="select-none whitespace-nowrap text-center font-heading font-bold uppercase leading-[0.88]"
              style={{
                fontSize: `${fontSize}vw`,
                letterSpacing: "-0.02em",
                backgroundImage: "url(/images/hero-bg.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center 25%",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                filter: "grayscale(0.6) contrast(1.1) brightness(0.8)",
              }}
            >
              LIVE
              <br />
              YOUR
              <br />
              DREAM
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
