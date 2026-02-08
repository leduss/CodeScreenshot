import React, { useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {
  Decoration,
  EditorView,
  ViewPlugin,
  keymap,
  rectangularSelection,
  crosshairCursor,
} from '@codemirror/view';
import type { Extension } from '@codemirror/state';
import {
  loadLanguage,
  langNames,
  type LanguageName,
} from '@uiw/codemirror-extensions-langs';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';
import {
  abcdef,
  abyss,
  androidstudio,
  andromeda,
  atomone,
  aura,
  basicDark,
  basicLight,
  bbedit,
  bespin,
  consoleDark,
  consoleLight,
  copilot,
  darcula,
  dracula,
  duotoneDark,
  duotoneLight,
  eclipse,
  githubDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  kimbie,
  material,
  materialDark,
  materialLight,
  monokai,
  monokaiDimmed,
  noctisLilac,
  nord,
  okaidia,
  quietlight,
  red,
  solarizedDark,
  solarizedLight,
  sublime,
  tokyoNight,
  tokyoNightStorm,
  tokyoNightDay,
  tomorrowNightBlue,
  vscodeDark,
  vscodeLight,
  whiteDark,
  whiteLight,
  xcodeDark,
  xcodeLight,
} from '@uiw/codemirror-themes-all';
import { useStore } from '@/store/useStore';
import { bracketMatching } from '@codemirror/language';
import rainbowBrackets from 'rainbowbrackets';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { highlightTrailingWhitespace } from '@codemirror/view';
import { history, historyKeymap } from '@codemirror/commands';
import { syntaxThemes } from '@/constants/syntax-themes/themes';

interface EditorContentProps {
  value: string;
  onChange: (value: string) => void;
}

const EditorContent = ({ value, onChange }: EditorContentProps) => {
  const {
    font,
    fontSize,
    showLineNumbers,
    showZebra,
    showFoldGutter,
    showActiveLine,
    showSelectionMatches,
    showTrailingWhitespace,
    showSearch,
    syntaxTheme,
    language,
    highlightedLines,
    lineHeight,
    letterSpacing,
  } = useStore();

  const themeExtension = useMemo<Extension>(() => {
    const themeMap: Record<string, Extension> = {
      abcdef: abcdef,
      abyss: abyss,
      androidstudio: androidstudio,
      andromeda: andromeda,
      atomone: atomone,
      aura: aura,
      'basic-dark': basicDark,
      'basic-light': basicLight,
      bbedit: bbedit,
      bespin: bespin,
      'console-dark': consoleDark,
      'console-light': consoleLight,
      copilot: copilot,
      darcula: darcula,
      dracula: dracula,
      'duotone-dark': duotoneDark,
      'duotone-light': duotoneLight,
      eclipse: eclipse,
      'github-dark': githubDark,
      github: githubLight,
      'github-light': githubLight,
      'gruvbox-dark': gruvboxDark,
      'gruvbox-light': gruvboxLight,
      kimbie: kimbie,
      material: material,
      'material-dark': materialDark,
      'material-light': materialLight,
      'solarized-dark': solarizedDark,
      'solarized-light': solarizedLight,
      monokai: monokai,
      'monokai-dimmed': monokaiDimmed,
      'noctis-lilac': noctisLilac,
      nord: nord,
      okaidia: okaidia,
      quietlight: quietlight,
      red: red,
      sublime: sublime,
      'tokyo-night': tokyoNight,
      'tokyo-night-storm': tokyoNightStorm,
      'tokyo-night-day': tokyoNightDay,
      'tomorrow-night-blue': tomorrowNightBlue,
      'vscode-dark': vscodeDark,
      'vscode-light': vscodeLight,
      'white-dark': whiteDark,
      'white-light': whiteLight,
      'xcode-dark': xcodeDark,
      'xcode-light': xcodeLight,
      // Legacy keys
      'atom-one-dark': atomone,
      'atom-one-light': atomone,
      'one-dark': atomone,
      vs2015: vscodeDark,
      vscodeDark: vscodeDark,
    };

    return themeMap[syntaxTheme] ?? dracula;
  }, [syntaxTheme]);

  const bracketPalette = useMemo(() => {
    const currentTheme =
      syntaxThemes.find((theme) => theme.css === syntaxTheme) || syntaxThemes[0];

    const darkPalette = [
      '#ff79c6',
      '#bd93f9',
      '#8be9fd',
      '#50fa7b',
      '#f1fa8c',
      '#ffb86c',
      '#ff5555',
    ];
    const lightPalette = [
      '#d73a49',
      '#6f42c1',
      '#005cc5',
      '#22863a',
      '#b08800',
      '#e36209',
      '#586069',
    ];

    return currentTheme?.dark ? darkPalette : lightPalette;
  }, [syntaxTheme]);

  const languageExtension = useMemo(() => {
    const requested = (language || 'tsx') as LanguageName;
    const safeName: LanguageName = langNames.includes(requested)
      ? requested
      : 'tsx';
    const ext = loadLanguage(safeName);
    return ext ?? loadLanguage('tsx');
  }, [language]);

  const highlightExtension = useMemo(() => {
    const lines = new Set(highlightedLines);
    if (lines.size === 0) return [];

    const lineHighlight = Decoration.line({ class: 'cm-line-highlight' });

    const build = (view: EditorView) => {
      const builder = [];
      for (const { from, to } of view.visibleRanges) {
        for (let pos = from; pos <= to; ) {
          const line = view.state.doc.lineAt(pos);
          if (lines.has(line.number)) {
            builder.push(lineHighlight.range(line.from));
          }
          pos = line.to + 1;
        }
      }
      return Decoration.set(builder);
    };

    const plugin = ViewPlugin.fromClass(
      class {
        decorations;
        constructor(view: EditorView) {
          this.decorations = build(view);
        }
        update(update: {
          view: EditorView;
          docChanged: boolean;
          viewportChanged: boolean;
        }) {
          if (update.docChanged || update.viewportChanged) {
            this.decorations = build(update.view);
          }
        }
      },
      {
        decorations: (v) => v.decorations,
      }
    );

    return [plugin];
  }, [highlightedLines]);

  const extensions = useMemo(() => {
    const zebra = showZebra
      ? [
          zebraStripes({
            step: 2,
            darkColor: 'rgba(255,255,255,0.03)',
          }),
        ]
      : [];

    return [
      ...(languageExtension ? [languageExtension] : []),
      rainbowBrackets(),
      bracketMatching(),
      closeBrackets(),
      keymap.of(closeBracketsKeymap),
      ...(showSelectionMatches
        ? [highlightSelectionMatches({ wholeWords: false })]
        : []),
      ...(showSearch ? [keymap.of(searchKeymap)] : []),
      ...(showTrailingWhitespace ? [highlightTrailingWhitespace()] : []),
      rectangularSelection(),
      crosshairCursor(),
      history({ minDepth: 200 }),
      keymap.of(historyKeymap),
      EditorView.lineWrapping,
      ...highlightExtension,
      ...zebra,
      EditorView.theme(
        {
          '&': {
            color: '#e6e8ef',
            backgroundColor: 'transparent',
          },
          '.cm-content': {
            fontFamily:
              font?.name ||
              'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: fontSize?.px ? `${fontSize.px}px` : '14px',
            lineHeight: lineHeight ? `${lineHeight}` : null,
            letterSpacing:
              typeof letterSpacing === 'number'
                ? `${letterSpacing}em`
                : null,
          },
          '.cm-gutters': {
            backgroundColor: 'transparent',
            color: '#70768a',
            border: 'none',
          },
          '.cm-line': {
            paddingLeft: '8px',
          },
          '.cm-activeLine': {
            backgroundColor: 'rgba(255,255,255,0.04)',
          },
          '.cm-activeLineGutter': {
            backgroundColor: 'transparent',
          },
          '.rainbow-bracket-red': {
            color: bracketPalette[0] ?? '#ff79c6',
          },
          '.rainbow-bracket-red > span': {
            color: bracketPalette[0] ?? '#ff79c6',
          },
          '.rainbow-bracket-orange': {
            color: bracketPalette[1] ?? '#bd93f9',
          },
          '.rainbow-bracket-orange > span': {
            color: bracketPalette[1] ?? '#bd93f9',
          },
          '.rainbow-bracket-yellow': {
            color: bracketPalette[2] ?? '#8be9fd',
          },
          '.rainbow-bracket-yellow > span': {
            color: bracketPalette[2] ?? '#8be9fd',
          },
          '.rainbow-bracket-green': {
            color: bracketPalette[3] ?? '#50fa7b',
          },
          '.rainbow-bracket-green > span': {
            color: bracketPalette[3] ?? '#50fa7b',
          },
          '.rainbow-bracket-blue': {
            color: bracketPalette[4] ?? '#f1fa8c',
          },
          '.rainbow-bracket-blue > span': {
            color: bracketPalette[4] ?? '#f1fa8c',
          },
          '.rainbow-bracket-indigo': {
            color: bracketPalette[5] ?? '#ffb86c',
          },
          '.rainbow-bracket-indigo > span': {
            color: bracketPalette[5] ?? '#ffb86c',
          },
          '.rainbow-bracket-violet': {
            color: bracketPalette[6] ?? '#ff5555',
          },
          '.rainbow-bracket-violet > span': {
            color: bracketPalette[6] ?? '#ff5555',
          },
        },
        { dark: true }
      ),
    ];
  }, [
    font?.name,
    fontSize?.px,
    lineHeight,
    letterSpacing,
    languageExtension,
    showSearch,
    showSelectionMatches,
    showTrailingWhitespace,
    showZebra,
    highlightExtension,
    bracketPalette,
  ]);

  return (
    <div className="size-full">
      <CodeMirror
        value={value}
        height="100%"
        indentWithTab
        basicSetup={{
          lineNumbers: showLineNumbers,
          foldGutter: showFoldGutter,
          foldKeymap: showFoldGutter,
          highlightActiveLine: showActiveLine,
          highlightActiveLineGutter: showActiveLine,
          highlightSelectionMatches: false,
        }}
        extensions={extensions}
        theme={themeExtension}
        onChange={onChange}
        style={{ height: '100%' }}
        className="h-full"
      />
    </div>
  );
};

export default EditorContent;
