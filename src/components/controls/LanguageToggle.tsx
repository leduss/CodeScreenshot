'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useStore } from '@/store/useStore';
import { Locale } from '@/data/translations';

const languages = [
  { code: 'fr' as Locale, name: 'Français', flag: '🇫🇷' },
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Locale, name: 'Español', flag: '🇪🇸' },
  { code: 'de' as Locale, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it' as Locale, name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt' as Locale, name: 'Português', flag: '🇵🇹' },
];

export function LanguageToggle() {
  const { locale, setLocale } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Locale) => {
    setLocale(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((l) => l.code === locale) || languages[0];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="default" size="sm" className="h-9 gap-2">
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">
            {currentLanguage?.code.toUpperCase()}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-36 flex-col gap-2" align="end">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={locale === lang.code ? 'secondary' : 'ghost'}
            className="justify-start gap-2"
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
