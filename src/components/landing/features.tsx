import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Image, Link2, Palette, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Image,
    title: 'Export PNG & JPEG',
    description:
      'Exportez vos captures en haute résolution. Choisissez le format, la qualité et la taille qui vous convient.',
  },
  {
    icon: Link2,
    title: 'Partage par lien',
    description:
      'Générez un lien unique pour chaque capture. Partagez instantanément avec votre équipe ou sur les réseaux.',
  },
  {
    icon: Palette,
    title: 'Thèmes personnalisés',
    description:
      'Des dizaines de thèmes de syntaxe et de fonds. Créez votre propre style en quelques clics.',
  },
  {
    icon: Zap,
    title: 'Rapide & léger',
    description:
      'Aucune installation requise. Collez votre code, personnalisez et exportez en secondes.',
  },
  {
    icon: Download,
    title: 'Résolution 2x & 4x',
    description:
      'Des images ultra nettes pour vos présentations, articles de blog et réseaux sociaux.',
  },
  {
    icon: Shield,
    title: '100% privé',
    description:
      "Votre code n'est jamais stocké sur nos serveurs. Tout le rendu se fait côté client.",
  },
];

const Features = () => {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Fonctionnalités
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Tout ce dont vous avez <span className="text-gradient">besoin</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Un outil complet pour créer des captures de code professionnelles en
            quelques secondes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="bg-gradient-card glow-border group relative rounded-2xl border border-border/50 p-8 transition-all duration-500 hover:border-primary/20"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
