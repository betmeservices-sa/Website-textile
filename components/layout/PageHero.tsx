import SpecLabel from '@/components/ui/SpecLabel'
import MeshWeave from '@/components/ui/MeshWeave'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
}

// Banda navy para el encabezado de páginas internas.
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-36 text-white sm:pb-20 sm:pt-44">
      <div className="weave-grid-dark weave-mask absolute inset-0 opacity-70" aria-hidden />
      <MeshWeave className="pointer-events-none absolute -right-16 -top-10 h-80 w-80 opacity-20" aria-hidden />
      <div
        className="halo -left-24 top-0 h-80 w-80"
        style={{ background: 'radial-gradient(circle, rgba(28,135,175,0.25), transparent 70%)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SpecLabel variant="light">{eyebrow}</SpecLabel>
        <h1 className="mt-6 max-w-3xl text-4xl text-white sm:text-6xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-teal-100/75">{subtitle}</p>}
      </div>
    </section>
  )
}
