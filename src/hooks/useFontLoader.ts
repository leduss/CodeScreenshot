'use client';

import { useEffect } from 'react';

/**
 * Hook to dynamically load Google Fonts or other web fonts
 * Works with Next.js App Router Client Components
 */
export function useFontLoader(fontUrl: string | undefined) {
  useEffect(() => {
    if (!fontUrl) return;

    // Check if font is already loaded
    const existingLink = document.querySelector(`link[href="${fontUrl}"]`);
    if (existingLink) return;

    // Create and append link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontUrl;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Cleanup on unmount or URL change
    return () => {
      // Don't remove - font might still be needed by other components
    };
  }, [fontUrl]);
}
