'use client';

import { useTranslation } from '@/hooks/useTranslation';

interface ProBadgeProps {
  className?: string;
}

export function ProBadge({ className }: ProBadgeProps) {
  const { t } = useTranslation();
  return (
    <span
      className={`ml-2 rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary ${className ?? ''}`}
    >
      {t.proLabel}
    </span>
  );
}
