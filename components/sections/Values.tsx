import { VALUES } from '@/lib/content'
import Icon from '@/components/ui/Icon'
import SpecLabel from '@/components/ui/SpecLabel'
import AnimatedContent from '@/components/reactbits/AnimatedContent'

export default function Values() {
  return (
    <section className="relative bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Encabezado (sticky en desktop) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SpecLabel>{VALUES.eyebrow}</SpecLabel>
            <h2 className="mt-6 text-4xl sm:text-5xl">{VALUES.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Nuestra relación contigo va más allá de la distribución: cada valor asegura que
              recibas el mejor servicio y el mayor valor para tu producción.
            </p>
          </div>

          {/* Lista de valores */}
          <div>
            {VALUES.items.map((v, idx) => (
              <AnimatedContent key={v.title} delay={idx * 0.06} distance={40}>
                <div className="group flex gap-6 border-b border-line py-7 first:pt-0">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-paper-3 text-teal-600 transition-all duration-500 group-hover:border-teal group-hover:bg-navy group-hover:text-teal-300">
                      <Icon name={v.icon} size={22} />
                    </span>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-muted-2">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold text-navy">{v.title}</h3>
                    </div>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
