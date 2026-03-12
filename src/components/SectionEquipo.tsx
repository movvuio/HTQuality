const team = [
  {
    name: "Pedro Garza",
    role: "Fundador",
    bio: [
      "Pedro Garza es un ejecutivo de estrategia y operaciones con amplia experiencia nacional e internacional liderando análisis y planificación financiera a gran escala, optimización de costos y oparaciones en México, América Latina y Estados Unidos.",
      " ",
      "Cuenta con amplia trayectoria profesional en diferentes compañías y como emprendedor, desde consultoría estratégica y en compañias como Dell, Uber y Uber Freight, gestionando presupuestos multinacionales y apoyando a la toma de decisiones a nivel ejecutivo para la alta dirección, junta directiva e inversionistas.",
      " ",
      "Pedro es MBA por IESE Business School y Licenciado en Finanzas por la Universidad Panamericana, cuenta con una especialidad en Finanzas por IE Business School y cursos ejecutivos de Estrategia y Liderazgo por Harvard Business School.",
    ],
    image: "/images/Photo%20Pedro%20Garza%20(1).jpg",
  },
  {
    name: "Pablo Lecuona",
    role: "Fundador",
    bio: [
    "Pablo Lecuona es un ejecutivo de desarrollo comercial y operaciones corporativas con trayectoria internacional liderando cuentas globales de clientess, redes de distribuidores e iniciativas de expansión regional en México y América Latina.",
    " ",
    "Cuenta con amplia experiencia en ventas corporativas, desarolllo de negocios y coordinación de equipos multifuncionales en áreas técnicas, financieras y comerciales para ejecutar estrategias complejas de expansión de mercado. De igual forma, cuenta con experiencia operativa en transacciones de inversión, incluyendo valoración de empresas y due diligence comercial.",
    " ",
    "Pablo es MBA por IESE Business School e Ingeniero Químico por la Universidad Nacional Autónoma de México con estudios en Yonsei University of Seoul.",
  ],
    image: "/images/PHOTO-2025-11-30-21-12-57%202.jpg",
  },
];

export function SectionEquipo() {
  return (
    <section id="equipo" className="py-16 lg:py-24 bg-white border-t border-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">Equipo</p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
            Quiénes somos
          </h2>
          <p className="mt-4 text-gray-mid max-w-full">
            Denia Capital fue fundado por Pedro Garza y Pablo Lecuona con un sueño de encontrar una empresa para invertir y continuar con su potencial. Ambos cuentan con una amplia experiencia en diferentes industrias tanto en México cómo internacionalmente.
          </p>
          <p className="mt-4 text-gray-mid max-w-full">
            Adicionalmente Denia Capital cuenta con el respaldo de un grupo de inversionistas experimentados conformado por empresarios, inversionistas y ejecutivos con una amplia trayectoria en México y en todo el mundo.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-12">
          {team.map((person, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full sm:w-auto sm:min-w-[200px]">
              <div className="aspect-square w-[200px] rounded-lg overflow-hidden bg-gray-light/50 flex items-center justify-center text-navy/40 text-5xl font-serif">
                {"image" in person && person.image ? (
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
              <p className="text-sm font-medium text-primary">{person.role}</p>
              <div className="mt-2 text-sm text-gray-mid max-w-xs space-y-8 text-justify">
                {Array.isArray(person.bio)
                  ? person.bio.map((para, j) => <p key={j}>{para}</p>)
                  : <p>{person.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
