export const SITE_CONFIG = {
  name: "Rosales Desarrollo",
  legalName: "Rosales Desarrollo EIRL",
  url: process.env.SITE_URL || "https://rosalesdesarrollo.com",
  description:
    "Casas y proyectos residenciales en venta en Pimentel, Chiclayo y Huanchaco. Vivienda nueva, bien ubicada y con atención directa.",
  locale: "es_PE",
  contactEmail: "info@rosalesdesarrollo.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+51987654321",
  location: "Perú",
  operationalLocation: "Chiclayo, Perú",
  foundedYear: 2026,
  generalManager: "Juan Manuel Bracamonte Rosales",
  businessLine: "Desarrollo inmobiliario",
} as const;
