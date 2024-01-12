'use client';

import React from 'react';
import ThemeSelect from '../print/ThemeSelect';
import { Card, CardContent, CardHeader } from '../ui/card';
import OsSelect from '../print/OsSelect';
import FontStyleSelect from '../print/FontStyleSelect';
import DarkMode from '../print/DarkMode';
import { useMyContext } from '@/context/context';
import Range from '../print/Range';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { roundedOption } from '@/lib/roundedOption';
import { SiteConfig } from '@/lib/site-config';
import FontSelect from '../print/FontSelect';
import { Separator } from '../ui/separator';

const SideBar = () => {
  const { state } = useMyContext();
  return (
    <Card className="h-full w-full p-1">
      <CardHeader className="p-0 py-2 text-center font-mono text-lg font-bold text-primary ">
        {SiteConfig.title}
      </CardHeader>
      <CardContent className=" flex flex-col items-center gap-3 p-0">
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">Background</p>
          <ThemeSelect />
          <Range
            defaultValue={state.padding}
            max={128}
            title="Padding"
            type="SET_PADDING"
          />
          <Range
            defaultValue={state.indexRounded}
            max={roundedOption.length}
            title="Rounded"
            type="SET_ROUNDED"
          />
          <DarkMode />
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">Editor</p>
          <FontStyleSelect />
          <OsSelect />
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-0.5">
          <p className="pb-2 dark:text-white">Font</p>
          <FontSelect />
          <Range
            defaultValue={state.indexFontSize}
            max={fontSizeOptions.length}
            title="Font size"
            type="SET_FONT_SIZE"
          />
          <Range
            defaultValue={state.fontWeight}
            max={900}
            title="Font weight"
            type="SET_FONT_WEIGHT"
            step={100}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SideBar;
