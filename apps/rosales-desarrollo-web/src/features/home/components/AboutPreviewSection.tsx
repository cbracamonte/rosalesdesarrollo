import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeContent } from "../data/home-content";

export function AboutPreviewSection() {
  const { title, description } = homeContent.aboutPreview;

  return (
    <Section tone="light">
      <div className="rounded-2xl border border-brand-gray/20 bg-brand-white p-8 shadow-[0_12px_40px_rgba(20,23,32,0.08)] md:p-10">
        <h2 className="max-w-4xl font-heading text-3xl font-bold text-brand-carbon md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-carbon/80">
          {description}
        </p>
        <ButtonLink href="/nosotros" variant="solid-dark" className="mt-8">
          Conocé nuestra historia
        </ButtonLink>
      </div>
    </Section>
  );
}
