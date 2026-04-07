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
      <Section className="py-0" tone="light">
        <PageIntro
          title="Proyectos inmobiliarios"
          description="Explora los desarrollos residenciales de Rosales Desarrollo. Cada proyecto está diseñado con acabados premium, arquitectura moderna y ubicaciones estratégicas para ofrecerte el mejor estilo de vida."
          eyebrow="Portafolio inmobiliario"
          tone="light"
        />
      </Section>

      <Section className="py-12" tone="dark">
        <PropertyList properties={properties} />
      </Section>

      <Section className="py-0" tone="light">
        <div className="rounded-lg border border-brand-gray/20 bg-brand-white p-8 shadow-[0_12px_40px_rgba(20,23,32,0.08)]">
          <p className="text-brand-carbon/80">
            ¿Querés información sobre disponibilidad, precios o financiamiento?
            Podés{" "}
            <ButtonLink
              href="/contacto"
              variant="text"
              className="text-brand-carbon hover:text-brand-night"
            >
              contactarnos directamente
            </ButtonLink>{" "}
            y te ayudamos a encontrar el proyecto ideal.
          </p>
        </div>
      </Section>
    </main>
  );
}
