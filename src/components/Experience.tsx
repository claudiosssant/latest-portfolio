import { Locale, PortfolioData } from "@/types/portfolio";
import { Section, SectionHeading } from "@/components/ui";

type ExperienceProps = {
  data: PortfolioData["experience"];
  locale: Locale;
};

export function Experience({ data, locale }: ExperienceProps) {
  return (
    <Section id="experience" className="bg-[#ece5d8]">
      <SectionHeading
        eyebrow={data.eyebrow[locale]}
        title={data.title[locale]}
        body={data.intro[locale]}
      />

      <div className="mt-14 grid gap-8">
        {data.items.map((item, index) => (
          <article
            key={item.company}
            className="grid gap-6 rounded-[2rem] border border-stone-300/70 bg-white p-7 shadow-panel lg:grid-cols-[220px_1fr]"
          >
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="font-display text-2xl text-ink">{item.company}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-amber-700">
                {item.period}
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-2 border-b border-stone-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl text-ink">{item.role[locale]}</h3>
                  <p className="mt-2 text-sm text-stone-500">{item.location[locale]}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-4">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.en}
                    className="flex gap-3 text-base leading-8 text-stone-600"
                  >
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{bullet[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
