import type { Metadata } from 'next';
import { HomeClient } from '@/components/home/HomeClient';
import { SocialProofBadge } from '@/components/home/SocialProofBadge';
import homeStyles from './home.module.css';
import { CITY_ORDER } from '@/lib/units';
import { organizationLd, restaurantLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Mané Mercado — O maior mercado gastronômico do Brasil',
  description:
    'Curadoria gastronômica em Brasília, Águas Claras e São Paulo. +20 chefs, +500 pratos, 3 unidades. Reserve sua mesa em minutos.',
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  const restaurantsLd = CITY_ORDER.map((key) => restaurantLd(key));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd()) }}
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
