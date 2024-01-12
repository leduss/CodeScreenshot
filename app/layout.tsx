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
  description: SiteConfig.description
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" className="min-h-screen" suppressHydrationWarning>
        <head>
          <link
            rel="icon"
            href={SiteConfig.iconHeader}
            sizes="16x16"
            type="image/png"
          />
        </head>
        <body
          className={cn(
            'h-full w-full bg-background font-sans antialiased flex',
            fontSans.variable
          )}
        >
          <Providers>
            <div className="h-full w-full p-0">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}
