import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomeClient } from '@/components/home/HomeClient';
import { SocialProofBadge } from '@/components/home/SocialProofBadge';
import homeStyles from '../home.module.css';
import type { CityKey } from '@/lib/tracking';
import { CITY_ORDER, UNITS } from '@/lib/units';
import { organizationLd, restaurantLd } from '@/lib/jsonld';

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_ORDER.map((city) => ({ city }));
}

const CITY_META: Record<CityKey, { title: string; description: string }> = {
  bsb: {
    title: 'Mané Mercado Brasília · Arena BRB Mané Garrincha',
    description:
      'Mané Mercado em Brasília, na Arena BRB Mané Garrincha. +20 chefs, +500 pratos, estacionamento fácil. Veja o cardápio e reserve sua mesa em minutos.',
  },
  ac: {
    title: 'Mané Mercado Águas Claras',
    description:
      'Mané Mercado em Águas Claras. Curadoria gastronômica com +20 chefs e +500 pratos. Veja o cardápio e reserve sua mesa em minutos.',
  },
  sp: {
    title: 'Mané Mercado São Paulo · Perdizes',
    description:
      'Mané Mercado em Perdizes, São Paulo, ao lado do West Plaza. Curadoria gastronômica com +20 chefs e +500 pratos. Veja o cardápio e reserve sua mesa em minutos.',
  },
};

function isCityKey(value: string): value is CityKey {
  return (CITY_ORDER as string[]).includes(value);
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  if (!isCityKey(params.city)) return {};
  const meta = CITY_META[params.city];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${params.city}` },
  };
}

export default async function CityPage({ params }: { params: { city: string } }) {
  if (!isCityKey(params.city)) notFound();
  const city = params.city;
  const u = UNITS[city];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd()) }}
      />
      <script
        key={`restaurant-${u.key}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd(city)) }}
      />
      <HomeClient
        initialCity={city}
        socialProof={await SocialProofBadge({ className: homeStyles.heroBadge })}
      />
    </>
  );
}
