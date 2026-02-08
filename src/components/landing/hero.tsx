import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui';
import CodePreview from './code-preview';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          previewRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1,
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-1/2 top-1/4 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div
          className="animate-pulse-glow absolute bottom-1/4 right-1/4 size-[400px] rounded-full bg-secondary/5 blur-[100px]"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          ref={badgeRef}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
        >
          <Sparkles className="size-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">
            Nouveau — Partage par lien instantané
          </span>
        </div>

        <h1
          ref={titleRef}
          className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          Capturez votre
          <br />
          <span className="text-gradient">code</span> en beauté
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Transformez vos snippets en images élégantes, avec 5 exports PNG
          gratuits puis un passage Pro en un clic. Export, partage et rendu
          haut de gamme sans installation.
        </p>

          <div
            ref={ctaRef}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl" asChild>
              <Link href="/snapcode">
                Commencer gratuitement
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl">
              Voir la démo
            </Button>
          </div>
      </div>

      <div
        ref={previewRef}
        className="relative z-10 mx-auto mt-16 w-full max-w-4xl"
      >
        <CodePreview />
      </div>
    </section>
  );
};

export default Hero;
