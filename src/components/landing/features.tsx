import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Columns2,
  Crop,
  ScrollText,
  Download,
  Image,
  Link2,
  Palette,
  Zap,
  Shield,
} from 'lucide-react';
import { useLandingTranslation } from '@/hooks';
import SectionBadge from './section-badge';

gsap.registerPlugin(ScrollTrigger);

const featureIcons = [
  Image,
  Link2,
  Palette,
  Zap,
  Download,
  Shield,
  Crop,
  ScrollText,
  Columns2,
];

const Features = () => {
  const t = useLandingTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from('.features-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Stagger cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="features-heading mb-20 text-center">
          <SectionBadge label={t.features.badge} icon={Palette} />
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {t.features.titlePrefix}{' '}
            <span className="text-gradient">{t.features.titleGradient}</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, i) => {
            const FeatureIcon = featureIcons[i] ?? Image;
            return (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="bg-gradient-card glow-border group relative rounded-2xl border border-border/50 p-8 transition-all duration-500 hover:border-primary/20"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <FeatureIcon className="size-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
