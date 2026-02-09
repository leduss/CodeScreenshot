'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import type { TranslationKeys } from '@/data/translations';

interface ExportPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  previewUrl: string;
  loading: boolean;
  translations: TranslationKeys;
}

export function ExportPreviewDialog({
  open,
  onOpenChange,
  previewUrl,
  loading,
  translations,
}: ExportPreviewDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[95vh] w-[calc(100vw-1rem)] border-white/10 bg-[#121316] text-white sm:max-w-5xl">
        <DialogHeader className="text-left">
          <DialogTitle>{translations.exportPreview}</DialogTitle>
        </DialogHeader>
        <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded border border-white/10 bg-[#0f1012]">
          {loading ? (
            <span className="text-sm text-white/60">...</span>
          ) : previewUrl ? (
            <img
              src={previewUrl}
              alt={translations.exportPreview}
              className="max-h-[82vh] w-auto max-w-full object-contain"
            />
          ) : (
            <span className="text-sm text-white/50">-</span>
          )}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            {translations.close}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
