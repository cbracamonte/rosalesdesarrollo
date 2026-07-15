import {
  BadgeDollarSign,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Gem,
  Handshake,
  KeyRound,
  MapPinned,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    title: "Sin comisión",
    description:
      "Compras directo con Rosales Desarrollo, sin pagar intermediarios.",
    icon: Building2,
  },
  {
    title: "Hogares pensados para familias",
    description:
      "Viviendas pensada para familias que quieren dejar de alquilar.",
    icon: MapPinned,
  },
  {
    title: "Te asesoramos",
    description:
      "Te orientamos en el proceso del bono Techo Propio o Mi Vivienda y te ayudamos a evaluar si calificas para un crédito hipotecario.",
    icon: MessageCircle,
  },
  {
    title: "Visita fácil",
    description: "Agenda por WhatsApp y conoce la casa sin compromiso.",
    icon: Handshake,
  },
] as const;

export const benefits = [
  {
    title: "Directo del constructor",
    description: "Sin comisión ni tratos confusos.",
    icon: ClipboardCheck,
  },
  {
    title: "Pensada para familia",
    description: "Espacios para vivir tranquilos.",
    icon: ShieldCheck,
  },
  {
    title: "Precio aterrizado",
    description: "Para familias que buscan su primera casa.",
    icon: FileCheck2,
  },
  {
    title: "Asesoría real",
    description: "Te guiamos sin prometer aprobación.",
    icon: PenTool,
  },
  {
    title: "Respuesta rápida",
    description: "Consulta y agenda por WhatsApp.",
    icon: BadgeDollarSign,
  },
  {
    title: "Todo visible",
    description: "Casa, ubicación y condiciones claras.",
    icon: Gem,
  },
] as const;

export const journeySteps = [
  { step: 1, title: "Escríbenos", description: "Consulta disponibilidad." },
  { step: 2, title: "Visita", description: "Conoce la casa." },
  { step: 3, title: "Evalúa crédito", description: "Te orientamos." },
  { step: 4, title: "Reserva", description: "Separa tu vivienda." },
  { step: 5, title: "Firma", description: "Avanza seguro." },
] as const;

export const projectImages = [
  "/images/valle-dorado-pimentel/full-image-lobby.png",
  "/images/valle-dorado-pimentel/salon.png",
  "/images/valle-dorado-pimentel/bed.png",
] as const;

export const projectHighlights = [
  "Casa propia en Chiclayo",
  "Venta directa, sin comisión",
  "Asesoría para evaluar financiamiento",
] as const;

export const trustSignals = [
  {
    title: "Venta directa",
    description: "Sin intermediarios.",
    icon: Handshake,
  },
  {
    title: "Chiclayo",
    description: "Cerca de la hermosa playa de Pimentel.",
    icon: MapPinned,
  },
  {
    title: "Primera casa",
    description: "Pensada para empezar.",
    icon: Sparkles,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Nos explicaron claro desde el inicio. Visitamos la casa, revisamos números y sentimos que sí podíamos dar el paso.",
    author: "María y José",
    context: "Familia de José Leonardo Ortiz",
  },
  {
    quote:
      "Lo que más nos gustó fue tratar directo. No hubo vueltas ni comisiones raras. Ahora ya estamos separando nuestra casa.",
    author: "Rosa y Miguel",
    context: "Familia chiclayana",
  },
] as const;

export const contactDetails = [
  { label: "Atención", value: "Lunes a sábado", icon: KeyRound },
] as const;
