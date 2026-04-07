import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getProperties, PropertyList } from "@/features/properties";

export function FeaturedPropertiesSection() {
  const featuredProperties = getProperties().slice(0, 3);

  return (
    <Section tone="dark">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.24em] text-brand-silver">
            Proyectos destacados
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-white md:text-4xl">
            Explorá desarrollos pensados para invertir y vivir mejor.
          </h2>
        </div>
        <ButtonLink
          href="/propiedades"
          variant="text"
          className="self-start text-brand-silver hover:text-brand-white"
        >
          Ver todos los proyectos
        </ButtonLink>
      </div>

      <div className="mt-10">
        <PropertyList properties={featuredProperties} />
      </div>
    </Section>
  );
}
