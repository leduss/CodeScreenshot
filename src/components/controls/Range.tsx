import React, { useEffect, useState, useId } from 'react';
import { Slider } from '../ui/slider';
import { useStore } from '@/store/useStore';

interface RangeProps {
  defaultValue: number;
  max?: number;
  title: string;
  type: 'SET_PADDING' | 'SET_ROUNDED' | 'SET_FONT_SIZE' | 'SET_FONT_WEIGHT';
  step?: number;
}

const Range = ({ defaultValue, max = 1, title, type, step = 1 }: RangeProps) => {
  const id = useId();
  const { setPadding, setRounded, setFontSize, setFontWeight } = useStore();
  const [sliderValue, setSliderValue] = useState([defaultValue]);

  useEffect(() => {
    setSliderValue([defaultValue]);
  }, [defaultValue]);

  const handleChange = (value: number[]) => {
    setSliderValue(value);
    const val = value[0] ?? 0;

    const actions = {
      SET_PADDING: setPadding,
      SET_ROUNDED: setRounded,
      SET_FONT_SIZE: setFontSize,
      SET_FONT_WEIGHT: setFontWeight,
    };

    actions[type](val);
  };

  return (
    <div className="flex h-9 w-full items-center">
      <label htmlFor={id} className="w-2/5 text-sm">
        {title}
      </label>
      <Slider
        id={id}
        className="w-3/5"
        value={sliderValue}
        onValueChange={handleChange}
        min={0}
        max={max - 1}
        step={step}
        aria-label={title}
      />
    </div>
  );
};

export default Range;
