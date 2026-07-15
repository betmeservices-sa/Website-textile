'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HERO, ROTATING } from '@/lib/content'
import SplitText from '@/components/reactbits/SplitText'
import MeshWeave from '@/components/ui/MeshWeave'
import SpecLabel from '@/components/ui/SpecLabel'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy pt-28 text-white">
      {/* Atmósfera */}
      <div className="weave-grid-dark weave-mask absolute inset-0 opacity-70" aria-hidden />
      <div
        className="halo -left-40 top-10 h-[34rem] w-[34rem] animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(28,135,175,0.30), transparent 68%)' }}
        aria-hidden
      />
      <div
        className="halo -right-32 bottom-0 h-[30rem] w-[30rem]"
        style={{ background: 'radial-gradient(circle, rgba(10,74,107,0.5), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(1,40,60,0.6))' }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SpecLabel variant="light">{HERO.eyebrow}</SpecLabel>
          </motion.div>

          <h1 className="mt-7 max-w-2xl text-[2.6rem] leading-[1.03] text-white sm:text-6xl lg:text-[4.1rem]">
            <SplitText text="Más de 20 años" as="span" className="block" />
            <SplitText
              text="acompañando tu producción textil"
              as="span"
              className="block"
              wordClassName="text-grad"
              delay={0.25}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-teal-100/80"
          >
            {HERO.subtitle}
          </motion.p>

          {/* Frase rotativa */}
          <div className="mt-6 flex h-7 items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_16px_2px_rgba(28,135,175,0.9)]" />
            <AnimatePresence mode="wait">
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="font-mono text-sm tracking-wide text-white/70"
              >
                {ROTATING[i]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={HERO.ctaPrimary.href} variant="light" withArrow>
              {HERO.ctaPrimary.label}
            </Button>
            <Button href={HERO.ctaSecondary.href} variant="ghost-light" withArrow>
              {HERO.ctaSecondary.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 border-t border-white/10 pt-6"
          >
            <p className="spec text-white/40">Aliados y certificaciones</p>
            <p className="mt-3 font-display text-lg font-semibold text-white/75">
              Prochimica · Texchem · Bluesign® · Oeko-Tex®
            </p>
          </motion.div>
        </div>

        {/* Marca tejida */}
        <div className="relative hidden justify-center lg:flex">
          <div className="animate-float relative">
            <div
              className="halo left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
              style={{ background: 'radial-gradient(circle, rgba(79,180,214,0.35), transparent 65%)' }}
              aria-hidden
            />
            <MeshWeave animate strokeWidth={2.3} className="relative h-[26rem] w-[26rem]" />
            <span className="spec absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-teal-100/60">
              Malla · trama &amp; urdimbre
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
