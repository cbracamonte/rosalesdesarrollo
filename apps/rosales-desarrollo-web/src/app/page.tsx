import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { HomePageContent } from '@/features/home/components/HomePageContent';

export const metadata: Metadata = createMetadata({
  title: 'Casas en venta en Pimentel y Chiclayo | Proyectos residenciales',
  description:
    'Encuentra tu próximo hogar con Rosales Desarrollo. Casas nuevas en Pimentel, Chiclayo y Huanchaco. Conoce nuestros proyectos y agenda una visita.',
  canonical: '/',
});

export default function Home() {
  return <HomePageContent />;
}
