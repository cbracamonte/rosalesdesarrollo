import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { AboutPageContent } from "@/features/about";

export const metadata: Metadata = createMetadata({
  title: "Nosotros | Quiénes somos",
  description:
    "Somos Rosales Desarrollo, empresa de desarrollo inmobiliario en Pimentel, Chiclayo y Huanchaco. Casas y proyectos residenciales con ubicaciones estratégicas.",
  canonical: "/nosotros",
});

export default function NosotrosPage() {
  return <AboutPageContent />;
}
