import type { Metadata } from "next";
import type { BreadcrumbList, CollectionPage, ListItem, RealEstateListing, WithContext } from "schema-dts";
import { SITE_CONFIG } from "@/config/site";
import type { Property } from "../types";

function buildPropertyTitle(property: Property) {
  return `${property.type} en ${property.district} | ${property.city}`;
}

function buildPropertyDescription(property: Property) {
  return `${property.type} en ${property.district}, ${property.city}. ${property.description.slice(0, 140)}`;
}

export function createPropertyMetadata(property: Property): Metadata {
  const title = buildPropertyTitle(property);
  const description = buildPropertyDescription(property);
  const canonical = `/propiedades/${property.slug}`;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: `${SITE_CONFIG.url}${canonical}`,
    },
    openGraph: {
      type: "article",
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.name,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}${canonical}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      property.type,
      property.district,
      property.city,
      "proyecto inmobiliario",
      "Rosales Desarrollo",
    ],
  };
}

export function createPropertyListingSchema(
  property: Property,
): WithContext<RealEstateListing> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.name,
    description: property.description,
    url: `${SITE_CONFIG.url}/propiedades/${property.slug}`,
    datePosted: new Date("2026-01-01").toISOString(),
  };
}

export function createPropertyBreadcrumbSchema(
  property: Property,
): WithContext<BreadcrumbList> {
  const items: ListItem[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_CONFIG.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Propiedades",
      item: `${SITE_CONFIG.url}/propiedades`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: property.name,
      item: `${SITE_CONFIG.url}/propiedades/${property.slug}`,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function createPropertiesCollectionSchema(
  properties: Property[],
): WithContext<CollectionPage> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Proyectos inmobiliarios",
    description:
      "Explora los proyectos inmobiliarios de Rosales Desarrollo en Lima, Perú.",
    url: `${SITE_CONFIG.url}/propiedades`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: properties.length,
      itemListElement: properties.map((property, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_CONFIG.url}/propiedades/${property.slug}`,
        name: property.name,
      })),
    },
  };
}
