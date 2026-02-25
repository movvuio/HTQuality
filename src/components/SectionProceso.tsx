const steps = [
  {
    step: "01",
    title: "Búsqueda y filtrado",
    text: "Identificamos empresas que encajan con nuestros criterios: rentabilidad, equipo y potencial de crecimiento.",
  },
  {
    step: "02",
    title: "Acercamiento y confidencialidad",
    text: "Contacto discreto con propietarios que han expresado interés en una transición. Respeto total a la confidencialidad.",
  },
  {
    step: "03",
    title: "Due diligence y valoración",
    text: "Análisis financiero, operativo y legal. Propuesta de valoración y estructura alineada con sus objetivos.",
  },
  {
    step: "04",
    title: "Cierre y operación",
    text: "Negociación clara, cierre ordenado. Nos incorporamos a la compañía de tiempo completo para operarla y hacerla crecer.",
  },
];

export function SectionProceso() {
  return (
    <section id="proceso" className="py-16 lg:py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-wider">Proceso</p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-white">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-gray-light">
            Búsqueda, adquisición, operación y crecimiento. Un proceso claro y predecible para usted.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
