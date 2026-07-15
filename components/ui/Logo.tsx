import Link from 'next/link'
import MeshWeave from './MeshWeave'

type Props = {
  variant?: 'light' | 'dark' // light = para fondos oscuros (texto blanco)
  showTagline?: boolean
  href?: string | null
  className?: string
  markSize?: number
}

// Lockup de marca: malla tejida + wordmark MPG + tagline "Textile Chemicals".
// Reconstruido en vector para recolorear y animar; el arte oficial vive en
// /public/brand para usos que requieran el wordmark exacto.
export default function Logo({
  variant = 'dark',
  showTagline = true,
  href = '/',
  className = '',
  markSize = 44,
}: Props) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'
  const tagColor = variant === 'light' ? 'text-teal-100/80' : 'text-muted'
  const divider = variant === 'light' ? 'bg-white/25' : 'bg-navy/15'

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <MeshWeave className="shrink-0" style={{ width: markSize, height: markSize }} title="MPG" />
      <span aria-hidden className={`h-9 w-px ${divider}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${textColor}`}
          style={{ fontSize: markSize * 0.62, letterSpacing: '-0.04em' }}
        >
          MPG
          <sup className="align-super text-[0.38em] font-semibold opacity-70">®</sup>
        </span>
        {showTagline && (
          <span className={`spec mt-1 ${tagColor}`} style={{ fontSize: markSize * 0.17 }}>
            Textile&nbsp;Chemicals
          </span>
        )}
      </span>
    </span>
  )

  if (!href) return inner
  return (
    <Link href={href} aria-label="MPG Textile Chemicals · inicio" className="inline-flex">
      {inner}
    </Link>
  )
}
