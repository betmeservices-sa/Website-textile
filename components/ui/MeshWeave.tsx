'use client'

// Malla textil tejida — el motivo firma de MPG, reconstruido del logotipo.
// Hilos de trama/urdimbre en un rombo, con degradado teal→azul y un trazo
// que se "teje" al aparecer. Se usa como marca, divisor y fondo atmosférico.
import { useId } from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
  animate?: boolean
  strokeWidth?: number
  from?: string
  to?: string
  title?: string
}

// Posiciones de los 6 hilos en cada dirección.
const THREADS = [22, 33.4, 45, 56.6, 68, 79]
const A = 17
const B = 83
const AMP = 2.7

function path(pos: number, vertical: boolean) {
  const c1 = A + (B - A) * 0.33
  const c2 = A + (B - A) * 0.66
  return vertical
    ? `M ${pos} ${A} C ${pos - AMP} ${c1} ${pos + AMP} ${c2} ${pos} ${B}`
    : `M ${A} ${pos} C ${c1} ${pos - AMP} ${c2} ${pos + AMP} ${B} ${pos}`
}

export default function MeshWeave({
  className = '',
  style,
  animate = false,
  strokeWidth = 2.1,
  from = '#4FB4D6',
  to = '#1B6B96',
  title,
}: Props) {
  const uid = useId().replace(/:/g, '')
  const gid = `mesh-${uid}`

  const strokes = [
    ...THREADS.map((p) => ({ d: path(p, true), key: `v${p}` })),
    ...THREADS.map((p) => ({ d: path(p, false), key: `h${p}` })),
  ]

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gid} x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={from} />
          <stop offset="0.55" stopColor="#1C87AF" />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <g
        transform="rotate(45 50 50)"
        stroke={`url(#${gid})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        {strokes.map((s, i) => (
          <path
            key={s.key}
            d={s.d}
            style={
              animate
                ? {
                    strokeDasharray: 200,
                    strokeDashoffset: 200,
                    animation: 'weave-draw 1s cubic-bezier(0.16,1,0.3,1) forwards',
                    animationDelay: `${0.15 + i * 0.06}s`,
                  }
                : undefined
            }
          />
        ))}
      </g>
    </svg>
  )
}
