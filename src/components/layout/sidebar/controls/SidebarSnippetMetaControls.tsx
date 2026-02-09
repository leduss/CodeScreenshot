'use client';

import { ProBadge } from '@/components/controls/ProBadge';
import { Input } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';

export function SidebarSnippetMetaControls() {
  const isPro = useStore((state) => state.isPro);
  const snippetTitle = useStore((state) => state.snippetTitle);
  const setSnippetTitle = useStore((state) => state.setSnippetTitle);
  const snippetDescription = useStore((state) => state.snippetDescription);
  const setSnippetDescription = useStore(
    (state) => state.setSnippetDescription
  );
  const { t: translations } = useTranslation();

  return (
    <>
      <section className="flex w-full flex-col gap-2">
        <h3 className="pb-1 text-sm font-medium text-white/80">
          {translations.snippetMeta}
          {!isPro && <ProBadge />}
        </h3>
        <Input
          placeholder={translations.snippetTitle}
          value={snippetTitle}
          onChange={(event) => setSnippetTitle(event.target.value)}
          className="h-9"
          disabled={!isPro}
        />
        <textarea
          placeholder={translations.snippetDescription}
          value={snippetDescription}
          onChange={(event) => setSnippetDescription(event.target.value)}
          rows={3}
          disabled={!isPro}
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-white/80 shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </section>

      <div className="my-4 h-px w-full bg-white/5" />

      <div className="rounded border border-white/10 bg-white/5 p-3 text-xs text-white/80">
        <p className="text-sm font-semibold text-white">
          {translations.sidebarHelpTitle}
        </p>
        <p className="mt-1 text-[11px] text-white/60">
          {translations.sidebarHelpDescription}
        </p>
      </div>
    </>
  );
}
