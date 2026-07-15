import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE } from '@/lib/site'
import { getPost, POSTS, type Block } from '@/lib/posts'
import MeshWeave from '@/components/ui/MeshWeave'
import SpecLabel from '@/components/ui/SpecLabel'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.date,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-SV', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'h':
      return <h2 className="mt-12 text-2xl sm:text-3xl">{block.text}</h2>
    case 'p':
      return <p className="mt-6 text-lg leading-relaxed text-ink/85">{block.text}</p>
    case 'ul':
      return (
        <ul className="mt-6 grid gap-3">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-lg text-ink/85">
              <Icon name="check" size={20} className="mt-1 shrink-0 text-teal-600" />
              {it}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="mt-10 rounded-2xl border-l-4 border-teal bg-paper-2 px-7 py-6 text-xl font-medium italic text-navy">
          {block.text}
        </blockquote>
      )
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-14 pt-36 text-white sm:pt-44">
        <div className="weave-grid-dark weave-mask absolute inset-0 opacity-70" aria-hidden />
        <MeshWeave className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-teal-100/70 transition-colors hover:text-white"
          >
            <Icon name="arrow" size={16} className="rotate-180" />
            Volver al blog
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-teal-100">
              {post.category}
            </span>
            <span className="font-mono text-xs text-white/50">{post.readingMinutes} min</span>
          </div>
          <h1 className="mt-5 text-3xl leading-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-sm text-white/50">{formatDate(post.date)}</p>
        </div>
      </section>

      <article className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-xl leading-relaxed text-muted">{post.excerpt}</p>
          <div className="thread-x my-10" />
          {post.body.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-line bg-paper-2 p-8 text-center sm:p-10">
            <SpecLabel className="justify-center">Asesoría MPG</SpecLabel>
            <h3 className="mt-5 text-2xl sm:text-3xl">¿Aplicamos esto a tu proceso?</h3>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Nuestro equipo técnico te ayuda a elegir y validar la solución adecuada para tu
              producción.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/contacto" withArrow>
                Habla con un asesor
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
