'use client';

import { ProBadge } from '@/components/controls/ProBadge';
import {
  Checkbox,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';

export function SidebarWatermarkControls() {
  const isPro = useStore((state) => state.isPro);
  const watermarkText = useStore((state) => state.watermarkText);
  const setWatermarkText = useStore((state) => state.setWatermarkText);
  const watermarkPosition = useStore((state) => state.watermarkPosition);
  const setWatermarkPosition = useStore((state) => state.setWatermarkPosition);
  const showSignature = useStore((state) => state.showSignature);
  const setShowSignature = useStore((state) => state.setShowSignature);
  const signatureText = useStore((state) => state.signatureText);
  const setSignatureText = useStore((state) => state.setSignatureText);
  const { t: translations } = useTranslation();

  const watermarkOptions = [
    { value: 'top-left', label: 'Top left' },
    { value: 'top-right', label: 'Top right' },
    { value: 'bottom-left', label: 'Bottom left' },
    { value: 'bottom-right', label: 'Bottom right' },
    { value: 'center', label: 'Center' },
  ];

  return (
    <>
      <section className="flex w-full flex-col gap-2">
        <h3 className="pb-1 text-sm font-medium text-white/80">
          {translations.watermark}
          {!isPro && <ProBadge />}
        </h3>
        <Input
          placeholder={translations.watermarkPlaceholder}
          value={watermarkText}
          onChange={(event) => setWatermarkText(event.target.value)}
          className="h-9"
          disabled={!isPro}
        />
        <Select
          value={watermarkPosition}
          onValueChange={setWatermarkPosition}
          disabled={!isPro}
        >
          <SelectTrigger className="h-9">
            <SelectValue placeholder={translations.watermarkPosition} />
          </SelectTrigger>
          <SelectContent>
            {watermarkOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <div className="mt-4 rounded border border-white/5 bg-[#17181b]/60 p-3">
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>
            {translations.signature}
            {!isPro && <ProBadge />}
          </span>
          <Checkbox
            checked={showSignature}
            onCheckedChange={(checked) => setShowSignature(!!checked)}
            disabled={!isPro}
          />
        </div>
        <Input
          placeholder={translations.signaturePlaceholder}
          value={signatureText}
          onChange={(event) => setSignatureText(event.target.value)}
          className="mt-2 h-9"
          disabled={!isPro || !showSignature}
        />
      </div>
    </>
  );
}
