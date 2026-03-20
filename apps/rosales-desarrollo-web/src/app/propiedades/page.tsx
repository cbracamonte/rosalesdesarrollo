import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Proyectos Inmobiliarios",
  description:
    "Explora los proyectos inmobiliarios de Rosales Desarrollo. Departamentos y residencias con diseño moderno, acabados premium y ubicaciones estratégicas.",
  canonical: "/propiedades",
});

export default function PropiedadesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-28 pb-16">
      <section>
        <h1 className="font-heading text-4xl font-bold text-brand-white">
          Proyectos inmobiliarios
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          Explora los desarrollos residenciales de Rosales Desarrollo. Cada
          proyecto está diseñado con acabados premium, arquitectura moderna y
          ubicaciones estratégicas para ofrecerte el mejor estilo de vida.
        </p>
      </section>

      <section className="mt-12">
        <p className="text-brand-gray">
          Próximamente publicaremos nuestros proyectos disponibles. Mientras
          tanto, puedes{" "}
          <Link
            href="/contacto"
            className="text-brand-silver underline transition-colors hover:text-brand-white"
          >
            contactarnos directamente
          </Link>{" "}
          para recibir información sobre disponibilidad y precios.
        </p>
      </section>
    </main>
  );
}
