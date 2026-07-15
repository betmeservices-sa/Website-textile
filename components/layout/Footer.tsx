import Link from 'next/link'
import { SITE, NAV } from '@/lib/site'
import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'

export default function Footer() {
  const year = 2026
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="weave-grid-dark weave-mask absolute inset-0 opacity-60" aria-hidden />
      <div className="halo -left-40 -top-40 h-96 w-96" style={{ background: 'radial-gradient(circle, rgba(28,135,175,0.28), transparent 70%)' }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca + descripción */}
          <div className="max-w-sm">
            <Logo variant="light" href={null} markSize={46} />
            <p className="mt-6 text-[0.98rem] leading-relaxed text-teal-100/70">
              {SITE.footerNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Bluesign®', 'Oeko-Tex®'].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 px-3 py-1 text-[0.72rem] font-medium text-teal-100/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="spec text-teal-300">Navegación</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.98rem] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="spec text-teal-300">Contacto</p>
            <ul className="mt-5 space-y-4 text-[0.98rem]">
              <li>
                <a href={`mailto:${SITE.email}`} className="group inline-flex items-center gap-3 text-white/80 hover:text-white">
                  <Icon name="mail" size={18} className="text-teal-300" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="group inline-flex items-center gap-3 text-white/80 hover:text-white">
                  <Icon name="phone" size={18} className="text-teal-300" />
                  {SITE.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-white/70">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-teal-300" />
                <span>
                  {SITE.office}
                  <br />
                  <span className="text-white/50">Atendemos {SITE.countries.join(' y ')}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[0.85rem] text-white/45 sm:flex-row">
          <p>© {year} {SITE.name}. Todos los derechos reservados.</p>
          <p className="spec text-white/35">El Salvador · Guatemala</p>
        </div>
      </div>
    </footer>
  )
}
