import { generateWebPageSchema } from "@/lib/structured-data";
import { JsonLd } from "./JsonLd";

interface WebPageJsonLdProps {
  name: string;
  description: string;
  path: string;
}

export function WebPageJsonLd({
  name,
  description,
  path,
}: WebPageJsonLdProps) {
  return (
    <JsonLd
      data={generateWebPageSchema({
        name,
        description,
        path,
      })}
    />
  );
}
