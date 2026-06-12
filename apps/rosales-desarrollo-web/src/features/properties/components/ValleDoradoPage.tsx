import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/layout/Section";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import {
  createPropertyBreadcrumbSchema,
  createPropertyListingSchema,
} from "../mappers/property-seo";
import type { Property } from "../types";
import { ValleDoradoHero } from "./ValleDoradoHero";

const GALLERY_IMAGES = [
  {
    src: "/images/valle-dorado-pimentel/salon.png",
    alt: "Sala principal con acabados modernos",
    className: "col-span-2 row-span-2 aspect-[4/3]",
  },
  {
    src: "/images/valle-dorado-pimentel/lobby.png",
    alt: "Lobby de ingreso",
    className: "aspect-square",
  },
  {
    src: "/images/valle-dorado-pimentel/bed.png",
    alt: "Dormitorio principal",
    className: "aspect-square",
  },
  {
    src: "/images/valle-dorado-pimentel/lobby2.png",
    alt: "Vista del segundo nivel",
    className: "col-span-2 aspect-[2.2/1]",
  },
] as const;

const HIGHLIGHTS = [
  { label: "Ubicación", value: "Valle Dorado, Pimentel" },
  { label: "Tipo", value: "Casa residencial" },
  { label: "Estado", value: "En construcción" },
  { label: "Zona", value: "A minutos de la playa" },
] as const;

interface ValleDoradoPageProps {
  property: Property;
}

export function ValleDoradoPage({ property }: ValleDoradoPageProps) {
  return (
    <main id="main-content">
      <WebPageJsonLd
        name={`${property.name} en ${property.district}`}
        description={property.description}
        path={`/propiedades/${property.slug}`}
      />
      <JsonLd data={createPropertyListingSchema(property)} />
      <JsonLd data={createPropertyBreadcrumbSchema(property)} />

      <ValleDoradoHero />

      {/* Quick info strip */}
      <Section tone="light" className="py-0">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-gray/15 bg-brand-gray/10 md:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="bg-brand-white px-6 py-5">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-carbon/50">
                {item.label}
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-brand-carbon md:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Description */}
      <Section tone="light" className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <h2 className="font-heading text-3xl font-bold text-brand-carbon md:text-4xl">
              Una casa pensada para vivir bien
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-carbon/75">
              Diseño funcional, acabados de calidad y espacios amplios para el día a día de tu familia.
              Ubicada en Valle Dorado, una zona residencial en crecimiento con acceso a colegios,
              comercio y vías principales.
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* Gallery */}
      <div id="galeria">
      <Section tone="light" className="py-0" as="div">
        <MotionReveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALLERY_IMAGES.map((img, index) => (
              <MotionReveal
                key={img.src}
                delay={index * 0.06}
                className={img.className}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>
      </Section>
      </div>

      {/* Features */}
      <Section tone="light" className="py-14 md:py-20">
        <MotionReveal>
          <h2 className="font-heading text-3xl font-bold text-brand-carbon md:text-4xl">
            Características
          </h2>
        </MotionReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {property.features.map((feature, index) => (
            <MotionReveal
              key={feature}
              delay={index * 0.05}
              className="rounded-xl border border-brand-gray/15 bg-brand-white px-6 py-5 shadow-[0_4px_20px_rgba(20,23,32,0.04)]"
            >
              <p className="text-sm leading-relaxed text-brand-carbon/80">
                {feature}
              </p>
            </MotionReveal>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section tone="light" className="py-0">
        <div className="overflow-hidden rounded-[2rem] bg-brand-night p-8 text-brand-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <MotionReveal>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Pimentel, Chiclayo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
                Valle Dorado es una de las zonas residenciales con mayor proyección de Pimentel.
                A pocos minutos de la playa, con acceso a colegios, centros comerciales y
                las principales vías de Chiclayo.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <Image
                src="/images/valle-dorado-pimentel/intro-home.png"
                alt="Vista exterior de la casa en Valle Dorado"
                width={1200}
                height={800}
                className="aspect-4/3 w-full rounded-2xl object-cover"
              />
            </MotionReveal>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="light" className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <MotionReveal>
            <h2 className="font-heading text-3xl font-bold text-brand-carbon md:text-4xl">
              ¿Te interesa esta casa?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-carbon/75">
              Escríbenos para conocer precios, disponibilidad o coordinar una visita al proyecto.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ButtonLink href="/#contacto" variant="solid-dark">
                Agenda tu visita
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </Section>
    </main>
  );
}
