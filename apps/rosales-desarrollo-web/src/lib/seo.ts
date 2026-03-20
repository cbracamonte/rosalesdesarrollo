import type { Metadata } from "next";

const SITE_NAME = "Rosales Desarrollo";
const SITE_URL = process.env.SITE_URL || "https://rosalesdesarrollo.com";
const SITE_DESCRIPTION =
  "Transformamos espacios, elevamos vidas. Construcción y desarrollo inmobiliario.";

interface CreateMetadataOptions extends Partial<Metadata> {
  canonical?: string;
  ogImage?: string;
}

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const { canonical, ogImage, ...overrides } = options;

  const title = overrides.title
    ? `${overrides.title} | ${SITE_NAME}`
    : SITE_NAME;
  const description =
    (overrides.description as string) || SITE_DESCRIPTION;

  const images = ogImage ? [{ url: ogImage }] : undefined;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    ...(canonical && {
      alternates: { canonical: `${SITE_URL}${canonical}` },
    }),
    openGraph: {
      type: "website",
      locale: "es_PE",
      siteName: SITE_NAME,
      title,
      description,
      ...(images && { images }),
      ...overrides.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images && { images }),
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
