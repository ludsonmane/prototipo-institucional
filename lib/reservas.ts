/**
 * Cliente HTTP para a API de Reservas do Mané (mane-reservas-api).
 * Endpoints públicos (sem auth):
 *   - GET /v1/units
 *   - GET /v1/reservations/areas
 *   - GET /v1/reservations/public/availability?unitId=...&date=...&partySize=...
 *   - GET /v1/reservations/public/lookup?code=...
 *
 * Configuração: defina NEXT_PUBLIC_RESERVAS_API ou MANE_API_BASE no .env.local.
 * Default: https://api.mane.com.vc
 */

export const RESERVAS_API_BASE =
  process.env.MANE_API_BASE ??
  process.env.NEXT_PUBLIC_RESERVAS_API ??
  'https://api.mane.com.vc';

export type ReservasUnit = {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ReservasUnitsResponse = {
  items: ReservasUnit[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ReservasArea = string;

export type ReservasLookup = {
  id: string;
  reservationCode: string;
  status: string;
  date?: string;
  startTime?: string;
  partySize?: number;
  unit?: { id: string; name: string; slug: string } | null;
  area?: string | null;
};

export type Availability = unknown;

class ReservasError extends Error {
  status: number;
  body: unknown;
  constructor(status: number, body: unknown, message?: string) {
    super(message ?? `Reservas API error ${status}`);
    this.name = 'ReservasError';
    this.status = status;
    this.body = body;
  }
}

async function request<T>(path: string, init?: RequestInit & { revalidate?: number }): Promise<T> {
  const url = `${RESERVAS_API_BASE}${path}`;
  const { revalidate, ...rest } = init ?? {};
  const res = await fetch(url, {
    ...rest,
    headers: { Accept: 'application/json', ...(rest.headers ?? {}) },
    next: revalidate !== undefined ? { revalidate } : { revalidate: 60 },
  });
  let body: unknown = null;
  const text = await res.text();
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }
  if (!res.ok) {
    throw new ReservasError(res.status, body);
  }
  return body as T;
}

export function getUnits() {
  return request<ReservasUnitsResponse>('/v1/units', { revalidate: 600 });
}

export function getAreas() {
  return request<ReservasArea[]>('/v1/reservations/areas', { revalidate: 600 });
}

export function getAvailability(params: { unitId: string; date?: string; partySize?: number }) {
  const qs = new URLSearchParams();
  qs.set('unitId', params.unitId);
  if (params.date) qs.set('date', params.date);
  if (params.partySize != null) qs.set('partySize', String(params.partySize));
  return request<Availability>(`/v1/reservations/public/availability?${qs.toString()}`, {
    revalidate: 30,
  });
}

export function lookupReservation(code: string) {
  const qs = new URLSearchParams({ code });
  return request<ReservasLookup>(`/v1/reservations/public/lookup?${qs.toString()}`, {
    revalidate: 0,
    cache: 'no-store',
  });
}

export async function pingReservasApi() {
  return request<{ ok: boolean; ts?: string; service?: string }>('/health', { revalidate: 0, cache: 'no-store' });
}

export { ReservasError };
