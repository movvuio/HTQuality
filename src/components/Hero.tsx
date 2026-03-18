import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden min-h-[32rem]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src="/images/Denia%20Capital%20Hero%202%20slow%20Compressed%20.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay: navy blend so blue shows and text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, #072535 0%, #072535 35%, rgba(7,37,53,0.85) 55%, rgba(7,37,53,0.4) 80%, transparent 100%),
            linear-gradient(to bottom, rgba(7,37,53,0.5) 0%, transparent 40%, transparent 60%, rgba(7,37,53,0.6) 100%),
            linear-gradient(135deg, #072535 0%, transparent 50%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <p className="text-gray-light text-sm font-medium uppercase tracking-wider mb-4">
              Inversión Privada · México
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            Buscando empresas consolidadas y de alto potencial que estén listas para una transición estratégica
            </h1>
            <p className="mt-6 text-lg text-gray-light max-w-xl">
              Nuestra aspiración es continuar con tu legado: invertir, operar y hacer crecer
              la compañía que has construido, respetando su cultura y maximizando su potencial a largo plazo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center px-6 py-3 rounded bg-primary text-white font-medium hover:opacity-90 transition-opacity"
              >
                Iniciar conversación
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
