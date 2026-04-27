/**
 * Google Places API (New) — busca reviews públicas do Mané no Google Meu Negócio.
 * SOMENTE server-side. Não importar em arquivos client.
 *
 * Setup:
 *   1. Criar chave em https://console.cloud.google.com/apis/credentials
 *   2. Habilitar "Places API (New)" no projeto
 *   3. Definir GOOGLE_PLACES_API_KEY no .env.local
 *   4. (Opcional) Definir GOOGLE_PLACES_PLACE_ID — caso contrário será descoberto via Text Search
 *
 * Documentação:
 *   - https://developers.google.com/maps/documentation/places/web-service/place-details
 *   - Field mask "reviews" requer SKU "Place Details (Enterprise + Atmosphere)"
 */
import 'server-only';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY ?? '';
const PLACE_ID = process.env.GOOGLE_PLACES_PLACE_ID ?? '';
const SEARCH_QUERY =
  process.env.GOOGLE_PLACES_QUERY ?? 'Mané Mercado Brasília Arena BRB Mané Garrincha';

const BASE = 'https://places.googleapis.com/v1';

type PlacesError = { error?: { message?: string; code?: number } };

export type GoogleReview = {
  authorName: string;
  authorPhoto: string | null;
  rating: number;
  text: string;
  publishTime: string;
};

export type GooglePlaceSummary = {
  placeId: string;
  name: string;
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
};

async function placesFetch<T>(path: string, init?: RequestInit & { fieldMask?: string; revalidate?: number }) {
  const headers: Record<string, string> = {
    'X-Goog-Api-Key': API_KEY,
    'Content-Type': 'application/json',
  };
  if (init?.fieldMask) headers['X-Goog-FieldMask'] = init.fieldMask;

  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { ...headers, ...(init?.headers ?? {}) },
    next: { revalidate: init?.revalidate ?? 60 * 60 * 6 },
  });
  const text = await res.text();
  let body: unknown = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  if (!res.ok) {
    const err = (body as PlacesError)?.error;
    throw new Error(`Places API ${res.status}: ${err?.message ?? text.slice(0, 160)}`);
  }
  return body as T;
}

/* Descobre o Place ID via Text Search (SKU "Text Search Pro"). */
export async function findPlaceId(query: string): Promise<string | null> {
  if (!API_KEY) return null;
  type Resp = { places?: { id: string; displayName?: { text: string } }[] };
  const res = await placesFetch<Resp>('/places:searchText', {
    method: 'POST',
    body: JSON.stringify({ textQuery: query, regionCode: 'BR', languageCode: 'pt-BR' }),
    fieldMask: 'places.id,places.displayName',
    revalidate: 60 * 60 * 24 * 7,
  });
  return res.places?.[0]?.id ?? null;
}

/* Busca o resumo do place + as reviews (até 5 retornadas pela API). */
export async function getPlaceSummary(): Promise<GooglePlaceSummary | null> {
  if (!API_KEY) return null;

  let id = PLACE_ID;
  if (!id) {
    id = (await findPlaceId(SEARCH_QUERY)) ?? '';
    if (!id) return null;
  }

  type Resp = {
    id: string;
    displayName?: { text: string };
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      name?: string;
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
      publishTime?: string;
      authorAttribution?: {
        displayName?: string;
        photoUri?: string;
      };
    }>;
  };

  const data = await placesFetch<Resp>(`/places/${id}?languageCode=pt-BR&regionCode=BR`, {
    method: 'GET',
    fieldMask:
      'id,displayName,rating,userRatingCount,reviews.rating,reviews.text,reviews.originalText,reviews.publishTime,reviews.authorAttribution',
    revalidate: 60 * 60 * 6,
  });

  const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => ({
    authorName: r.authorAttribution?.displayName ?? '',
    authorPhoto: r.authorAttribution?.photoUri ?? null,
    rating: r.rating ?? 5,
    text: r.text?.text ?? r.originalText?.text ?? '',
    publishTime: r.publishTime ?? '',
  }));

  return {
    placeId: data.id,
    name: data.displayName?.text ?? '',
    rating: data.rating ?? 0,
    userRatingCount: data.userRatingCount ?? 0,
    reviews,
  };
}
