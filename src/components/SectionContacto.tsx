"use client";

export function SectionContacto() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white border-t border-gray-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-primary text-sm font-medium uppercase tracking-wider">Contacto</p>
        <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
          Contacto
        </h2>
        <p className="mt-4 text-gray-mid">
          ¿Estás pensando en vender tu negocio o conoce alguna empresa donde podamos sumar valor?
          Deja un mensaje; respondemos con discreción y sin compromiso.
        </p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="mailto:pedro.garza@denia-capital.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded border border-gray-light text-navy font-medium hover:border-primary hover:text-primary transition-colors text-sm"
            >
              pedro.garza@denia-capital.com
            </a>
            <a
              href="mailto:pablo@denia-capital.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded border border-gray-light text-navy font-medium hover:border-primary hover:text-primary transition-colors text-sm"
            >
              pablo@denia-capital.com
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-mid">
          Respondemos a todas las consultas de forma confidencial.
        </p>
      </div>
    </section>
  );
}
