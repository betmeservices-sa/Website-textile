import { ALLIES } from '@/lib/content'
import SpecLabel from '@/components/ui/SpecLabel'
import Icon from '@/components/ui/Icon'

// Nota: los logos oficiales van en /public/certs y /public/partners.
// Estas tarjetas son los slots (muestran el nombre hasta colocar la imagen).
function SlotCard({ name, note, tag }: { name: string; note: string; tag: string }) {
  return (
    <div className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-teal/40 hover:bg-white/[0.06]">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/90 font-display text-2xl font-extrabold text-navy">
        {name.replace(/[®]/g, '').slice(0, 2)}
      </div>
      <div>
        <p className="text-lg font-bold text-white">{name}</p>
        <p className="text-sm text-teal-100/60">{note}</p>
        <span className="spec mt-1 inline-block text-white/30">{tag}</span>
      </div>
      <Icon
        name="check"
        size={18}
        className="ml-auto shrink-0 text-teal-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  )
}

export default function Allies() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div className="weave-grid-dark weave-mask absolute inset-0 opacity-60" aria-hidden />
      <div
        className="halo left-1/3 top-0 h-96 w-96"
        style={{ background: 'radial-gradient(circle, rgba(28,135,175,0.22), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SpecLabel variant="light">{ALLIES.eyebrow}</SpecLabel>
          <h2 className="mt-6 text-4xl text-white sm:text-5xl">{ALLIES.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-teal-100/70">{ALLIES.lead}</p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="spec mb-5 text-teal-300">Certificaciones</p>
            <div className="grid gap-4">
              {ALLIES.certifications.map((c) => (
                <SlotCard key={c.name} name={c.name} note={c.note} tag="Sello verificado" />
              ))}
            </div>
          </div>
          <div>
            <p className="spec mb-5 text-teal-300">Fabricantes</p>
            <div className="grid gap-4">
              {ALLIES.manufacturers.map((m) => (
                <SlotCard key={m.name} name={m.name} note={m.note} tag="Aliado MPG" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
