import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="inline-block h-6 lg:h-7">
              <img
                src="/images/Screenshot_2026-02-21_at_14.43.42-removebg-preview.png"
                alt="Denia Capital"
                className="h-6 w-auto object-contain object-left lg:h-7"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-light/80 max-w-xs">
              Search Fund en México. Buscamos a dueños que quieran vender o retirarse.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-light mb-4">Enlaces</p>
            <ul className="space-y-2">
              <li>
                <Link href="#nosotros" className="text-sm text-white/80 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#vendedores" className="text-sm text-white/80 hover:text-white transition-colors">
                  Qué buscamos
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-sm text-white/80 hover:text-white transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#equipo" className="text-sm text-white/80 hover:text-white transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="#modelo" className="text-sm text-white/80 hover:text-white transition-colors">
                  Respaldo
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-light mb-4">Contacto</p>
            <p className="text-sm text-white/80">México</p>
            <a
              href="mailto:pedro.garza@denia-capital.com"
              className="text-sm text-white hover:text-gray-light transition-colors mt-1 inline-block"
            >
              pedro.garza@denia-capital.com         
              </a>
              <a
              href="mailto:pablo@denia-capital.com"
              className="text-sm text-white hover:text-gray-light transition-colors mt-1 inline-block"
            >
              pablo@denia-capital.com         
              </a>
          </div>
          
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          © {currentYear} Denia Capital Partners. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
