import { ABOUT } from '@/lib/content'
import SpecLabel from '@/components/ui/SpecLabel'
import MeshWeave from '@/components/ui/MeshWeave'
import AnimatedContent from '@/components/reactbits/AnimatedContent'

export default function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 overflow-hidden bg-paper-2 py-24 sm:py-28">
      <MeshWeave className="pointer-events-none absolute -right-24 top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 opacity-[0.06]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        {/* Compromiso */}
        <div>
          <SpecLabel>{ABOUT.eyebrow}</SpecLabel>
          <h2 className="mt-6 text-4xl leading-tight sm:text-[2.9rem]">{ABOUT.title}</h2>
          <p className="mt-7 text-lg leading-relaxed text-muted">{ABOUT.lead}</p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ['+20', 'Años en el mercado'],
              ['SV · GT', 'Presencia regional'],
              ['100%', 'Enfoque en asesoría'],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl font-extrabold text-navy">{k}</div>
                <div className="text-sm text-muted">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Misión / Visión */}
        <div className="flex flex-col gap-5">
          {[
            { label: 'Misión', text: ABOUT.mission },
            { label: 'Visión', text: ABOUT.vision },
          ].map((b, idx) => (
            <AnimatedContent key={b.label} delay={idx * 0.1} distance={50}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-3 p-8">
                <span className="absolute left-0 top-8 h-14 w-1 rounded-r bg-teal" aria-hidden />
                <p className="spec text-teal-600">{b.label}</p>
                <p className="mt-4 text-lg leading-relaxed text-ink">{b.text}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
