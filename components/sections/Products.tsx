import { PRODUCTS, type Product } from '@/lib/content'
import Icon from '@/components/ui/Icon'
import SpecLabel from '@/components/ui/SpecLabel'
import MeshWeave from '@/components/ui/MeshWeave'
import AnimatedContent from '@/components/reactbits/AnimatedContent'

function ProductVisual({ product }: { product: Product }) {
  // Cabecera ilustrada por proceso. Slot para foto real: coloca
  // /public/products/<key>.jpg y cámbialo por <img> si lo prefieres.
  return (
    <div className="relative h-44 overflow-hidden rounded-xl bg-navy">
      <div className="weave-grid-dark absolute inset-0 opacity-70" aria-hidden />
      <MeshWeave className="absolute -right-8 -top-8 h-40 w-40 opacity-30" aria-hidden />
      <div
        className="halo left-6 top-8 h-28 w-28"
        style={{ background: 'radial-gradient(circle, rgba(28,135,175,0.45), transparent 70%)' }}
        aria-hidden
      />
      {/* burbujas decorativas para procesos húmedos */}
      {(product.key === 'preparacion' || product.key === 'post-pintura') && (
        <>
          <span className="absolute left-10 top-24 h-3 w-3 rounded-full border border-teal-300/60 animate-float" />
          <span className="absolute left-16 top-16 h-2 w-2 rounded-full bg-teal-300/50 animate-float" style={{ animationDelay: '0.6s' }} />
          <span className="absolute left-6 top-14 h-1.5 w-1.5 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.1s' }} />
        </>
      )}
      <div className="relative flex h-full items-end justify-between p-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-teal-300 backdrop-blur-sm">
          <Icon name={product.icon} size={30} />
        </span>
        <span className="font-display text-6xl font-extrabold text-white/10">{product.index}</span>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" className="relative scroll-mt-24 overflow-hidden bg-paper-2 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SpecLabel>Nuestros productos</SpecLabel>
            <h2 className="mt-6 text-4xl sm:text-5xl">
              Química para <span className="text-grad">cada proceso</span> textil
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Desde la tintura hasta los acabados: portafolio completo, asesorado por nuestro equipo
            técnico.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p, idx) => (
            <AnimatedContent key={p.key} delay={(idx % 2) * 0.1} distance={60}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper-3 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_40px_70px_-40px_rgba(1,56,86,0.4)]">
                <ProductVisual product={p} />
                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="text-2xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-[0.98rem] text-muted">{p.blurb}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[0.92rem] text-ink">
                        <Icon name="check" size={16} className="mt-0.5 shrink-0 text-teal-600" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
