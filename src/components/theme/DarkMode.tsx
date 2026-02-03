import React from 'react';
import { Switch } from '../ui/switch';
import { useStore } from '@/store/useStore';

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">Dark Mode</p>
      <Switch
        defaultChecked={darkMode}
        onCheckedChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />
    </div>
  );
};

export default DarkMode;
