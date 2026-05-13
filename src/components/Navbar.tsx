"use client";

import { useState } from "react";
import { Locale, NavItem } from "@/types/portfolio";

type NavbarProps = {
  nav: NavItem[];
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

function CodeIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m13.5 4-3 16" />
      </svg>
    </div>
  );
}

export function Navbar({ nav, locale, onLocaleChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a className="flex min-w-0 items-center gap-3 text-white" href="#hero">
          <CodeIcon />
          <div className="min-w-0">
            <p className="truncate font-display text-base sm:text-lg">Claudio Santos</p>
          </div>
        </a>

        <nav className="hidden min-w-0 items-center gap-4 xl:gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              className="whitespace-nowrap text-sm text-stone-300 transition hover:text-white"
              href={`#${item.id}`}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <div className="rounded-full border border-white/10 bg-white/5 p-1 text-sm text-stone-300">
            <button
              className={`rounded-full px-3 py-1.5 transition ${
                locale === "en" ? "bg-white text-ink" : ""
              }`}
              onClick={() => onLocaleChange("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={`rounded-full px-3 py-1.5 transition ${
                locale === "pt" ? "bg-white text-ink" : ""
              }`}
              onClick={() => onLocaleChange("pt")}
              type="button"
            >
              PT
            </button>
          </div>
          <a
            className="whitespace-nowrap rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink transition hover:bg-accentSoft xl:px-5"
            href="#contact"
          >
            {locale === "en" ? "Let’s talk" : "Vamos conversar"}
          </a>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="inline-flex rounded-full border border-white/10 p-3 text-white lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.id}
                className="text-sm text-stone-300 transition hover:text-white"
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label[locale]}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-3">
            <button
              className={`rounded-full px-4 py-2 text-sm ${
                locale === "en" ? "bg-white text-ink" : "border border-white/10 text-white"
              }`}
              onClick={() => onLocaleChange("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm ${
                locale === "pt" ? "bg-white text-ink" : "border border-white/10 text-white"
              }`}
              onClick={() => onLocaleChange("pt")}
              type="button"
            >
              PT
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
