import Link from 'next/link'
import MeshWeave from '@/components/ui/MeshWeave'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy text-white">
      <div className="weave-grid-dark weave-mask absolute inset-0 opacity-70" aria-hidden />
      <MeshWeave className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-15" aria-hidden />
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <p className="spec text-teal-300">Error 404</p>
        <h1 className="mt-6 text-5xl text-white sm:text-7xl">Se soltó un hilo</h1>
        <p className="mt-5 text-lg text-teal-100/75">
          La página que buscas no existe o cambió de lugar. Volvamos a tejer el camino.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <Button href="/" variant="light" withArrow>
            Ir al inicio
          </Button>
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-full px-6 py-3.5 font-semibold text-white/85 hover:text-white"
          >
            Contacto
          </Link>
        </div>
      </div>
    </section>
  )
}
