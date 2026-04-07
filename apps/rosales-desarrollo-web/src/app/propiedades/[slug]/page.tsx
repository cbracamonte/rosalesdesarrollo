import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import {
  createPropertyBreadcrumbSchema,
  createPropertyListingSchema,
  createPropertyMetadata,
  getPropertyBySlug,
  getAllPropertySlugs,
} from "@/features/properties";
import { ValleDoradoPage } from "@/features/properties/components/ValleDoradoPage";

export function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return createPropertyMetadata(property);
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  if (slug === "casa-pimentel-valle-dorado") {
    return <ValleDoradoPage property={property} />;
  }

  return (
    <main id="main-content" className="min-h-screen pt-28 pb-16">
      <WebPageJsonLd
        name={`${property.name} en ${property.district}`}
        description={property.description}
        path={`/propiedades/${property.slug}`}
      />
      <JsonLd data={createPropertyListingSchema(property)} />
      <JsonLd data={createPropertyBreadcrumbSchema(property)} />

      <Section className="py-0">
        <nav aria-label="Breadcrumb">
          <ol className="mb-6 flex flex-wrap items-center gap-2 text-sm text-brand-gray">
            <li>
              <ButtonLink href="/" variant="text" className="no-underline">
                Inicio
              </ButtonLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <ButtonLink href="/propiedades" variant="text" className="no-underline">
                Propiedades
              </ButtonLink>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-brand-white">{property.name}</li>
          </ol>
        </nav>

        <span className="inline-block rounded-full border border-brand-silver/30 px-3 py-1 text-xs tracking-wider text-brand-silver">
          {property.status}
        </span>
        <PageIntro
          title={`${property.type} en ${property.district} — ${property.name}`}
          description={property.description}
          eyebrow={property.priceLabel}
          className="mt-4"
        />
      </Section>

      <Section className="py-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          Características del proyecto
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {property.features.map((feature) => (
            <div
              key={feature}
              className="rounded-lg border border-brand-slate/50 bg-brand-slate p-4"
            >
              <p className="text-sm leading-relaxed text-brand-gray">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-0">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          Ubicación en {property.district}, {property.city}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-gray">
          {property.name} se encuentra en {property.district}, {property.city}. Una zona con buenos accesos, servicios cercanos y un entorno residencial en crecimiento.
        </p>
      </Section>

      <Section className="py-12">
        <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-8">
        <h2 className="font-heading text-xl font-bold text-brand-white">
          ¿Interesado en {property.type.toLowerCase()} en {property.district}?
        </h2>
        <p className="mt-2 leading-relaxed text-brand-gray">
          Consulta precios, disponibilidad o agenda una visita a {property.name}. Te respondemos rápido.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/contacto">
            Consultar este proyecto
          </ButtonLink>
          <ButtonLink href="/propiedades">
            Ver todos los proyectos
          </ButtonLink>
        </div>
        </div>
      </Section>
    </main>
  );
}
