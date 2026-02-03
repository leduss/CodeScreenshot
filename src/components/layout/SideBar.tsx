'use client';

import React from 'react';
import ThemeSelect from '../print/ThemeSelect';
import SyntaxThemeSelect from '../print/SyntaxThemeSelect';
import { Card, CardContent, CardHeader } from '../ui/card';
import OsSelect from '../print/OsSelect';
import LineNumbers from '../print/LineNumbers';
import { useStore } from '@/store/useStore';
import Range from '../print/Range';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { roundedOption } from '@/lib/roundedOption';
import { SiteConfig } from '@/lib/site-config';
import FontSelect from '../print/FontSelect';
import { Separator } from '../ui/separator';
import { useTranslation } from '@/hooks/useTranslation';
import CustomThemeSelector from '../print/CustomThemeSelector';
import CustomThemeCreator from '../print/CustomThemeCreator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

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
          <ThemeSelect />
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
