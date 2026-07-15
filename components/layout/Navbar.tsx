'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAV } from '@/lib/site'
import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  // Sobre el hero (no scrolled) el texto es claro; al bajar, oscuro sobre glass.
  const solid = scrolled || open
  const link = solid ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-line bg-paper/85 backdrop-blur-xl py-3'
          : 'border-b border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo variant={solid ? 'dark' : 'light'} markSize={38} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-sans text-[0.92rem] font-medium transition-colors ${link}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.92rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              solid ? 'bg-navy text-white' : 'bg-white text-navy'
            }`}
          >
            Cotizar
            <Icon name="arrow" size={16} />
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className={`lg:hidden ${solid ? 'text-navy' : 'text-white'}`}
        >
          <Icon name={open ? 'close' : 'menu'} size={28} />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line py-3.5 font-display text-2xl font-bold text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-semibold text-white"
          >
            Cotizar ahora
            <Icon name="arrow" size={18} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
