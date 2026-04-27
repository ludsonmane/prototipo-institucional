import Image from 'next/image';
import styles from '@/app/home.module.css';

type MediaLogo = {
  label: string;
  className?: string;
  image?: { src: string; width: number; height: number; alt: string };
  href?: string;
};

const MEDIA_LOGOS: MediaLogo[] = [
  {
    label: '#receitas',
    className: 'logoReceitas',
    image: { src: '/images/logo-receitas.png', width: 255, height: 42, alt: 'Receitas Globo' },
    href: 'https://receitas.globo.com/ocasioes/mercado-mane/',
  },
  {
    label: 'Metrópoles',
    className: 'logoMetropoles',
    image: { src: '/images/logo-metropoles.png', width: 228, height: 42, alt: 'Metrópoles' },
    href: 'https://www.metropoles.com/gastronomia/luciana-barbo/mane-tera-17-operacoes-gastronomicas-bem-no-coracao-de-brasilia',
  },
  {
    label: 'globo',
    className: 'logoGlobo',
    image: { src: '/images/logo-globo.png', width: 183, height: 54, alt: 'Globo' },
    href: 'https://g1.globo.com/df/distrito-federal/noticia/2022/12/05/entorno-do-mane-garrincha-em-brasilia-recebeu-melhorias-depois-da-privatizacao-do-estadio.ghtml',
  },
  {
    label: 'Veja',
    className: 'logoVeja',
    image: { src: '/images/logo-veja.png', width: 500, height: 237, alt: 'Veja' },
    href: 'https://vejasp.abril.com.br/coluna/arnaldo-lorencato/comer-e-beber-mane-mercado-inauguracao-west-plaza/',
  },
  {
    label: 'Correio Braziliense',
    className: 'logoCorreio',
    image: { src: '/images/logo-correio.png', width: 3840, height: 383, alt: 'Correio Braziliense' },
    href: 'https://blogs.correiobraziliense.com.br/marcas-e-negocios/2025/11/15/complexo-de-experiencias-gastronomicas/',
  },
];

export function MediaSection() {
  /* Track is tripled so it's always wider than any viewport, guaranteeing
   * continuous visible movement. `translateX(-33.333%)` = exactly one set. */
  const track = [...MEDIA_LOGOS, ...MEDIA_LOGOS, ...MEDIA_LOGOS];

  return (
    <section className={styles.mediaSection}>
      <div className={styles.container}>
        <h2 className={styles.mediaTitle}>
          <em>Mané Mercado</em> na mídia
        </h2>
      </div>
      <div className={styles.mediaMarquee} aria-label="Veículos de mídia onde o Mané Mercado foi mencionado">
        <div className={styles.mediaTrack}>
          {track.map((logo, i) => {
            const isClone = i >= MEDIA_LOGOS.length;
            const className = `${styles.mediaLogo} ${logo.className ? styles[logo.className] : ''}`;
            const content = logo.image ? (
              <Image
                src={logo.image.src}
                alt={logo.image.alt}
                width={logo.image.width}
                height={logo.image.height}
                className={styles.mediaLogoImage}
                unoptimized
                priority={false}
              />
            ) : (
              logo.label
            );

            if (logo.href) {
              return (
                <a
                  key={`${logo.label}-${i}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  aria-hidden={isClone ? 'true' : undefined}
                  tabIndex={isClone ? -1 : undefined}
                  aria-label={logo.image?.alt ?? logo.label}
                >
                  {content}
                </a>
              );
            }

            return (
              <span
                key={`${logo.label}-${i}`}
                className={className}
                aria-hidden={isClone ? 'true' : undefined}
              >
                {content}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
