"use client";

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

  const isLight = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-light/50"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className={`text-xl lg:text-2xl font-bold transition-colors ${
            isLight ? "text-navy hover:text-primary" : "text-white hover:text-white/90"
          }`}
        >
          HT<span className={isLight ? "text-primary" : "text-sky"}> Quality</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isLight ? "text-gray-mid hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-2">
            {(["es", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`px-2 py-1 text-xs font-medium uppercase transition-colors ${
                  locale === lang
                    ? isLight
                      ? "text-primary"
                      : "text-white"
                    : isLight
                      ? "text-gray-mid hover:text-primary"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <Link href="#contacto" className="ml-2 btn-primary text-sm py-2 px-4">
            {t.ctaStartConversation}
          </Link>
        </nav>

        <button
          type="button"
          className={`md:hidden p-2 ${isLight ? "text-navy" : "text-white"}`}
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
