'use client';

import React from 'react';
import { BackgroundSelect, SyntaxThemeSelect, OsSelect, LineNumbers, Range, FontSelect } from '@/components/controls';
import { Card, CardContent, CardHeader, Separator, Popover, PopoverContent, PopoverTrigger, Button } from '@/components/ui';
import { useStore } from '@/store/useStore';
import { fontSizeOptions, roundedOption } from '@/constants';
import { SiteConfig } from '@/config/site-config';
import { useTranslation } from '@/hooks/useTranslation';
import { CustomThemeSelector, CustomThemeCreator } from '@/components/theme';
import { Plus } from 'lucide-react';

const SideBar = () => {
  const { padding, indexRounded, indexFontSize, fontWeight } = useStore();
  const { t: translations } = useTranslation();

  return (
    <Card className="h-full w-72 overflow-y-auto p-1">
      <CardHeader className="p-0 py-2 text-center font-mono text-lg font-bold text-primary">
        {SiteConfig.title}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 p-0">
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">{translations.background}</p>
          <BackgroundSelect />
          <Range
            defaultValue={padding}
            max={128}
            title={translations.padding}
            type="SET_PADDING"
          />
          <Range
            defaultValue={indexRounded}
            max={roundedOption.length}
            title={translations.rounded}
            type="SET_ROUNDED"
          />
          <CustomThemeSelector />
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">{translations.code}</p>
          <SyntaxThemeSelect />
          <OsSelect />
          <LineNumbers />
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">{translations.font}</p>
          <FontSelect />
          <Range
            defaultValue={indexFontSize}
            max={fontSizeOptions.length}
            title={translations.fontSize}
            type="SET_FONT_SIZE"
          />
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">Thèmes personnalisés</p>
          <CustomThemeSelector />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" className="w-full">
                <Plus className="mr-2 size-4" />
                Créer un thème
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <CustomThemeCreator />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
};

export default SideBar;
