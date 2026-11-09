import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './aniversario-v2.module.css';

export const metadata: Metadata = {
  title: 'Aniversário no Mané Mercado — Reserve seu espaço (v2)',
  description:
    'Celebre seu aniversário no Mané Mercado e ganhe até R$200 de bônus em consumação, a partir de 8 pessoas. Brinquedoteca day use e cardápio personalizado conforme o tamanho do grupo.',
  alternates: { canonical: '/aniversario-v2' },
  openGraph: {
    title: 'Aniversário no Mané Mercado',
    description:
      'Até R$200 de bônus em consumação para o aniversariante, a partir de 8 pessoas. Brasília, Águas Claras e Lago Sul.',
    url: '/aniversario-v2',
    images: ['/images/hero-aniversario.jpg'],
  },
};

const RESERVA_URL =
  'https://reservas.mane.com.vc/?occasion=aniversario&utm_source=site&utm_medium=lp&utm_campaign=aniversario';
const FAIXA_AMIGOS_IMG = '/images/festa-amigos.jpg';
const FAIXA_GRUPO_IMG = '/images/happy.jpg';
const FAIXA_EVENTO_IMG = '/images/happyh.png';

export default function AniversarioV2Page() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.geoShapes} aria-hidden="true">
          <div className={`${styles.geo} ${styles.geo1}`} />
          <div className={`${styles.geo} ${styles.geo2}`} />
          <div className={`${styles.geo} ${styles.geo3}`} />
          <div className={`${styles.geo} ${styles.geo4}`} />
          <div className={`${styles.geo} ${styles.geo5}`} />
          <div className={`${styles.geo} ${styles.geo6}`} />
          <div className={`${styles.geo} ${styles.geo7}`} />
        </div>

        <div className={styles.content}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLogo} aria-label="Mané Mercado">
              <Image src="/images/logo-mane-claro.svg" alt="Mané" width={76} height={40} priority />
            </Link>
            <a href={RESERVA_URL} className={styles.navCta}>Reservar aniversário</a>
          </nav>

          <section className={styles.hero}>
            <div className={styles.heroLayout}>
              <div>
                <h1 className={styles.heroHeadline}>
                  Celebre seu aniversário
                  <br />
                  e ganhe até <span className={styles.highlight}>R$200!</span>
                </h1>
                <p className={styles.heroSub}>
                  Quanto maior o grupo, maior o bônus. A partir de 8 pessoas, o aniversariante ganha bônus em
                consumação no dia da reserva, com brinquedoteca e cardápio personalizado conforme a faixa.
                </p>
                <div className={styles.heroBtns}>
                  <a href="#faixas" className={styles.btnGold}>
                    Ver benefícios por faixa
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#diferenciais" className={styles.btnOutline}>
                    Por que o Mané?
                  </a>
                </div>
                <div className={styles.heroStatus}>Reservas abertas</div>
              </div>

              <div className={styles.heroRight}>
                <div className={styles.heroPhoto}>
                  <Image
                    src="/images/hero-aniversario.jpg"
                    alt="Celebração no Mané Mercado"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className={styles.heroPhotoBadge}>🎉 +500 festas realizadas</div>
                </div>
                <div className={styles.heroCard}>
                  <div className={styles.heroCardHeader}>
                    <span className={styles.heroCardBadge}>Aniversário</span>
                    <span className={styles.heroCardEmoji}>🎂</span>
                  </div>
                  <div className={styles.heroCardTitle}>Bônus Aniversariante</div>
                  <div className={styles.heroCardSub}>Válido para todas as unidades</div>
                  <div className={styles.heroCardValue}>R$200</div>
                  <div className={styles.heroCardValueLabel}>em bônus de consumação para o aniversariante</div>
                  <div className={styles.stepsList}>
                    <div className={styles.stepItem}>
                      <div className={styles.stepNum}>1</div>
                      <div className={styles.stepText}>Escolha sua faixa de convidados</div>
                    </div>
                    <div className={styles.stepItem}>
                      <div className={styles.stepNum}>2</div>
                      <div className={styles.stepText}>Reserve pelo site em minutos</div>
                    </div>
                    <div className={styles.stepItem}>
                      <div className={styles.stepNum}>3</div>
                      <div className={styles.stepText}>Garanta seus benefícios na hora</div>
                    </div>
                  </div>
                  <div className={styles.heroCardTip}>
                    Dica: quanto maior o grupo, maiores os benefícios. Confira as faixas abaixo.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.proofStrip}>
            <div className={styles.proofItem}>
              <span className={styles.proofIcon}>🍽️</span> +20 restaurantes
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofIcon}>👨‍🍳</span> +20 chefs
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofIcon}>🍕</span> +500 opções no cardápio
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofIcon}>📍</span> Brasília, Águas Claras e Lago Sul
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofIcon}>🧸</span> Brinquedoteca day use
            </div>
          </div>

          <section className={styles.section}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <h3>Celebre no Mané</h3>
                <p>
                  Gastronomia com +20 restaurantes, chopp trincando, bons drinks e aquele clima
                  brasileiro que junta todo mundo. O Mané é um lugar para{' '}
                  <strong>viver e brindar.</strong>
                </p>
                <div className={styles.highlightBar}>
                  <span>Benefícios exclusivos para aniversariantes</span>
                  <a href="#faixas">Ver faixas</a>
                </div>
                <div className={styles.aboutPills}>
                  <span className={styles.aboutPill}>🎂 Bônus em consumação</span>
                  <span className={styles.aboutPill}>🧸 Brinquedoteca</span>
                  <span className={styles.aboutPill}>📋 Cardápio personalizado</span>
                </div>
              </div>

              <div className={styles.benefitsCard}>
                <div className={styles.benefitsCardHeader}>
                  <span className={styles.benefitsCardBadge}>Inclusos na reserva</span>
                  <span style={{ fontSize: 28 }}>🎉</span>
                </div>
                <div className={styles.benefitsCardTitle}>O que você ganha</div>
                <div className={styles.benefitsCardSub}>
                  Benefícios progressivos por número de convidados
                </div>
                <div className={styles.benefitRow}>
                  <div className={styles.benefitIconWrap}>🧸</div>
                  <div className={styles.benefitLabel}>Brinquedoteca day use para até 2 crianças</div>
                </div>
                <div className={styles.benefitRow}>
                  <div className={styles.benefitIconWrap}>📋</div>
                  <div className={styles.benefitLabel}>Cardápio personalizado, acima de 30 pessoas</div>
                </div>
                <div className={styles.benefitRow}>
                  <div className={styles.benefitIconWrap}>💰</div>
                  <div className={styles.benefitLabel}>Bônus de até R$200 em consumação, no dia da reserva</div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faixasSection} id="faixas">
            <div className={styles.faixasInner}>
              <div className={styles.faixasHeader}>
                <div className={styles.sectionEyebrow}>Benefícios por faixa</div>
                <h2 className={styles.sectionTitle}>
                  Quanto maior o grupo,
                  <br />
                  <em>maiores as vantagens.</em>
                </h2>
                <p className={styles.sectionSub}>
                  Confira os benefícios exclusivos para cada faixa de convidados e escolha a que
                  melhor se encaixa na sua celebração.
                </p>
              </div>

              <div className={styles.faixaBase}>
                <div className={styles.faixaBaseText}>
                  <strong>Até 7 pessoas: reserva padrão</strong>
                  Casais e grupos pequenos têm acesso a todas as cozinhas do mercado, com reserva
                confirmada na hora pelo site.
                </div>
                <div className={styles.faixaBaseActions}>
                  <div className={styles.faixaBasePills}>
                    <span className={styles.faixaBasePill}>🍽️ Todas as cozinhas</span>
                    <span className={styles.faixaBasePill}>📱 Reserva online</span>
                  </div>
                  <a href={RESERVA_URL} className={styles.faixaBaseCta}>Reservar agora</a>
                </div>
              </div>

              <div className={styles.faixasGrid}>
                <article className={styles.faixaCard}>
                  <div className={styles.faixaImg}>
                    <Image
                      src={FAIXA_AMIGOS_IMG}
                      alt="Amigos celebrando aniversário no Mané"
                      fill
                      sizes="(max-width: 1100px) 50vw, 360px"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.faixaPessoas}>8 a 15 pessoas</div>
                  <div className={styles.faixaTitle}>Festa com os amigos</div>
                  <div className={styles.faixaBonusValue}>R$100</div>
                  <div className={styles.faixaBonusLabel}>em bônus de consumação, no dia</div>
                  <hr className={styles.faixaDivider} />
                  <ul className={styles.benefitsListCard}>
                    <li className={styles.benefitItemCard}>
                      <div className={styles.benefitIconCard}>🧸</div>
                      <div className={styles.benefitText}>Brinquedoteca day use para 1 criança</div>
                    </li>
                  </ul>
                  <a href={RESERVA_URL} className={styles.faixaCta}>Reservar agora</a>
                </article>

                <article className={`${styles.faixaCard} ${styles.faixaCardMedio}`}>
                  <div className={styles.faixaImg}>
                    <Image
                      src={FAIXA_GRUPO_IMG}
                      alt="Grupo celebrando no Mané"
                      fill
                      sizes="(max-width: 1100px) 50vw, 360px"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.faixaPessoas}>16 a 30 pessoas</div>
                  <div className={styles.faixaTitle}>Comemoração em grande</div>
                  <div className={styles.faixaBonusValue}>R$150</div>
                  <div className={styles.faixaBonusLabel}>em bônus de consumação, no dia</div>
                  <hr className={styles.faixaDivider} />
                  <ul className={styles.benefitsListCard}>
                    <li className={styles.benefitItemCard}>
                      <div className={styles.benefitIconCard}>🧸</div>
                      <div className={styles.benefitText}>
                        Brinquedoteca day use para 2 crianças
                      </div>
                    </li>
                  </ul>
                  <a href={RESERVA_URL} className={styles.faixaCta}>Reservar agora</a>
                </article>

                <article className={`${styles.faixaCard} ${styles.faixaCardDestaque}`} id="faixa-200">
                  <div className={styles.faixaImg}>
                    <Image
                      src={FAIXA_EVENTO_IMG}
                      alt="Evento exclusivo no Mané"
                      fill
                      sizes="(max-width: 1100px) 50vw, 360px"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.faixaTagPopular}>Mais vantagens</div>
                  <div className={styles.faixaPessoas}>Mais de 30 pessoas</div>
                  <div className={styles.faixaTitle}>Evento exclusivo</div>
                  <div className={styles.faixaBonusValue}>R$200</div>
                  <div className={styles.faixaBonusLabel}>em bônus de consumação, no dia</div>
                  <hr className={styles.faixaDivider} />
                  <ul className={styles.benefitsListCard}>
                    <li className={styles.benefitItemCard}>
                      <div className={styles.benefitIconCard}>📋</div>
                      <div className={styles.benefitText}>Cardápio personalizado</div>
                    </li>
                    <li className={styles.benefitItemCard}>
                      <div className={styles.benefitIconCard}>🧸</div>
                      <div className={styles.benefitText}>
                        Brinquedoteca day use para 2 crianças
                      </div>
                    </li>
                  </ul>
                  <a href={RESERVA_URL} className={styles.faixaCta}>Reservar agora</a>
                </article>
              </div>
            </div>
          </section>

          <section className={styles.diffSection} id="diferenciais">
            <div className={styles.diffInner}>
              <div className={styles.diffGrid}>
                <div className={styles.diffText}>
                  <div className={styles.sectionEyebrow}>Por que celebrar no Mané</div>
                  <h2 className={styles.diffTitle}>
                    O espaço que reúne
                    <br />
                    <em>todos os gostos.</em>
                  </h2>
                  <p className={styles.diffBody}>
                    Cada convidado escolhe sua própria cozinha. Cozinhas autorais com chefs
                    dedicados, ambiente preparado para celebrações e reserva confirmada em minutos.
                  </p>
                </div>
                <div className={styles.diffCards}>
                  <div className={styles.diffCard}>
                    <div className={styles.diffCardIcon}>🍽️</div>
                    <div>
                      <strong>Diversidade gastronômica</strong>
                      <span>
                        Japonesa, churrascaria, italiana, vegana e mais — cada convidado escolhe
                        onde comer.
                      </span>
                    </div>
                  </div>
                  <div className={styles.diffCard}>
                    <div className={styles.diffCardIcon}>👨‍🍳</div>
                    <div>
                      <strong>Cozinhas autorais independentes</strong>
                      <span>
                        Cada restaurante opera com chef próprio, cardápio exclusivo e identidade
                        gastronômica única.
                      </span>
                    </div>
                  </div>
                  <div className={styles.diffCard}>
                    <div className={styles.diffCardIcon}>🧸</div>
                    <div>
                      <strong>Estrutura para famílias</strong>
                      <span>
                        Brinquedoteca monitorada, cardápio infantil e ambiente seguro para crianças.
                      </span>
                    </div>
                  </div>
                  <div className={styles.diffCard}>
                    <div className={styles.diffCardIcon}>🌱</div>
                    <div>
                      <strong>Único mercado sustentável do Brasil</strong>
                      <span>
                        Descarte consciente, abastecimento local e práticas ambientais integradas à
                        operação.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection} id="reservar">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>
                Reserve seu
                <br />
                aniversário.
              </h2>
              <p className={styles.ctaSub}>
                Selecione o número de convidados e receba sua confirmação em minutos. Brasília,
                Águas Claras e Lago Sul.
              </p>
              <div className={styles.ctaBtns}>
                <a href={RESERVA_URL} className={styles.btnCtaWhite}>
                  Reservar meu aniversário
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link href="/" className={styles.btnCtaGhost}>
                  Voltar ao site
                </Link>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <Link href="/" className={styles.footerLogo} aria-label="Mané Mercado">
              <Image src="/images/logo-mane.svg" alt="Mané" width={58} height={31} />
            </Link>
            <nav className={styles.footerLegal} aria-label="Links legais">
              <a href="/politica-de-privacidade" target="_blank" rel="noopener">
                Política de Privacidade (LGPD)
              </a>
              <a href="/termo-de-consentimento" target="_blank" rel="noopener">
                Termo de Consentimento
              </a>
            </nav>
            <span className={styles.footerText}>
              © {new Date().getFullYear()} Mané Mercado. Todos os direitos reservados.
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
