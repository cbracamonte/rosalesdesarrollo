import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contacto",
  description:
    "Contáctanos para conocer nuestros proyectos inmobiliarios en Perú. Solicita información sobre departamentos, residencias y desarrollos de Rosales Desarrollo.",
  canonical: "/contacto",
});

export default function ContactoPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-28 pb-16">
      <section>
        <h1 className="font-heading text-4xl font-bold text-brand-white">
          Contacto
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          ¿Tienes preguntas sobre nuestros desarrollos inmobiliarios? Estamos
          aquí para ayudarte. Escríbenos y nuestro equipo te responderá a la
          brevedad.
        </p>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-8">
          <h2 className="font-heading text-xl font-bold text-brand-white">
            Información de contacto
          </h2>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm font-medium text-brand-silver">Email</dt>
              <dd className="mt-1 text-brand-gray">
                info@rosalesdesarrollo.com
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-brand-silver">
                Ubicación
              </dt>
              <dd className="mt-1 text-brand-gray">Lima, Perú</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-8">
          <h2 className="font-heading text-xl font-bold text-brand-white">
            ¿Qué te interesa?
          </h2>
          <p className="mt-4 leading-relaxed text-brand-gray">
            Ya sea que busques información sobre un proyecto específico,
            disponibilidad de unidades, opciones de financiamiento o desees
            agendar una visita, nuestro equipo está listo para atenderte.
          </p>
          <Link
            href="/propiedades"
            className="mt-6 inline-block text-brand-silver underline transition-colors hover:text-brand-white"
          >
            Ver nuestros proyectos disponibles
          </Link>
        </div>
      </section>
    </main>
  );
}
