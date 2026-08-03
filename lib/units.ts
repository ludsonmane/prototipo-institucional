import type { CityKey } from './tracking';

export type Unit = {
  key: CityKey;
  label: string;
  shortLabel: string;
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
  sp: {
    key: 'sp',
    label: 'São Paulo',
    shortLabel: 'São Paulo',
    region: 'Perdizes',
    menuSlug: 'sp',
    cover: '/images/mane-sp.png',
    address: 'Perdizes — São Paulo, SP',
    streetAddress: 'Perdizes',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    geo: { latitude: -23.5386, longitude: -46.6723 },
    pins: ['Estacionamento', 'West Plaza'],
  },
};

export const CITY_ORDER: CityKey[] = ['bsb', 'ac', 'sp'];

/** Horário de funcionamento (todas as unidades).
 *  Seg: fechado · Ter–Sex: 12h–22h · Sáb: 12h–22h30 · Dom: 12h–22h */
export const OPENING_HOURS_DISPLAY = [
  { days: 'Segunda', hours: 'Fechado' },
  { days: 'Terça a sexta', hours: '12h às 22h' },
  { days: 'Sábado', hours: '12h às 22h30' },
  { days: 'Domingo', hours: '12h às 22h' },
];

/** Mesma regra em formato schema.org (openingHoursSpecification). */
export const OPENING_HOURS_SCHEMA = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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

export const MENU_API = 'https://api-menu.mane.com.vc';
export const RESERVATION_URL = 'https://reservas.mane.com.vc/reservar';
export const MENU_URL = 'https://menu.mane.com.vc';

export function reservationUrl(type?: string) {
  return type ? `${RESERVATION_URL}?type=${type}` : RESERVATION_URL;
}

export function menuUrl(city: CityKey, storeSlug?: string) {
  return storeSlug ? `${MENU_URL}/${city}/loja/${storeSlug}` : `${MENU_URL}/${city}`;
}
