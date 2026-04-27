import styles from '@/app/home.module.css';
import { getPlaceSummary } from '@/lib/google-places';

/* Rostos brasileiros reais e casuais — mix de gênero, etnia, idade.
 * Não-stock-influencer; pessoas com cara de cliente normal.
 * Substituído automaticamente pelas fotos reais do GMB se GOOGLE_PLACES_API_KEY estiver setada. */
const UNSPLASH_PARAMS = 'w=120&h=120&fit=crop&crop=faces&q=80';
const FALLBACK_AVATARS: { src: string; alt: string }[] = [
  { src: `https://images.unsplash.com/photo-1530785602389-07594beb8b73?${UNSPLASH_PARAMS}`, alt: '' }, // mulher negra sorrindo
  { src: `https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?${UNSPLASH_PARAMS}`, alt: '' }, // homem latino casual
  { src: `https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?${UNSPLASH_PARAMS}`, alt: '' }, // mulher latina sorrindo
  { src: `https://images.unsplash.com/photo-1463453091185-61582044d556?${UNSPLASH_PARAMS}`, alt: '' }, // homem negro
];

type Props = {
  count?: string;
  label?: string;
  className?: string;
};

function formatCount(n: number): string {
  if (n >= 1000) {
    const thousands = Math.floor(n / 1000);
    return `+ DE ${thousands} MIL`;
  }
  return `+ ${n}`;
}

export async function SocialProofBadge({
  count,
  label = 'AVALIAÇÕES',
  className,
}: Props) {
  let realPhotos: { src: string; name: string }[] = [];
  let resolvedCount = count ?? '+ DE 50 MIL';

  try {
    const summary = await getPlaceSummary();
    if (summary) {
      realPhotos = summary.reviews
        .filter((r) => !!r.authorPhoto)
        .slice(0, 4)
        .map((r) => ({ src: r.authorPhoto as string, name: r.authorName }));
      if (!count && summary.userRatingCount > 0) {
        resolvedCount = formatCount(summary.userRatingCount);
      }
    }
  } catch (err) {
    console.warn('[SocialProofBadge] Places API falhou — usando fallback emoji.', err);
  }

  const useReal = realPhotos.length >= 1;

  return (
    <div
      className={`${styles.socialProof} ${className ?? ''}`}
      role="img"
      aria-label={`${resolvedCount} ${label}`}
    >
      <div className={styles.socialProofAvatars} aria-hidden="true">
        {useReal
          ? realPhotos.map((p, i) => (
              <span key={i} className={styles.socialProofAvatar}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={styles.socialProofAvatarImg}
                />
              </span>
            ))
          : FALLBACK_AVATARS.map((a, i) => (
              <span key={i} className={styles.socialProofAvatar}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  className={styles.socialProofAvatarImg}
                />
              </span>
            ))}
      </div>
      <span className={styles.socialProofText}>
        <strong>{resolvedCount}</strong> {label}
      </span>
    </div>
  );
}
