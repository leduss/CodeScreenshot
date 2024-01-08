import React from 'react';
import { Slider } from '../ui/slider';

interface RangeProps extends React.PropsWithChildren<{}> {
  index: number;
  function: (value: number) => void;
  arrayLength?: number;
  title: string;
}

const Range = (props: RangeProps) => {
  const { index, function: setRange, arrayLength, title } = props;
  return (
    <div className="flex h-10 w-full items-center">
      <p className=" w-[40%] text-sm">{title}</p>
      <Slider
        className="w-[60%]"
        defaultValue={[index]}
        onValueChange={(value) => setRange(value[0] || 0)}
        min={0}
        max={arrayLength! - 1 || 0}
        step={1}
      />
    </div>
  );
};

export default Range;
