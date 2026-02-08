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
    <Card className="size-full overflow-y-auto p-1">
      <CardHeader className="p-0 py-2 text-center font-mono text-lg font-bold text-primary">
        {SiteConfig.title}
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-0">
        <section className="flex w-full flex-col gap-1">
          <h3 className="pb-1 text-sm font-medium dark:text-white">{translations.background}</h3>
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
        </section>

        <Separator />

        <section className="flex w-full flex-col gap-1">
          <h3 className="pb-1 text-sm font-medium dark:text-white">{translations.code}</h3>
          <SyntaxThemeSelect />
          <OsSelect />
          <LineNumbers />
        </section>

        <Separator />

        <section className="flex w-full flex-col gap-1">
          <h3 className="pb-1 text-sm font-medium dark:text-white">{translations.font}</h3>
          <FontSelect />
          <Range
            defaultValue={indexFontSize}
            max={fontSizeOptions.length}
            title={translations.fontSize}
            type="SET_FONT_SIZE"
          />
        </section>

        <Separator />

        <section className="flex w-full flex-col gap-1">
          <h3 className="pb-1 text-sm font-medium dark:text-white">{translations.customThemes}</h3>
          <CustomThemeSelector />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" className="w-full">
                <Plus className="mr-2 size-4" />
                {translations.createTheme}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <CustomThemeCreator />
            </PopoverContent>
          </Popover>
        </section>
      </CardContent>
    </Card>
  );
};

export default SideBar;
