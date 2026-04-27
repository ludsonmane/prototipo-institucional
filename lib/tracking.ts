declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type CityKey = 'bsb' | 'ac' | 'sp';

export function trackCTA(name: string, city?: CityKey) {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', 'cta_click', { cta_name: name, city });
  } catch {
    /* noop */
  }
  try {
    window.fbq?.('track', 'Lead', { content_name: name, city });
  } catch {
    /* noop */
  }
}
