import { SITE_CONFIG } from '@/config/site';

export const contactContent = {
  hero: {
    title: 'Conversemos sobre tu próximo hogar',
    description:
      'Escríbenos para conocer nuestros proyectos, consultar precios o agendar una visita. Respondemos rápido.',
  },
  info: {
    title: 'Contáctanos',
    items: [
      { label: 'Email', value: SITE_CONFIG.contactEmail },
      { label: 'Oficina', value: SITE_CONFIG.operationalLocation },
      { label: 'Horario', value: 'Lunes a sábado, respuesta en menos de 24 horas' },
      { label: 'Zona de proyectos', value: 'Pimentel, Chiclayo y Huanchaco' },
    ],
  },
  interest: {
    title: '¿En qué te podemos ayudar?',
    bullets: [
      'Precios y formas de pago disponibles',
      'Estado actual de obra y fecha de entrega',
      'Coordinar una visita al proyecto',
      'Resolver dudas sobre ubicación y características',
    ],
  },
} as const;
