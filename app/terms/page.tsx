'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
      <p className="text-6xl text-primary">Page is under construction</p>
      <Button className="" onClick={() => router.push('/')}>
        home
      </Button>
    </div>
  );
};

export default Page;
