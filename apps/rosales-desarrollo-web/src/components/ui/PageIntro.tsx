import { cn } from "@/lib/utils";

interface PageIntroProps {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
}

export function PageIntro({
  title,
  description,
  eyebrow,
  className,
}: PageIntroProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {eyebrow ? (
        <p className="font-heading text-sm uppercase tracking-[0.24em] text-brand-silver">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 font-heading text-4xl font-bold text-brand-white md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
        {description}
      </p>
    </div>
  );
}
