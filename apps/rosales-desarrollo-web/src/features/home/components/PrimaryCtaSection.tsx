import { Section } from "@/components/layout/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeContent } from "../data/home-content";

export function PrimaryCtaSection() {
  const { title, description } = homeContent.cta;

  return (
    <Section tone="dark">
      <CtaBanner
        title={title}
        description={description}
        actions={
          <>
            <ButtonLink href="/propiedades" variant="solid-light">
              Ver proyectos
            </ButtonLink>
            <ButtonLink href="/contacto">Hablar con un asesor</ButtonLink>
          </>
        }
      />
    </Section>
  );
}
