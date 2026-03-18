"use client";

import { useLocale } from "@/context/LocaleContext";

const teamImages = [
  "/images/Photo%20Pedro%20Garza%20(1).jpg",
  "/images/PHOTO-2025-11-30-21-12-57%202.jpg",
];

export function SectionEquipo() {
  const { t } = useLocale();
  const team = [
    { name: "Pedro Garza", bio: t.equipoPedroBio, image: teamImages[0] },
    { name: "Pablo Lecuona", bio: t.equipoPabloBio, image: teamImages[1] },
  ];
  return (
    <section id="equipo" className="py-16 lg:py-24 bg-white border-t border-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">{t.equipoLabel}</p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
            {t.equipoTitle}
          </h2>
          <p className="mt-4 text-gray-mid max-w-2xl mx-auto text-justify">
            {t.equipoIntro1}
          </p>
          <p className="mt-4 text-gray-mid max-w-2xl mx-auto text-justify">
            {t.equipoIntro2}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-12">
          {team.map((person, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full sm:w-auto sm:min-w-[200px]">
              <div className="aspect-square w-[200px] rounded-lg overflow-hidden bg-gray-light/50 flex items-center justify-center text-navy/40 text-5xl font-serif">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`w-full h-full object-cover ${i === 0 ? "object-[center_20%]" : ""}`}
                  />
                ) : (
                  person.name.charAt(0)
                )}
              </div>
              <h3 className="mt-4 font-serif text-lg text-navy">{person.name}</h3>
              <p className="text-sm font-medium text-primary">{t.equipoRole}</p>
              <div className="mt-2 text-sm text-gray-mid max-w-xs space-y-8 text-justify">
                {person.bio.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
