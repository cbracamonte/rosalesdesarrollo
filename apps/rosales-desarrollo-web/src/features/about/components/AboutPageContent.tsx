import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { InfoCard } from '@/components/ui/InfoCard';
import { PageIntro } from '@/components/ui/PageIntro';
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd';
import { aboutContent } from '../data/about-content';

export function AboutPageContent() {
  const { hero, story, mission, values } = aboutContent;

  return (
    <main id="main-content" className="min-h-screen bg-brand-bg pt-28 pb-16">
      <WebPageJsonLd
        name="Nosotros"
        description={hero.description}
        path="/nosotros"
      />

      <Section tone="light" className="py-0">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <PageIntro title={hero.title} description={hero.description} tone="light" />
          <div className="overflow-hidden rounded-[2.4rem] bg-brand-white p-4 shadow-[0_24px_70px_rgba(20,23,32,0.1)]">
            <Image
              src="/images/placeholders/project-closeup.webp"
              alt="Placeholder visual institucional de Rosales Desarrollo"
              width={1600}
              height={1000}
              className="aspect-[1.18/1] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="py-12" tone="light">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-carbon md:text-4xl">
              {story.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-carbon/78">
              {story.body}
            </p>
          </div>
          <div className="rounded-[2rem] bg-brand-sand/65 p-8 text-brand-carbon">
            <h3 className="font-heading text-2xl font-bold">{mission.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-brand-carbon/78">
              {mission.body}
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-12" tone="light">
        <h2 className="font-heading text-3xl font-bold text-brand-carbon md:text-4xl">
          {values.title}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.items.map((value) => (
            <InfoCard
              key={value.title}
              title={value.title}
              description={value.description}
              tone="light"
            />
          ))}
        </div>
      </Section>

      <Section className="py-12" tone="dark">
        <CtaBanner
          title="Construimos con más criterio para invertir y comprar mejor."
          description="Si deseas conocer el proyecto actual o conversar con nuestro equipo, te acompañamos con información clara."
          actions={
            <>
              <ButtonLink href="/propiedades/casa-pimentel-valle-dorado" variant="solid-light">
                Ver proyectos
              </ButtonLink>
              <ButtonLink href="/contacto">
                Hablar con el equipo
              </ButtonLink>
            </>
          }
        />
      </Section>
    </main>
  );
}
