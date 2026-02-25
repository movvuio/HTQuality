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
          <div>
            <h3 className="text-navy font-medium text-sm uppercase tracking-wider text-center md:text-left">
              Industria
            </h3>
            <p className="mt-3 text-gray-mid text-sm text-center md:text-left">
              Principales sectores de interés:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <li className="flex flex-col items-center text-center">
                <span className="flex items-center justify-center w-[72px] h-[72px] text-primary" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <rect x="1" y="3" width="8" height="6" rx="1" />
                    <rect x="15" y="3" width="8" height="6" rx="1" />
                    <path d="M5 9v6M19 9v6M9 15h6" />
                  </svg>
                </span>
                <span className="mt-3 text-navy font-medium text-sm">Logística especializada</span>
              </li>
              <li className="flex flex-col items-center text-center">
                <span className="flex items-center justify-center w-[72px] h-[72px] text-primary" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <circle cx="9" cy="12" r="2" />
                    <circle cx="15" cy="12" r="2" />
                    <circle cx="12" cy="6" r="2" />
                    <path d="M9 12l3-6 3 6" />
                    <path d="M12 18l-3-6 3-6" />
                  </svg>
                </span>
                <span className="mt-3 text-navy font-medium text-sm">Química especializada</span>
              </li>
              <li className="flex flex-col items-center text-center">
                <span className="flex items-center justify-center w-[72px] h-[72px] text-primary" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    <path d="M8 7h8" />
                    <path d="M8 11h6" />
                  </svg>
                </span>
                <span className="mt-3 text-navy font-medium text-sm">Educación</span>
              </li>
              <li className="flex flex-col items-center text-center">
                <span className="flex items-center justify-center w-[72px] h-[72px] text-primary" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <rect x="4" y="4" width="16" height="6" rx="1" />
                    <rect x="6" y="14" width="12" height="6" rx="1" />
                    <path d="M8 10v4M12 10v4M16 10v4" />
                  </svg>
                </span>
                <span className="mt-3 text-navy font-medium text-sm">Tecnologías de la Información</span>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-light pt-10">
            <h3 className="text-navy font-medium text-sm uppercase tracking-wider text-center md:text-left">
              El negocio
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-8 text-gray-mid text-sm max-w-2xl sm:max-w-none">
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" aria-hidden />
                Ventas mínimas de 100 millones de pesos MXN
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
