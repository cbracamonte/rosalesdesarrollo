import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { FloatingElement } from '@/components/motion/FloatingElement';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { ParallaxMedia } from '@/components/motion/ParallaxMedia';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { homeContent } from '../data/home-content';

export function InvestmentBenefitsSection() {
  const { title, subtitle, cards } = homeContent.investment;

  return (
    <Section tone="light" className="overflow-hidden py-24">
      <MotionReveal className="text-center">
        <h2 className="font-heading text-4xl font-bold text-brand-carbon md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-carbon/70 md:text-lg">
          {subtitle}
        </p>
      </MotionReveal>

      <div className="mt-14 space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <MotionReveal className="rounded-[2.4rem] bg-brand-sand/75 p-8 md:p-10">
            <p className="text-sm font-medium text-brand-carbon/55">{cards[0].eyebrow}</p>
            <h3 className="mt-4 max-w-md font-heading text-3xl font-bold leading-[1.04] text-brand-carbon md:text-4xl">
              {cards[0].title}
            </h3>
            <p className="mt-10 max-w-sm text-lg leading-relaxed text-brand-carbon/80">
              {cards[0].description}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08} className="relative overflow-hidden rounded-[2.4rem] bg-brand-white p-4 shadow-[0_22px_60px_rgba(20,23,32,0.1)]">
            <ParallaxMedia distance={18}>
            <Image
              src="/images/placeholders/project-wide.webp"
              alt="Placeholder residencial para proyecto activo de Rosales Desarrollo"
              width={1600}
              height={1000}
              className="aspect-[1.04/1] h-full w-full rounded-[2rem] object-cover"
            />
            </ParallaxMedia>
            <FloatingElement className="absolute bottom-7 right-7" delay={0.2} yOffset={9}>
              <div className="rounded-full bg-brand-night px-5 py-3 text-sm text-brand-white shadow-[0_16px_40px_rgba(0,0,0,0.24)]">
              Alta valorización
              </div>
            </FloatingElement>
          </MotionReveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <MotionReveal delay={0.1} className="relative rounded-[2.4rem] border border-brand-gray/20 bg-brand-white p-6 shadow-[0_22px_60px_rgba(20,23,32,0.08)]">
            <ParallaxMedia distance={14}>
            <Image
              src="/images/placeholders/project-evening.webp"
              alt="Placeholder de proyecto listo para inversión temprana"
              width={1600}
              height={1000}
              className="aspect-[1.1/0.92] w-full rounded-[2rem] object-cover"
            />
            </ParallaxMedia>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-brand-carbon/55">{cards[1].eyebrow}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold leading-[1.08] text-brand-carbon md:text-3xl">
                  {cards[1].title}
                </h3>
              </div>
              <span className="rounded-full bg-brand-sand px-4 py-2 text-sm font-medium text-brand-carbon">
                Respuesta rápida
              </span>
            </div>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-carbon/74 md:text-lg">
              {cards[1].description}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.16} className="rounded-[2.4rem] bg-brand-bg p-8 shadow-[0_18px_50px_rgba(20,23,32,0.06)] md:p-10">
            <p className="text-sm font-medium text-brand-carbon/55">{cards[2].eyebrow}</p>
            <h3 className="mt-4 max-w-lg font-heading text-3xl font-bold leading-[1.04] text-brand-carbon md:text-4xl">
              {cards[2].title}
            </h3>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-carbon/76 md:text-lg">
              {cards[2].description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-brand-gray/20 bg-brand-white px-4 py-2 text-sm text-brand-carbon">Proyecto visible</span>
              <span className="rounded-full border border-brand-gray/20 bg-brand-white px-4 py-2 text-sm text-brand-carbon">Compra clara</span>
              <span className="rounded-full border border-brand-gray/20 bg-brand-white px-4 py-2 text-sm text-brand-carbon">Mejor atención</span>
            </div>
            <ButtonLink href="/contacto" variant="solid-dark" className="mt-10">
              Quiero más información
            </ButtonLink>
          </MotionReveal>
        </div>
      </div>
    </Section>
  );
}
