import type { CityKey } from './tracking';

export type Unit = {
  key: CityKey;
  label: string;
  shortLabel: string;
  /** Nome completo da casa (cards, JSON-LD). */
  fullName: string;
  /** Slug que o sistema de reservas aceita em ?unit= pra pré-selecionar a casa. */
  reservationUnit: string;
  region: string;
  menuSlug: string;
  cover: string;
  address: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  geo: { latitude: number; longitude: number };
  telephone?: string;
  pins: string[];
};

export const UNITS: Record<CityKey, Unit> = {
  bsb: {
    key: 'bsb',
    label: 'Brasília',
    shortLabel: 'Brasília',
    fullName: 'Mané Brasília',
    reservationUnit: 'bsb',
    region: 'DF',
    menuSlug: 'bsb',
    cover: '/images/hero2.jpg',
    address: 'Arena BRB Mané Garrincha — Asa Norte',
    streetAddress: 'Arena BRB Mané Garrincha, Asa Norte',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    postalCode: '70070-701',
    geo: { latitude: -15.7835, longitude: -47.8992 },
    pins: ['Estacionamento', 'Eixo Monumental'],
  },
  ac: {
    key: 'ac',
    label: 'Águas Claras',
    shortLabel: 'Águas Claras',
    fullName: 'Mané Águas Claras',
    reservationUnit: 'ac',
    region: 'DF',
    menuSlug: 'ac',
    cover: '/images/mane-aguas.png',
    address: 'Águas Claras — DF',
    streetAddress: 'Águas Claras',
    addressLocality: 'Águas Claras',
    addressRegion: 'DF',
    geo: { latitude: -15.8333, longitude: -48.0333 },
    pins: ['Estacionamento', 'Shopping'],
  },
  ptg: {
    key: 'ptg',
    label: 'Lago Sul',
    shortLabel: 'Lago Sul',
    fullName: 'Mané Lago Sul',
    reservationUnit: 'partage',
    region: 'Partage',
    menuSlug: 'ptg',
    cover: '/images/mane-partage.jpg',
    address: 'Partage Lago Sul — SHIS QI 19, Lago Sul',
    streetAddress: 'Partage Lago Sul, SHIS QI 19, Lote 05',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    postalCode: '71608-900',
    geo: { latitude: -15.873809, longitude: -47.926638 },
    pins: ['Estacionamento', 'Open mall', 'Aeroporto'],
  },
};

export const CITY_ORDER: CityKey[] = ['bsb', 'ac', 'ptg'];

/** Horário de funcionamento (BSB, Águas Claras e Lago Sul): Seg–Sex 12h–22h · Sáb 12h–22h30 · Dom 12h–22h */
export const OPENING_HOURS_DISPLAY = [
  { days: 'Segunda a sexta', hours: '12h às 22h' },
  { days: 'Sábado', hours: '12h às 22h30' },
  { days: 'Domingo', hours: '12h às 22h' },
];

/** Mesma regra em formato schema.org (openingHoursSpecification). Hoje é igual pra todas as casas. */
export function openingHoursSchemaFor(_city: CityKey) {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '12:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '12:00',
      closes: '22:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '22:00',
    },
  ];
}

export const MENU_API = 'https://api-menu.mane.com.vc';
export const RESERVATION_URL = 'https://reservas.mane.com.vc/reservar';
export const MENU_URL = 'https://menu.mane.com.vc';

export function reservationUrl(type?: string) {
  return type ? `${RESERVATION_URL}?type=${type}` : RESERVATION_URL;
}

/** Link de reserva já com a casa pré-selecionada. */
export function reservationUrlFor(city: CityKey) {
  return `${RESERVATION_URL}?unit=${UNITS[city].reservationUnit}`;
}

export function menuUrl(city: CityKey, storeSlug?: string) {
  return storeSlug ? `${MENU_URL}/${city}/loja/${storeSlug}` : `${MENU_URL}/${city}`;
}
