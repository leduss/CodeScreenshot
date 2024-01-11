'use client';

import React from 'react';
import ThemeSelect from '../print/ThemeSelect';
import { Card, CardContent } from '../ui/card';
import OsSelect from '../print/OsSelect';
import FontStyleSelect from '../print/FontStyleSelect';
import DarkMode from '../print/DarkMode';
import { useMyContext } from '@/context/context';
import Range from '../print/Range';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { roundedOption } from '@/lib/roundedOption';
import { SiteConfig } from '@/lib/site-config';

const SideBar = () => {
  const { state } = useMyContext();
  return (
    <Card className="h-full w-full p-1">
      <p className='text-center pb-4 font-mono text-lg font-bold text-primary '>{SiteConfig.title}</p>
        <CardContent className=" flex flex-col items-center gap-2 p-0">
          <ThemeSelect />
          <Range
            index={state.padding}
            arrayLength={128}
            title="Padding"
            type="SET_PADDING"
          />
          <Range
            index={state.indexRounded}
            arrayLength={roundedOption.length}
            title="Rounded"
            type="SET_ROUNDED"
          />
          <Range
            index={state.indexFontSize}
            arrayLength={fontSizeOptions.length}
            title="Font size"
            type="SET_FONT_SIZE"
          />
          <FontStyleSelect />
          <OsSelect />
          <DarkMode />
        </CardContent>
      </Card>
  );
};

export default SideBar;
