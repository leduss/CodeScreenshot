import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import './globals.css';
import { Providers } from './provider';
import { SiteConfig } from '@/lib/site-config';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords ? [...SiteConfig.keywords] : undefined,
  authors: SiteConfig.author ? [SiteConfig.author] : undefined,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head>
          <meta name="description" content={SiteConfig.description} />
          <meta
            name="keywords"
            content={
              Array.isArray(metadata.keywords)
                ? metadata.keywords.join(', ')
                : metadata.keywords ?? ''
            }
          />
          <meta name="author" content={metadata.authors?.toString()} />
          <title>{String(metadata.title) || ''}</title>
          <link
            rel="icon"
            href={SiteConfig.iconHeader}
            sizes="16x16"
            type="image/png"
          />
        </head>
        <body
          className={cn(
            'h-screen w-full bg-background font-sans antialiased overflow-hidden',
            fontSans.variable
          )}
        >
          <Providers>
            <div className="h-full w-full p-4 overflow-hidden">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}
