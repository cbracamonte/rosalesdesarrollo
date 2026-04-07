import { properties } from "../data/properties";

export function getProperties() {
  return properties;
}

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((property) => property.slug);
}
