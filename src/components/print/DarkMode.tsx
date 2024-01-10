import React from 'react';
import { Switch } from '../ui/switch';
import { useMyContext } from '@/context/context';

const DarkMode = () => {
  const { state, dispatch } = useMyContext();

  return (
    <div className="flex h-10 w-full items-center">
      <p className="w-[40%] text-sm">Dark Mode</p>
      <Switch defaultChecked={state.darkMode} onCheckedChange={() => dispatch({ type: 'TOGGLE_DARK_MODE' })} />
    </div>
  );
};

export default DarkMode;
