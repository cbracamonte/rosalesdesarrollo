import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "@/config/site";
import { properties } from "../data/properties";
import {
  createPropertiesCollectionSchema,
  createPropertyBreadcrumbSchema,
  createPropertyListingSchema,
  createPropertyMetadata,
} from "./property-seo";

const property = properties[0];

describe("property SEO mapper", () => {
  it("creates feature-owned metadata for a property detail page", () => {
    const metadata = createPropertyMetadata(property);

    expect(metadata.title).toBe(
      `Departamentos en Miraflores | Lima | ${SITE_CONFIG.name}`,
    );
    expect(metadata.description).toContain("Departamentos en Miraflores, Lima.");
    expect(metadata.alternates?.canonical).toBe(
      `${SITE_CONFIG.url}/propiedades/${property.slug}`,
    );
    expect(metadata.openGraph?.url).toBe(
      `${SITE_CONFIG.url}/propiedades/${property.slug}`,
    );
    expect(metadata.keywords).toEqual(
      expect.arrayContaining([
        property.type,
        property.district,
        property.city,
        "proyecto inmobiliario",
      ]),
    );
  });

  it("creates a rich real-estate listing schema for the property", () => {
    const schema = createPropertyListingSchema(property);

    expect(schema["@type"]).toBe("RealEstateListing");
    expect(schema.name).toBe(property.name);
    expect(schema.description).toBe(property.description);
    expect(schema.url).toBe(`${SITE_CONFIG.url}/propiedades/${property.slug}`);
    expect(schema.datePosted).toBe(new Date("2026-01-01").toISOString());
  });

  it("creates breadcrumb schema aligned with the property route", () => {
    const schema = createPropertyBreadcrumbSchema(property);
    const itemListElement = schema.itemListElement;

    expect(Array.isArray(itemListElement)).toBe(true);
    expect(itemListElement).toHaveLength(3);
    expect(
      ((itemListElement as unknown as ReadonlyArray<Record<string, unknown>>)[2]),
    ).toMatchObject({
      position: 3,
      name: property.name,
      item: `${SITE_CONFIG.url}/propiedades/${property.slug}`,
    });
  });

  it("creates a collection page schema for the properties listing", () => {
    const schema = createPropertiesCollectionSchema(properties);
    const mainEntity = schema.mainEntity as Record<string, unknown>;
    const itemListElement = mainEntity.itemListElement as ReadonlyArray<
      Record<string, unknown>
    >;

    expect(schema["@type"]).toBe("CollectionPage");
    expect(mainEntity["@type"]).toBe("ItemList");
    expect(mainEntity.numberOfItems).toBe(properties.length);
    expect(itemListElement[0]).toMatchObject({
      position: 1,
      name: properties[0].name,
      url: `${SITE_CONFIG.url}/propiedades/${properties[0].slug}`,
    });
  });
});
