import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { ContactPageContent } from '@/features/contact/components/ContactPageContent';

export const metadata: Metadata = createMetadata({
  title: 'Contacto | Rosales Desarrollo',
  description:
    'Contáctanos para conocer precios, disponibilidad y coordinar una visita a nuestros proyectos en Pimentel, Chiclayo y Huanchaco.',
  canonical: '/contacto',
});

export default function ContactPage() {
  return <ContactPageContent />;
}
