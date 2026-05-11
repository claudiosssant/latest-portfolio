import { Locale, NavItem } from "@/types/portfolio";

type FooterProps = {
  locale: Locale;
  nav: NavItem[];
  note: string;
};

export function Footer({ locale, nav, note }: FooterProps) {
  return (
    <footer className="border-t border-stone-200 bg-mist px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl text-ink">Claudio Santos</p>
          <p className="mt-2 text-sm leading-7 text-stone-600">{note}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-stone-600">
          {nav.map((item) => (
            <a key={item.id} className="transition hover:text-ink" href={`#${item.id}`}>
              {item.label[locale]}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
