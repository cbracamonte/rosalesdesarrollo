import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { FloatingElement } from '@/components/motion/FloatingElement';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { homeContent } from '../data/home-content';

const floatingItems = [
  { label: 'Chiclayo', className: 'left-0 top-0' },
  { label: 'En venta', className: 'left-0 top-16' },
  { label: 'Contacto rápido', className: 'right-0 bottom-0' },
];

export function ExploreMapSection() {
  const { title, description } = homeContent.mapSection;

  return (
    <Section tone="light" className="pb-8 pt-2 md:pb-10 md:pt-4">
      <div className="relative overflow-hidden rounded-[2.8rem] border border-brand-slate/45 bg-brand-night px-6 py-10 text-brand-white shadow-[0_34px_90px_rgba(20,23,32,0.16)] md:px-10 md:py-12">
        <Image
          src="/images/placeholders/map-pattern.svg"
          alt="Mapa abstracto de oportunidades inmobiliarias"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionReveal className="max-w-xl">
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-gray md:text-lg">
              {description}
            </p>
            <ButtonLink href="/propiedades" variant="solid-light" className="mt-7">
              Ver portafolio
            </ButtonLink>
          </MotionReveal>

          <MotionReveal delay={0.08} className="relative min-h-[17rem] md:min-h-[20rem]">
            <FloatingElement
              className="absolute right-[4%] top-[8%] overflow-hidden rounded-[1.6rem] border-4 border-brand-white bg-brand-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
              delay={0.18}
              yOffset={12}
            >
              <Image
                src="/images/placeholders/project-lifestyle.webp"
                alt="Placeholder lifestyle inmobiliario"
                width={420}
                height={280}
                className="h-36 w-56 object-cover md:h-40 md:w-64"
              />
            </FloatingElement>

            <FloatingElement
              className="absolute left-[4%] top-[36%] overflow-hidden rounded-[1.6rem] border-4 border-brand-white bg-brand-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
              delay={0.28}
              yOffset={14}
            >
              <Image
                src="/images/placeholders/project-closeup.webp"
                alt="Placeholder interior de proyecto"
                width={420}
                height={280}
                className="h-36 w-56 object-cover md:h-40 md:w-64"
              />
            </FloatingElement>

            {floatingItems.map((item, index) => (
              <FloatingElement
                key={item.label}
                className={`absolute ${item.className}`}
                delay={0.08 + index * 0.08}
                yOffset={8}
              >
                <div className="rounded-full bg-brand-white/92 px-4 py-2 text-sm font-medium text-brand-carbon shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                  {item.label}
                </div>
              </FloatingElement>
            ))}
          </MotionReveal>
        </div>
      </div>
    </Section>
  );
}
