import type { Metadata } from 'next'
import { archivo, plexSans, plexMono } from '@/lib/fonts'
import { SITE } from '@/lib/site'
import { SITE_URL, organizationJsonLd, websiteJsonLd } from '@/lib/jsonld'
import SmoothScroll from '@/components/providers/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MPG Textile Chemicals · Químicos textiles en El Salvador y Guatemala',
    template: '%s · MPG Textile Chemicals',
  },
  description: SITE.description,
  keywords: [
    'químicos textiles',
    'químicos para textiles El Salvador',
    'químicos textiles Guatemala',
    'tintura textil',
    'acabados textiles',
    'suavizantes textiles',
    'Bluesign',
    'Oeko-Tex',
    'auxiliares textiles',
    'distribuidora química textil',
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: SITE_URL,
    siteName: SITE.name,
    title: 'MPG Textile Chemicals · Tu aliado en química textil',
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MPG Textile Chemicals',
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="grain font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
