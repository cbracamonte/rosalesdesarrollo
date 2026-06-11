export interface NavigationLink {
  href: string;
  label: string;
}

export const landingNavigation: NavigationLink[] = [
  { href: "#proyecto-chiclayo", label: "Proyecto" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export const footerNavigation = landingNavigation;
