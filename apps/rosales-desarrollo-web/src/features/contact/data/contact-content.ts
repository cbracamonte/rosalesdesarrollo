import { SITE_CONFIG } from "@/config/site";

export const contactContent = {
  hero: {
    title: "Contacto",
    description:
      "¿Tienes preguntas sobre nuestros desarrollos inmobiliarios? Estamos aquí para ayudarte. Escríbenos y nuestro equipo te responderá a la brevedad.",
  },
  info: {
    title: "Información de contacto",
    items: [
      { label: "Email", value: SITE_CONFIG.contactEmail },
      { label: "Ubicación", value: SITE_CONFIG.location },
    ],
  },
  interest: {
    title: "¿Qué te interesa?",
    description:
      "Ya sea que busques información sobre un proyecto específico, disponibilidad de unidades, opciones de financiamiento o desees agendar una visita, nuestro equipo está listo para atenderte.",
  },
} as const;
