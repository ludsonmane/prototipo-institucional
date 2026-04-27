'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/app/home.module.css';
import { CITY_ORDER, MENU_API, menuUrl, UNITS } from '@/lib/units';
import { trackCTA } from '@/lib/tracking';
import { getStoreOverride } from '@/lib/store-overrides';
import { useCity } from './CityContext';

type Store = {
  id?: string;
  slug: string;
  name?: string;
  category?: string;
  coverUrl?: string;
  logoUrl?: string;
  accentColor?: string;
  isActive?: boolean;
  productType?: { name?: string };
};

type Product = {
  id: string;
  name?: string;
  imageUrl?: string | null;
  isFeatured?: boolean;
  salesCount?: number | null;
  sortOrder?: number | null;
  isAvailable?: boolean;
  isActive?: boolean;
};

type MenuResponse = {
  store?: Store;
  categories?: Array<{ products?: Product[] }>;
};

type LoadState =
  | { kind: 'loading' }
  | { kind: 'ready'; stores: Store[] }
  | { kind: 'empty' }
  | { kind: 'error' };

/* Pick the "popular" product image for a store.
 * Priority:
 *   1. Manual override (productName substring match on this store's products)
 *   2. isFeatured=true with imageUrl
 *   3. Earliest sortOrder with imageUrl
 * Only considers active+available products with a usable image. */
function pickTopProductImage(
  menu: MenuResponse,
  override?: { productName?: string }
): string | null {
  const products = (menu.categories ?? []).flatMap((c) => c.products ?? []);
  const eligible = products.filter(
    (p) =>
      p.isActive !== false &&
      p.isAvailable !== false &&
      typeof p.imageUrl === 'string' &&
      p.imageUrl.length > 0
  );
  if (!eligible.length) return null;

  if (override?.productName) {
    const needle = override.productName.toLowerCase();
    const match = eligible.find((p) => (p.name ?? '').toLowerCase().includes(needle));
    if (match?.imageUrl) return match.imageUrl;
  }

  eligible.sort((a, b) => {
    const fa = a.isFeatured ? 1 : 0;
    const fb = b.isFeatured ? 1 : 0;
    if (fa !== fb) return fb - fa;
    return (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
  });
  return eligible[0]?.imageUrl ?? null;
}

export function RestaurantsSection() {
  const { city, setCity } = useCity();
  const [state, setState] = useState<LoadState>({ kind: 'loading' });
  /* Maps `${city}:${storeSlug}` → top product image URL. Keyed by city so a city switch doesn't flash stale images. */
  const [topImages, setTopImages] = useState<Record<string, string>>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setState({ kind: 'loading' });
    fetch(`${MENU_API}/stores?unitSlug=${city}`, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<Store[]>;
      })
      .then((data) => {
        const active = data.filter((s) => s.isActive !== false).slice(0, 20);
        setState(active.length ? { kind: 'ready', stores: active } : { kind: 'empty' });
        /* Fire off menu requests in parallel to discover each store's top product image.
         * Short-circuit with a hard-coded override URL if one is configured. */
        active.forEach((store) => {
          const override = getStoreOverride(city, store.slug);
          if (override?.imageUrl) {
            setTopImages((prev) => ({ ...prev, [`${city}:${store.slug}`]: override.imageUrl! }));
            return;
          }
          fetch(`${MENU_API}/stores/${store.slug}/menu?unitSlug=${city}`, {
            signal: controller.signal,
          })
            .then((r) => (r.ok ? (r.json() as Promise<MenuResponse>) : null))
            .then((menu) => {
              if (!menu) return;
              const img = pickTopProductImage(menu, override);
              if (img) {
                setTopImages((prev) => ({ ...prev, [`${city}:${store.slug}`]: img }));
              }
            })
            .catch(() => {
              /* Abort or network error — fall back to coverUrl silently. */
            });
        });
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ kind: 'error' });
      });
    return () => controller.abort();
  }, [city]);

  const updateArrows = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [state, updateArrows]);

  const animRef = useRef<number | null>(null);

  const animateScrollTo = useCallback((el: HTMLElement, target: number, duration = 550) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const from = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    const to = Math.max(0, Math.min(target, max));
    const change = to - from;
    if (Math.abs(change) < 1) return;
    const start = performance.now();
    /* easeInOutCubic — suave saindo e entrando */
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      el.scrollLeft = from + change * ease(progress);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        animRef.current = null;
      }
    };
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const scroll = useCallback(
    (direction: -1 | 1) => {
      const el = carouselRef.current;
      if (!el) return;
      const firstCard = el.querySelector<HTMLElement>(`.${styles.restaurantCard}`);
      const step = (firstCard?.clientWidth ?? 260) + 14;
      animateScrollTo(el, el.scrollLeft + direction * step * 1.5);
    },
    [animateScrollTo]
  );

  return (
    <section className={styles.restaurantsSection}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>• nossos restaurantes</span>
        <h2 className={styles.sectionTitle}>
          Do <em>sushi ao churrasco</em>, tem pra todo mundo.
        </h2>
        <p className={styles.sectionSub}>Conheça nossos restaurantes</p>
        <div className={styles.tabs}>
          {CITY_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles.tab} ${city === key ? styles.tabActive : ''}`}
              onClick={() => setCity(key)}
            >
              {UNITS[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.carouselWrap}>
        <button
          type="button"
          aria-label="Anterior"
          className={`${styles.carouselArrow} ${styles.carouselArrowPrev} ${
            canPrev ? '' : styles.carouselArrowDisabled
          }`}
          onClick={() => scroll(-1)}
          disabled={!canPrev}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {state.kind === 'loading' &&
            [0, 1, 2].map((i) => (
              <div key={i} className={`${styles.restaurantCard} ${styles.restaurantSkeleton}`} />
            ))}

          {state.kind === 'empty' && <div className={styles.restaurantsEmpty}>Em breve.</div>}
          {state.kind === 'error' && (
            <div className={styles.restaurantsEmpty}>
              Não conseguimos carregar os restaurantes. Tente novamente em instantes.
            </div>
          )}

          {state.kind === 'ready' &&
            state.stores.map((s) => {
              const fallbackCover = s.coverUrl || s.logoUrl || '';
              const topImage = topImages[`${city}:${s.slug}`];
              const bg = s.accentColor || '#222';
              return (
                <a
                  key={s.slug}
                  href={menuUrl(city, s.slug)}
                  target="_blank"
                  rel="noopener"
                  className={styles.restaurantCard}
                  style={{ backgroundColor: bg }}
                >
                  {/* Base layer: fallback cover. Kept under so swap is seamless. */}
                  {fallbackCover && (
                    <span
                      className={styles.restaurantCover}
                      style={{ backgroundImage: `url('${fallbackCover}')` }}
                      aria-hidden="true"
                    />
                  )}
                  {/* Top layer: popular product image, fades in when discovered. */}
                  {topImage && (
                    <span
                      className={`${styles.restaurantCover} ${styles.restaurantCoverTop}`}
                      style={{ backgroundImage: `url('${topImage}')` }}
                      aria-hidden="true"
                    />
                  )}
                  <div className={styles.restaurantLogo}>
                    {s.logoUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={s.logoUrl} alt={s.name ?? ''} />
                    ) : (
                      (s.name ?? '?')[0]
                    )}
                  </div>
                  <div className={styles.restaurantInfo}>
                    <h3 className={styles.restaurantName}>{s.name}</h3>
                    <p className={styles.restaurantCat}>{s.category ?? s.productType?.name ?? ''}</p>
                  </div>
                </a>
              );
            })}
        </div>

        <button
          type="button"
          aria-label="Próximo"
          className={`${styles.carouselArrow} ${styles.carouselArrowNext} ${
            canNext ? '' : styles.carouselArrowDisabled
          }`}
          onClick={() => scroll(1)}
          disabled={!canNext}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className={`${styles.container} ${styles.ctaWrapper}`}>
        <a
          href={menuUrl(city)}
          target="_blank"
          rel="noopener"
          className={styles.ctaMain}
          onClick={() => trackCTA('menu_cta', city)}
        >
          Conheça nosso cardápio
          <span className={styles.arrow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
