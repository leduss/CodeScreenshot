import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardPaste, Paintbrush, Share } from 'lucide-react';
import { useLandingTranslation } from '@/hooks';
import SectionBadge from './section-badge';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = [ClipboardPaste, Paintbrush, Share];

const HowItWorks = () => {
  const t = useLandingTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.how-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: '.steps-container',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="preview" className="relative px-6 py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="how-heading mb-20 text-center">
          <SectionBadge label={t.howItWorks.badge} icon={ClipboardPaste} />
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {t.howItWorks.titlePrefix}{' '}
            <span className="text-gradient">{t.howItWorks.titleGradient}</span>
          </h2>
        </div>

        <div className="steps-container relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute inset-x-[20%] top-24 hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent md:block" />

          {t.howItWorks.steps.map((step, index) => {
            const StepIcon = stepIcons[index] ?? ClipboardPaste;
            return (
            <div key={step.number} className="step-card relative text-center">
              <div className="relative mb-8 inline-flex">
                <div className="bg-gradient-card flex size-20 items-center justify-center rounded-2xl border border-border/50 shadow-card">
                  <StepIcon className="size-8 text-primary" />
                </div>
                <span className="bg-gradient-primary absolute -right-3 -top-3 flex size-8 items-center justify-center rounded-full text-xs font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="mx-auto max-w-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
