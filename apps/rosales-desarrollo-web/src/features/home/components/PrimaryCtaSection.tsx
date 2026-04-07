import { Section } from "@/components/layout/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeContent } from "../data/home-content";

export function PrimaryCtaSection() {
  const { title, description } = homeContent.cta;

  return (
    <Section tone="light" className="py-14 md:py-16">
      <CtaBanner
        className="rounded-[2rem] p-6 md:p-8"
        title={title}
        description={description}
        actions={
          <>
            <ButtonLink href="/contacto" variant="solid-light">
              Contactar ahora
            </ButtonLink>
            <ButtonLink href="/propiedades">Ver proyectos</ButtonLink>
          </>
        }
      />
    </Section>
  );
}
