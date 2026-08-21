import type { CityKey } from './tracking';
import { UNITS, openingHoursSchemaFor } from './units';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mane.com.vc';

/** JSON-LD: Organization (site-wide). */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mané Mercado',
    url: siteUrl,
    logo: `${siteUrl}/images/logo-mane.svg`,
    sameAs: [
      'https://instagram.com/manemercado',
      'https://linkedin.com/company/manemercado',
      'https://tiktok.com/@manemercado',
    ],
    description:
      'O maior mercado gastronômico do Brasil. Curadoria gastronômica em Brasília, Águas Claras e São Paulo.',
  };
}

/** JSON-LD: Restaurant de uma unidade (big local-SEO win). */
export function restaurantLd(key: CityKey) {
  const u = UNITS[key];
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteUrl}/#restaurant-${key}`,
    name: key === 'sp' ? 'Mané São Paulo Perdizes' : `Mané ${u.label}`,
    url: `${siteUrl}/${key}`,
    image: `${siteUrl}${u.cover}`,
    servesCuisine: ['Brasileira', 'Japonesa', 'Italiana', 'Churrascaria'],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: u.streetAddress,
      addressLocality: u.addressLocality,
      addressRegion: u.addressRegion,
      addressCountry: 'BR',
      ...(u.postalCode ? { postalCode: u.postalCode } : {}),
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: u.geo.latitude,
      longitude: u.geo.longitude,
    },
    acceptsReservations: 'True',
    openingHoursSpecification: openingHoursSchemaFor(u.key),
    hasMenu: `https://menu.mane.com.vc/${u.menuSlug}`,
  };
}
