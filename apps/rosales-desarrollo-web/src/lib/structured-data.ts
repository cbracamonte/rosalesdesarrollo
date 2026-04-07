import type { RealEstateAgent, WebPage, WithContext } from "schema-dts";
import { BRAND_ASSETS } from "@/config/brand-assets";
import { SITE_CONFIG } from "@/config/site";

export function generateOrganizationSchema(): WithContext<RealEstateAgent> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${BRAND_ASSETS.logo}`,
    description:
      "Transformamos espacios, elevamos vidas. Construcción y desarrollo inmobiliario de calidad en Perú.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "Spanish",
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
    url: `${SITE_CONFIG.url}${page.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}
