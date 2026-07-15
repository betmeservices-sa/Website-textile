import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import PageHero from '@/components/layout/PageHero'
import ContactForm from '@/components/sections/ContactForm'
import Icon from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Solicita asesoría técnica en química textil. Escríbenos a info@mpgsv.com o llámanos. Atendemos El Salvador y Guatemala.',
  alternates: { canonical: `${SITE.url}/contacto` },
}

const CONTACT_ITEMS = [
  { icon: 'mail', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'phone', label: 'Teléfono', value: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: 'pin', label: 'Oficina', value: SITE.office, href: null },
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu proceso"
        subtitle="Cuéntanos qué necesitas resolver y nuestro equipo técnico te propone la solución química adecuada. Respuesta ágil, asesoría sin compromiso."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Datos */}
          <div>
            <h2 className="text-3xl">Datos de contacto</h2>
            <p className="mt-4 max-w-md text-muted">
              Atendemos a la industria textil de {SITE.countries.join(' y ')} con abastecimiento
              ágil y confiable.
            </p>
            <div className="mt-8 grid gap-3">
              {CONTACT_ITEMS.map((c) => {
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper-3 p-5 transition-colors hover:border-teal/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-teal-300">
                      <Icon name={c.icon} size={22} />
                    </span>
                    <span>
                      <span className="spec text-muted">{c.label}</span>
                      <span className="block text-lg font-semibold text-navy">{c.value}</span>
                    </span>
                  </div>
                )
                return c.href ? (
                  <a key={c.label} href={c.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                )
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-paper-2 p-6">
              <p className="spec text-teal-600">Horario de atención</p>
              <p className="mt-3 text-ink">Lunes a viernes · 8:00 – 17:00 (hora de El Salvador)</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-3xl border border-line bg-paper-3 p-7 sm:p-10">
            <h2 className="text-2xl">Solicita asesoría</h2>
            <p className="mt-2 text-muted">Los campos con * son obligatorios.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
