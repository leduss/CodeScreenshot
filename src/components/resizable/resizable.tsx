import React, { useState, useEffect, useRef } from 'react';

interface ResizableProps {
  minWidth?: number;
  maxWidth: number;
  children: React.ReactNode;
  className?: string;
}

const Resizable: React.FC<ResizableProps> = (props: ResizableProps) => {
  const { minWidth, maxWidth, children, className } = props;
  const [width, setWidth] = useState<number>(800);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [initialX, setInitialX] = useState<number>(0);

  const resizableRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setIsResizing(true);
    setInitialX(event.clientX);
  };

  const handleMouseUp = (): void => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      if (isResizing && resizableRef.current) {
        const newWidth = width + (event.clientX - initialX);
        if (
          newWidth >= (minWidth ?? 0) &&
          (maxWidth === undefined || newWidth <= maxWidth)
        ) {
          setWidth(newWidth);
          setInitialX(event.clientX);
        }
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [initialX, isResizing, maxWidth, minWidth, width]);

  return (
    <div
      className={className ?? 'w-full'}
      ref={resizableRef}
      style={{ width: `${width}px` }}
    >
      {children}
      <button
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          right: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          cursor: 'ew-resize',
          backgroundColor: 'rgba(0, 0, 0)',
        }}
      ></button>
      <button
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          cursor: 'ew-resize',
          backgroundColor: 'rgba(0, 0, 0)',
        }}
      ></button>
    </div>
  );
};

export default Resizable;
