import type { Metadata } from 'next';
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd';
import { createMetadata } from '@/lib/seo';
import {
  CurrentProjectsSection,
  ExploreMapSection,
  HeroSection,
  IntegratedProcessSection,
  InvestmentBenefitsSection,
  PrimaryCtaSection,
  StrategicOverviewSection,
} from '@/features/home';

export const metadata: Metadata = createMetadata({
  title: 'Casas en venta en Pimentel y Chiclayo | Proyectos residenciales',
  description:
    'Encuentra tu próximo hogar con Rosales Desarrollo. Casas nuevas en Pimentel, Chiclayo y Huanchaco. Conoce nuestros proyectos y agenda una visita.',
  canonical: '/',
});

export default function Home() {
  return (
    <main id="main-content">
      <WebPageJsonLd
        name="Rosales Desarrollo"
        description="Casas nuevas en venta en Pimentel, Chiclayo y Huanchaco. Conoce nuestros proyectos y agenda una visita."
        path="/"
      />
      <HeroSection />
      <StrategicOverviewSection />
      <IntegratedProcessSection />
      <InvestmentBenefitsSection />
      <CurrentProjectsSection />
      <ExploreMapSection />
      <PrimaryCtaSection />
    </main>
  );
}
