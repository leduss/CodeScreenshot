import React from 'react';

export default function Loading() {
  return (
    <div className="absolute left-0 top-0  z-20 flex h-screen  w-screen items-center justify-center bg-background">
      <div className="relative size-60 animate-spin rounded-full border-y-8 border-primary " />
    </div>
  );
};
