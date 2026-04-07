import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/layout/Section";
import { PropertyList } from "./PropertyList";
import type { Property } from "../types";

interface PropertiesPageContentProps {
  properties: Property[];
}

export function PropertiesPageContent({
  properties,
}: PropertiesPageContentProps) {
  return (
    <main id="main-content" className="min-h-screen pt-28 pb-16">
      <Section className="py-0">
        <PageIntro
          title="Proyectos inmobiliarios"
          description="Explora los desarrollos residenciales de Rosales Desarrollo. Cada proyecto está diseñado con acabados premium, arquitectura moderna y ubicaciones estratégicas para ofrecerte el mejor estilo de vida."
          eyebrow="Portafolio inmobiliario"
        />
      </Section>

      <Section className="py-12">
        <PropertyList properties={properties} />
      </Section>

      <Section className="py-0">
        <div className="rounded-lg border border-brand-slate/50 bg-brand-slate p-8">
          <p className="text-brand-gray">
            ¿Querés información sobre disponibilidad, precios o financiamiento?
            Podés{" "}
            <ButtonLink href="/contacto" variant="text">
              contactarnos directamente
            </ButtonLink>{" "}
            y te ayudamos a encontrar el proyecto ideal.
          </p>
        </div>
      </Section>
    </main>
  );
}
