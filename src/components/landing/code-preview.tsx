import { Copy, Download, Share2 } from 'lucide-react';

const CodePreview = () => {
  return (
    <div className="group relative">
      {/* Glow effect behind the card */}
      <div className="bg-gradient-primary absolute -inset-1 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30" />

      <div className="shadow-elevated relative overflow-hidden rounded-2xl border border-border/50">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-border/50 bg-card px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-destructive/70" />
            <div className="size-3 rounded-full bg-[hsl(45_90%_50%)]" />
            <div className="size-3 rounded-full bg-[hsl(140_60%_45%)]" />
          </div>

          <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
            <span>snippet.tsx</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Copy className="size-3.5" />
            </button>
            <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Download className="size-3.5" />
            </button>
            <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary">
              <Share2 className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Code area with gradient background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_60%_15%)] via-[hsl(260_40%_12%)] to-[hsl(200_50%_10%)]" />

          <div className="relative overflow-x-auto p-6 font-mono text-sm leading-relaxed md:p-8 md:text-base">
            <div className="flex gap-4">
              <div className="flex select-none flex-col items-end text-muted-foreground/40">
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} className="leading-7">
                    {i + 1}
                  </span>
                ))}
              </div>

              <pre className="flex-1">
                <code>
                  <Line>
                    <Keyword>import</Keyword> {'{ '}
                    <Func>useState</Func>
                    {' } '}
                    <Keyword>from</Keyword> <Str>&apos;react&apos;</Str>;
                  </Line>
                  <Line />
                  <Line>
                    <Keyword>const</Keyword> <Func>useCapture</Func> = () ={'>'}{' '}
                    {'{'}
                  </Line>
                  <Line indent={2}>
                    <Keyword>const</Keyword> [format, setFormat] ={' '}
                    <Func>useState</Func>(<Str>&apos;png&apos;</Str>);
                  </Line>
                  <Line indent={2}>
                    <Keyword>const</Keyword> [quality, setQuality] ={' '}
                    <Func>useState</Func>(<Num>100</Num>);
                  </Line>
                  <Line />
                  <Line indent={2}>
                    <Keyword>const</Keyword> <Func>capture</Func> ={' '}
                    <Keyword>async</Keyword> () ={'>'} {'{'}
                  </Line>
                  <Line indent={4}>
                    <Keyword>const</Keyword> canvas = <Keyword>await</Keyword>{' '}
                    <Func>html2canvas</Func>(ref);
                  </Line>
                  <Line indent={4}>
                    <Keyword>return</Keyword> canvas.<Func>toDataURL</Func>(
                    <Str>{`\`image/\${format}\``}</Str>, quality);
                  </Line>
                  <Line indent={2}>{'}'}</Line>
                  <Line />
                  <Line indent={2}>
                    <Keyword>return</Keyword> {'{ '}capture, format, setFormat{' '}
                    {'}'};
                  </Line>
                  <Line>{'}'}</Line>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-border/50 bg-card px-5 py-2.5">
          <div className="flex items-center gap-3">
            <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              TypeScript
            </span>
            <span className="text-xs text-muted-foreground">
              JetBrains Mono
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>2x</span>
            <span>PNG</span>
            <span>1200×800</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Syntax highlighting helper components
const Line = ({
  children,
  indent = 0,
}: {
  children?: React.ReactNode;
  indent?: number;
}) => (
  <div className="leading-7" style={{ paddingLeft: `${indent * 0.6}rem` }}>
    {children || '\u00A0'}
  </div>
);

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[hsl(330_80%_70%)]">{children}</span>
);

const Func = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[hsl(200_90%_70%)]">{children}</span>
);

const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[hsl(100_60%_65%)]">{children}</span>
);

const Num = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[hsl(30_90%_65%)]">{children}</span>
);

export default CodePreview;
