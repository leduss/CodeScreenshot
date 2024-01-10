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

const SideBar = () => {
  const {
    indexFontSize,
    updateFontSize,
    padding,
    updatePadding,
    indexRounded,
    updateRounded,
  } = useMyContext();
  return (
    <div className="h-full w-[20%] font-semibold">
      <Card className="h-full w-full p-1">
        <CardContent className=" flex flex-col items-center gap-2 p-0">
          <ThemeSelect />
          <Range
            index={padding}
            function={updatePadding}
            arrayLength={128}
            title="Padding"
          />
          <Range
            index={indexRounded}
            function={updateRounded}
            arrayLength={roundedOption.length}
            title="Rounded"
          />
          <Range
            index={indexFontSize}
            function={updateFontSize}
            arrayLength={fontSizeOptions.length}
            title="Font size"
          />
          <FontStyleSelect />
          <OsSelect />
          <DarkMode />
        </CardContent>
      </Card>
    </div>
  );
};

export default SideBar;
