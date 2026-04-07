import { Section } from '@/components/layout/Section';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PageIntro } from '@/components/ui/PageIntro';
import { getProperties, PropertyList } from '@/features/properties';
import { homeContent } from '../data/home-content';

export function CurrentProjectsSection() {
  const properties = getProperties();
  const { title, description } = homeContent.currentProjects;

  return (
    <Section tone="light" className="py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <MotionReveal>
          <PageIntro title={title} description={description} tone="light" className="max-w-4xl" />
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <ButtonLink href="/propiedades" variant="solid-dark" className="self-start md:self-end">
            Ver todos los proyectos
          </ButtonLink>
        </MotionReveal>
      </div>

      <MotionReveal delay={0.12} className="mt-12">
        <PropertyList properties={properties} />
      </MotionReveal>
    </Section>
  );
}
