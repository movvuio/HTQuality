import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <p className="text-gray-light text-sm font-medium uppercase tracking-wider mb-4">
              Search Fund · México
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              Para dueños de empresas que quieren vender o retirarse
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
          <div className="relative hidden lg:block aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/24-Denia.jpg"
              alt="Denia — Vista de la costa y la ciudad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
            {/* Gradient overlay so edges blend into navy background */}
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, #072535 0%, transparent 25%),
                  linear-gradient(to left, #072535 0%, transparent 20%),
                  linear-gradient(to bottom, #072535 0%, transparent 25%),
                  linear-gradient(to top, #072535 0%, transparent 15%)
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
