import type { Metadata } from 'next';
import { HomeClient } from '@/components/home/HomeClient';
import { SocialProofBadge } from '@/components/home/SocialProofBadge';
import homeStyles from './home.module.css';
import { UNITS, CITY_ORDER, OPENING_HOURS_SCHEMA } from '@/lib/units';

export const metadata: Metadata = {
  title: 'Mané Mercado — O maior mercado gastronômico do Brasil',
  description:
    'Curadoria gastronômica em Brasília, Águas Claras e São Paulo. +20 chefs, +500 pratos, 3 unidades. Reserve sua mesa em minutos.',
  alternates: { canonical: '/' },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mane.com.vc';

export default async function HomePage() {
  /* JSON-LD: Organization + Restaurant for each unit (big local-SEO win). */
  const organizationLd = {
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

  const restaurantsLd = CITY_ORDER.map((key) => {
    const u = UNITS[key];
    return {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${siteUrl}/#restaurant-${key}`,
      name: key === 'sp' ? 'Mané São Paulo Perdizes' : `Mané ${u.label}`,
      url: siteUrl,
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
      openingHoursSpecification: OPENING_HOURS_SCHEMA,
      hasMenu: `https://menu.mane.com.vc/${u.menuSlug}`,
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      {restaurantsLd.map((ld) => (
        <script
          key={ld['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <HomeClient socialProof={await SocialProofBadge({ className: homeStyles.heroBadge })} />
    </>
  );
}
