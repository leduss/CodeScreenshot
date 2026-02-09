'use client';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import type { TranslationKeys } from '@/data/translations';

interface UpgradeLimitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  translations: TranslationKeys;
}

export function UpgradeLimitDialog({
  open,
  onOpenChange,
  translations,
}: UpgradeLimitDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-[#121316] text-white">
        <DialogHeader className="text-left">
          <DialogTitle>{translations.limitReachedTitle}</DialogTitle>
          <DialogDescription className="text-white/60">
            {translations.limitReachedDescription}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {translations.close}
            </Button>
          </DialogClose>
          <Button type="button">
            {translations.upgradeCta}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
