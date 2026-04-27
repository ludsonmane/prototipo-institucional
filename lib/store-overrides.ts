import type { CityKey } from './tracking';

/* Per-store manual override for the carousel "popular product" image.
 *
 * Use when the API heuristic (isFeatured → sortOrder) picks the wrong item —
 * common while salesCount / isFeatured aren't populated yet.
 *
 * Two override modes:
 *  - `productName`: case-insensitive substring match against products of that store.
 *    First match with an imageUrl wins. Flexible to copy changes.
 *  - `imageUrl`:   hard-coded image URL. Used as-is, no API lookup.
 *
 * Both optional. If a store isn't listed, falls back to the heuristic.
 */
export type StoreOverride = {
  productName?: string;
  imageUrl?: string;
};

export const STORE_OVERRIDES: Partial<Record<CityKey, Record<string, StoreOverride>>> = {
  ac: {
    'bar-do-maneco': { productName: 'Chopp Amstel Tulipa' },
  },
  bsb: {
    /* heurística pega Balinha (sortOrder 1); preferir o carro-chefe homônimo */
    'o-popular': { productName: 'Tábua Popular' },
  },
  sp: {
    bardomane: { productName: 'Drink Perdizes' },
    bardomaneco: { productName: 'Chopp Amstel Tulipa' },
  },
};

export function getStoreOverride(city: CityKey, storeSlug: string): StoreOverride | undefined {
  return STORE_OVERRIDES[city]?.[storeSlug];
}
