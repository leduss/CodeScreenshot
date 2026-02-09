import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Banknote, Check } from 'lucide-react';
import { useLandingTranslation } from '@/hooks';
import SectionBadge from './section-badge';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const t = useLandingTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="relative px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="pricing-heading mb-20 text-center">
          <SectionBadge label={t.pricing.badge} icon={Banknote} />
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {t.pricing.titlePrefix}{' '}
            <span className="text-gradient">{t.pricing.titleGradient}</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="pricing-grid mx-auto grid max-w-3xl grid-cols-1 items-start gap-8 md:grid-cols-2">
          {t.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={` relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-card shadow-glow scale-[1.03] border border-primary/30 md:scale-105'
                  : 'bg-gradient-card border border-border/50 shadow-card hover:border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  <span className="bg-gradient-primary whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    {t.pricing.comingSoon}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-10 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">
                        {feature.replace(' [soon]', '')}
                      </span>
                      {feature.includes('[soon]') && (
                        <span className="bg-gradient-primary whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                          {t.pricing.comingSoon}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'hero' : 'hero-outline'}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
