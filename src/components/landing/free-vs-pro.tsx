import { useLandingTranslation } from '@/hooks';
import { Layers2 } from 'lucide-react';
import SectionBadge from './section-badge';

const FreeVsPro = () => {
  const t = useLandingTranslation();
  return (
    <section id="difference" className="relative px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <SectionBadge label={t.freeVsPro.badge} icon={Layers2} />
          <h2 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            {t.freeVsPro.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.freeVsPro.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-white/5 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">{t.freeVsPro.freeTitle}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {t.freeVsPro.freeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-card shadow-glow rounded-2xl border border-border/60 p-6">
            <h3 className="mb-4 text-xl font-semibold">{t.freeVsPro.proTitle}</h3>
            <ul className="space-y-3 text-sm text-white/90">
              {t.freeVsPro.proItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeVsPro;
