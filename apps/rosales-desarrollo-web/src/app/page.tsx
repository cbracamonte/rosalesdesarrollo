import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { createMetadata } from "@/lib/seo";
import {
  AboutPreviewSection,
  FeaturedPropertiesSection,
  HeroSection,
  PrimaryCtaSection,
  ValuePropositionSection,
} from "@/features/home";

export const metadata: Metadata = createMetadata({
  title: "Desarrollo Inmobiliario en Perú",
  description:
    "Rosales Desarrollo — Construcción y desarrollo inmobiliario de calidad en Perú. Proyectos residenciales con diseño moderno y acabados premium.",
  canonical: "/",
});

export default function Home() {
  return (
    <main id="main-content">
      <WebPageJsonLd
        name="Desarrollo Inmobiliario en Perú"
        description="Rosales Desarrollo — Construcción y desarrollo inmobiliario de calidad en Perú. Proyectos residenciales con diseño moderno y acabados premium."
        path="/"
      />
      <HeroSection />
      <ValuePropositionSection />
      <FeaturedPropertiesSection />
      <AboutPreviewSection />
      <PrimaryCtaSection />
    </main>
  );
}
