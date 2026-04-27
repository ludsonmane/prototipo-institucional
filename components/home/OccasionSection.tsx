'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/home.module.css';
import { reservationUrl } from '@/lib/units';
import { trackCTA } from '@/lib/tracking';
import { useCity } from './CityContext';

type Occasion = {
  title: string;
  desc: string;
  image: string;
  type: string;
  cta: string;
  event: string;
  alt: string;
};

const OCCASIONS: Occasion[] = [
  {
    title: 'Aniversário',
    desc: 'Área reservada, surpresa organizada, grupo acomodado',
    image: '/images/hero-aniversario.jpg',
    type: 'ANIVERSARIO',
    cta: 'Reservar',
    event: 'occasion_aniversario',
    alt: 'Aniversário no Mané Mercado',
  },
  {
    title: 'Corporativo',
    desc: 'Área exclusiva, proposta consultiva e crédito por pessoa',
    image: '/images/corporativo.png',
    type: 'EMPRESA',
    cta: 'Ver pacotes',
    event: 'occasion_corporativo',
    alt: 'Evento corporativo no Mané Mercado',
  },
  {
    title: 'Pós-jogo',
    desc: 'Mesa pronta, chope gelado, sem fila. O fluxo do Mané já espera',
    image: '/images/pos-jogo.png',
    type: 'PARTICULAR',
    cta: 'Garantir mesa',
    event: 'occasion_pos_jogo',
    alt: 'Pós-jogo no Mané Mercado',
  },
  {
    title: 'Happy hour',
    desc: 'Ambiente, bebida e petisco pra fazer a transição valer',
    image: '/images/happy.jpg',
    type: 'PARTICULAR',
    cta: 'Reservar',
    event: 'occasion_happy_hour',
    alt: 'Happy hour no Mané Mercado',
  },
  {
    title: 'Família',
    desc: 'Brinquedoteca, espaço amplo, variedade pra criança e adulto',
    image: '/images/happyh.png',
    type: 'PARTICULAR',
    cta: 'Reservar',
    event: 'occasion_familia',
    alt: 'Família no Mané Mercado',
  },
];

export function OccasionSection() {
  const { city } = useCity();
  const sliderRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const animateScrollTo = useCallback((el: HTMLElement, target: number, duration = 500) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const from = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    const to = Math.max(0, Math.min(target, max));
    const change = to - from;
    if (Math.abs(change) < 1) return;
    const start = performance.now();
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

  const scroll = useCallback(
    (direction: -1 | 1) => {
      const el = sliderRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>(`.${styles.occasionCard}`);
      const step = (card?.clientWidth ?? 240) + 16;
      animateScrollTo(el, el.scrollLeft + direction * step * 1.5);
    },
    [animateScrollTo]
  );

  return (
    <section className={styles.occasionSection} id="ocasioes">
      <div className={styles.occasionContainer}>
        <div className={styles.occasionHeader}>
          <div>
            <span className={styles.eyebrow}>• Reserve por ocasião</span>
            <h2 className={styles.sectionTitle}>
              Escolha o momento
              <br />
              <em className={styles.emTeal}>A gente organiza</em>
            </h2>
          </div>
          <div className={styles.occasionNav}>
            <button
              type="button"
              aria-label="Anterior"
              className={`${styles.occasionArrow} ${canPrev ? '' : styles.occasionArrowDisabled}`}
              onClick={() => scroll(-1)}
              disabled={!canPrev}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Próximo"
              className={`${styles.occasionArrow} ${canNext ? '' : styles.occasionArrowDisabled}`}
              onClick={() => scroll(1)}
              disabled={!canNext}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.occasionCards} ref={sliderRef}>
        {OCCASIONS.map((o) => (
          <a
            key={o.title}
            href={reservationUrl(o.type)}
            target="_blank"
            rel="noopener"
            className={styles.occasionCard}
            onClick={() => trackCTA(o.event, city)}
          >
            <div className={styles.occasionImg}>
              <Image src={o.image} alt={o.alt} fill sizes="240px" />
            </div>
            <div className={styles.occasionBody}>
              <h3 className={styles.occasionTitle}>{o.title}</h3>
              <p className={styles.occasionDesc}>{o.desc}</p>
              <span className={styles.occasionLink}>
                {o.cta}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}
