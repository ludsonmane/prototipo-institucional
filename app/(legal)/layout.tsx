import Link from 'next/link';
import styles from './legal.module.css';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          mané<sup>,</sup>
        </Link>
        <Link href="/" className={styles.navBack}>
          ← Voltar
        </Link>
      </nav>
      {children}
    </div>
  );
}
