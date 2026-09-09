"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const navItems = [
  { key: "nosotros" as const, href: "#nosotros" },
  { key: "servicios" as const, href: "#servicios" },
  { key: "proceso" as const, href: "#proceso" },
  { key: "valor" as const, href: "#valor" },
  { key: "contacto" as const, href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.headerScrolled = scrolled ? "true" : "false";
    return () => {
      delete document.documentElement.dataset.headerScrolled;
    };
  }, [scrolled]);

  const isLight = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-lg py-1.5 border-b border-gray-light/50"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ease-in-out ${
          isLight ? "h-[var(--header-logo-height-scrolled)]" : "min-h-[var(--header-logo-height)]"
        }`}
      >
        <Link
          href="/"
          aria-label="HT Quality de México"
          className={`shrink-0 flex items-center transition-all duration-300 ease-in-out ${
            isLight
              ? "rounded-lg bg-navy px-1 py-0 shadow-sm h-[var(--header-logo-height-scrolled)]"
              : "leading-none"
          }`}
        >
          <Image
            src="/logo.png"
            alt="HT Quality de México"
            width={517}
            height={483}
            priority
            className={`logo-image transition-all duration-300 ease-in-out ${
              isLight ? "h-[var(--header-logo-height-scrolled)]" : "h-[var(--header-logo-height)]"
            }`}
          />
        </Link>

        <div
          className={`flex items-center shrink-0 min-w-0 transition-all duration-300 ease-in-out ${
            isLight ? "h-[var(--header-logo-height-scrolled)] gap-1.5 sm:gap-2" : "gap-2 sm:gap-3 lg:gap-4"
          }`}
        >
          <nav
            className={`hidden md:flex items-center h-full min-w-0 transition-all duration-300 ease-in-out ${
              isLight ? "gap-2 lg:gap-4" : "gap-3 lg:gap-6"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors whitespace-nowrap inline-flex items-center ${
                  isLight
                    ? "h-9 lg:h-10 px-0.5 sm:px-1 text-xs lg:text-sm text-gray-mid hover:text-primary"
                    : "text-sm lg:text-base text-white/90 hover:text-white"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div
              className={`flex items-center self-center gap-1 ml-0.5 border-l ${
                isLight ? "h-6 border-gray-light pl-2.5" : "h-7 border-white/25 pl-3 gap-1.5"
              }`}
            >
              {(["es", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`font-medium uppercase transition-colors rounded inline-flex items-center justify-center ${
                    isLight ? "h-7 w-7 text-[11px]" : "px-2 py-1 text-xs"
                  } ${
                    locale === lang
                      ? isLight
                        ? "text-primary bg-primary/10"
                        : "text-white bg-white/15"
                      : isLight
                        ? "text-gray-mid hover:text-primary"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              href="#contacto"
              className={`btn-primary whitespace-nowrap inline-flex items-center justify-center transition-all duration-300 ease-in-out ${
                isLight
                  ? "h-9 lg:h-10 px-3 lg:px-4 text-xs lg:text-sm ml-0.5 !py-0"
                  : "text-sm lg:text-base py-2.5 px-4 lg:px-5 ml-1 lg:ml-2"
              }`}
            >
              {t.ctaStartConversation}
            </Link>
          </nav>

          <button
            type="button"
            className={`md:hidden p-2 -mr-2 transition-colors ${isLight ? "text-navy" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label={t.ariaOpenMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`md:hidden border-t px-4 py-4 flex flex-col gap-3 ${
            isLight ? "border-gray-light bg-white" : "border-white/10 bg-navy/95 backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isLight ? "text-gray-mid hover:text-primary" : "text-white/90 hover:text-white"}
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link href="#contacto" className="mt-2 btn-primary text-center" onClick={() => setOpen(false)}>
            {t.ctaStartConversation}
          </Link>
        </div>
      )}
    </header>
  );
}
