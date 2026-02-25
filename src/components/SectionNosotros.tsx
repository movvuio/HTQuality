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
              buscamos adquirir una única compañía mediana, tomar una participación mayoritaria y
              dedicarle tiempo completo para hacerla crecer sobre la base que usted ha construido.
            </p>
            <p className="mt-4 text-gray-mid leading-relaxed">
              Buscamos ofrecer una alternativa de salida atractiva y confiable para el fundador,
              mediante una transición ordenada y planeada que respete el modelo de negocio,
              empleados, clientes y proveedores. Los socios se incorporan a la compañía de tiempo
              completo al frente del equipo directivo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Un solo negocio, todo nuestro foco",
              "Transición ordenada, cultura preservada",
              "Capital comprometido, listo para ejecutar",
              "Operación activa, visión de largo plazo",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-gray-light bg-white text-navy font-medium text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
