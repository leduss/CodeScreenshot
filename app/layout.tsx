import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import './globals.css';
import { Providers } from './provider';
import { SiteConfig } from '@/lib/site-config';
import 'devicon/devicon.min.css';


const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: [...SiteConfig.keywords],
  authors: SiteConfig.author ? [SiteConfig.author] : undefined,
  creator: 'CodeScreenshot',
  publisher: 'CodeScreenshot',
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
    url: SiteConfig.siteUrl,
    siteName: SiteConfig.siteName,
    title: SiteConfig.title,
    description: SiteConfig.description,
    images: [
      {
        url: SiteConfig.ogImage,
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
    images: [SiteConfig.ogImage],
  },
  icons: {
    icon: SiteConfig.iconHeader,
    shortcut: SiteConfig.iconHeader,
    apple: SiteConfig.iconHeader,
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="fr" className="h-full" suppressHydrationWarning>
        <head>
          <meta name="description" content={SiteConfig.description} />
          <meta name="keywords" content={SiteConfig.keywords.join(', ')} />
          <meta name="author" content={SiteConfig.author?.name} />
          <title>{SiteConfig.title}</title>
          <link
            rel="icon"
            href={SiteConfig.iconHeader}
            sizes="16x16"
            type="image/png"
          />
          <link rel="apple-touch-icon" href={SiteConfig.iconHeader} />
        </head>
        <body
          className={cn(
            'h-screen w-full bg-background font-sans antialiased overflow-hidden',
            fontSans.variable
          )}
        >
          <Providers>
            <div className="size-full overflow-hidden p-4">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}
