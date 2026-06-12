import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  createPropertyMetadata,
  getPropertyBySlug,
} from "@/features/properties";
import { ValleDoradoPage } from "@/features/properties/components/ValleDoradoPage";

const CHICLAYO_PROJECT_SLUG = "casa-pimentel-valle-dorado";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: CHICLAYO_PROJECT_SLUG }];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return createPropertyMetadata(property);
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  if (slug !== CHICLAYO_PROJECT_SLUG) notFound();

  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  return <ValleDoradoPage property={property} />;
}
