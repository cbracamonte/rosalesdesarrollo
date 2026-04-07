import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { InfoCard } from '@/components/ui/InfoCard';
import { PageIntro } from '@/components/ui/PageIntro';
import { contactContent } from '../data/contact-content';

export function ContactPageContent() {
  const { hero, info, interest } = contactContent;

  return (
    <main id="main-content" className="min-h-screen bg-brand-bg pt-28 pb-16">
      <WebPageJsonLd
        name="Contacto"
        description={hero.description}
        path="/contacto"
      />

      <Section tone="light" className="py-0">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <PageIntro title={hero.title} description={hero.description} tone="light" />
          <div className="overflow-hidden rounded-[2.4rem] bg-brand-white p-4 shadow-[0_24px_70px_rgba(20,23,32,0.08)]">
            <Image
              src="/images/placeholders/advisor-placeholder.webp"
              alt="Placeholder de asesoría inmobiliaria para Rosales Desarrollo"
              width={1000}
              height={1200}
              className="aspect-[1/1.08] w-full rounded-4xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="py-12" tone="light">
        <div className="grid gap-8 md:grid-cols-2">
          <InfoCard
            title={info.title}
            description={
              <dl className="space-y-5">
                {info.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-medium uppercase tracking-[0.18em] text-brand-carbon/50">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-base text-brand-carbon/78">{item.value}</dd>
                  </div>
                ))}
              </dl>
            }
            className="p-8"
            tone="light"
          />

          <InfoCard
            title={interest.title}
            description={
              <>
                <ul className="space-y-3">
                  {interest.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={`mailto:${info.items[0].value}`} variant="solid-dark">
                    Escribir por email
                  </ButtonLink>
                  <ButtonLink href="/propiedades" variant="text" className="text-brand-carbon hover:text-brand-night">
                    Ver proyectos activos
                  </ButtonLink>
                </div>
              </>
            }
            className="p-8"
            tone="light"
          />
        </div>
      </Section>
    </main>
  );
}
