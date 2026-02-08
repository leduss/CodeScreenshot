import { cn } from '@/utils';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import './globals.css';
import { Providers } from './provider';
import { SiteConfig } from '@/config/site-config';
import 'devicon/devicon.min.css';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SiteConfig.siteUrl),
  title: {
    default: SiteConfig.title,
    template: `%s | ${SiteConfig.title}`,
  },
  description: SiteConfig.description,
  keywords: [...SiteConfig.keywords],
  authors: [SiteConfig.author],
  creator: SiteConfig.author.name,
  publisher: SiteConfig.siteName,
  formatDetection: {
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT', 'pt_PT'],
    url: '/',
    siteName: SiteConfig.siteName,
    title: SiteConfig.title,
    description: SiteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SiteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SiteConfig.twitterHandle,
    creator: SiteConfig.twitterHandle,
    title: SiteConfig.title,
    description: SiteConfig.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/',
    },
  },
  category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SiteConfig.title,
  description: SiteConfig.description,
  url: SiteConfig.siteUrl,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  author: {
    '@type': 'Person',
    name: SiteConfig.author.name,
    url: SiteConfig.author.url,
  },
  featureList: [
    'Syntax highlighting',
    'Multiple themes',
    'Export to PNG/SVG/JPG',
    'Custom fonts',
    'Line numbers',
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'h-screen w-full bg-background font-sans antialiased overflow-auto',
          fontSans.variable
        )}
      >
        <Providers>
          <div className="size-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
