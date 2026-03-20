import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Nosotros",
  description:
    "Conoce a Rosales Desarrollo, empresa de construcción y desarrollo inmobiliario en Perú. Nuestra misión es transformar espacios con calidad y diseño.",
  canonical: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-28 pb-16">
      <section>
        <h1 className="font-heading text-4xl font-bold text-brand-white">
          Nosotros
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          Transformamos espacios, elevamos vidas. Conoce nuestra historia y
          compromiso con el desarrollo inmobiliario de calidad.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          Nuestra historia
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-gray">
          Rosales Desarrollo nació con la visión de transformar el panorama
          inmobiliario en Perú. Desde nuestros inicios, nos hemos dedicado a
          crear proyectos residenciales que combinan arquitectura de vanguardia,
          materiales de primera calidad y un profundo respeto por el entorno
          urbano.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          Misión
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-gray">
          Construir desarrollos inmobiliarios que eleven la calidad de vida de
          nuestros clientes, ofreciendo espacios diseñados con excelencia,
          funcionalidad y compromiso con la sostenibilidad.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          Nuestros valores
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
            <h3 className="font-heading text-lg font-bold text-brand-white">
              Calidad
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              Cada detalle cuenta. Utilizamos materiales premium y procesos
              constructivos que garantizan durabilidad y excelencia.
            </p>
          </div>
          <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
            <h3 className="font-heading text-lg font-bold text-brand-white">
              Innovación
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              Incorporamos tendencias de diseño y tecnología constructiva para
              crear espacios modernos y eficientes.
            </p>
          </div>
          <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
            <h3 className="font-heading text-lg font-bold text-brand-white">
              Compromiso
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              Acompañamos a nuestros clientes en cada etapa del proceso,
              brindando transparencia y confianza en cada proyecto.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/propiedades"
          className="inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
        >
          Explora nuestros proyectos inmobiliarios
        </Link>
        <Link
          href="/contacto"
          className="inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
        >
          Contáctanos para más información
        </Link>
      </div>
    </main>
  );
}
