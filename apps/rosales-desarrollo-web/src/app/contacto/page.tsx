import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/features/contact";

export const metadata: Metadata = createMetadata({
  title: "Contacto",
  description:
    "Contáctanos para conocer nuestros proyectos inmobiliarios en Perú. Solicita información sobre departamentos, residencias y desarrollos de Rosales Desarrollo.",
  canonical: "/contacto",
});

export default function ContactoPage() {
  return <ContactPageContent />;
}
