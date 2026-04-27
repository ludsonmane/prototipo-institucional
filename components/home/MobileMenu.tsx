'use client';

import styles from '@/app/home.module.css';
import { RESERVATION_URL, menuUrl } from '@/lib/units';
import { useCity } from './CityContext';

export function MobileMenu() {
  const { city, mobileMenuOpen, closeMobileMenu } = useCity();

  return (
    <div
      className={`${styles.overlay} ${mobileMenuOpen ? styles.overlayOpen : ''}`}
      aria-hidden={!mobileMenuOpen}
    >
      <button
        type="button"
        className={styles.overlayClose}
        onClick={closeMobileMenu}
        aria-label="Fechar"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
      <div className={styles.overlayInner}>
        <a className={styles.mobileLink} href="#unidades" onClick={closeMobileMenu}>
          Unidades
        </a>
        <a className={styles.mobileLink} href={RESERVATION_URL} target="_blank" rel="noopener">
          Reservar mesa
        </a>
        <a className={styles.mobileLink} href={menuUrl(city)} target="_blank" rel="noopener">
          Nosso cardápio
        </a>
        <a
          className={styles.mobileLink}
          href="https://instagram.com/manemercado"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
