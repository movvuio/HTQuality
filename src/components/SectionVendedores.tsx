export function SectionVendedores() {
  return (
    <section id="vendedores" className="py-16 lg:py-24 bg-gray-light/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">
            Enfoque
          </p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-navy">
            Qué tipo de empresas buscamos
          </h2>
          <p className="mt-4 text-gray-mid">
            Buscamos compañías que sean referentes en su industria o localidad, con historia
            de éxito y espacio para crecer con capital y gestión dedicada.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto space-y-10">
          <div className="border-t border-gray-light pt-10">
            <h3 className="text-navy font-medium text-sm uppercase tracking-wider text-center md:text-left">
              El negocio
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-8 text-gray-mid text-sm max-w-2xl sm:max-w-none">
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Ventas anuales {'>'} 200 millones de pesos MXN
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Rentabilidad demostrada - EBITDA {'>'} 15%
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Base de clientes o ingresos recurrentes
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Sector con tendencias positivas de crecimeinto
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Bajas necesidades de Gastos de Capital (CAPEX)
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Equipo operativo que pueda continuar
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-light pt-10">
            <h3 className="text-navy font-medium text-sm uppercase tracking-wider text-center md:text-left">
              El dueño
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-8 text-gray-mid text-sm max-w-2xl sm:max-w-none">
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                Abierto a una transición de control
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                Que le importe el futuro del negocio y de su gente
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                Con motivaciones claras para vender
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                Alineado con nuestros valores de integridad y respeto
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
