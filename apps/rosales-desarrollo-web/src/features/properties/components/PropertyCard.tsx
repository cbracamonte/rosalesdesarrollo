import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-brand-gray/15 bg-brand-white p-4 shadow-[0_20px_50px_rgba(20,23,32,0.08)]">
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <Image
          src="/images/placeholders/project-wide.webp"
          alt={`Placeholder visual de ${property.name}`}
          width={1600}
          height={1000}
          className="aspect-[1.14/1] w-full object-cover"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-brand-white/92 px-3 py-2 text-xs font-medium tracking-wider text-brand-carbon shadow-[0_14px_28px_rgba(20,23,32,0.14)]">
          {property.status}
        </span>
      </div>

      <div className="px-3 pb-3 pt-6">
        <p className="text-sm tracking-wide text-brand-carbon/55">
          {property.type} · {property.district}
        </p>

        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-carbon">
          {property.name}
        </h2>

        {property.priceLabel ? (
          <p className="mt-3 text-base font-medium text-brand-carbon">
            {property.priceLabel}
          </p>
        ) : null}

        <p className="mt-4 text-sm leading-relaxed text-brand-carbon/72 md:text-base">
          {property.description}
        </p>

        <ul className="mt-6 space-y-2">
          {property.features.slice(0, 2).map((feature) => (
            <li key={feature} className="text-sm text-brand-carbon/62">
              • {feature}
            </li>
          ))}
        </ul>

        <ButtonLink
          href={`/propiedades/${property.slug}`}
          variant="solid-dark"
          className="mt-6"
        >
          Ver proyecto
        </ButtonLink>
      </div>
    </article>
  );
}
