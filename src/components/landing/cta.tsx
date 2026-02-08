import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-32">
      <div className="container mx-auto max-w-4xl">
        <div className="cta-content relative overflow-hidden rounded-3xl p-12 text-center md:p-20">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />
          <div className="absolute inset-0 rounded-3xl border border-primary/10" />

          {/* Glow spots */}
          <div className="absolute left-1/4 top-0 size-64 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-secondary/10 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Prêt à capturer votre
              <br />
              <span className="text-gradient">plus beau code</span> ?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
              Rejoignez des milliers de développeurs qui utilisent SnapCode pour
              partager leur code avec style.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Créer ma première capture
                <ArrowRight className="size-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Gratuit · Sans inscription · Sans limite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
