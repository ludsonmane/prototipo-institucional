'use client';

import Image from 'next/image';
import { type ReactNode } from 'react';
import styles from '@/app/home.module.css';
import { RESERVATION_URL } from '@/lib/units';
import { trackCTA } from '@/lib/tracking';
import { useCity } from './CityContext';

export function Hero({ socialProof }: { socialProof?: ReactNode }) {
  const { city } = useCity();

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/hero2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          aria-hidden="true"
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={`${styles.container} ${styles.heroInner}`}>
        {socialProof}
        <h1 className={styles.heroTitle}>
          Viva a melhor <em>curadoria gastronômica</em> da cidade em um só lugar.
        </h1>
        <div className={styles.pillRow}>
          <span className={`${styles.pill} ${styles.pillSalmon}`}>Estacionamento</span>
          <span className={`${styles.pill} ${styles.pillGold}`}>Brinquedoteca</span>
          <span className={`${styles.pill} ${styles.pillMint}`}>+20 Chefs</span>
          <span className={`${styles.pill} ${styles.pillCoral}`}>+500 Pratos</span>
          <span className={`${styles.pill} ${styles.pillLilac}`}>3 Unidades</span>
        </div>
        <p className={styles.heroSub}>
          Tudo na sua mesa, sem filas.
          <br />
          Para sua segurança e comodidade.
        </p>
        <a
          href={RESERVATION_URL}
          target="_blank"
          rel="noopener"
          className={styles.ctaMain}
          onClick={() => trackCTA('hero_reserve', city)}
        >
          Reserve a sua mesa
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
