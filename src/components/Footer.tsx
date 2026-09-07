"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  const links = [
    { href: "#nosotros", label: t.nav.nosotros },
    { href: "#servicios", label: t.nav.servicios },
    { href: "#proceso", label: t.nav.proceso },
    { href: "#valor", label: t.nav.valor },
    { href: "#contacto", label: t.nav.contacto },
  ] as const;

  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-white/70 text-sm">{t.footerCtaPrompt}</p>
            <p className="mt-1 text-xl font-bold">{t.ctaStartConversation}</p>
          </div>
          <Link href="#contacto" className="btn-primary shrink-0">
            {t.ctaContactNow}
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="text-xl font-bold text-white hover:text-sky transition-colors">
              HT<span className="text-sky"> Quality</span>
            </Link>
            <p className="mt-3 text-sm text-white/70 max-w-xs leading-relaxed">{t.footerTagline}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">{t.footerLinks}</p>
            <ul className="space-y-2.5">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/80 hover:text-sky transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">{t.footerContact}</p>
            <p className="text-sm text-white/80 mb-2">{t.footerMexico}</p>
            <a href={`mailto:${t.contactoEmail}`} className="text-sm text-sky hover:text-white transition-colors font-medium">
              {t.contactoEmail}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © {year} {t.footerCompany}. {t.footerRights}
        </div>
      </div>
    </footer>
  );
}
