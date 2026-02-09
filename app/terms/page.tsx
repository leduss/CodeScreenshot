'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
      <p className="text-6xl text-primary">{t.termsUnderConstruction}</p>
      <Button className="" onClick={() => router.push('/')}>
        {t.home}
      </Button>
    </div>
  );
};

export default Page;
