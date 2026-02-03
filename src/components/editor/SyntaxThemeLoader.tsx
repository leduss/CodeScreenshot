'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';

export default function SyntaxThemeLoader() {
  const { syntaxTheme } = useStore();
  const prevTheme = useRef(syntaxTheme);

  useEffect(() => {
    if (prevTheme.current === syntaxTheme) return;
    prevTheme.current = syntaxTheme;

    const themeUrl = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/styles/${syntaxTheme}.css`;
    const linkId = 'highlightjs-theme';

    // Remove existing link
    const existingLink = document.getElementById(linkId);
    if (existingLink) {
      existingLink.remove();
    }

    // Create and append new link
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = themeUrl;
    document.head.appendChild(link);
  }, [syntaxTheme]);

  return null;
}
