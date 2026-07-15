// Todo el contenido del Home, como datos editables.
// Fuente: brief del cliente (banners, apartados, nosotros, valores, productos).

export const HERO = {
  eyebrow: 'El Salvador · Guatemala',
  title: 'Más de 20 años acompañando tu producción textil',
  subtitle:
    'Tu aliado estratégico con químicos innovadores y asesoría experta para potenciar tus resultados.',
  ctaPrimary: { label: 'Contáctanos', href: '/contacto' },
  ctaSecondary: { label: 'Ver productos', href: '/#productos' },
}

// Frases que rotan bajo el titular (los "banners" del brief).
export const ROTATING = [
  'El futuro de tus textiles es verde.',
  'Soluciones químicas integrales para cada proceso.',
  'Servicio excepcional, logística impecable.',
]

export const STATS = [
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 2, suffix: '', label: 'Países: SV · GT' },
  { value: 4, suffix: '', label: 'Procesos cubiertos' },
  { value: 2, suffix: '', label: 'Certificaciones eco' },
]

// 4 apartados bajo el banner.
export const PILLARS = [
  {
    index: '01',
    icon: 'leaf',
    title: 'Futuro verde',
    desc: 'Químicos sostenibles certificados Bluesign® y Oeko-Tex®. Tecnología de vanguardia para un impacto positivo.',
  },
  {
    index: '02',
    icon: 'layers',
    title: 'Soluciones integrales',
    desc: 'Desde la tintura hasta los acabados, cubrimos cada etapa de tu proceso con resultados superiores y consistentes.',
  },
  {
    index: '03',
    icon: 'compass',
    title: 'Asesoría experta',
    desc: 'No solo proveemos, te acompañamos. Optimizamos tus procesos y resolvemos tus dudas como asesores de confianza.',
  },
  {
    index: '04',
    icon: 'truck',
    title: 'Servicio y logística',
    desc: 'Garantizamos tu abastecimiento y la continuidad de tu producción con respuestas ágiles y entregas confiables.',
  },
]

export const ABOUT = {
  eyebrow: 'Nuestro compromiso',
  title: 'Somos más que tus proveedores: tus asesores de confianza',
  lead: 'Con más de dos décadas de experiencia, en MPG Textile Chemicals nos hemos consolidado como la distribuidora de fabricantes de químicos textiles innovadores en El Salvador y Guatemala.',
  mission:
    'Potenciar tu producción. Nos dedicamos a proveer tecnologías de vanguardia, productos de alta calidad y precios competitivos, priorizando siempre soluciones amigables con el medio ambiente.',
  vision:
    'Ser más que tus proveedores: tus asesores de confianza. Estamos comprometidos a acompañarte en cada proceso, asegurando que optimices tus resultados y alcances tus metas.',
}

export const ALLIES = {
  eyebrow: 'Aliados estratégicos',
  title: 'Fabricantes líderes, tecnologías sostenibles',
  lead: 'Colaboramos con fabricantes cuyas tecnologías sostenibles cuentan con las certificaciones Bluesign® y Oeko-Tex®. Marcas líderes en tecnología y acompañamiento.',
  certifications: [
    { name: 'Bluesign®', note: 'Producción textil responsable' },
    { name: 'Oeko-Tex®', note: 'Textiles libres de sustancias nocivas' },
  ],
  manufacturers: [
    { name: 'Prochimica', note: 'Química textil de vanguardia' },
    { name: 'Texchem', note: 'Soluciones para todo el proceso' },
  ],
}

export const VALUES = {
  eyebrow: 'Valores que impulsan tu éxito',
  title: 'Más que distribución: el mayor valor para tu producción',
  items: [
    {
      icon: 'compass',
      title: 'Asesoría experta y cercana',
      desc: 'No solo proveemos productos, te acompañamos. Nuestro equipo técnico ofrece soluciones personalizadas y optimiza tus procesos.',
    },
    {
      icon: 'spark',
      title: 'Innovación constante',
      desc: 'Investigamos y traemos las últimas tecnologías en químicos textiles para que tu producción esté a la altura del mercado global.',
    },
    {
      icon: 'shield',
      title: 'Calidad inquebrantable',
      desc: 'Cada producto cumple los más altos estándares. Tu tranquilidad y la calidad de tus textiles son nuestra prioridad.',
    },
    {
      icon: 'bolt',
      title: 'Agilidad y confiabilidad',
      desc: 'Respuestas rápidas, entregas eficientes y soporte constante para que tu cadena de producción nunca se detenga.',
    },
    {
      icon: 'leaf',
      title: 'Responsabilidad ambiental',
      desc: 'Priorizamos soluciones y aliados comprometidos con el medio ambiente: productos eficientes y sostenibles.',
    },
  ],
}

export type Product = {
  index: string
  key: string
  icon: string
  title: string
  blurb: string
  items: string[]
}

export const PRODUCTS: Product[] = [
  {
    index: '01',
    key: 'tintura',
    icon: 'droplet',
    title: 'Tintura',
    blurb: 'Color uniforme, reproducible y de alta solidez en cada lote.',
    items: ['Humectantes y secuestrantes', 'Dispersantes', 'Blanqueadores ópticos', 'Colorantes'],
  },
  {
    index: '02',
    key: 'preparacion',
    icon: 'beaker',
    title: 'Preparación',
    blurb: 'Sustratos limpios y estables, listos para un proceso impecable.',
    items: ['Detergentes y humectantes', 'Dispersantes / secuestrantes', 'Estabilizadores de peróxido', 'Antiespumantes'],
  },
  {
    index: '03',
    key: 'post-pintura',
    icon: 'bubbles',
    title: 'Post-pintura',
    blurb: 'Fijación y limpieza que aseguran solidez y eficiencia.',
    items: ['Agentes de jabonado', 'Fijadores', 'Limpiadores de máquinas'],
  },
  {
    index: '04',
    key: 'acabados',
    icon: 'fabric',
    title: 'Acabados',
    blurb: 'El tacto, la caída y el rendimiento final que exige tu marca.',
    items: [
      'Suavizantes hidrófobos',
      'Suavizantes hidrofílicos',
      'Suavizantes nano-siliconados',
      'Moisture management',
      'Resinas glioxálicas',
    ],
  },
]
