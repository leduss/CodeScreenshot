'use client';

import { ThemeProvider } from 'next-themes';
import { ContextProvider } from '../src/context/context';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <SpeedInsights />
        <Analytics />
        <ContextProvider>{children}</ContextProvider>
      </ThemeProvider>
    </>
  );
};
