export interface Property {
  slug: string;
  name: string;
  type: string;
  description: string;
  district: string;
  city: string;
  country: string;
  features: string[];
  status: string;
}

export const properties: Property[] = [
  {
    slug: "departamentos-lima-miraflores",
    name: "Residencial Miraflores",
    type: "Departamentos",
    description:
      "Exclusivos departamentos en el corazón de Miraflores con acabados premium, áreas comunes de lujo y ubicación privilegiada cerca de parques, comercios y vías principales de Lima.",
    district: "Miraflores",
    city: "Lima",
    country: "PE",
    features: [
      "Acabados de primera calidad",
      "Áreas comunes con piscina y gimnasio",
      "Estacionamientos subterráneos",
      "Sistema de seguridad 24/7",
      "Cerca de parques y centros comerciales",
      "Diseño arquitectónico moderno",
    ],
    status: "En venta",
  },
  {
    slug: "departamentos-lima-san-isidro",
    name: "Torres San Isidro",
    type: "Departamentos",
    description:
      "Departamentos de lujo en San Isidro, el distrito financiero de Lima. Proyecto residencial con vista a la ciudad, acabados importados y acceso directo a zonas empresariales y culturales.",
    district: "San Isidro",
    city: "Lima",
    country: "PE",
    features: [
      "Vista panorámica a la ciudad",
      "Acabados importados de alta gama",
      "Lobby con recepción permanente",
      "Sala de reuniones para residentes",
      "Acceso a zona financiera y cultural",
      "Depósitos privados",
    ],
    status: "En venta",
  },
  {
    slug: "departamentos-lima-barranco",
    name: "Loft Barranco",
    type: "Departamentos",
    description:
      "Modernos departamentos estilo loft en Barranco, el distrito más bohemio de Lima. Espacios amplios con doble altura, terraza privada y a pasos del malecón y la vida cultural de Barranco.",
    district: "Barranco",
    city: "Lima",
    country: "PE",
    features: [
      "Diseño estilo loft con doble altura",
      "Terraza privada con vista al mar",
      "Zona de coworking para residentes",
      "Bicicleteros y espacios pet-friendly",
      "A pasos del malecón y galerías de arte",
      "Iluminación natural optimizada",
    ],
    status: "Próximamente",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}
