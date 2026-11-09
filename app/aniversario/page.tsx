import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './aniversario.module.css';

export const metadata: Metadata = {
  title: 'Aniversário no Mané Mercado — Reserve seu espaço',
  description:
    'Celebre seu aniversário no Mané Mercado e ganhe até R$200 de bônus em consumação, a partir de 8 pessoas. Brinquedoteca day use e cardápio personalizado conforme o tamanho do grupo.',
  alternates: { canonical: '/aniversario' },
  openGraph: {
    title: 'Aniversário no Mané Mercado',
    description:
      'Até R$200 de bônus em consumação para o aniversariante, a partir de 8 pessoas. Brasília, Águas Claras e Lago Sul.',
    url: '/aniversario',
    images: ['/images/hero-aniversario.jpg'],
  },
};

const RESERVA_URL =
  'https://reservas.mane.com.vc/?occasion=aniversario&utm_source=site&utm_medium=lp&utm_campaign=aniversario';

// Benefícios iguais ao sistema de reservas (ac-reservas-app, _lib/benefits.ts)
const FAIXAS = [
  {
    pessoas: '8 a 15 pessoas',
    titulo: 'Festa com os amigos',
    bonus: 'R$100',
    perks: ['Brinquedoteca day use para 1 criança'],
    img: '/images/festa-amigos.jpg',
    alt: 'Amigos celebrando aniversário no Mané',
  },
  {
    pessoas: '16 a 30 pessoas',
    titulo: 'Comemoração em grande',
    bonus: 'R$150',
    perks: ['Brinquedoteca day use para 2 crianças'],
    img: '/images/happy.jpg',
    alt: 'Grupo brindando no Mané',
  },
  {
    pessoas: 'Mais de 30 pessoas',
    titulo: 'A celebração completa',
    bonus: 'R$200',
    perks: ['Brinquedoteca day use para 2 crianças', 'Cardápio personalizado'],
    img: '/images/happyh.png',
    alt: 'Mesa grande celebrando no Mané',
    destaque: true,
  },
];

const DIFERENCIAIS = [
  {
    titulo: 'Cada convidado escolhe',
    texto: 'Mais de 20 cozinhas no mesmo lugar: japonesa, churrasco, italiana, vegana e muito mais.',
    icon: 'prato',
  },
  {
    titulo: 'Cozinhas autorais',
    texto: 'Cada restaurante com chef próprio, cardápio exclusivo e identidade única.',
    icon: 'chef',
  },
  {
    titulo: 'Pensado para famílias',
    texto: 'Brinquedoteca, cardápio infantil e ambiente tranquilo para as crianças.',
    icon: 'familia',
  },
  {
    titulo: 'Mercado sustentável',
    texto: 'Descarte consciente, abastecimento local e práticas ambientais na operação.',
    icon: 'folha',
  },
] as const;

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'prato':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M2 4v6M4 4v6M3 10v10M22 4c-1.5 1-2 3-2 5h2v11" />
        </svg>
      );
    case 'chef':
      return (
        <svg {...common}>
          <path d="M7 14v6h10v-6" />
          <path d="M7 14a4 4 0 0 1-1-7.9A5 5 0 0 1 15.5 5 4 4 0 0 1 17 14" />
          <path d="M7 17h10" />
        </svg>
      );
    case 'familia':
      return (
        <svg {...common}>
          <circle cx="8" cy="6" r="2.5" />
          <circle cx="17" cy="9" r="2" />
          <path d="M4 21v-5a4 4 0 0 1 8 0v5M14 21v-4a3 3 0 0 1 6 0v4" />
        </svg>
      );
    case 'folha':
      return (
        <svg {...common}>
          <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
          <path d="M5 19 13 11" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common} width={18} height={18} strokeWidth={2}>
          <path d="m5 12 4.5 4.5L19 7" />
        </svg>
      );
    case 'seta':
      return (
        <svg {...common} width={16} height={16} strokeWidth={2}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AniversarioPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo} aria-label="Mané Mercado">
          <Image src="/images/logo-mane-claro.svg" alt="Mané" width={76} height={40} priority />
        </Link>
        <a href={RESERVA_URL} className={styles.navCta}>
          Reservar aniversário
        </a>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Aniversário no Mané Mercado</span>
          <h1 className={styles.heroTitle}>
            Seu aniversário com até <em>R$200 de bônus</em> em consumação.
          </h1>
          <p className={styles.heroSub}>
            Reserve para 8 pessoas ou mais e o aniversariante ganha bônus para usar no dia. Quanto
            maior o grupo, maior o bônus.
          </p>
          <div className={styles.heroActions}>
            <a href={RESERVA_URL} className={styles.btnPrimary}>
              Reservar meu aniversário <Icon name="seta" />
            </a>
            <a href="#faixas" className={styles.btnLink}>
              Ver as faixas
            </a>
          </div>
          <ul className={styles.heroFacts}>
            <li>
              <strong>+20</strong> cozinhas
            </li>
            <li>
              <strong>3</strong> unidades
            </li>
            <li>
              <strong>Reserva</strong> em minutos
            </li>
          </ul>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.heroPhoto}>
            <Image
              src="/images/hero-aniversario.jpg"
              alt="Aniversário com amigos no Mané Mercado"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 560px"
            />
          </div>
          <div className={styles.heroBadge}>
            <span>Bônus de até</span>
            <strong>R$200</strong>
            <small>em consumação, no dia da reserva</small>
          </div>
        </div>
      </header>

      <section className={styles.faixas} id="faixas">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Benefícios por faixa</span>
          <h2 className={styles.sectionTitle}>
            Quanto maior o grupo, <em>maior o bônus.</em>
          </h2>
          <p className={styles.sectionSub}>
            O bônus vale em consumação no dia da reserva. Até 7 pessoas, a reserva é padrão, com
            acesso a todas as cozinhas do mercado.
          </p>
        </div>

        <div className={styles.cards}>
          {FAIXAS.map((f) => (
            <article
              key={f.pessoas}
              className={`${styles.card} ${f.destaque ? styles.cardDestaque : ''}`}
            >
              <div className={styles.cardPhoto}>
                <Image src={f.img} alt={f.alt} fill sizes="(max-width: 900px) 100vw, 380px" />
                {f.destaque && <span className={styles.cardTag}>Mais vantagens</span>}
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardPessoas}>{f.pessoas}</span>
                <h3 className={styles.cardTitle}>{f.titulo}</h3>
                <div className={styles.cardBonus}>
                  <strong>{f.bonus}</strong>
                  <span>em bônus de consumação</span>
                </div>
                <ul className={styles.cardPerks}>
                  {f.perks.map((p) => (
                    <li key={p}>
                      <Icon name="check" /> {p}
                    </li>
                  ))}
                </ul>
                <a href={RESERVA_URL} className={styles.cardCta}>
                  Reservar <Icon name="seta" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.diff}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Por que celebrar no Mané</span>
          <h2 className={styles.sectionTitle}>
            Um lugar que reúne <em>todos os gostos.</em>
          </h2>
        </div>
        <div className={styles.diffGrid}>
          {DIFERENCIAIS.map((d) => (
            <div key={d.titulo} className={styles.diffItem}>
              <span className={styles.diffIcon}>
                <Icon name={d.icon} />
              </span>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>
            Bora comemorar <em>no Mané?</em>
          </h2>
          <p>Escolha a data, o número de convidados e pronto. Brasília, Águas Claras e Lago Sul.</p>
          <a href={RESERVA_URL} className={styles.btnLight}>
            Reservar meu aniversário <Icon name="seta" />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/" aria-label="Mané Mercado">
          <Image src="/images/logo-mane-claro.svg" alt="Mané" width={58} height={31} />
        </Link>
        <nav className={styles.footerLegal} aria-label="Links legais">
          <a href="/politica-de-privacidade" target="_blank" rel="noopener">
            Política de Privacidade (LGPD)
          </a>
          <a href="/termo-de-consentimento" target="_blank" rel="noopener">
            Termo de Consentimento
          </a>
        </nav>
        <span>© {new Date().getFullYear()} Mané Mercado. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
