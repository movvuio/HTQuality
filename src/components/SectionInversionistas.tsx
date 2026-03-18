"use client";

import { useLocale } from "@/context/LocaleContext";

export function SectionInversionistas() {
  const { t } = useLocale();
  return (
    <section id="modelo" className="py-16 lg:py-24 bg-gray-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">
            {t.inversionistasLabel}
          </p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
            {t.inversionistasTitle}
          </h2>
          <p className="mt-4 text-gray-mid">
            {t.inversionistasIntro}
          </p>
        </div>
        <ul className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.inversionistasPoints.map((text, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </span>
              <span className="text-navy text-sm leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
