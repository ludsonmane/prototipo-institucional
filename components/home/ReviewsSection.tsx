import styles from '@/app/home.module.css';

type Review = {
  text: string;
  name: string;
  occasion: string;
  avatar: string;
  avatarBg: string;
};

const REVIEWS: Review[] = [
  {
    text: 'O aniversário de 30 anos da minha filha foi aqui. Área reservada, decoração pronta e convidados impressionados com a variedade.',
    name: 'Gustavo B.',
    occasion: '🎂 Aniversário · 45 convidados',
    avatar: '🎂',
    avatarBg: 'rgba(201,146,58,.2)',
  },
  {
    text: 'Nosso happy hour semanal migrou para o Mané. A equipe agradece pela variedade. Ninguém precisa mais negociar onde ir.',
    name: 'Rafael L.',
    occasion: '💼 Happy hour corporativo',
    avatar: '🍻',
    avatarBg: 'rgba(58,136,112,.2)',
  },
  {
    text: 'Reserva confirmada em minutos, mesa organizada na chegada. Atendimento profissional do início ao fim.',
    name: 'Márcia T.',
    occasion: '👨‍👩‍👧 Almoço em família',
    avatar: '✅',
    avatarBg: 'rgba(140,100,58,.2)',
  },
  {
    text: 'A sustentabilidade do Mané é real. Você percebe nos detalhes da operação. Isso faz diferença na hora de escolher onde levar clientes.',
    name: 'Carla D.',
    occasion: '💼 Almoço de negócios',
    avatar: '🌱',
    avatarBg: 'rgba(58,136,112,.2)',
  },
  {
    text: 'Realizamos a confraternização de fim de ano da empresa com 120 pessoas. Cada colaborador escolheu onde comer. Organização impecável.',
    name: 'Fernanda M.',
    occasion: '💼 Evento corporativo · 120 pessoas',
    avatar: '👔',
    avatarBg: 'rgba(201,146,58,.2)',
  },
  {
    text: 'Levamos as crianças no domingo e ficamos tranquilos com a brinquedoteca monitorada. Enquanto isso, aproveitamos a gastronomia sem pressa.',
    name: 'Ana Paula S.',
    occasion: '👨‍👩‍👧 Família · Domingo',
    avatar: '👨‍👩‍👧',
    avatarBg: 'rgba(107,194,107,.2)',
  },
];

export function ReviewsSection() {
  /* Track is duplicated so the marquee can translate -50% and loop seamlessly. */
  const track = [...REVIEWS, ...REVIEWS];
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsInner}>
        <div className={styles.reviewsHeader}>
          <div className={`${styles.expEyebrow} ${styles.expEyebrowCenter}`}>
            O que dizem nossos clientes
          </div>
          <h2 className={`${styles.expTitle} ${styles.reviewsTitle}`}>
            Experiências <em>reais.</em>
          </h2>
        </div>
      </div>
      <div className={styles.reviewsScroll} aria-label="Depoimentos de clientes">
        <div className={styles.reviewsTrack}>
          {track.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className={styles.reviewCard}
              aria-hidden={i >= REVIEWS.length ? 'true' : undefined}
            >
              <div className={styles.reviewStars} aria-label="5 de 5 estrelas">
                ★★★★★
              </div>
              <p className={styles.reviewText}>“{r.text}”</p>
              <div className={styles.reviewAuthor}>
                <div className={styles.reviewAvatar} style={{ background: r.avatarBg }} aria-hidden="true">
                  {r.avatar}
                </div>
                <div>
                  <div className={styles.reviewName}>{r.name}</div>
                  <div className={styles.reviewOccasion}>{r.occasion}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
