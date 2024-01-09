import React from 'react';
import { Switch } from '../ui/switch';
import { useMyContext } from '@/context/context';

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useMyContext();

  return (
    <div className="flex h-10 w-full items-center">
      <p className="w-[40%] text-sm">Dark Mode</p>
      <Switch defaultChecked={darkMode} onCheckedChange={toggleDarkMode} />
    </div>
  );
};

export default DarkMode;
