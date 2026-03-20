import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePropertyListingSchema } from "@/lib/structured-data";
import {
  getPropertyBySlug,
  getAllPropertySlugs,
} from "@/lib/properties";

export function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return createMetadata({
    title: `${property.type} en ${property.district} | ${property.city}`,
    description: `${property.type} en ${property.district}, ${property.city}. ${property.description.slice(0, 120)}`,
    canonical: `/propiedades/${slug}`,
  });
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-28 pb-16">
      <JsonLd
        data={generatePropertyListingSchema({
          name: property.name,
          description: property.description,
          slug: property.slug,
          district: property.district,
          city: property.city,
          country: property.country,
        })}
      />

      <section>
        <span className="inline-block rounded-full border border-brand-silver/30 px-3 py-1 text-xs tracking-wider text-brand-silver">
          {property.status}
        </span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-brand-white">
          {property.type} en {property.district} — {property.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          {property.description}
        </p>
      </section>

      <section className="mt-12">
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
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          Ubicación en {property.district}, {property.city}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-gray">
          {property.name} se encuentra en {property.district}, uno de los
          distritos más atractivos de {property.city}. Su ubicación estratégica
          ofrece acceso a servicios, transporte, áreas verdes y la mejor oferta
          gastronómica y cultural de la ciudad.
        </p>
      </section>

      <section className="mt-12 rounded-lg border border-brand-slate/50 bg-brand-slate p-8">
        <h2 className="font-heading text-xl font-bold text-brand-white">
          ¿Interesado en {property.type.toLowerCase()} en {property.district}?
        </h2>
        <p className="mt-2 leading-relaxed text-brand-gray">
          Solicita información sobre disponibilidad, precios y opciones de
          financiamiento para {property.name}. Nuestro equipo de asesores está
          listo para atenderte.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className="inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
          >
            Solicita información de este proyecto
          </Link>
          <Link
            href="/propiedades"
            className="inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    </main>
  );
}
