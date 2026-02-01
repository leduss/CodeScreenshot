import React from 'react';
import { Slider } from '../ui/slider';
import { useStore } from '@/store/useStore';

interface RangeProps extends React.PropsWithChildren<{}> {
  defaultValue: number;
  max?: number;
  title: string;
  type: 'SET_PADDING' | 'SET_ROUNDED' | 'SET_FONT_SIZE' | 'SET_FONT_WEIGHT';
  step?: number;
}

const Range = (props: RangeProps) => {
  const { defaultValue, max, title, type, step } = props;
  const { setPadding, setRounded, setFontSize, setFontWeight } = useStore();

  const handleChange = (value: number[]) => {
    const val = value[0] || 0;
    switch (type) {
      case 'SET_PADDING':
        setPadding(val);
        break;
      case 'SET_ROUNDED':
        setRounded(val);
        break;
      case 'SET_FONT_SIZE':
        setFontSize(val);
        break;
      case 'SET_FONT_WEIGHT':
        setFontWeight(val);
        break;
    }
  };

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-[40%] text-sm">{title}</p>
      <Slider
        className="w-[60%]"
        defaultValue={[defaultValue]}
        onValueChange={handleChange}
        min={0}
        max={max! - 1 || 0}
        step={step || 1}
      />
    </div>
  );
};

export default Range;
