import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import ScrollRevealHero from "@/components/home/ScrollRevealHero";

export const metadata: Metadata = createMetadata({
  title: "Desarrollo Inmobiliario en Perú",
  description:
    "Rosales Desarrollo — Construcción y desarrollo inmobiliario de calidad en Perú. Proyectos residenciales con diseño moderno y acabados premium.",
  canonical: "/",
});

export default function Home() {
  return (
    <main>
      <ScrollRevealHero />
    </main>
  );
}
