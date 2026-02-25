export function SectionInversionistas() {
  const points = [
    "Capital comprometido por inversionistas dispuestos a ejecutar cuando encontremos la oportunidad adecuada.",
    "No sólo recursos: mentoría y experiencia de empresarios y ejecutivos en México y el mundo.",
    "Incentivos alineados con el vendedor y con el éxito a largo plazo del negocio.",
    "Transparencia en el proceso, trato respetuoso y compromiso con preservar la cultura y visión de su negocio.",
  ];

  return (
    <section id="modelo" className="py-16 lg:py-24 bg-gray-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">
            Respaldo
          </p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
            Inversionistas que respaldan el proyecto
          </h2>
          <p className="mt-4 text-gray-mid">
            Nos respaldan inversionistas locales e internacionales: empresarios, fondos y ejecutivos
            con trayectoria en México que aportan no sólo capital, sino experiencia
            para identificar y operar un negocio en el largo plazo.
          </p>
        </div>
        <ul className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((text, i) => (
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
