// Configuración central del sitio MPG Textile Chemicals.
// Edita aquí datos de contacto, navegación y textos globales.

export const SITE = {
  name: 'MPG Textile Chemicals',
  shortName: 'MPG',
  tagline: 'Textile Chemicals',
  url: 'https://www.mpgsv.com',
  description:
    'Más de 20 años acompañando tu producción textil en El Salvador y Guatemala. Químicos sostenibles certificados Bluesign® y Oeko-Tex®, con asesoría técnica experta.',
  locale: 'es_SV',
  email: 'info@mpgsv.com',
  phone: '+503 2252 0218',
  phoneHref: '+50322520218',
  countries: ['El Salvador', 'Guatemala'],
  office: 'Oficina principal · El Salvador',
  // Descripción bajo el logo en el footer.
  footerNote:
    'Químicos sostenibles certificados Bluesign® y Oeko-Tex®. Tecnología de vanguardia para un impacto positivo.',
} as const

export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Productos', href: '/#productos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
] as const
