import Image from 'next/image';
import styles from '@/app/home.module.css';
import { OPENING_HOURS_DISPLAY } from '@/lib/units';

const RESERVATION_URL =
  'https://reservas.mane.com.vc/reservar?utm_source=site&utm_medium=footer&utm_campaign=reserva';
const WHATSAPP_BASE = 'https://wa.me/5561995761646';
const wa = (text: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;

const OCASIOES = [
  { label: 'Aniversário', href: '#ocasioes' },
  { label: 'Happy hour', href: '#ocasioes' },
  { label: 'Corporativo', href: wa('Olá! Gostaria de saber mais sobre eventos corporativos') },
  { label: 'Pós-jogo', href: '#ocasioes' },
  { label: 'Família', href: '#ocasioes' },
];

const O_MANE = [
  { label: 'Quem somos', href: '#claim' },
  { label: 'Sustentabilidade', href: '#claim' },
  { label: 'Restaurantes', href: '#restaurantes' },
  { label: 'Cardápio', href: 'https://menu.mane.com.vc/', external: true },
];

const RESERVAS = [
  { label: 'Fazer reserva', href: RESERVATION_URL, external: true },
  { label: 'Corporativo', href: wa('Olá! Gostaria de solicitar uma proposta corporativa'), external: true },
  { label: 'WhatsApp', href: wa('Olá! Vim pelo site do Mané'), external: true },
  { label: 'Contato', href: wa('Olá! Gostaria de falar com alguém do Mané'), external: true },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Image
            src="/images/logo-mane.svg"
            alt="Mané Mercado"
            width={120}
            height={36}
            className={styles.footerBrandLogo}
          />
          <p>
            O maior mercado gastronômico do Brasil. O único sustentável. O lugar certo para qualquer
            ocasião em Brasília, Águas Claras e São Paulo.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h5>Ocasiões</h5>
          {OCASIOES.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.footerCol}>
          <h5>O Mané</h5>
          {O_MANE.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.footerCol}>
          <h5>Reservas</h5>
          {RESERVAS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.footerCol}>
          <h5>Horários</h5>
          {OPENING_HOURS_DISPLAY.map((h) => (
            <div key={h.days} className={styles.footerHoursRow}>
              <span>{h.days}</span>
              <strong>{h.hours}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Mané Mercado. Todos os direitos reservados.</span>
        <span>🏆 Maior mercado gastronômico do Brasil · 🌱 Único sustentável</span>
      </div>
    </footer>
  );
}
