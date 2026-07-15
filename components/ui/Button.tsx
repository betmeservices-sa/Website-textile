import Link from 'next/link'
import type { ReactNode } from 'react'
import Icon from './Icon'

type Variant = 'primary' | 'outline' | 'ghost' | 'ghost-light' | 'light'
type Props = {
  href?: string
  children: ReactNode
  variant?: Variant
  className?: string
  withArrow?: boolean
  type?: 'button' | 'submit'
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold text-[0.95rem] px-6 py-3.5 transition-all duration-300 will-change-transform'

const variants: Record<Variant, string> = {
  primary:
    'bg-navy text-white hover:bg-navy-900 hover:-translate-y-0.5 shadow-[0_18px_40px_-20px_rgba(1,56,86,0.7)]',
  outline:
    'border border-navy/20 text-navy hover:border-teal hover:text-teal hover:-translate-y-0.5',
  ghost: 'text-navy hover:text-teal',
  'ghost-light': 'text-white/85 hover:text-white',
  light:
    'bg-white text-navy hover:-translate-y-0.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  withArrow = false,
  type = 'button',
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <button type={type} className={cls}>
      {inner}
    </button>
  )
}
