"use client";

import { useLocale } from "@/context/LocaleContext";

export function SectionVendedores() {
  const { t } = useLocale();
  return (
    <section id="vendedores" className="py-16 lg:py-24 bg-gray-light/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">
            {t.vendedoresLabel}
          </p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
            {t.vendedoresTitle}
          </h2>
          <p className="mt-4 text-gray-mid">
            {t.vendedoresIntro}
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto space-y-10">
          <div className="border-t border-gray-light pt-10">
            <h3 className="text-navy font-medium text-sm uppercase tracking-wider text-center md:text-left">
              {t.vendedoresBusinessTitle}
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-8 text-gray-mid text-sm max-w-2xl sm:max-w-none">
              {t.vendedoresBusinessItems.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-light pt-10">
            <h3 className="text-navy font-medium text-sm uppercase tracking-wider text-center md:text-left">
              {t.vendedoresOwnerTitle}
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-8 text-gray-mid text-sm max-w-2xl sm:max-w-none">
              {t.vendedoresOwnerItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
