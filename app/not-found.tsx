import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 20,
        background: 'var(--teal-700)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 420 }}>
        <p style={{ fontSize: 14, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
          404
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, margin: '12px 0 16px' }}>
          Página não encontrada.
        </h1>
        <p style={{ opacity: 0.8, marginBottom: 28 }}>
          O endereço que você tentou acessar não existe. Volte pra home ou confira as unidades.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: '#F58F7E',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: 999,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontSize: 13,
          }}
        >
          Voltar pra home
        </Link>
      </div>
    </main>
  );
}
