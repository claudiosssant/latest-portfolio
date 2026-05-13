import { Locale, PortfolioData } from "@/types/portfolio";
import { Section, SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/Motion";

type ContactProps = {
  data: PortfolioData["contact"];
  locale: Locale;
};

export function Contact({ data, locale }: ContactProps) {
  const icons = {
    linkedin: (
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.87 1.97 1.95 1.97h.02a1.97 1.97 0 1 0 0-3ZM20 12.86c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.37 1.87V8.5H8.94c.04.76 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.9 1.04 1.9 2.56V20H20v-7.14Z" />
      </svg>
    ),
    github: (
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.97-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.1-.12-.3-.5-1.5.11-3.13 0 0 .97-.31 3.19 1.18a11.08 11.08 0 0 1 5.8 0c2.22-1.5 3.19-1.18 3.19-1.18.62 1.63.23 2.83.12 3.13.73.8 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.2.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
    email: (
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
    whatsapp: (
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.58 0 .3 5.28.3 11.77c0 2.07.54 4.1 1.57 5.88L0 24l6.54-1.71a11.72 11.72 0 0 0 5.53 1.4h.01c6.49 0 11.77-5.28 11.77-11.77 0-3.15-1.23-6.11-3.33-8.44ZM12.08 21.7h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.88 1.02 1.04-3.78-.23-.39a9.8 9.8 0 0 1-1.5-5.2C2.12 6.45 6.46 2.1 11.78 2.1c2.61 0 5.05 1.02 6.9 2.87a9.7 9.7 0 0 1 2.86 6.9c0 5.32-4.34 9.66-9.66 9.66Zm5.3-7.23c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.91 1.12-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.2 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.42 0 1.42 1.03 2.8 1.17 3 .14.2 2.02 3.08 4.89 4.31.68.29 1.2.46 1.61.58.67.21 1.28.18 1.76.11.54-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.2-.55-.34Z" />
      </svg>
    ),
  } as const;

  return (
    <Section id="contact" className="bg-white">
      <ScrollReveal className="rounded-[2.2rem] bg-ink bg-hero-radial p-8 text-white shadow-panel sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow={data.eyebrow[locale]}
            theme="dark"
            title={data.title[locale]}
            body={data.body[locale]}
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:justify-self-end">
            {data.links.map((link, index) => {
              const icon = link.kind ? icons[link.kind] : null;
              return (
                <ScrollReveal
                  key={link.label}
                  delay={index * 80}
                >
                <a
                  aria-label={link.label}
                  className="inline-flex h-20 w-full items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-accentSoft"
                  href={link.href}
                  rel={link.kind === "email" ? undefined : "noreferrer"}
                  target={link.kind === "email" ? undefined : "_blank"}
                >
                  {icon}
                </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
