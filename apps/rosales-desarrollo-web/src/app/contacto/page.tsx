import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/features/contact";

export const metadata: Metadata = createMetadata({
  title: "Contacto | Agenda tu visita",
  description:
    "Escríbenos para conocer precios, disponibilidad o agendar una visita a nuestros proyectos en Pimentel, Chiclayo y Huanchaco. Respondemos rápido.",
  canonical: "/contacto",
});

export default function ContactoPage() {
  return <ContactPageContent />;
}
