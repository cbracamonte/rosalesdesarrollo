import type { RealEstateAgent, RealEstateListing, WebPage, WithContext } from "schema-dts";
import { SITE_NAME, SITE_URL } from "./seo";

export function generateOrganizationSchema(): WithContext<RealEstateAgent> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icons/logotipo.svg`,
    description:
      "Transformamos espacios, elevamos vidas. Construcción y desarrollo inmobiliario de calidad en Perú.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "Spanish",
    },
  };
}

export function generatePropertyListingSchema(property: {
  name: string;
  description: string;
  slug: string;
  district: string;
  city: string;
  country: string;
}): WithContext<RealEstateListing> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.name,
    description: property.description,
    url: `${SITE_URL}/propiedades/${property.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.district,
      addressRegion: property.city,
      addressCountry: property.country,
    },
  };
}

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  path: string;
}): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: `${SITE_URL}${page.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
