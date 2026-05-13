import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = theme === "dark" ? "text-white" : "text-ink";
  const bodyColor = theme === "dark" ? "text-stone-300" : "text-stone-600";
  const eyebrowColor = theme === "dark" ? "text-accentSoft" : "text-amber-600";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className={`mb-4 break-words text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em] ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${bodyColor}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-accent text-ink hover:bg-accentSoft"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles}`}
      href={href}
    >
      {children}
    </a>
  );
}
