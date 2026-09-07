"use client";

import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "@/components/SectionHeader";

export function SectionProceso() {
  const { t } = useLocale();
  return (
    <section id="proceso" className="section-padding bg-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(13,79,139,0.4) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(125,211,252,0.1) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader badge={t.procesoLabel} title={t.procesoTitle} subtitle={t.procesoIntro} dark />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {t.procesoSteps.map(({ step, title, text }) => (
            <div key={step} className="card-dark">
              <p className="text-sky font-black text-2xl">{step}</p>
              <h3 className="mt-3 font-bold text-lg text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
