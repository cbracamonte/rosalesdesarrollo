import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Section } from '@/components/layout/Section';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { homeContent } from '../data/home-content';

export function IntegratedProcessSection() {
  const { title, subtitle, steps } = homeContent.process;

  return (
    <Section tone="light" className="py-10">
      <div className="overflow-hidden rounded-[2.75rem] border border-brand-slate/40 bg-brand-night-deep px-6 py-12 text-brand-white shadow-[0_35px_90px_rgba(20,23,32,0.18)] md:px-10 md:py-16">
        <MotionReveal className="text-center">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray md:text-lg">
            {subtitle}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.08} className="mt-12 overflow-hidden rounded-[2.2rem]">
          <Image
            src="/images/valle-dorado-pimentel/salon.png"
            alt="Sala principal de casa en Valle Dorado, Pimentel"
            width={1600}
            height={900}
            className="aspect-[16/9] w-full rounded-[2.2rem] object-cover"
          />
        </MotionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <MotionReveal
              key={step.title}
              delay={index * 0.08}
              className="rounded-2xl border border-brand-silver/10 bg-brand-slate/50 px-6 py-6"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-brand-silver/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-brand-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                {step.description}
              </p>
              {index === steps.length - 1 ? (
                <ButtonLink
                  href="/contacto"
                  variant="solid-light"
                  className="mt-5"
                >
                  {step.cta}
                </ButtonLink>
              ) : (
                <ButtonLink
                  href="/propiedades/casa-pimentel-valle-dorado"
                  variant="text"
                  className="mt-5 text-brand-silver"
                >
                  {step.cta}
                </ButtonLink>
              )}
            </MotionReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
