import Image from 'next/image';
import styles from '@/app/home.module.css';

const YOUTUBE_ID = '2W4D-l5KnGU';

const FEATURES: { icon: string; title: string; desc: string }[] = [
  {
    icon: '🌿',
    title: 'Ambiente que acolhe qualquer grupo',
    desc: 'Do casal ao time de 200 pessoas. Áreas pensadas para grupos de todos os tamanhos e perfis.',
  },
  {
    icon: '🍽️',
    title: 'Cozinhas autorais com chefs dedicados',
    desc: 'Cada restaurante opera com independência criativa. Chef próprio, cardápio exclusivo e identidade gastronômica única.',
  },
  {
    icon: '⭐',
    title: 'Único mercado sustentável do Brasil',
    desc: 'Descarte consciente, abastecimento local e práticas ambientais de verdade. Não de branding.',
  },
];

export function ExperienceSection() {
  return (
    <section className={styles.experienceSection} id="experiencia">
      <div className={styles.expInner}>
        <div className={styles.expGrid}>
          <div className={styles.expText}>
            <div className={styles.expEyebrow}>O que oferecemos</div>
            <h2 className={styles.expTitle}>
              Gastronomia, estrutura
              <br />e atendimento
              <br />
              <em>em um só lugar.</em>
            </h2>
            <p className={styles.expBody}>
              O Mané foi construído pra grupos que merecem um espaço que funciona pra todo mundo.
              Chefs de verdade, diversidade de verdade e reserva sem complicação.
            </p>
            <div className={styles.expFeatures}>
              {FEATURES.map((f) => (
                <div key={f.title} className={styles.expFeat}>
                  <div className={styles.efIcon} aria-hidden="true">
                    {f.icon}
                  </div>
                  <div className={styles.efText}>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.expVisual}>
            <a
              href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.expVideo}
              aria-label="Assistir vídeo: conheça o Mané Mercado"
            >
              <Image
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Conheça o Mané Mercado"
                width={1280}
                height={720}
                className={styles.expVideoThumb}
                sizes="(max-width: 900px) 90vw, 600px"
              />
              <span className={styles.expVideoOverlay} aria-hidden="true">
                <span className={styles.expVideoPlay}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </a>

            <div className={styles.phoneFloat1}>
              <div className={styles.pfLabel}>Reserva pelo WhatsApp</div>
              <div className={styles.pfVal}>Reserve hoje</div>
              <div className={styles.pfSub}>Confirmação em minutos</div>
            </div>

            <div className={styles.phoneFrame}>
              <div className={styles.phoneNotch} aria-hidden="true" />
              <div className={styles.phoneScreen}>
                <div className={styles.psHeader}>
                  <div className={styles.psOccasionPill}>🎂 Aniversário</div>
                  <h3 className={styles.psTitle}>
                    Reserva o aniversário
                    <br />
                    sem <em>dor de cabeça</em>
                  </h3>
                  <div className={styles.psBtn}>Quero reservar →</div>
                </div>
                <div className={styles.psChat}>
                  <div className={styles.psMsg}>
                    Oi! 👋 Vi que você quer reservar pra <strong>aniversário</strong>. Qual a data?
                  </div>
                  <div className={styles.psReplyRow}>
                    <div className={styles.psReply}>Sábado, dia 14 🎂</div>
                  </div>
                  <div className={styles.psMsg}>Perfeito! 🎉 Quantas pessoas vêm?</div>
                  <div className={styles.psReplyRow}>
                    <div className={styles.psReply}>Umas 12 pessoas</div>
                  </div>
                  <div className={styles.psMsg}>
                    Show! Reserva confirmada pro dia 14, 12 pessoas. Te mandei os detalhes aqui no
                    WhatsApp 🤙
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.phoneFloat2}>
              <div className={styles.pf2Icon} aria-hidden="true">
                ✅
              </div>
              <div className={styles.pf2Text}>Reserva confirmada!</div>
              <div className={styles.pf2Sub}>Confirmação no WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
