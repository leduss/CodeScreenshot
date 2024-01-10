import { SiteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import './globals.css';
import { Providers } from './provider';
import SideBar from '@/components/layout/SideBar';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" className="h-screen w-screen" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'h-full w-full bg-background font-sans antialiased flex p-2',
            fontSans.variable
          )}
        >
          <Providers>
            <div className="h-full w-full ">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}
