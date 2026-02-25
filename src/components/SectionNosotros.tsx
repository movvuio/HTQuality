export function SectionNosotros() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-wider">Nosotros</p>
            <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
              Un solo objetivo: adquirir una empresa y dedicarnos a operarla
            </h2>
            <p className="mt-6 text-gray-mid leading-relaxed">
              Denia Capital es un Search Fund en México. No somos un fondo de capital privado y no manejamos un portafolio:
              buscamos adquirir una única compañía, tomar una participación mayoritaria y
              dedicarle tiempo completo para hacerla crecer sobre la base que se ha construido.
            </p>
            <p className="mt-4 text-gray-mid leading-relaxed">
              Buscamos ofrecer una alternativa de salida atractiva y confiable para el fundador,
              mediante una transición ordenada y planeada que respete el modelo de negocio,
              empleados, clientes y proveedores. Incorporándonos a la compañía de tiempo
              completo al frente del equipo directivo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                text: "Un solo negocio, todo nuestro foco",
                icon: (
                  <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-primary font-semibold text-xl" aria-hidden>1</span>
                ),
              },
              {
                text: "Transición ordenada, cultura preservada",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0" aria-hidden>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                text: "Capital comprometido, listo para ejecutar",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ),
              },
              {
                text: "Operación activa, visión de largo plazo",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 flex-shrink-0" aria-hidden>
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-gray-light bg-white text-navy font-medium text-sm flex gap-3 items-start"
              >
                <span className="text-primary">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
