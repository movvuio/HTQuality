"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "@/components/SectionHeader";

function Check() {
  return (
    <span className="list-check-marker" aria-hidden>
      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 text-primary">
        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const pillarIcons: Record<string, ReactNode> = {
  logistica: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9m9 9H9m3 0v1.5m0-1.5a9 9 0 00-9 9v1.5m0-1.5h9" />
    </svg>
  ),
  aduana: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  fiscal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  finanzas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
};

export function SectionVendedores() {
  const { t } = useLocale();
  return (
    <section id="servicios" className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader badge={t.vendedoresLabel} title={t.vendedoresTitle} subtitle={t.vendedoresIntro} />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {t.serviciosPillars.map((pillar) => (
            <div key={pillar.id} className="card">
              <div className="flex items-start gap-4 mb-4">
                <span className="icon-circle">{pillarIcons[pillar.id]}</span>
                <div>
                  <h3 className="text-navy font-bold text-xl">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-gray-mid leading-relaxed">{pillar.description}</p>
                </div>
              </div>
              <ul className="list-check space-y-3 pt-4 border-t border-gray-light/80">
                {pillar.items.map((item, i) => (
                  <li key={i}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
