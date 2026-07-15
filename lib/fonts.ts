import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

// Titulares · grotesca industrial de mucho carácter, ecos del wordmark MPG.
export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// Cuerpo y UI · humanista técnica, legible y con temple de ingeniería.
export const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Etiquetas / spec · monoespaciada tipo ficha de laboratorio (01 · TINTURA).
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})
