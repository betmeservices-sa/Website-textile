import { SITE } from '@/lib/site'
import Icon from '@/components/ui/Icon'
import SpecLabel from '@/components/ui/SpecLabel'
import Button from '@/components/ui/Button'
import MeshWeave from '@/components/ui/MeshWeave'

export default function ContactCTA() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-paper px-5 py-24 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-white sm:px-14">
        <div className="weave-grid-dark absolute inset-0 opacity-60" aria-hidden />
        <MeshWeave className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 opacity-25" aria-hidden />
        <div
          className="halo -left-20 -top-20 h-80 w-80"
          style={{ background: 'radial-gradient(circle, rgba(28,135,175,0.3), transparent 70%)' }}
          aria-hidden
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SpecLabel variant="light">Contáctanos</SpecLabel>
            <h2 className="mt-6 text-4xl text-white sm:text-5xl">
              ¿Listo para potenciar tu producción?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-teal-100/75">
              Cuéntanos tu proceso y nuestro equipo técnico te propone la solución química
              adecuada. Asesoría cercana, sin compromiso.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contacto" variant="light" withArrow>
                Solicitar asesoría
              </Button>
              <Button href={`mailto:${SITE.email}`} variant="ghost-light">
                Escríbenos
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal-300">
                <Icon name="mail" size={22} />
              </span>
              <span>
                <span className="spec text-white/40">Email</span>
                <span className="block text-lg font-semibold">{SITE.email}</span>
              </span>
            </a>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal-300">
                <Icon name="phone" size={22} />
              </span>
              <span>
                <span className="spec text-white/40">Teléfono</span>
                <span className="block text-lg font-semibold">{SITE.phone}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal-300">
                <Icon name="pin" size={22} />
              </span>
              <span>
                <span className="spec text-white/40">Oficina</span>
                <span className="block text-lg font-semibold">{SITE.office}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
