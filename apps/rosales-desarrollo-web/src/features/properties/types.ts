export interface Property {
  slug: string;
  name: string;
  type: string;
  category: "departamento" | "residencia" | "loft";
  description: string;
  district: string;
  city: string;
  country: string;
  features: string[];
  status: string;
  priceLabel?: string;
}
