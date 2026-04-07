import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeContent } from "../data/home-content";

export function AboutPreviewSection() {
  const { title, description } = homeContent.aboutPreview;

  return (
    <Section>
      <div className="rounded-2xl border border-brand-slate/50 bg-brand-slate p-8 md:p-10">
        <h2 className="max-w-4xl font-heading text-3xl font-bold text-brand-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-gray">
          {description}
        </p>
        <ButtonLink href="/nosotros" className="mt-8">
          Conocé nuestra historia
        </ButtonLink>
      </div>
    </Section>
  );
}
