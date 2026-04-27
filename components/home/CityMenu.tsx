'use client';

import styles from '@/app/home.module.css';
import { CITY_ORDER, UNITS } from '@/lib/units';
import { useCity } from './CityContext';

export function CityMenu() {
  const { city, cityMenuOpen, closeCityMenu, setCity } = useCity();

  return (
    <div
      className={`${styles.overlay} ${cityMenuOpen ? styles.overlayOpen : ''}`}
      aria-hidden={!cityMenuOpen}
    >
      <button
        type="button"
        className={styles.overlayClose}
        onClick={closeCityMenu}
        aria-label="Fechar"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
      <div className={styles.overlayInner}>
        <p className={styles.overlayTitle}>Escolha sua cidade</p>
        {CITY_ORDER.map((key) => {
          const u = UNITS[key];
          return (
            <button
              key={key}
              type="button"
              className={`${styles.cityOpt} ${city === key ? styles.cityOptActive : ''}`}
              onClick={() => {
                setCity(key);
                closeCityMenu();
              }}
            >
              <span>{u.label}</span>
              <span className={styles.cityOptSub}>
                {key === 'sp' ? 'Perdizes' : u.region}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
