'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useStore } from '@/store/useStore';
import { useTranslation } from '@/hooks/useTranslation';

const languages = [
  { code: 'typescript', name: 'TypeScript' },
  { code: 'javascript', name: 'JavaScript' },
  { code: 'python', name: 'Python' },
  { code: 'java', name: 'Java' },
  { code: 'cpp', name: 'C++' },
  { code: 'csharp', name: 'C#' },
  { code: 'go', name: 'Go' },
  { code: 'rust', name: 'Rust' },
  { code: 'php', name: 'PHP' },
  { code: 'ruby', name: 'Ruby' },
  { code: 'swift', name: 'Swift' },
  { code: 'kotlin', name: 'Kotlin' },
  { code: 'sql', name: 'SQL' },
  { code: 'html', name: 'HTML' },
  { code: 'css', name: 'CSS' },
  { code: 'json', name: 'JSON' },
  { code: 'xml', name: 'XML' },
  { code: 'yaml', name: 'YAML' },
  { code: 'bash', name: 'Bash' },
  { code: 'powershell', name: 'PowerShell' },
  { code: 'dockerfile', name: 'Dockerfile' },
  { code: 'markdown', name: 'Markdown' },
];

const LanguageSelect = () => {
  const { language, setLanguage } = useStore();
  const { t } = useTranslation();

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">Langage</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="m-0 w-3/5 p-1">
            <div className="flex size-full items-center justify-center rounded px-2 text-xs">
              {currentLanguage?.name || 'Auto'}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2">
          <div className="flex max-h-64 flex-col gap-1 overflow-y-auto">
            <button
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
              onClick={() => setLanguage('')}
            >
              <span className="flex-1">Auto (détection)</span>
            </button>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
                onClick={() => setLanguage(lang.code)}
              >
                <span className="flex-1">{lang.name}</span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
