'use client';

import { LineNumbers, SyntaxThemeSelect } from '@/components/controls';
import { WindowStyleControl } from '@/components/controls/WindowStyleControl';
import { ZenModeControl } from '@/components/controls/ZenModeControl';

export function SidebarAppearanceControls() {
  return (
    <section className="flex w-full flex-col gap-1">
      <SyntaxThemeSelect />
      <LineNumbers />
      <WindowStyleControl />
      <ZenModeControl />
    </section>
  );
}
