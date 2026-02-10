import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingProps {
  onComplete?: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FAKE_CODE_LINES = [
  '<span class="text-primary">const</span> <span class="text-secondary">capture</span> = () => {',
  '  <span class="text-primary">const</span> code = <span class="text-green-400">getSnippet</span>();',
  '  <span class="text-primary">const</span> style = { theme: <span class="text-amber-400">"neon"</span> };',
  '  <span class="text-primary">return</span> <span class="text-green-400">render</span>(code, style);',
  '};',
];

const Loading = ({ onComplete, setLoading }: LoadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    // Type lines one by one
    const lineTimers: ReturnType<typeof setTimeout>[] = [];
    FAKE_CODE_LINES.forEach((_, i) => {
      lineTimers.push(setTimeout(() => setVisibleLines(i + 1), 300 + i * 350));
    });

    // After typing, trigger the "capture" flash
    const totalTyping = 300 + FAKE_CODE_LINES.length * 350 + 400;

    const flashTimer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
          // Slide everything out
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              onComplete?.();
            },
          });
        },
      });

      // Camera flash
      tl.to(flashRef.current, {
        opacity: 1,
        duration: 0.1,
      })
        .to(flashRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
        // Shrink editor into a "photo"
        .to(
          editorRef.current,
          {
            scale: 0.85,
            borderRadius: '16px',
            boxShadow: '0 0 60px hsl(190 95% 55% / 0.4)',
            duration: 0.6,
            ease: 'back.out(1.4)',
          },
          '-=0.2'
        )
        // Brief hold
        .to({}, { duration: 0.5 });
    }, totalTyping);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(flashTimer);
    };
  }, [onComplete, setLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      {/* Flash overlay */}
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white opacity-0 pointer-events-none z-10"
      />

      {/* Fake code editor */}
      <div
        ref={editorRef}
        className="relative w-[90vw] max-w-lg rounded-xl border border-border overflow-hidden shadow-elevated"
        style={{ background: 'var(--gradient-card)' }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            snippet.tsx
          </span>
        </div>

        {/* Code area */}
        <div className="p-5 font-mono text-sm leading-7 min-h-[200px]">
          {FAKE_CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex items-center gap-3 animate-fade-in">
              <span className="text-muted-foreground/40 select-none w-4 text-right text-xs">
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: line }} />
              {i === visibleLines - 1 && (
                <span
                  ref={cursorRef}
                  className="inline-block w-[2px] h-4 bg-primary animate-pulse ml-0.5"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle label */}
      <p className="absolute bottom-10 text-xs text-muted-foreground tracking-widest uppercase animate-pulse">
        Capturing...
      </p>
    </div>
  );
};

export default Loading;
