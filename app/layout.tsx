import type { Metadata, Viewport } from 'next';
import { Merriweather, Saira_Condensed, Saira_Semi_Condensed } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const sairaCondensed = Saira_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

const sairaSemi = Saira_Semi_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-saira',
  display: 'swap',
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mane.com.vc';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mané Mercado — O maior mercado gastronômico do Brasil',
    template: '%s · Mané Mercado',
  },
  description:
    'Mané Mercado: curadoria gastronômica em Brasília, Águas Claras e São Paulo. +20 chefs, +500 pratos, 3 unidades. Reserve sua mesa.',
  applicationName: 'Mané Mercado',
  authors: [{ name: 'Mané Mercado' }],
  creator: 'Mané Mercado',
  publisher: 'Mané Mercado',
  keywords: [
    'Mané Mercado',
    'mercado gastronômico',
    'restaurantes Brasília',
    'restaurantes Águas Claras',
    'restaurantes São Paulo',
    'reservar mesa',
    'aniversário',
    'confraternização',
    'curadoria gastronômica',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Mané Mercado',
    title: 'Mané Mercado — O maior mercado gastronômico do Brasil',
    description:
      'Brasília, Águas Claras e São Paulo. +20 chefs, +500 pratos. Reserve sua mesa.',
    images: [
      {
        url: '/images/hero2.jpg',
        width: 1200,
        height: 630,
        alt: 'Mané Mercado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mané Mercado',
    description: 'O maior mercado gastronômico do Brasil.',
    images: ['/images/hero2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo-mane.svg',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#034c46',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const GA_ID = 'G-STEVQXY6EP';
const META_PIXEL_ID = '962138945146852';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${sairaCondensed.variable} ${merriweather.variable} ${sairaSemi.variable}`}
    >
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
