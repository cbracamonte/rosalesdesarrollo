import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/layout/Section';
import { PropertyList } from './PropertyList';
import type { Property } from '../types';

interface PropertiesPageContentProps {
  properties: Property[];
}

export function PropertiesPageContent({
  properties,
}: PropertiesPageContentProps) {
  return (
    <main id="main-content" className="min-h-screen bg-brand-bg pt-28 pb-16">
      <Section className="py-0" tone="light">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <PageIntro
            title="Nuestros proyectos"
            description="Casas y proyectos residenciales en Pimentel, Chiclayo y Huanchaco."
            eyebrow="Proyectos"
            tone="light"
          />
          <div className="overflow-hidden rounded-[2.4rem] bg-brand-white p-4 shadow-[0_24px_70px_rgba(20,23,32,0.1)]">
            <Image
              src="/images/placeholders/project-chiclayo.webp"
              alt="Placeholder principal del portafolio de Rosales Desarrollo"
              width={1600}
              height={1000}
              className="aspect-[1.22/1] w-full rounded-4xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="py-14" tone="light">
        <PropertyList properties={properties} />
      </Section>

      <Section className="py-6" tone="light">
        <div className="rounded-[2.2rem] border border-brand-gray/15 bg-brand-night p-8 text-brand-white shadow-[0_24px_60px_rgba(20,23,32,0.16)] md:p-10">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            ¿Encontraste lo que buscas?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-gray md:text-lg">
            Escríbenos para conocer precios, disponibilidad o coordinar una visita. Estamos para ayudarte.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contacto" variant="solid-light">
              Contactar ahora
            </ButtonLink>
            <ButtonLink href="/nosotros">
              Conocer la empresa
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
