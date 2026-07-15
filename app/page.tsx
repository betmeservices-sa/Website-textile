import Hero from '@/components/sections/Hero'
import Pillars from '@/components/sections/Pillars'
import About from '@/components/sections/About'
import Allies from '@/components/sections/Allies'
import Values from '@/components/sections/Values'
import Products from '@/components/sections/Products'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <About />
      <Allies />
      <Values />
      <Products />
      <ContactCTA />
    </>
  )
}
