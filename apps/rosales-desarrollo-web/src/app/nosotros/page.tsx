import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { AboutPageContent } from "@/features/about";

export const metadata: Metadata = createMetadata({
  title: "Nosotros",
  description:
    "Conoce a Rosales Desarrollo, empresa de construcción y desarrollo inmobiliario en Perú. Nuestra misión es transformar espacios con calidad y diseño.",
  canonical: "/nosotros",
});

export default function NosotrosPage() {
  return <AboutPageContent />;
}
