'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/home.module.css';
import { UNITS } from '@/lib/units';
import { useCity } from './CityContext';

const RESERVATION_URL =
  'https://reservas.mane.com.vc/reservar?utm_source=site&utm_medium=header&utm_campaign=reserva';

export function Header() {
  const { displayCity, fadeOut, openCityMenu } = useCity();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.siteHeader} ${scrolled ? styles.siteHeaderScrolled : ''}`}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link href="/" className={styles.brand} aria-label="Mané Mercado">
          <Image
            src="/images/logo-mane.svg"
            alt="Mané"
            width={68}
            height={36}
            priority
            className={styles.brandLogo}
          />
          <span className={styles.brandDot} aria-hidden="true" />
          <button
            type="button"
            className={styles.brandCity}
            onClick={(e) => {
              e.preventDefault();
              openCityMenu();
            }}
            aria-label="Trocar cidade"
          >
            <span
              className={`${styles.brandCityText} ${fadeOut ? styles.brandCityTextFadeOut : ''}`}
            >
              {UNITS[displayCity].label}
            </span>
            <svg
              className={styles.caret}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </Link>
        <a
          href={RESERVATION_URL}
          target="_blank"
          rel="noopener"
          className={styles.menuBtn}
          aria-label="Quero reservar"
        >
          QUERO RESERVAR
        </a>
      </div>
    </header>
  );
}
