import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { ParallaxMedia } from '@/components/motion/ParallaxMedia';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { homeContent } from '../data/home-content';

export function StrategicOverviewSection() {
  const { eyebrow, title, description, supportingCopy, highlights } =
    homeContent.strategicOverview;

  return (
    <Section tone="light" className="overflow-hidden py-24">
      <div className="grid gap-14 lg:grid-cols-[1.55fr_0.9fr] lg:items-start">
        <MotionReveal>
          <p className="font-heading text-sm uppercase tracking-[0.24em] text-brand-carbon/55">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[0.96] text-brand-carbon md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.1} className="max-w-xl lg:pt-6">
          <p className="text-base leading-relaxed text-brand-carbon/78 md:text-lg">
            {description}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-carbon/62 md:text-base">
            {supportingCopy}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/propiedades" variant="solid-dark">
              Ver proyectos
            </ButtonLink>
            <ButtonLink href="/contacto" variant="text" className="text-brand-carbon hover:text-brand-night">
              Hablar con un asesor
            </ButtonLink>
          </div>
        </MotionReveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <MotionReveal
            key={item.title}
            delay={0.08 + index * 0.06}
            className="rounded-[1.8rem] border border-brand-gray/15 bg-brand-white p-6 shadow-[0_16px_36px_rgba(20,23,32,0.06)]"
          >
            <p className="font-heading text-2xl font-bold text-brand-carbon">{item.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-carbon/68">
              {item.description}
            </p>
          </MotionReveal>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr_0.9fr] lg:items-end">
        <MotionReveal delay={0.05}>
          <ParallaxMedia className="relative overflow-hidden rounded-[2.5rem] bg-brand-sand/65 p-4" distance={18}>
          <span className="absolute left-5 top-5 rounded-full bg-brand-white px-4 py-2 text-sm font-medium text-brand-carbon shadow-[0_12px_28px_rgba(20,23,32,0.1)]">
            Identidad + oportunidad
          </span>
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/images/placeholders/project-lifestyle.webp"
              alt="Placeholder de proyecto residencial para Rosales Desarrollo"
              width={1200}
              height={900}
              className="aspect-[1.1/1] h-full w-full object-cover"
            />
          </div>
          </ParallaxMedia>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <ParallaxMedia className="relative overflow-hidden rounded-[2.75rem] bg-brand-bg p-4 shadow-[0_30px_80px_rgba(20,23,32,0.08)]" distance={24}>
          <div className="absolute right-8 top-8 rounded-full bg-brand-night px-4 py-2 text-sm font-medium text-brand-white">
            En construcción
          </div>
          <Image
            src="/images/placeholders/project-chiclayo.webp"
            alt="Placeholder principal del proyecto actual de Rosales Desarrollo"
            width={1600}
            height={1000}
            className="aspect-[1.22/1] h-full w-full rounded-[2.1rem] object-cover"
          />
          </ParallaxMedia>
        </MotionReveal>

        <div className="grid gap-5">
          <MotionReveal delay={0.18}>
            <div className="rounded-[2rem] border border-brand-gray/15 bg-brand-white p-6 shadow-[0_18px_45px_rgba(20,23,32,0.08)]">
            <p className="text-3xl font-bold text-brand-carbon">Compra</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-carbon/68">
              Una propuesta pensada para compradores que quieren avanzar con más claridad.
            </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.24}>
            <div className="rounded-[2rem] border border-brand-gray/15 bg-brand-night p-6 text-brand-white shadow-[0_18px_45px_rgba(20,23,32,0.12)]">
            <p className="text-3xl font-bold text-brand-silver">Cercanía</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray">
              Una marca que busca verse seria, cercana y lista para responder rápido.
            </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </Section>
  );
}
