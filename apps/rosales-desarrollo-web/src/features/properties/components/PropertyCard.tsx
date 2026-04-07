import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
      <span className="inline-block rounded-full border border-brand-silver/30 px-3 py-1 text-xs tracking-wider text-brand-silver">
        {property.status}
      </span>

      <h2 className="mt-4 font-heading text-2xl font-bold text-brand-white">
        {property.name}
      </h2>

      <p className="mt-2 text-sm tracking-wide text-brand-silver">
        {property.type} en {property.district}, {property.city}
      </p>

      {property.priceLabel ? (
        <p className="mt-2 text-sm font-medium text-brand-white">
          {property.priceLabel}
        </p>
      ) : null}

      <p className="mt-4 text-sm leading-relaxed text-brand-gray">
        {property.description}
      </p>

      <ul className="mt-6 space-y-2">
        {property.features.slice(0, 3).map((feature) => (
          <li key={feature} className="text-sm text-brand-gray">
            • {feature}
          </li>
        ))}
      </ul>

      <ButtonLink
        href={`/propiedades/${property.slug}`}
        variant="solid-light"
        className="mt-6 px-5 py-3"
      >
        Ver proyecto
      </ButtonLink>
    </article>
  );
}
