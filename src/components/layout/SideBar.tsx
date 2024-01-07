'use client';

import React from 'react';
import ThemeSelect from '../print/ThemeSelect';
import PaddingRange from '../print/PaddingRange';
import RoundedSelect from '../print/RoundedSelect';
import FontSizeSelect from '../print/FontsizeSelect';
import { Card, CardContent } from '../ui/card';
import OsSelect from '../print/OsSelect';
import { ThemeToggle } from '../theme/ThemeToggle';
import FontStyleSelect from '../print/FontStyleSelect';

const SideBar = () => {
  return (
    <div className="w-[20%] h-full">
      <Card className="w-full h-full p-1">
        <CardContent className=" flex flex-col items-center gap-2 p-0">
          <ThemeSelect />
          <PaddingRange />
          <RoundedSelect />
          <FontSizeSelect />
          <FontStyleSelect />
          <OsSelect />
          <ThemeToggle />
        </CardContent>
      </Card>
    </div>
  );
};

export default SideBar;
