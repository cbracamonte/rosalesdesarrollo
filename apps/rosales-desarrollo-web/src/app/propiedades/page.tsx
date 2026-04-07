import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import {
  createPropertiesCollectionSchema,
  getProperties,
  PropertiesPageContent,
} from "@/features/properties";

export const metadata: Metadata = createMetadata({
  title: "Proyectos Inmobiliarios",
  description:
    "Explora los proyectos inmobiliarios de Rosales Desarrollo. Departamentos y residencias con diseño moderno, acabados premium y ubicaciones estratégicas.",
  canonical: "/propiedades",
});

export default function PropiedadesPage() {
  const properties = getProperties();

  return (
    <>
      <WebPageJsonLd
        name="Proyectos Inmobiliarios"
        description="Explora los proyectos inmobiliarios de Rosales Desarrollo. Departamentos y residencias con diseño moderno, acabados premium y ubicaciones estratégicas."
        path="/propiedades"
      />
      <JsonLd data={createPropertiesCollectionSchema(properties)} />
      <PropertiesPageContent properties={properties} />
    </>
  );
}
