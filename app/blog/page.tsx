import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { sortedPosts } from '@/lib/posts'
import PageHero from '@/components/layout/PageHero'
import Icon from '@/components/ui/Icon'
import AnimatedContent from '@/components/reactbits/AnimatedContent'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre química textil, sostenibilidad, tintura, acabados y buenas prácticas de producción. Por MPG Textile Chemicals.',
  alternates: { canonical: `${SITE.url}/blog` },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-SV', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const posts = sortedPosts()
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conocimiento que potencia tu producción"
        subtitle="Sostenibilidad, tintura, acabados y buenas prácticas: lo que aprendemos acompañando a la industria textil, contado por nuestro equipo."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p, idx) => (
              <AnimatedContent key={p.slug} delay={(idx % 2) * 0.08} distance={50}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-paper-3 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_40px_70px_-40px_rgba(1,56,86,0.35)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-teal-600">
                      {p.category}
                    </span>
                    <span className="font-mono text-xs text-muted-2">
                      {p.readingMinutes} min de lectura
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-snug text-navy transition-colors group-hover:text-teal-600">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-muted">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span className="text-sm text-muted-2">{formatDate(p.date)}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                      Leer
                      <Icon
                        name="arrow"
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
