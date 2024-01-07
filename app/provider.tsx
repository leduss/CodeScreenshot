'use client';

import { ThemeProvider } from 'next-themes';
import { type PropsWithChildren } from 'react';
import { ContextProvider } from './context';


export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ContextProvider>
          {children}
        </ContextProvider>
      </ThemeProvider>
    </>
  );
};
