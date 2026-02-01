'use client';

import { useStore } from '@/store/useStore';
import { syntaxThemeColors } from '@/lib/syntaxThemeColors';

export default function SyntaxThemeColors() {
  const { syntaxTheme } = useStore();

  const colors =
    syntaxThemeColors[syntaxTheme as keyof typeof syntaxThemeColors] ||
    (syntaxThemeColors['atom-one-dark'] as Record<string, string>);

  // Générer les styles CSS
  const css = `
    .editor-container code.hljs {
      color: ${colors['hljs-code'] || '#abb2bf'} !important;
    }
    .editor-container .hljs-keyword,
    .editor-container .hljs-selector-tag,
    .editor-container .hljs-built_in {
      color: ${colors['hljs-keyword'] || '#c678dd'} !important;
    }
    .editor-container .hljs-string,
    .editor-container .hljs-attribute,
    .editor-container .hljs-symbol,
    .editor-container .hljs-bullet,
    .editor-container .hljs-addition {
      color: ${colors['hljs-string'] || '#98c379'} !important;
    }
    .editor-container .hljs-title,
    .editor-container .hljs-section,
    .editor-container .hljs-function .hljs-title {
      color: ${colors['hljs-title'] || '#61aeee'} !important;
    }
    .editor-container .hljs-number,
    .editor-container .hljs-literal {
      color: ${colors['hljs-number'] || '#d19a66'} !important;
    }
    .editor-container .hljs-comment {
      color: ${colors['hljs-comment'] || '#5c6370'} !important;
      font-style: italic;
    }
    .editor-container .hljs-type,
    .editor-container .hljs-class {
      color: ${colors['hljs-type'] || '#e5c07b'} !important;
    }
    .editor-container .hljs-meta,
    .editor-container .hljs-tag {
      color: ${colors['hljs-meta'] || '#c678dd'} !important;
    }
    .editor-container .hljs-name,
    .editor-container .hljs-attr {
      color: ${colors['hljs-name'] || '#e06c75'} !important;
    }
    .editor-container .hljs-params {
      color: ${colors['hljs-params'] || '#d19a66'} !important;
    }
    .editor-container .hljs-deletion {
      color: ${colors['hljs-deletion'] || '#e06c75'} !important;
    }
    .editor-container .hljs-emphasis {
      font-style: italic;
    }
    .editor-container .hljs-strong {
      font-weight: bold;
    }
    .editor-container .hljs-built_in {
      color: ${colors['hljs-built_in'] || '#56b6c2'} !important;
    }
    .editor-container .hljs-selector-id,
    .editor-container .hljs-selector-class {
      color: ${colors['hljs-selector-id'] || '#61aeee'} !important;
    }
    .editor-container .hljs-bullet {
      color: ${colors['hljs-bullet'] || '#d19a66'} !important;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
