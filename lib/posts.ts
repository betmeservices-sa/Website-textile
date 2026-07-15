// Blog (sección de menú aparte). Contenido en datos estructurados: sin
// dependencias extra y fácil de reemplazar. Añade posts al arreglo POSTS.
// El cuerpo usa bloques: 'h' (subtítulo), 'p' (párrafo), 'ul' (lista), 'quote'.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  readingMinutes: number
  category: string
  body: Block[]
}

export const POSTS: Post[] = [
  {
    slug: 'certificaciones-bluesign-oeko-tex',
    title: 'Bluesign® y Oeko-Tex®: qué significan para tu producción textil',
    excerpt:
      'Dos sellos que están redefiniendo la industria. Te explicamos qué certifican, en qué se diferencian y por qué importan a tu marca.',
    date: '2026-06-24',
    readingMinutes: 5,
    category: 'Sostenibilidad',
    body: [
      {
        type: 'p',
        text: 'La demanda global por textiles responsables dejó de ser una tendencia para convertirse en un requisito. Cada vez más marcas exigen a sus proveedores evidencia de que los químicos usados en tintura, preparación y acabados son seguros para las personas y para el planeta. Ahí es donde entran Bluesign® y Oeko-Tex®.',
      },
      { type: 'h', text: 'Bluesign®: gestión responsable de todo el proceso' },
      {
        type: 'p',
        text: 'Bluesign® audita la cadena de producción completa, desde los insumos químicos hasta el uso de agua y energía. Su enfoque es preventivo: evita que las sustancias problemáticas entren al proceso, en lugar de detectarlas al final.',
      },
      { type: 'h', text: 'Oeko-Tex®: textiles libres de sustancias nocivas' },
      {
        type: 'p',
        text: 'Oeko-Tex® (en particular STANDARD 100) certifica que el producto textil terminado está libre de niveles nocivos de más de 1.000 sustancias reguladas. Es uno de los sellos que más reconoce el consumidor final.',
      },
      {
        type: 'ul',
        items: [
          'Bluesign® mira el proceso; Oeko-Tex® mira el producto final.',
          'Ambos reducen riesgos regulatorios y de marca.',
          'Trabajar con proveedores certificados acelera tus propias auditorías.',
        ],
      },
      {
        type: 'quote',
        text: 'En MPG priorizamos fabricantes cuyas tecnologías ya cuentan con estas certificaciones, para que tú avances sin fricción.',
      },
    ],
  },
  {
    slug: 'suavizantes-tacto-y-rendimiento',
    title: 'Suavizantes: cómo elegir el tacto correcto sin sacrificar rendimiento',
    excerpt:
      'Hidrófobos, hidrofílicos o nano-siliconados. La elección del suavizante define el tacto final y también propiedades técnicas clave.',
    date: '2026-06-10',
    readingMinutes: 4,
    category: 'Acabados',
    body: [
      {
        type: 'p',
        text: 'El suavizante es una de las últimas decisiones del proceso y, sin embargo, es la que más recuerda el cliente: es literalmente lo que se siente al tocar la prenda. Elegir bien equilibra tacto, absorción, blancura y costo.',
      },
      { type: 'h', text: 'Hidrófobos vs. hidrofílicos' },
      {
        type: 'p',
        text: 'Los suavizantes hidrófobos dan un tacto muy suave y sedoso, pero pueden reducir la absorción de agua, algo crítico en toallas o ropa deportiva. Los hidrofílicos mantienen la capacidad de absorción, ideal para prendas que gestionan humedad.',
      },
      { type: 'h', text: 'Nano-siliconados y moisture management' },
      {
        type: 'p',
        text: 'Los nano-siliconados penetran la fibra para un tacto premium y durable lavado tras lavado. Combinados con tecnologías de moisture management, potencian el desempeño en textiles técnicos y activewear.',
      },
      {
        type: 'ul',
        items: [
          'Define primero la función de la prenda, luego el tacto.',
          'Valida absorción y solidez al lavado en tus condiciones reales.',
          'Nuestro equipo técnico te ayuda a montar la prueba.',
        ],
      },
    ],
  },
]

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug)
}

export function sortedPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}
