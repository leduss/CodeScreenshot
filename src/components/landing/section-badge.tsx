import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionBadgeProps {
  label: string;
  icon: LucideIcon;
  className?: string;
}

const SectionBadge = React.forwardRef<HTMLSpanElement, SectionBadgeProps>(
  ({ label, icon: Icon, className }, ref) => {
    return (
      <span
        ref={ref}
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary ${className ?? ''}`}
      >
        <span className="relative inline-flex size-4 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/35" />
          <span className="relative inline-flex size-4 items-center justify-center rounded-full bg-primary/20">
            <Icon className="size-4" />
          </span>
        </span>
        <span>{label}</span>
      </span>
    );
  }
);

SectionBadge.displayName = 'SectionBadge';

export default SectionBadge;
