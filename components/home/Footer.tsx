import Image from 'next/image';
import styles from '@/app/home.module.css';

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
          <div className={styles.footerSocial}>
            <a
              href="https://instagram.com/manemercado"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/manemercado"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2zM8 8h4.4v1.9h.06c.6-1.13 2.07-2.33 4.26-2.33C21.4 7.57 22 10.2 22 14v8h-4.6v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.76 1.87-2.76 3.8V22H8z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@manemercado"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M19.6 6.9c-1.5-.3-2.8-1.1-3.7-2.3-.4-.6-.7-1.2-.9-1.9h-3v13.8c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6.1.9.2v-3.1c-.3 0-.6-.1-.9-.1-3.2 0-5.7 2.6-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7V9.8c1.2.9 2.7 1.4 4.4 1.4V8.1c-.1 0 0 0 .2-.1z" />
              </svg>
            </a>
          </div>
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
      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Mané Mercado. Todos os direitos reservados.</span>
        <span>🏆 Maior mercado gastronômico do Brasil · 🌱 Único sustentável</span>
      </div>
    </footer>
  );
}
