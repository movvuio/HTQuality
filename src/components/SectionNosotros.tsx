"use client";

import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "@/components/SectionHeader";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
];

export function SectionNosotros() {
  const { t } = useLocale();
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader badge={t.nosotrosLabel} title={t.nosotrosTitle} align="left" />
        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            <p className="text-gray-mid leading-relaxed text-lg">{t.nosotrosP1}</p>
            <p className="text-gray-mid leading-relaxed text-lg">{t.nosotrosP2}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.nosotrosCards.map((text, i) => (
              <div key={i} className="card flex gap-4 items-start">
                <span className="icon-circle">{icons[i]}</span>
                <span className="text-navy font-semibold text-sm leading-snug pt-1">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
