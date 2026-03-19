import type { Metadata } from "next";

const SITE_NAME = "Rosales Desarrollo";
const SITE_URL = process.env.SITE_URL || "https://rosalesdesarrollo.com";
const SITE_DESCRIPTION =
  "Transformamos espacios, elevamos vidas. Construcción y desarrollo inmobiliario.";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} | ${SITE_NAME}`
    : SITE_NAME;

  return {
    title,
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      locale: "es_MX",
      siteName: SITE_NAME,
      title,
      description: SITE_DESCRIPTION,
      ...overrides.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: SITE_DESCRIPTION,
      ...overrides.twitter,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}

export { SITE_NAME, SITE_URL, SITE_DESCRIPTION };
