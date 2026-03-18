"use client";

import { useLocale } from "@/context/LocaleContext";

export function SectionProceso() {
  const { t } = useLocale();
  const steps = t.procesoSteps;
  return (
    <section id="proceso" className="py-16 lg:py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="text-center max-w-2xl">
          <p className="text-accent text-sm font-medium uppercase tracking-wider">{t.procesoLabel}</p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-white">
            {t.procesoTitle}
          </h2>
          <p className="mt-4 text-gray-light">
            {t.procesoIntro}
          </p>
        </div>
        <div className="mt-14 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ step, title, text }) => (
            <div key={step} className="relative">
              <p className="text-white font-mono text-sm">{step}</p>
              <h3 className="mt-2 font-serif text-lg text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-light leading-relaxed">{text}</p>
              {step !== "04" && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 border-t border-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
