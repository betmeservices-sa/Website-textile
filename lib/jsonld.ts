import { SITE } from './site'

export const SITE_URL = SITE.url

// JSON-LD de organización para SEO / rich results.
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/mpg-logo.png`,
    email: SITE.email,
    telephone: SITE.phone,
    description: SITE.description,
    areaServed: SITE.countries,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SV',
    },
    sameAs: [] as string[],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'es',
  }
}
