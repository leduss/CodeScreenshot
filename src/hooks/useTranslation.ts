'use client';

import { useEffect } from 'react';
import { getTranslations, Locale, TranslationKeys } from '@/data/translations';
import { useStore } from '@/store/useStore';

export function useTranslation(): {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
} {
  const { locale, setLocale } = useStore();

  useEffect(() => {
    if (!locale) {
      const savedLocale = localStorage.getItem('language') as Locale;
      if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
        setLocale(savedLocale);
      } else {
        setLocale('fr');
      }
    }
  }, [locale, setLocale]);

  const t = getTranslations(locale || 'fr');

  return { locale: locale || 'fr', setLocale, t };
}
