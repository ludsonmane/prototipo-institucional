import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChatProvider, ChatOpener } from '@/components/chat/ChatWidget';
import styles from './aniversario.module.css';

export const metadata: Metadata = {
  title: 'Aniversário no Mané Mercado — Reserve seu espaço',
  description:
    'Celebre seu aniversário no Mané Mercado e ganhe até R$200 em vantagens. Estacionamento, brinquedoteca, happy hour estendido e cardápio personalizado.',
  alternates: { canonical: '/aniversario' },
  openGraph: {
    title: 'Aniversário no Mané Mercado',
    description:
      'Até R$200 em vantagens para o aniversariante. Brasília, Águas Claras e São Paulo.',
    url: '/aniversario',
    images: ['/images/hero-aniversario.jpg'],
  },
};

const FAIXA_AMIGOS_IMG = '/images/festa-amigos.jpg';
const FAIXA_GRUPO_IMG = 'https://mane.com.vc/wp-content/uploads/2023/03/Mask-group-6.png';
const FAIXA_EVENTO_IMG = 'https://mane.com.vc/wp-content/uploads/2025/04/Reserva-scaled.jpg';

export default function AniversarioPage() {
  return (
    <ChatProvider origem="lp-aniversario-v1" themeTeal="#034B46" themeCoral="#D7675E">
      <div className={styles.page}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLogo}>
            mané<sup>,</sup>
          </Link>
          <ChatOpener className={styles.navCta}>Reservar aniversário</ChatOpener>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroLayout}>
            <div>
              <div className={styles.heroEyebrow}>
                <span>🎂 Aniversário no Mané Mercado</span>
              </div>
              <h1 className={styles.heroHeadline}>
                Celebre seu aniversário
                <br />
                e ganhe até <em>R$200 em<br />vantagens exclusivas.</em>
              </h1>
              <p className={styles.heroSub}>
                Quanto maior o grupo, mais o Mané entrega pra você. Estacionamento, kit exclusivo,
                brinquedoteca e muito mais — tudo incluso na reserva.
              </p>
              <a href="#faixas" className={styles.btnMain}>
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
            </div>

            <div className={styles.heroValueCard}>
              <div className={styles.hvcLabel}>Bônus de até</div>
              <div className={styles.hvcValue}>R$200</div>
              <div className={styles.hvcSub}>para o aniversariante</div>
              <div className={styles.hvcBenefits}>
                <div className={styles.hvcBenefit}>
                  <span className={styles.hvcBenefitIcon}>🍺</span> Happy hour a noite toda
                </div>
                <div className={styles.hvcBenefit}>
                  <span className={styles.hvcBenefitIcon}>🅿️</span> Estacionamento gratuito
                </div>
                <div className={styles.hvcBenefit}>
                  <span className={styles.hvcBenefitIcon}>🧸</span> Brinquedoteca inclusa
                </div>
                <div className={styles.hvcBenefit}>
                  <span className={styles.hvcBenefitIcon}>📋</span> Cardápio personalizado
                </div>
              </div>
              <a href="#faixa-200" className={styles.hvcCta}>
                Quero o bônus de R$200 →
              </a>
            </div>
          </div>
        </section>

        <div className={styles.heroValueBar}>
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>🍽️</div>
            <div className={styles.valueText}>
              <strong>Diversidade total</strong>Cada convidado escolhe sua cozinha
            </div>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>📱</div>
            <div className={styles.valueText}>
              <strong>Reserva em minutos</strong>Confirmação direta pelo WhatsApp
            </div>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>🎉</div>
            <div className={styles.valueText}>
              <strong>Mais convidados, mais vantagens</strong>Benefícios progressivos por faixa
            </div>
          </div>
        </div>

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
                Confira os benefícios exclusivos para cada faixa de convidados e escolha a que melhor se
                encaixa na sua celebração.
              </p>
            </div>

            <div className={styles.faixaBase}>
              <div className={styles.faixaBaseText}>
                <strong>Até 8 pessoas — reserva padrão</strong>
                Casais e grupos pequenos têm acesso a todas as cozinhas do mercado com reserva
                confirmada pelo WhatsApp.
              </div>
              <div className={styles.faixaBaseActions}>
                <div className={styles.faixaBasePills}>
                  <span className={styles.faixaBasePill}>🍽️ Todas as cozinhas</span>
                  <span className={styles.faixaBasePill}>📱 Reserva por WhatsApp</span>
                </div>
                <ChatOpener className={styles.faixaBaseCta}>Reservar agora →</ChatOpener>
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
                <div className={styles.faixaConfetti} aria-hidden="true" />
                <div className={styles.faixaPessoas}>8 a 15 pessoas</div>
                <div className={styles.faixaTitle}>Festa com os amigos</div>
                <div className={styles.faixaBonusValue}>R$100</div>
                <div className={styles.faixaBonusLabel}>em bônus para o aniversariante</div>
                <hr className={styles.faixaDivider} />
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🍺</div>
                    <div className={styles.benefitText}>
                      Happy hour estendido a noite toda — incluindo vinho
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🅿️</div>
                    <div className={styles.benefitText}>
                      Estacionamento gratuito para o aniversariante
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🧸</div>
                    <div className={styles.benefitText}>Brinquedoteca — 1 criança por 1 hora</div>
                  </li>
                </ul>
                <ChatOpener className={styles.faixaCta}>
                  Reservar agora e garantir bônus →
                </ChatOpener>
              </article>

              <article className={`${styles.faixaCard} ${styles.faixaCardMedio}`}>
                <div className={styles.faixaImg}>
                  <Image
                    src={FAIXA_GRUPO_IMG}
                    alt="Grupo celebrando no Mané"
                    fill
                    sizes="(max-width: 1100px) 50vw, 360px"
                    loading="lazy"
                    style={{ objectPosition: 'center 60%' }}
                  />
                </div>
                <div className={styles.faixaConfetti} aria-hidden="true" />
                <div className={styles.faixaPessoas}>16 a 30 pessoas</div>
                <div className={styles.faixaTitle}>Comemoração em grande</div>
                <div className={styles.faixaBonusValue}>R$150</div>
                <div className={styles.faixaBonusLabel}>em bônus para o aniversariante</div>
                <hr className={styles.faixaDivider} />
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🍺</div>
                    <div className={styles.benefitText}>
                      Happy hour estendido a noite toda — incluindo vinho
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🅿️</div>
                    <div className={styles.benefitText}>
                      Estacionamento gratuito para o aniversariante
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🧸</div>
                    <div className={styles.benefitText}>Brinquedoteca — 2 crianças por 2 horas</div>
                  </li>
                </ul>
                <ChatOpener className={styles.faixaCta}>
                  Reservar agora e garantir bônus →
                </ChatOpener>
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
                <div className={styles.faixaConfetti} aria-hidden="true" />
                <div className={styles.faixaTagPopular}>Mais vantagens</div>
                <div className={styles.faixaPessoas}>Acima de 30 pessoas</div>
                <div className={styles.faixaTitle}>Evento exclusivo</div>
                <div className={styles.faixaBonusValue}>R$200</div>
                <div className={styles.faixaBonusLabel}>em bônus para o aniversariante</div>
                <hr className={styles.faixaDivider} />
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🍺</div>
                    <div className={styles.benefitText}>
                      Happy hour estendido a noite toda — incluindo vinho
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>📋</div>
                    <div className={styles.benefitText}>Cardápio personalizado</div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🅿️</div>
                    <div className={styles.benefitText}>
                      Estacionamento gratuito para o aniversariante
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🧸</div>
                    <div className={styles.benefitText}>Brinquedoteca — 5 crianças por 2 horas</div>
                  </li>
                </ul>
                <ChatOpener className={styles.faixaCta}>
                  Reservar agora e garantir bônus →
                </ChatOpener>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.diffSection}>
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
                  Cada convidado escolhe sua própria cozinha. Cozinhas autorais com chefs dedicados,
                  ambiente preparado para celebrações e reserva confirmada em minutos.
                </p>
              </div>
              <div className={styles.diffCards}>
                <div className={styles.diffCard}>
                  <div className={styles.diffCardIcon}>🍽️</div>
                  <div>
                    <strong>Diversidade gastronômica</strong>
                    <span>
                      Japonesa, churrascaria, italiana, vegana e mais — cada convidado escolhe onde
                      comer.
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
              <em>aniversário.</em>
            </h2>
            <p className={styles.ctaSub}>
              Selecione o número de convidados e receba sua confirmação em minutos. Brasília, Águas
              Claras e São Paulo.
            </p>
            <div className={styles.ctaBtns}>
              <ChatOpener className={styles.btnCtaPrimary}>
                Reservar agora com a Julia
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ChatOpener>
              <Link href="/" className={styles.btnCtaGhost}>
                Voltar ao site
              </Link>
            </div>
          </div>
        </section>

        <footer className={styles.footerMini}>
          <Link href="/" className={styles.footerMiniLogo}>
            mané<sup>,</sup>
          </Link>
          <span className={styles.footerMiniText}>
            © {new Date().getFullYear()} Mané Mercado. Todos os direitos reservados.
          </span>
        </footer>
      </div>
    </ChatProvider>
  );
}
