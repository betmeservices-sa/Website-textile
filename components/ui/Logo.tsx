import Link from 'next/link'
import Image from 'next/image'

type Props = {
  // light = para fondos oscuros (hero/footer): logo blanco directo.
  // dark  = para fondos claros (navbar con scroll): chip navy para contraste.
  variant?: 'light' | 'dark'
  showTagline?: boolean
  href?: string | null
  className?: string
  markSize?: number
}

// Lockup oficial de marca (malla tejida + wordmark MPG® + "Textile Chemicals").
// Arte blanco recortado a fondo transparente en /public/brand/mpg-lockup.png:
// como toda superficie detrás es navy (hero, footer), calza sin costura; sobre
// fondo claro (navbar con scroll) se apoya en un chip navy.
const LOCKUP = { src: '/brand/mpg-lockup.png', w: 1266, h: 654 }

export default function Logo({
  variant = 'dark',
  href = '/',
  className = '',
  markSize = 44,
}: Props) {
  const height = Math.round(markSize * 1.18)
  const onLight = variant === 'dark' // fondo claro -> chip navy

  const inner = (
    <span
      className={`inline-flex items-center rounded-xl px-2.5 py-1.5 transition-colors duration-500 ${
        onLight ? 'bg-navy' : 'bg-transparent'
      } ${className}`}
    >
      <Image
        src={LOCKUP.src}
        alt="MPG Textile Chemicals"
        width={LOCKUP.w}
        height={LOCKUP.h}
        priority
        style={{ height: `${height}px`, width: 'auto' }}
      />
    </span>
  )

  if (!href) return inner
  return (
    <Link href={href} aria-label="MPG Textile Chemicals · inicio" className="inline-flex">
      {inner}
    </Link>
  )
}
