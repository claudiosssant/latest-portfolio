import { Locale, PortfolioData } from "@/types/portfolio";
import { Section, SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/Motion";

type EducationProps = {
  data: PortfolioData["education"];
  locale: Locale;
  labels: PortfolioData["labels"];
};

export function Education({ data, locale, labels }: EducationProps) {
  return (
    <Section id="education" className="bg-[#ece5d8]">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <ScrollReveal className="rounded-[2rem] border border-stone-300/60 bg-white p-8 shadow-panel">
          <SectionHeading
            eyebrow={data.eyebrow[locale]}
            title={data.title[locale]}
            body={data.intro[locale]}
          />

          <div className="mt-10 space-y-5">
            {data.items.map((item, index) => (
              <ScrollReveal
                key={item.title.en}
                className="rounded-[1.5rem] border border-stone-200 bg-[#fbf8f3] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-600/40"
                delay={index * 90}
              >
                <h3 className="font-display text-2xl text-ink">{item.title[locale]}</h3>
                <p className="mt-2 text-base text-stone-600">{item.subtitle[locale]}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-amber-700">
                  {item.meta}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="rounded-[2rem] border border-stone-300/60 bg-ink p-8 text-white shadow-panel"
          delay={120}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accentSoft">
            {labels.certificationsTitle[locale]}
          </p>
          <h3 className="mt-6 font-display text-3xl">
            {locale === "en"
              ? "Complementary certifications that strengthen product thinking."
              : "Certificações complementares que fortalecem a visão de produto."}
          </h3>
          <div className="mt-10 grid gap-4">
            {data.certifications.map((certification, index) => (
              <ScrollReveal
                key={certification}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07]"
                delay={index * 90}
              >
                <p className="font-display text-2xl">{certification}</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  {locale === "en"
                    ? "Applied to interface decisions, user-centered workflows, and more thoughtful product execution."
                    : "Aplicada a decisões de interface, fluxos centrados no usuário e uma execução de produto mais cuidadosa."}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
