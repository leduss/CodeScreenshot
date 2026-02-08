import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Gratuit',
    price: '0€',
    period: 'pour toujours',
    description:
      'Expérimentez SnapCode avec 5 exports PNG gratuits, puis débloquez la suite.',
    features: [
      '5 exports PNG gratuits',
      'Console Dark, Console Light et Dracula',
      'Recherche, surlignage, Zen et watermark visibles avec badge Pro',
      'Partage par lien actif dès la version Free',
      'Exports stockés 100% côté client',
    ],
    cta: 'Commencer gratuitement',
    variant: 'hero-outline' as const,
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '4.99€',
    period: 'paiement unique',
    description:
      'Accès illimité aux exports, aux thèmes et aux fonctionnalités avancées (recherche, watermark, métadonnées...).',
    features: [
      'Exports PNG/JPEG/HQ illimités + tailles personnalisées',
      'Tous les thèmes & polices premium',
      'Recherche, surlignage, Zen, watermark, métadonnées',
      'Pas de filigrane',
      'Partage, patron de lien & arrière-plans personnalisés',
      'Support prioritaire & mises à jour',
    ],
    cta: 'Débloquer Pro',
    variant: 'hero' as const,
    highlighted: true,
  },
];

const Pricing = () => {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Tarifs
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Un plan pour chaque{' '}
            <span className="text-gradient">développeur</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Commencez gratuitement, évoluez selon vos besoins. Sans engagement,
            annulable à tout moment.
          </p>
        </div>

        <div className="pricing-grid mx-auto grid max-w-3xl grid-cols-1 items-start gap-8 md:grid-cols-2">
          {plans.map((plan) => (
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
                  <span className="bg-gradient-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    Populaire
                  </span>
                  <span className="bg-gradient-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground whitespace-nowrap">
                    Coming soon
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
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} size="lg" className="w-full">
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
