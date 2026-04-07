export interface NavigationLink {
  href: string;
  label: string;
}

export const mainNavigation: NavigationLink[] = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const footerNavigation = mainNavigation;
