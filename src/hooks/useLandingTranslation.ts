'use client';

import { useStore } from '@/store/useStore';
import { landingTranslations } from '@/data/landing-translations';

export function useLandingTranslation() {
  const locale = useStore((state) => state.locale);
  return landingTranslations[locale] ?? landingTranslations.fr;
}
