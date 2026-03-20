import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Desarrollo Inmobiliario en Perú",
  description:
    "Rosales Desarrollo — Construcción y desarrollo inmobiliario de calidad en Perú. Proyectos residenciales con diseño moderno y acabados premium.",
  canonical: "/",
});

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,var(--color-brand-night)_0%,var(--color-brand-night-deep)_100%)]">
        <Image
          src="icons/logotipo.svg"
          alt="Rosales Desarrollo — Desarrollo inmobiliario en Perú"
          width={550}
          height={410}
          priority
          className="w-72 md:w-96"
        />
        <h1 className="mt-6 font-heading text-2xl tracking-[0.3em] text-brand-gray uppercase">
          Transformamos espacios, elevamos vidas
        </h1>
        <p className="mt-4 text-base text-brand-silver">
          Construimos proyectos inmobiliarios con calidad, diseño y compromiso.
        </p>
        <Link
          href="/propiedades"
          className="mt-8 inline-block rounded-md border border-brand-silver/30 px-8 py-3 font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
        >
          Conoce nuestros proyectos inmobiliarios
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-heading text-3xl font-bold text-brand-white">
          Desarrollo inmobiliario de calidad
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          En Rosales Desarrollo nos especializamos en la construcción de
          proyectos residenciales que combinan diseño moderno, acabados premium y
          ubicaciones estratégicas. Cada proyecto refleja nuestro compromiso con
          la excelencia y la satisfacción de nuestros clientes.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
            <h3 className="font-heading text-lg font-bold text-brand-white">
              Diseño moderno
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              Arquitectura contemporánea que maximiza espacios y aprovecha la luz
              natural para crear ambientes funcionales y elegantes.
            </p>
          </div>
          <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
            <h3 className="font-heading text-lg font-bold text-brand-white">
              Acabados premium
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              Materiales de primera calidad y acabados de alto nivel que
              garantizan durabilidad, confort y un estilo de vida superior.
            </p>
          </div>
          <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-6">
            <h3 className="font-heading text-lg font-bold text-brand-white">
              Ubicaciones estratégicas
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              Proyectos ubicados en zonas de alta plusvalía con acceso a
              servicios, transporte y las principales vías de la ciudad.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/propiedades"
            className="inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
          >
            Ver proyectos disponibles
          </Link>
          <Link
            href="/contacto"
            className="inline-block rounded-md border border-brand-silver/30 px-6 py-3 text-center font-heading text-sm tracking-wider text-brand-silver transition-colors hover:border-brand-white hover:text-brand-white"
          >
            Solicitar información
          </Link>
        </div>
      </section>
    </main>
  );
}
