'use client';

import Image from 'next/image';
import styles from '@/app/home.module.css';
import { CITY_ORDER, RESERVATION_URL, UNITS } from '@/lib/units';
import { trackCTA } from '@/lib/tracking';

const FULL_NAMES: Record<string, string> = {
  bsb: 'Mané Brasília',
  ac: 'Mané Águas Claras',
  sp: 'Mané São Paulo Perdizes',
};

export function UnitsSection() {
  return (
    <section className={styles.unitsSection} id="unidades">
      <div className={styles.container}>
        <span className={styles.eyebrow}>• Nossas Unidades</span>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleOnDark}`}>
          Reserve agora no Mané <em>mais próximo de você.</em>
        </h2>
        <p className={`${styles.sectionSub} ${styles.sectionSubOnDark}`}>
          Brasília, Águas Claras e São Paulo Perdizes. Localizações estratégicas com estacionamento e
          fácil acesso.
        </p>

        <div className={styles.unitCards}>
          {CITY_ORDER.map((key) => {
            const unit = UNITS[key];
            return (
              <a
                key={key}
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener"
                className={styles.unitCard}
                onClick={() => trackCTA(`unit_${key}`, key)}
              >
                <div className={styles.unitImg}>
                  <Image
                    src={unit.cover}
                    alt={`${FULL_NAMES[key]} — ${unit.address}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    loading="lazy"
                  />
                </div>
                <div className={styles.unitBody}>
                  <h3 className={styles.unitName}>{FULL_NAMES[key]}</h3>
                  <span className={styles.unitAddr}>📍 {unit.address}</span>
                  <div className={styles.unitPins}>
                    {unit.pins.map((p) => (
                      <span key={p} className={styles.unitPin}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
