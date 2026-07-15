import { PILLARS, STATS } from '@/lib/content'
import Icon from '@/components/ui/Icon'
import SpecLabel from '@/components/ui/SpecLabel'
import CountUp from '@/components/reactbits/CountUp'
import AnimatedContent from '@/components/reactbits/AnimatedContent'

export default function Pillars() {
  return (
    <section className="relative bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Estadísticas */}
        <div className="grid grid-cols-2 gap-y-10 rounded-3xl border border-line bg-paper-3 px-6 py-10 sm:px-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl font-extrabold text-navy sm:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Encabezado */}
        <div className="mt-24 max-w-2xl">
          <SpecLabel>Por qué elegir MPG</SpecLabel>
          <h2 className="mt-6 text-4xl sm:text-5xl">
            Cuatro razones para <span className="text-grad">tejer</span> una alianza
          </h2>
        </div>

        {/* Apartados */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, idx) => (
            <AnimatedContent key={p.index} delay={idx * 0.08} distance={60}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper-3 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_30px_60px_-30px_rgba(1,56,86,0.35)]">
                <div className="weave-grid absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-teal-300 transition-colors duration-500 group-hover:bg-teal group-hover:text-white">
                      <Icon name={p.icon} size={24} />
                    </span>
                    <span className="font-mono text-sm text-muted-2">{p.index}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.desc}</p>
                </div>
                <div className="thread-x absolute inset-x-7 bottom-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
