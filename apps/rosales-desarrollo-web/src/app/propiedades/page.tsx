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
  title: "Proyectos y casas en venta | Pimentel, Chiclayo, Huanchaco",
  description:
    "Conoce nuestros proyectos: casas nuevas en Pimentel, Chiclayo y Huanchaco. Viviendas con buenos acabados, ubicaciones estratégicas y atención directa.",
  canonical: "/propiedades",
});

export default function PropiedadesPage() {
  const properties = getProperties();

  return (
    <>
      <WebPageJsonLd
        name="Proyectos Inmobiliarios"
        description="Casas y proyectos residenciales en venta en Pimentel, Chiclayo y Huanchaco. Vivienda nueva con ubicaciones estratégicas y atención directa."
        path="/propiedades"
      />
      <JsonLd data={createPropertiesCollectionSchema(properties)} />
      <PropertiesPageContent properties={properties} />
    </>
  );
}
