"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const navItems = [
  { key: "nosotros" as const, href: "#nosotros" },
  { key: "queBuscamos" as const, href: "#vendedores" },
  { key: "proceso" as const, href: "#proceso" },
  { key: "equipo" as const, href: "#equipo" },
  { key: "respaldo" as const, href: "#modelo" },
  { key: "contacto" as const, href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-18">
        <Link href="/" className="flex items-center h-6 lg:h-7 font-serif text-xl lg:text-2xl text-navy hover:text-primary transition-colors">
          <img
            src="/images/Screenshot_2026-02-21_at_14.37.13-removebg-preview.png"
            alt="Denia Capital"
            className="h-6 w-auto object-contain object-left lg:h-7"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = "block";
            }}
          />
          <span className="hidden" style={{ display: "none" }}>
            Denia Capital
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-mid hover:text-primary transition-colors"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`px-2 py-1 text-xs font-medium transition-colors ${
                locale === "es" ? "text-primary" : "text-gray-mid hover:text-primary"
              }`}
              aria-label="Español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2 py-1 text-xs font-medium transition-colors ${
                locale === "en" ? "text-primary" : "text-gray-mid hover:text-primary"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <Link
            href="#contacto"
            className="ml-2 px-4 py-2 rounded bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t.ctaStartConversation}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-navy"
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
        <div className="md:hidden border-t border-gray-light bg-white px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-mid hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`flex-1 py-2 text-sm font-medium transition-colors ${
                locale === "es" ? "text-primary" : "text-gray-mid"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`flex-1 py-2 text-sm font-medium transition-colors ${
                locale === "en" ? "text-primary" : "text-gray-mid"
              }`}
            >
              EN
            </button>
          </div>
          <Link
            href="#contacto"
            className="mt-2 py-2 text-center rounded bg-primary text-white font-medium"
            onClick={() => setOpen(false)}
          >
            {t.ctaStartConversation}
          </Link>
        </div>
      )}
    </header>
  );
}
